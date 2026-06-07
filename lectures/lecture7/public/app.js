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
  customKey: localStorage.getItem('taskmelt_api_key') || '',
  currentResult: null,
  roadmap: [],
  lastProgress: 0,
  history: JSON.parse(localStorage.getItem('taskmelt_history')) || [],
  currentProjectId: null
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

const progressText = document.getElementById('progress-text');
const progressBarFill = document.getElementById('progress-bar-fill');
const newTaskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');

// v3 History & Export DOM elements
const historySidebar = document.getElementById('history-sidebar');
const historyToggleBtn = document.getElementById('history-toggle-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const newMeltBtn = document.getElementById('new-melt-btn');
const historyList = document.getElementById('history-list');
const exportMdBtn = document.getElementById('export-md-btn');

// Settings Modal DOM Elements
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const apiKeyInput = document.getElementById('api-key-input');
const clearKeyBtn = document.getElementById('clear-key-btn');
const saveSettingsBtn = document.getElementById('save-settings-btn');

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  checkAPIConfig();
  setupEventListeners();
  renderHistoryList();
});

// Setup Events
function setupEventListeners() {
  // Preset Button clicks
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetName = btn.dataset.preset;
      if (PRESETS[presetName]) {
        taskInput.value = PRESETS[presetName].text;
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
    saveCurrentProject();
  });

  // Copy Gaps to clipboard
  copyGapsBtn.addEventListener('click', handleCopyGaps);

  // Settings Modal Events
  settingsBtn.addEventListener('click', () => {
    apiKeyInput.value = appState.customKey;
    settingsModal.classList.remove('hidden');
  });

  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
  });

  // Close modal when clicking outside of the modal card
  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.add('hidden');
    }
  });

  saveSettingsBtn.addEventListener('click', () => {
    const key = apiKeyInput.value.trim();
    if (key) {
      localStorage.setItem('taskmelt_api_key', key);
      appState.customKey = key;
    } else {
      localStorage.removeItem('taskmelt_api_key');
      appState.customKey = '';
    }
    checkAPIConfig();
    settingsModal.classList.add('hidden');
  });

  clearKeyBtn.addEventListener('click', () => {
    localStorage.removeItem('taskmelt_api_key');
    appState.customKey = '';
    apiKeyInput.value = '';
    checkAPIConfig();
    settingsModal.classList.add('hidden');
  });

  // Add task events
  addTaskBtn.addEventListener('click', handleAddTask);
  newTaskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  });

  // History & Export events
  historyToggleBtn.addEventListener('click', () => {
    historySidebar.classList.toggle('collapsed');
    renderHistoryList();
  });

  closeSidebarBtn.addEventListener('click', () => {
    historySidebar.classList.add('collapsed');
  });

  newMeltBtn.addEventListener('click', handleNewMelt);
  exportMdBtn.addEventListener('click', handleExportMarkdown);
}

// Check if Backend has API Key configured or if there is a custom key
async function checkAPIConfig() {
  // 1. If client custom key exists, prioritize it
  if (appState.customKey) {
    apiBadge.className = 'api-badge connected';
    apiBadge.querySelector('.badge-label').textContent = 'API接続中 (カスタムキー)';
    apiWarningBanner.classList.add('hidden');
    return;
  }

  // 2. Otherwise, check server config
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

  // Reset project ID for new decomposition
  appState.currentProjectId = null;

  // Clear previous state and show loading
  showState('loading');
  setButtonLoading(true);

  const hasKey = appState.customKey || appState.isKeyConfigured;

  // Check if we should use Mock fallback (Demo Mode)
  if (!hasKey) {
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
      alert('カスタム入力の分解にはGemini APIキーが必要です。画面右上（⚙️）からキーを入力してください。（デモプリセットを選択すれば、キーがなくても動作を体験できます）');
      showState('blank');
      setButtonLoading(false);
      return;
    }
  }

  // Live API Request
  try {
    const headers = { 'Content-Type': 'application/json' };
    if (appState.customKey) {
      headers['x-api-key'] = appState.customKey;
    }

    const res = await fetch('/api/melt', {
      method: 'POST',
      headers: headers,
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
  appState.lastProgress = 0;
  
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

  // Populate roadmap list structure
  appState.roadmap = data.actionPlan.map((item, index) => ({
    id: `task-${Date.now()}-${index}`,
    text: item,
    completed: false,
    substeps: [],
    loadingSubtasks: false
  }));

  // Populate clarity gaps list
  gapsList.innerHTML = '';
  data.clarityGaps.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    gapsList.appendChild(li);
  });

  renderRoadmap();
  showState('result');
}

