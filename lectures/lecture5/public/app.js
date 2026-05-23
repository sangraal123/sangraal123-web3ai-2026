// TaskMelt Client Logic

// Preset data
const PRESETS = {
  lecture3: {
    text: `授業「web3・AI概論 第3回」の宿題。バグリストを自分の身の回りから20個洗い出す（バグリストは自分の頭をひねって書くのがコツ）。その中から1つを顧客の「解決したい困りごと」に選び、★を付ける。その困りごとに対する解決策のアイデアを書いて、顧客像（Pains/Gains/Jobs）とプロダクト提供価値（Products/Pain Relievers/Gain Creators）をマッピングしたVPC v1（Value Proposition Canvas v1）を作成する。VPCのスクショを撮り、assets/vpc-v1.pngに保存。画像から読み取れる内容を文字起こししてlectures/lecture3/vpc-v1.mdに反映する。GitHubで新規Publicリポジトリ「[DiscordID]-web3ai-2026」を作成し、ファイルをすべてコミットしてpush。README.mdの提出ステータスとDiscord ID等のプレースホルダーを埋め、最後にリポジトリのURLをポータルアプリの提出フォームに貼り付けて期限（5/14講義開始まで）までに提出する。`,
    mockResponse: {
      goal: "第3回宿題の要件（バグリスト20個、VPC v1作成、GitHub登録）をすべて満たし、期限内にリポジトリURLをポータルに提出すること。",
      deliverables: [
        "バグリスト20個（★付き）が記載された lectures/lecture3/bug-list.md",
        "文字起こしされた lectures/lecture3/vpc-v1.md",
        "VPCの画像ファイル assets/vpc-v1.png",
        "情報を更新した lectures/lecture3/README.md",
        "Public設定されたGitHubリポジトリ（URLをポータルに提出）"
      ],
      actionPlan: [
        "1. 自分の日常の不満や不便を洗い出し、bug-list.md に20個記載する",
        "2. 最も解決したい不満を1つ選び、★マークを付与する",
        "3. 選んだ不満に基づいてVPC v1（顧客像と価値マップ）の6要素を作成する",
        "4. 完成したVPCのスクリーンショットを assets/vpc-v1.png に保存する",
        "5. VPCの内容を vpc-v1.md にテキストとして文字起こしし、画像タグを追加する",
        "6. README.md のプレースホルダー（Discord ID、提出ステータス）を修正する",
        "7. GitHubで新規Publicリポジトリを作成し、すべての変更をコミットしてpushする",
        "8. pushしたGitHubリポジトリのURLをポータルアプリの提出フォームに貼り付けて送信する"
      ],
      firstStep: "新規ファイル lectures/lecture3/bug-list.md をエディタで作成する",
      clarityGaps: [
        "Discord IDはニックネームではなくDiscordで使用している正式なIDか確認すること",
        "VPCの6要素（Jobs/Pains/Gains/Products/Relievers/Creators）で対になる部分が正しく噛み合っているか（Fit確認）",
        "GitHubリポジトリが確実に「Public」になっているか確認すること（Privateだと採点不可）"
      ]
    }
  },
  thesis: {
    text: `来年1月の提出に向けた卒業論文の準備作業。まずは自分の所属ゼミのテーマに沿って、興味のある研究テーマの候補を3つ以上書き出す。各候補について、なぜそのテーマを選んだのかの理由（背景）と、予想される結論や検証方法をA4用紙1枚程度にまとめる。次に、指導教官との初回面談アポを取り、来週火曜日のゼミまでに作成した候補資料をメールで送付する。また、過去3年間の先輩の論文リストから、関連する先行研究の論文を最低5本探し出し、それぞれの要約と引用情報をスプレッドシートに記録する。面談のフィードバックを受けて、最終的なテーマを1つに決定し、ゼミのポータルにテーマ申請書（様式1）をPDFで提出する。`,
    mockResponse: {
      goal: "ゼミ教官の承認を得て正式な卒業論文の研究テーマを決定し、期限内に指定のテーマ申請書を提出すること。",
      deliverables: [
        "研究テーマ候補（3案）の背景・仮説・検証方法をまとめたA4資料（PDF）",
        "関連する先行研究論文5本の要約と引用リスト（スプレッドシート）",
        "ポータルに提出するテーマ申請書（様式1・PDF）"
      ],
      actionPlan: [
        "1. ゼミの全体テーマを見直し、関心のあるテーマをノートに3つブレストする",
        "2. 各候補テーマの「選定理由」「想定される結論」「検証方法」をメモに書き起こす",
        "3. 指導教官に「初回面談の打診（日程候補3つ提示）」のメールを送る",
        "4. 大学図書館や論文データベース（Google Scholar等）で関連する先行論文を5本収集する",
        "5. スプレッドシートを作成し、収集した論文のタイトル・著者・要約をまとめる",
        "6. 3案を整理した資料をPDF化し、来週火曜日までに教官へメール送付する",
        "7. 初回面談を実施し、フィードバックをメモする",
        "8. 面談を元にテーマを1つに確定させ、テーマ申請書を作成しポータルへ提出する"
      ],
      firstStep: "Google Scholarを開いて、自分の興味のあるキーワードで論文を1本検索してみる",
      clarityGaps: [
        "先行研究のリスト化において、特定のフォーマットや引用スタイル（APA等）の指定はあるか",
        "指導教官の面談予約が取れなかった場合、ゼミ前の火曜日までに資料をどこに共有すべきか",
        "テーマ申請書の提出締切日時は正確にいつか"
      ]
    }
  },
  marketing: {
    text: `新規開発予定の「タスク自動化AIツール」のプロダクトローンチに向けたマーケティング企画。主な作業は、競合となる既存ツール（Notion AI, ChatGPT Custom GPTs, Zapier等）の機能、価格、ターゲット層を調査してスプレッドシートで比較表を作ること。次に、私たちの製品のUSP（独自の強み）を3点定義し、ランディングページ（LP）の主要なキャッチコピーとワイヤーフレーム（構成案）をFigmaで作成する。さらに、ターゲットユーザー（特に時間を節約したいフリーランス）にアプローチするための広告チャネル（Google広告、X/Twitterプロモーション）の配信プランと予算案（月額合計20万円以内）を決定する。これらの調査結果とローンチ計画を10スライド以内のプレゼン資料（Googleスライド）にまとめ、来週木曜日の社内レビュー会議でチーム全員に共有する。`,
    mockResponse: {
      goal: "競合分析とローンチ戦略を確立し、社内レビュー用にGoogleスライドのプレゼン資料を作成してチームに共有すること。",
      deliverables: [
        "競合ツール3社の機能・価格・ターゲット比較表（スプレッドシート）",
        "USPが反映されたLPのキャッチコピー & ワイヤーフレーム（Figmaファイル）",
        "月額20万円以内の広告配信プランと予算シート",
        "ローンチ計画のプレゼン資料（Googleスライド・10枚以内）"
      ],
      actionPlan: [
        "1. 競合ツール（Notion AI, ChatGPT, Zapier）の紹介ページを開いてブックマークする",
        "2. スプレッドシートを作成し、競合の「機能」「価格」「ターゲット」を入力する",
        "3. 私たちのプロダクトが競合より優れている特徴を書き出し、USP（強み）を3点に絞る",
        "4. LP用のメインキャッチコピーとサブキャッチコピーのアイデアを5パターン書く",
        "5. Figmaを開き、LPのヘッダー・機能紹介・料金表のワイヤーフレームを描く",
        "6. X（Twitter）広告とGoogleリスティング広告のシミュレーションツールで配信単価を調査する",
        "7. 予算20万円の配分（例：Google 10万、X 10万）と目標成果数を決定する",
        "8. 調査した競合分析・LP案・広告プランをまとめ、Googleスライドでスライドを作成する"
      ],
      firstStep: "スプレッドシートを開き、「競合分析シート」という名前で空の表を作成する",
      clarityGaps: [
        "広告のターゲットユーザーはフリーランス全体なのか、特定の職種（デザイナー、ライター等）に絞るべきか",
        "LPのワイヤーフレームはFigma上の既定のUIキットを使用するか、簡単な手書きレベルで良いか",
        "プレゼン資料の社内プレビュー時の持ち時間は何分か（発表時間の制限）"
      ]
    }
  }
};

