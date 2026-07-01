const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint to check if API Key is configured
app.get('/api/config-check', (req, res) => {
  const isKeyConfigured = !!process.env.GEMINI_API_KEY;
  res.json({ isKeyConfigured });
});

// API Endpoint to decompose (melt) the task
app.post('/api/melt', async (req, res) => {
  const { instruction, contextFiles } = req.body;

  if (!instruction || typeof instruction !== 'string' || instruction.trim() === '') {
    return res.status(400).json({ error: '指示を入力してください。' });
  }

  const apiKey = req.headers['x-api-key'] || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(403).json({ error: 'API_KEY_MISSING', message: 'Gemini APIキーが設定されていません。画面右上（⚙️）からキーを入力してください。' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Use gemini-2.5-flash
    const modelName = 'gemini-2.5-flash';
    const model = genAI.getGenerativeModel({ model: modelName });

    let prompt = `以下の「抽象的な指示や課題内容」を分析し、
「目的（Goal）」「必要な提出物や成果物（Deliverables）」「作業プラン（Action Plan）」「最初の一歩（First Step）」「不明点や質問すべき点（Clarity Gaps）」に構造化してください。

【指示内容】:
${instruction}

【最初の一歩の定義】:
「2分以内に完了できるほど極限まで小さく具体的なアクション」にしてください。
例えば、「Googleドキュメントを作成して名前を付ける」「参考URLを開いてブックマークする」などです。
「資料を読んでまとめる」や「企画書を書く」は大きすぎるので避けてください。`;

    if (contextFiles && contextFiles.length > 0) {
      prompt += `\n\n【進捗状況の分析依頼】:
ユーザーが現在の進捗状況を示すいくつかのファイルを添付しました（画像またはテキストファイル）。
これらの添付ファイル（画像に写っている内容やソースコード、ドキュメントなど）をよく読み取り、
今回の「指示内容」を満たすために、どの部分がすでに作られているか（完了しているか）を評価してください。
そして、作業プラン（Action Plan）のステップの中で、すでに完了していると判断できるステップについては、
isCompletedをtrueにし、その完了判定の具体的な理由をcompletionReason（例: 「bug-list.mdに20個記述済」など）に15文字以内の簡潔な日本語で記載してください。
未完了のステップについては、isCompletedをfalseに設定し、completionReasonは空文字にしてください。`;
    } else {
      prompt += `\n\n添付ファイルはありません。すべての作業プラン（Action Plan）のステップは未着手として、isCompletedはすべてfalseに、completionReasonは空文字にしてください。`;
    }

    prompt += `\n\n【出力要件】:
日本語で回答してください。JSONスキーマに従った有効なJSONを返却してください。`;

    // Construct request parts (supporting multimodal images/text)
    const parts = [{ text: prompt }];

    if (contextFiles && Array.isArray(contextFiles)) {
      contextFiles.forEach(file => {
        if (file.type && file.type.startsWith('image/')) {
          // Extract base64 content
          const base64Data = file.content.includes(',') ? file.content.split(',')[1] : file.content;
          parts.push({
            inlineData: {
              data: base64Data,
              mimeType: file.type
            }
          });
        } else if (file.content) {
          // Add as text part
          parts.push({
            text: `\n\n--- 添付されたファイル: ${file.name} ---\n${file.content}\n--- ファイル終了 ---`
          });
        }
      });
    }

    // Define the schema for structured JSON output
    const responseSchema = {
      type: "object",
      properties: {
        goal: {
          type: "string",
          description: "このタスク・課題の全体の目的を1〜2文で簡潔に要約したもの。"
        },
        deliverables: {
          type: "array",
          items: { type: "string" },
          description: "提出または完成させる必要がある具体的な成果物のリスト。"
        },
        actionPlan: {
          type: "array",
          items: {
            type: "object",
            properties: {
              text: { type: "string", description: "具体的な作業工程やマイルストーン。" },
              timeEstimate: { type: "string", description: "予想所要時間（例：'5分', '15分'）。" },
              isCompleted: { type: "boolean", description: "アップロードされた進捗ファイルを元に、このステップが既に完了していると判断された場合はtrue、未完了の場合はfalse。" },
              completionReason: { type: "string", description: "既に完了していると判断された簡潔な理由（未完了の場合は空文字）。" }
            },
            required: ["text", "timeEstimate", "isCompleted"]
          },
          description: "目的達成に向けた具体的な作業工程やマイルストーンのリスト。"
        },
        firstStep: {
          type: "string",
          description: "フリーズを防ぐための、今すぐ2分以内に実行できる極小 of ファーストアクション。"
        },
        clarityGaps: {
          type: "array",
          items: { type: "string" },
          description: "指示の中で曖昧な点や、開始前に先生やリーダーに確認・質問すべき重要事項。"
        }
      },
      required: ["goal", "deliverables", "actionPlan", "firstStep", "clarityGaps"]
    };

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: parts }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const responseText = result.response.text();
    const data = JSON.parse(responseText);

    res.json(data);
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: 'SERVER_ERROR', message: 'タスクの分解中にエラーが発生しました。時間をおいて再度お試しください。', details: error.message });
  }
});