// Render dynamic roadmap list based on state
function renderRoadmap() {
  roadmapList.innerHTML = '';
  
  appState.roadmap.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'roadmap-item';
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add('completed');
    }
    
    // Main task row
    const mainDiv = document.createElement('div');
    mainDiv.className = 'roadmap-item-main';
    
    // Checkbox label
    const label = document.createElement('label');
    label.className = 'roadmap-checkbox-container';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', (e) => {
      task.completed = e.target.checked;
      // If parent is checked, also check all substeps
      if (task.substeps.length > 0) {
        task.substeps.forEach(sub => sub.completed = task.completed);
      }
      updateProgress();
      renderRoadmap();
    });
    
    const checkmark = document.createElement('span');
    checkmark.className = 'roadmap-checkmark';
    
    const textSpan = document.createElement('span');
    textSpan.className = 'roadmap-item-text';
    textSpan.textContent = task.text;
    
    label.appendChild(checkbox);
    label.appendChild(checkmark);
    label.appendChild(textSpan);
    
    // Action Buttons container
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'roadmap-item-actions';
    
    // Further Melt (Decompose) Button
    const meltBtn = document.createElement('button');
    meltBtn.className = 'action-icon-btn btn-submelt';
    meltBtn.title = 'この手順をさらに分解する';
    meltBtn.innerHTML = task.loadingSubtasks ? '<span class="subtask-loader"></span>' : '🔍';
    meltBtn.disabled = task.loadingSubtasks;
    meltBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleFurtherMelt(task.id);
    });
    
    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.className = 'action-icon-btn btn-edit-task';
    editBtn.title = '編集';
    editBtn.innerHTML = '✏️';
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      startEditingTask(task.id, textSpan, label);
    });
    
    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'action-icon-btn btn-delete-task';
    deleteBtn.title = '削除';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    });
    
    // Only show sub-decomposition button if not already decomposed
    if (task.substeps.length === 0) {
      actionsDiv.appendChild(meltBtn);
    }
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);
    
    mainDiv.appendChild(label);
    mainDiv.appendChild(actionsDiv);
    li.appendChild(mainDiv);
    
    // Substeps list
    if (task.substeps.length > 0) {
      const subUl = document.createElement('ul');
      subUl.className = 'subtask-list';
      
      task.substeps.forEach((sub, subIdx) => {
        const subLi = document.createElement('li');
        subLi.className = 'subtask-item';
        
        const subLabel = document.createElement('label');
        subLabel.className = 'roadmap-checkbox-container';
        
        const subCheckbox = document.createElement('input');
        subCheckbox.type = 'checkbox';
        subCheckbox.checked = sub.completed;
        subCheckbox.addEventListener('change', (e) => {
          sub.completed = e.target.checked;
          
          // If all subtasks are completed, check the parent task. If any is unchecked, uncheck the parent.
          const allCompleted = task.substeps.every(s => s.completed);
          task.completed = allCompleted;
          
          updateProgress();
          renderRoadmap();
        });
        
        const subCheckmark = document.createElement('span');
        subCheckmark.className = 'roadmap-checkmark';
        
        const subTextSpan = document.createElement('span');
        subTextSpan.className = 'roadmap-item-text';
        subTextSpan.textContent = sub.text;
        
        subLabel.appendChild(subCheckbox);
        subLabel.appendChild(subCheckmark);
        subLabel.appendChild(subTextSpan);
        subLi.appendChild(subLabel);
        subUl.appendChild(subLi);
      });
      
      li.appendChild(subUl);
    }
    
    roadmapList.appendChild(li);
  });
  
  updateProgress();
}