let appState = {
  isKeyConfigured: false,
  currentResult: null
};

// DOM Elements
const apiBadge = document.getElementById('api-status-badge');
const apiWarningBanner = document.getElementById('api-warning-banner');
const taskInput = document.getElementById('task-input');
const meltButton = document.getElementById('melt-button');
const btnText = meltButton.querySelector('.btn-text');
const btnLoader = meltButton.querySelector('.btn-loader');
const presetButtons = document.querySelectorAll('.preset-btn');

const blankState = document.getElementById('blank-state');
const loadingState = document.getElementById('loading-state');
const resultArea = document.getElementById('result-area');

const firstStepText = document.getElementById('first-step-text');
const firstStepCheckbox = document.getElementById('first-step-checkbox');
const firstStepCard = document.querySelector('.first-step-card');
const goalText = document.getElementById('goal-text');
const deliverablesList = document.getElementById('deliverables-list');
const roadmapList = document.getElementById('roadmap-list');
const gapsList = document.getElementById('gaps-list');
const copyGapsBtn = document.getElementById('copy-gaps-btn');

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  checkAPIConfig();
  setupEventListeners();
});

// Setup Events
function setupEventListeners() {
  // Preset Button clicks
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetName = btn.dataset.preset;
      if (PRESETS[presetName]) {
        taskInput.value = PRESETS[presetName].text;
        // Visual focus effect
        taskInput.focus();
      }
    });
  });

  // Melt button click
  meltButton.addEventListener('click', handleMelt);

  // Checkbox interactions
  firstStepCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      firstStepCard.classList.add('completed');
      triggerConfetti();
    } else {
      firstStepCard.classList.remove('completed');
    }
  });

  // Copy Gaps to clipboard
  copyGapsBtn.addEventListener('click', handleCopyGaps);
}