// API Endpoint to decompose a subtask even further
app.post('/api/melt-subtask', async (req, res) => {
  const { parentTask, subtask } = req.body;

  if (!subtask || typeof subtask !== 'string' || subtask.trim() === '') {
    return res.status(400).json({ error: '分解対象のタスクを指定してください。' });
  }

  const apiKey = req.headers['x-api-key'] || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(403).json({ error: 'API_KEY_MISSING', message: 'Gemini APIキーが設定されていません。' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const modelName = 'gemini-2.5-flash';
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `ユーザーは現在、以下の親タスクに取り組んでいます：
【全体の目標・指示】:
${parentTask || '記載なし'}

その作業工程（ロードマップ）の中のひとつのステップである以下のタスクが、まだ抽象的で大きいため、これを「2分〜15分以内で実行可能な、より小さく具体的な3〜5個のアクションステップ」に分解してください。

【分解対象のタスク】:
${subtask}

【条件】:
- 分解後の各ステップは、具体的で迷わず行動できる表現（例：「〇〇のファイルを新規作成する」「〇〇のサイトを開いて要件をメモする」など）にしてください。
- 各ステップの予想所要時間も合わせて算出してください（例：'2分', '5分'）。
- 日本語で回答してください。JSONスキーマに従った有効なJSONを返却してください。`;

    const responseSchema = {
      type: "object",
      properties: {
        substeps: {
          type: "array",
          items: {
            type: "object",
            properties: {
              text: { type: "string", description: "分解された、より小さく具体的なアクションステップ。" },
              timeEstimate: { type: "string", description: "予想所要時間（例：'2分', '5分'）。" }
            },
            required: ["text", "timeEstimate"]
          },
          description: "分解された、より小さく具体的なアクションステップの配列（3〜5個）"
        }
      },
      required: ["substeps"]
    };

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const responseText = result.response.text();
    const data = JSON.parse(responseText);

    res.json(data);
  } catch (error) {
    console.error('Gemini API Subtask Error:', error);
    res.status(500).json({ error: 'SERVER_ERROR', message: 'サブタスクの分解中にエラーが発生しました。', details: error.message });
  }
});

// API Endpoint to generate step-by-step guidance for a specific task
app.post('/api/guide', async (req, res) => {
  const { parentTask, subtask } = req.body;

  if (!subtask || typeof subtask !== 'string' || subtask.trim() === '') {
    return res.status(400).json({ error: '対象のタスクを指定してください。' });
  }

  const apiKey = req.headers['x-api-key'] || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(403).json({ error: 'API_KEY_MISSING', message: 'Gemini APIキーが設定されていません。' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const modelName = 'gemini-2.5-flash';
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `ユーザーは以下の親タスクに取り組んでいます：
【全体の目標・指示】:
${parentTask || '記載なし'}

その中のステップである以下の作業について、具体的で分かりやすい実作手順・操作ガイドを作成してください。

【対象の作業】:
${subtask}

【作成要領】:
1. コマンドライン操作（git, npm, CLI等）が含まれる場合は、実際に実行するコマンドを明記してください。
2. ディレクトリ構造やファイルを作成する場合は、そのファイルパスと中に書くべき設定ファイルの簡単なテンプレートを提示してください。
3. 日本語で回答し、要点が伝わる簡潔なMarkdownフォーマット（コードブロック、箇条書き、見出しなど）で出力してください。`;

    const responseSchema = {
      type: "object",
      properties: {
        guide: {
          type: "string",
          description: "作成された詳細な作業手順やコード、コマンドの解説（Markdownフォーマット）"
        }
      },
      required: ["guide"]
    };

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const responseText = result.response.text();
    const data = JSON.parse(responseText);

    res.json(data);
  } catch (error) {
    console.error('Gemini API Guide Error:', error);
    res.status(500).json({ error: 'SERVER_ERROR', message: 'ガイドの生成中にエラーが発生しました。', details: error.message });
  }
});

// API Endpoint to draft a Slack/Discord question for a clarity gap
app.post('/api/draft-question', async (req, res) => {
  const { parentTask, gap } = req.body;

  if (!gap || typeof gap !== 'string' || gap.trim() === '') {
    return res.status(400).json({ error: '対象の不明点（Clarity Gap）を指定してください。' });
  }

  const apiKey = req.headers['x-api-key'] || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(403).json({ error: 'API_KEY_MISSING', message: 'Gemini APIキーが設定されていません。' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const modelName = 'gemini-2.5-flash';
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `ユーザーは以下のタスクに取り組んでいます：
【全体の目標・指示】:
${parentTask || '記載なし'}

その中で発生した以下の不明点について、先生やメンター、チームリーダーにSlackやDiscordで質問するための、丁寧で要点が伝わりやすい「質問文のドラフト」を作成してください。

【不明点・質問したい事項】:
${gap}

【要件】:
- チャットツール（Slack/Discord等）で読みやすいよう、適宜改行や箇条書き、太字を使用してください。
- 丁寧語（「お疲れ様です」「〜について質問がありご連絡しました」など）で始め、要点を箇条書きでまとめ、簡潔に結んでください。
- コピーしてそのまま使えるテキストのみを返却してください。`;

    const responseSchema = {
      type: "object",
      properties: {
        draft: {
          type: "string",
          description: "作成されたSlack/Discord用の質問メッセージのテキスト"
        }
      },
      required: ["draft"]
    };

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const responseText = result.response.text();
    const data = JSON.parse(responseText);

    res.json(data);
  } catch (error) {
    console.error('Gemini API Draft Error:', error);
    res.status(500).json({ error: 'SERVER_ERROR', message: '質問ドラフトの作成中にエラーが発生しました。', details: error.message });
  }
});


// API Endpoint to debug an error and generate injected roadmap tasks
app.post('/api/debug-error', async (req, res) => {
  const { parentTask, errorLog } = req.body;

  if (!errorLog || typeof errorLog !== 'string' || errorLog.trim() === '') {
    return res.status(400).json({ error: 'エラーログを入力してください。' });
  }

  const apiKey = req.headers['x-api-key'] || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(403).json({ error: 'API_KEY_MISSING', message: 'Gemini APIキーが設定されていません。' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const modelName = 'gemini-2.5-flash';
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `ユーザーは現在、以下の親タスクに取り組んでいます：
【全体の目標・指示】:
${parentTask || '記載なし'}

その最中に、以下のエラーが発生しました：
【エラー内容】:
${errorLog}

このエラーを解決するために必要な「原因の簡潔な分析（日本語）」と、「今すぐ実行可能な、極限まで小さく具体的な2〜4個の解決アクションステップ」を生成してください。
各ステップには予想所要時間（例：'3分', '5分'）を記載してください。`;

    const responseSchema = {
      type: "object",
      properties: {
        errorAnalysis: {
          type: "string",
          description: "何が原因でこのエラーが発生したのか、1〜2文での簡潔な分析。"
        },
        solutionSteps: {
          type: "array",
          items: {
            type: "object",
            properties: {
              text: { type: "string", description: "エラーを解決するための、小さく具体的なアクションステップ。" },
              timeEstimate: { type: "string", description: "予想所要時間（例：'2分', '5分'）。" }
            },
            required: ["text", "timeEstimate"]
          },
          description: "エラー解決のための具体的な作業ステップ（2〜4個）。"
        }
      },
      required: ["errorAnalysis", "solutionSteps"]
    };

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const responseText = result.response.text();
    const data = JSON.parse(responseText);

    res.json(data);
  } catch (error) {
    console.error('Gemini API Debug Error:', error);
    res.status(500).json({ error: 'SERVER_ERROR', message: 'エラー解決手順の生成中にエラーが発生しました。', details: error.message });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(` TaskMelt Server running at: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