// Calculate progress percentage and update progress bar
function updateProgress() {
  let total = 0;
  let completed = 0;

  appState.roadmap.forEach(task => {
    if (task.substeps.length > 0) {
      total += task.substeps.length;
      completed += task.substeps.filter(s => s.completed).length;
    } else {
      total += 1;
      if (task.completed) {
        completed += 1;
      }
    }
  });

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  progressText.textContent = `進捗率: ${percentage}%`;
  progressBarFill.style.width = `${percentage}%`;

  // Trigger celebration on completion
  if (percentage === 100 && total > 0 && appState.lastProgress < 100) {
    triggerConfetti();
    setTimeout(() => {
      alert('🎉 おめでとうございます！すべてのタスクを解凍し、完了しました！');
    }, 500);
  }

  appState.lastProgress = percentage;

  // v3 Auto-save current project state to history
  saveCurrentProject();
}

// Handle subtask decomposition (Further Melting)
async function handleFurtherMelt(taskId) {
  const task = appState.roadmap.find(t => t.id === taskId);
  if (!task) return;

  task.loadingSubtasks = true;
  renderRoadmap();

  const hasKey = appState.customKey || appState.isKeyConfigured;

  if (!hasKey) {
    // Simulate delay for Demo Mode
    await new Promise(resolve => setTimeout(resolve, 1200));
    task.substeps = getMockSubsteps(task.text).map(text => ({ text, completed: false }));
    task.loadingSubtasks = false;
    renderRoadmap();
    return;
  }

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (appState.customKey) {
      headers['x-api-key'] = appState.customKey;
    }

    const res = await fetch('/api/melt-subtask', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        parentTask: taskInput.value,
        subtask: task.text
      })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Server error');
    }

    task.substeps = data.substeps.map(text => ({ text, completed: false }));
  } catch (err) {
    console.error('Subtask melt failed:', err);
    alert(`サブタスクの分解に失敗しました: ${err.message}`);
  } finally {
    task.loadingSubtasks = false;
    renderRoadmap();
  }
}

// Handle editing of a task in-place
function startEditingTask(taskId, textSpan, label) {
  const task = appState.roadmap.find(t => t.id === taskId);
  if (!task) return;
  
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'roadmap-edit-input';
  input.value = task.text;
  
  const originalDisplay = label.style.display;
  label.style.display = 'none';
  
  label.parentNode.insertBefore(input, label);
  input.focus();
  
  let finished = false;
  
  const saveEdit = () => {
    if (finished) return;
    finished = true;
    const newText = input.value.trim();
    if (newText) {
      task.text = newText;
    }
    input.remove();
    label.style.display = originalDisplay;
    renderRoadmap();
  };
  
  const cancelEdit = () => {
    if (finished) return;
    finished = true;
    input.remove();
    label.style.display = originalDisplay;
  };
  
  input.addEventListener('blur', saveEdit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  });
}

// Delete a task from the roadmap
function deleteTask(taskId) {
  const index = appState.roadmap.findIndex(t => t.id === taskId);
  if (index !== -1) {
    appState.roadmap.splice(index, 1);
    renderRoadmap();
  }
}

// Add a new task to the roadmap
function handleAddTask() {
  const text = newTaskInput.value.trim();
  if (!text) return;

  const newTask = {
    id: `task-${Date.now()}`,
    text: text,
    completed: false,
    substeps: [],
    loadingSubtasks: false
  };

  appState.roadmap.push(newTask);
  newTaskInput.value = '';
  renderRoadmap();
}