// Check if Backend has API Key configured
async function checkAPIConfig() {
  try {
    const res = await fetch('/api/config-check');
    const data = await res.json();
    appState.isKeyConfigured = data.isKeyConfigured;
    
    if (appState.isKeyConfigured) {
      apiBadge.className = 'api-badge connected';
      apiBadge.querySelector('.badge-label').textContent = 'API接続完了 (Gemini)';
      apiWarningBanner.classList.add('hidden');
    } else {
      apiBadge.className = 'api-badge demo-mode';
      apiBadge.querySelector('.badge-label').textContent = 'デモモード作動中';
      apiWarningBanner.classList.remove('hidden');
    }
  } catch (err) {
    console.error('Failed to check API status:', err);
    apiBadge.className = 'api-badge demo-mode';
    apiBadge.querySelector('.badge-label').textContent = '接続エラー / デモ';
  }
}

// Handle Task Melting Action
async function handleMelt() {
  const text = taskInput.value.trim();
  if (!text) {
    alert('まずは上のテキストエリアに指示を入力するか、デモプリセットを選択してください！');
    return;
  }

  // Clear previous state and show loading
  showState('loading');
  setButtonLoading(true);

  // Check if we should use Mock fallback (Demo Mode)
  if (!appState.isKeyConfigured) {
    // Check if input matches or contains a preset topic
    let matchedPreset = null;
    if (text.includes('web3・AI概論') || text.includes('VPC')) {
      matchedPreset = 'lecture3';
    } else if (text.includes('卒業論文') || text.includes('ゼミ')) {
      matchedPreset = 'thesis';
    } else if (text.includes('マーケティング') || text.includes('競合分析')) {
      matchedPreset = 'marketing';
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1800));

    if (matchedPreset && PRESETS[matchedPreset]) {
      const mockResult = PRESETS[matchedPreset].mockResponse;
      renderResult(mockResult);
      setButtonLoading(false);
      return;
    } else {
      // Default fallback for custom text when API key is missing
      alert('カスタム入力の分解にはGemini APIキーが必要です。.envに設定してサーバーを再起動するか、デモプリセット（web3・AI概論など）を選択して動作をお試しください！');
      showState('blank');
      setButtonLoading(false);
      return;
    }
  }

  // Live API Request
  try {
    const res = await fetch('/api/melt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ instruction: text })
    });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message || 'Server error occurred');
    }

    renderResult(data);
  } catch (err) {
    console.error('Melt failed:', err);
    alert(`エラーが発生しました: ${err.message}`);
    showState('blank');
  } finally {
    setButtonLoading(false);
  }
}

// Render Decomposed Result data to UI
function renderResult(data) {
  appState.currentResult = data;
  
  // Set goal
  goalText.textContent = data.goal;

  // Set first step
  firstStepText.textContent = data.firstStep;
  firstStepCheckbox.checked = false;
  firstStepCard.classList.remove('completed');

  // Populate deliverables list
  deliverablesList.innerHTML = '';
  data.deliverables.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    deliverablesList.appendChild(li);
  });

  // Populate roadmap list
  roadmapList.innerHTML = '';
  data.actionPlan.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.className = 'roadmap-item';
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
    roadmapList.appendChild(li);
  });

  // Populate clarity gaps list
  gapsList.innerHTML = '';
  data.clarityGaps.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    gapsList.appendChild(li);
  });

  showState('result');
}

// Manage UI View States
function showState(state) {
  blankState.classList.add('hidden');
  loadingState.classList.add('hidden');
  resultArea.classList.add('hidden');

  if (state === 'blank') {
    blankState.classList.remove('hidden');
  } else if (state === 'loading') {
    loadingState.classList.remove('hidden');
  } else if (state === 'result') {
    resultArea.classList.remove('hidden');
  }
}

function setButtonLoading(isLoading) {
  if (isLoading) {
    meltButton.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
  } else {
    meltButton.disabled = false;
    btnText.classList.remove('hidden');
    btnLoader.classList.add('hidden');
  }
}

// Copy Clarity Gaps to Clipboard
function handleCopyGaps() {
  if (!appState.currentResult || !appState.currentResult.clarityGaps.length) return;

  const gapsText = appState.currentResult.clarityGaps
    .map((gap, i) => `${i + 1}. ${gap}`)
    .join('\n');

  const formattedText = `【確認・質問事項】\n${gapsText}`;

  navigator.clipboard.writeText(formattedText)
    .then(() => {
      const originalText = copyGapsBtn.textContent;
      copyGapsBtn.textContent = 'コピー完了！';
      copyGapsBtn.disabled = true;
      
      setTimeout(() => {
        copyGapsBtn.textContent = originalText;
        copyGapsBtn.disabled = false;
      }, 2000);
    })
    .catch(err => {
      console.error('Copy failed:', err);
      alert('コピーに失敗しました。お手数ですが手動で選択してコピーしてください。');
    });
}

// Custom Confetti Celebration Particle System
function triggerConfetti() {
  const container = document.getElementById('confetti-canvas-container');
  // Remove previous canvas if exists
  container.innerHTML = '';
  
  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  const colors = ['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#3b82f6'];
  const particles = [];

  // Generate particles
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 60,
      y: canvas.height / 2 + 10,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 1.2) * 6 - 2,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    });
  }

  let animationFrameId;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15; // Gravity
      p.vx *= 0.98; // Drag
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.015; // Fade

      if (p.opacity > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        // Draw square confetti
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrameId = requestAnimationFrame(update);
    } else {
      container.innerHTML = ''; // Cleanup
    }
  }

  update();
}