// Mock subtask data for Demo Mode
function getMockSubsteps(taskText) {
  const text = taskText.toLowerCase();
  if (text.includes('不満') || text.includes('洗い出し') || text.includes('bug-list')) {
    return [
      "身の回りの不満や「もっとこうなったらいいのに」と思う体験をノートに書き出す",
      "書き出したアイデアを整理し、自分にとっての重要度を評価する",
      "lectures/lecture3/bug-list.mdファイルを作成し、箇条書きで20個リスト化する"
    ];
  }
  if (text.includes('解決策') || text.includes('vpc') || text.includes('提供価値')) {
    return [
      "選んだ不満について、「誰が」「どんな場面で困っているか」を具体化する",
      "Value Proposition Canvas (VPC) のテンプレート（Jobs/Pains/Gains）を埋める",
      "解決アイデア（Products/Relievers/Creators）を記述し、キャンバスを完成させる"
    ];
  }
  if (text.includes('スクリーンショット') || text.includes('スクショ') || text.includes('vpc-v1.png')) {
    return [
      "VPCを描いたスライドやホワイトボードツールの画面を開く",
      "OSの範囲選択スクリーンショット機能を使って綺麗に撮影する",
      "assetsフォルダ配下に「vpc-v1.png」という名前で保存する"
    ];
  }
  if (text.includes('github') || text.includes('リポジトリ') || text.includes('push')) {
    return [
      "GitHubで新しいPublicリポジトリ（[DiscordID]-web3ai-2026）を作成する",
      "Git BashまたはVS Codeターミナルで git init / git add / git commit を実行する",
      "git push origin main コマンドで作成したリモートリポジトリへ送信する"
    ];
  }
  if (text.includes('ポータル') || text.includes('提出')) {
    return [
      "GitHubリポジトリがPublicになっていることをブラウザのシークレットウィンドウで確認する",
      "リポジトリのURLをクリップボードにコピーする",
      "授業ポータルアプリを開き、提出フォームにURLを貼り付けて送信する"
    ];
  }
  if (text.includes('研究テーマ') || text.includes('候補') || text.includes('ブレスト')) {
    return [
      "自分が興味のある技術分野や課題を3つマインドマップ等で展開する",
      "それぞれのテーマの新規性・社会的意義を簡単にまとめる",
      "A4資料として構成案（仮タイトル、概要）を整理する"
    ];
  }
  if (text.includes('教官') || text.includes('アポ') || text.includes('面談')) {
    return [
      "教官の空き時間やゼミのスケジュールを確認する",
      "面談を希望する日時候補を3つ含めた丁寧なメールを作成する",
      "A4の候補資料を添付して教官に送信する"
    ];
  }
  if (text.includes('先行研究') || text.includes('論文') || text.includes('scholar')) {
    return [
      "Google ScholarやCiNiiなどの論文データベースを開く",
      "研究キーワードで検索し、被引用数の多い主要な論文を5本抽出する",
      "スプレッドシートを作成し、タイトル・著者・出版年・概要の列を作る"
    ];
  }
  if (text.includes('競合') || text.includes('調査') || text.includes('価格')) {
    return [
      "主要な競合ツール（Notion AI, ChatGPT, Zapier）の公式ページを開く",
      "それぞれの「無料枠」「有料プランの価格」「提供機能」をメモする",
      "比較用のマトリクス表をスプレッドシート上に設計する"
    ];
  }
  if (text.includes('usp') || text.includes('キャッチコピー')) {
    return [
      "競合の弱みと自分たちの強みが交わる「独自の売り (USP)」を3点言語化する",
      "LPのメインとなる目を引くキャッチコピーを5パターン作成する",
      "チームメンバーや知人にコピーの第一印象をヒアリングする"
    ];
  }
  if (text.includes('figma') || text.includes('ワイヤーフレーム')) {
    return [
      "Figmaにログインし、新規デザインファイルを作成する",
      "モバイル用・PC用の標準フレームを配置する",
      "ヘッダー・ヒーローセクション・機能一覧・料金表のレイアウトを描く"
    ];
  }
  
  // Generic fallback
  return [
    `${taskText.substring(0, 20)}... の具体的な作業要件を確認する`,
    "作業に必要な関連ツールやファイルを開いて準備する",
    "ステップを細分化し、まずは5分で終わる作業から実行に移す"
  ];
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

// v3 Render the history projects list in sidebar
function renderHistoryList() {
  historyList.innerHTML = '';
  
  if (appState.history.length === 0) {
    const li = document.createElement('li');
    li.style.padding = '1rem';
    li.style.textAlign = 'center';
    li.style.color = 'var(--text-muted)';
    li.style.fontSize = '0.8rem';
    li.textContent = '履歴はありません';
    historyList.appendChild(li);
    return;
  }

  appState.history.forEach((project) => {
    const li = document.createElement('li');
    li.className = `history-item ${project.id === appState.currentProjectId ? 'active' : ''}`;
    
    // Add click event to load the project, but prevent loading when clicking the delete button
    li.addEventListener('click', (e) => {
      // Check if delete button was clicked
      if (e.target.closest('.history-item-delete-btn')) return;
      loadProject(project.id);
      historySidebar.classList.add('collapsed');
    });

    const contentDiv = document.createElement('div');
    contentDiv.className = 'history-item-content';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'history-item-title';
    titleDiv.textContent = project.title;

    const dateDiv = document.createElement('div');
    dateDiv.className = 'history-item-date';
    dateDiv.textContent = project.date;

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(dateDiv);

    // Delete project button
    const delBtn = document.createElement('button');
    delBtn.className = 'history-item-delete-btn';
    delBtn.title = '履歴から削除';
    delBtn.innerHTML = '🗑️';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteProject(project.id);
    });

    li.appendChild(contentDiv);
    li.appendChild(delBtn);
    historyList.appendChild(li);
  });
}

// v3 Load a project from history
function loadProject(projectId) {
  const project = appState.history.find(p => p.id === projectId);
  if (!project) return;

  appState.currentProjectId = project.id;
  taskInput.value = project.input;
  goalText.textContent = project.goal;

  // Restore deliverables
  deliverablesList.innerHTML = '';
  project.deliverables.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    deliverablesList.appendChild(li);
  });

  // Restore roadmap state
  appState.roadmap = JSON.parse(JSON.stringify(project.roadmap));
  appState.currentResult = {
    goal: project.goal,
    deliverables: project.deliverables,
    actionPlan: project.roadmap.map(item => item.text),
    firstStep: project.firstStep,
    clarityGaps: project.clarityGaps
  };

  // Restore first step text
  firstStepText.textContent = project.firstStep;
  firstStepCheckbox.checked = project.firstStepCompleted;
  if (project.firstStepCompleted) {
    firstStepCard.classList.add('completed');
  } else {
    firstStepCard.classList.remove('completed');
  }

  // Restore clarity gaps
  gapsList.innerHTML = '';
  project.clarityGaps.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    gapsList.appendChild(li);
  });

  renderRoadmap();
  showState('result');
}

// v3 Save current project state to history
function saveCurrentProject() {
  if (!appState.currentResult) return;

  const inputVal = taskInput.value.trim();
  const title = inputVal.substring(0, 20) + (inputVal.length > 20 ? '...' : '') || '名称未設定のタスク';
  const now = new Date();
  const dateStr = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const projectData = {
    id: appState.currentProjectId || `project-${Date.now()}`,
    title: title,
    date: dateStr,
    input: taskInput.value,
    goal: goalText.textContent,
    deliverables: Array.from(deliverablesList.querySelectorAll('li')).map(li => li.textContent),
    roadmap: JSON.parse(JSON.stringify(appState.roadmap)),
    firstStep: firstStepText.textContent,
    firstStepCompleted: firstStepCheckbox.checked,
    clarityGaps: Array.from(gapsList.querySelectorAll('li')).map(li => li.textContent)
  };

  if (!appState.currentProjectId) {
    appState.currentProjectId = projectData.id;
    appState.history.unshift(projectData);
  } else {
    const idx = appState.history.findIndex(p => p.id === appState.currentProjectId);
    if (idx !== -1) {
      // Keep same date or update it? Updating makes it show most recently edited. Let's update date!
      appState.history[idx] = projectData;
      // Move to top of history list since it was edited
      const updatedProject = appState.history.splice(idx, 1)[0];
      appState.history.unshift(updatedProject);
    } else {
      appState.history.unshift(projectData);
    }
  }

  localStorage.setItem('taskmelt_history', JSON.stringify(appState.history));
  renderHistoryList();
}

// v3 Delete a project from history
function deleteProject(projectId) {
  if (confirm('このタスク履歴を削除しますか？')) {
    appState.history = appState.history.filter(p => p.id !== projectId);
    localStorage.setItem('taskmelt_history', JSON.stringify(appState.history));
    
    if (appState.currentProjectId === projectId) {
      handleNewMelt();
    } else {
      renderHistoryList();
    }
  }
}

// v3 Handle clicking "New Melt" (Clear Screen)
function handleNewMelt() {
  appState.currentProjectId = null;
  appState.currentResult = null;
  appState.roadmap = [];
  appState.lastProgress = 0;
  
  taskInput.value = '';
  showState('blank');
  renderHistoryList();
}

// v3 Export the current action plan to Clipboard as Markdown
function handleExportMarkdown() {
  if (!appState.currentResult) return;

  const goal = goalText.textContent;
  const deliverables = Array.from(deliverablesList.querySelectorAll('li'))
    .map(li => `- ${li.textContent}`)
    .join('\n');
  const firstStep = firstStepText.textContent;
  const firstStepStatus = firstStepCheckbox.checked ? '[x]' : '[ ]';
  
  // Format roadmap including nested subtasks
  let roadmapMd = '';
  appState.roadmap.forEach(task => {
    const taskStatus = task.completed ? '[x]' : '[ ]';
    roadmapMd += `- ${taskStatus} ${task.text}\n`;
    if (task.substeps && task.substeps.length > 0) {
      task.substeps.forEach(sub => {
        const subStatus = sub.completed ? '[x]' : '[ ]';
        roadmapMd += `  - ${subStatus} ${sub.text}\n`;
      });
    }
  });

  const clarityGaps = Array.from(gapsList.querySelectorAll('li'))
    .map(li => `- ${li.textContent}`)
    .join('\n');

  const mdText = `# TaskMelt タスク分解ロードマップ

## 🎯 目的 (Goal)
${goal}

## ⚡️ 最初の一歩 (First Step)
- ${firstStepStatus} ${firstStep} *(2分以内に実行！)*

## 📦 成果物 (Deliverables)
${deliverables}

## 📋 作業手順 (Action Plan)
${roadmapMd}

## ❓ 質問・不明点 (Clarity Gaps)
${clarityGaps}

---
*Generated by TaskMelt v3*`;

  navigator.clipboard.writeText(mdText)
    .then(() => {
      const originalText = exportMdBtn.textContent;
      exportMdBtn.textContent = 'コピー完了！';
      exportMdBtn.style.setProperty('background', 'var(--color-success)', 'important');
      exportMdBtn.style.setProperty('border-color', 'var(--color-success)', 'important');
      exportMdBtn.disabled = true;
      
      setTimeout(() => {
        exportMdBtn.textContent = originalText;
        exportMdBtn.style.setProperty('background', 'rgba(139, 92, 246, 0.08)', 'important');
        exportMdBtn.style.setProperty('border-color', 'rgba(139, 92, 246, 0.25)', 'important');
        exportMdBtn.disabled = false;
      }, 2000);
    })
    .catch(err => {
      console.error('Export failed:', err);
      alert('Markdownのコピーに失敗しました。お手数ですが手動でコピーしてください。');
    });
}

