// ============================================================
// 化学闯关 · 核心逻辑
// 功能：闯关 + 三星 + 艾宾浩斯错题本 + 进度追踪
// ============================================================

// ---------- 常量 ----------
const STORAGE_KEY = 'chem_quiz_v1';
const EBBINGHAUS_INTERVALS = [1, 3, 7, 15]; // 错题复习间隔（天）
const CATEGORY_TOTALS = { '必背': 90, '必懂': 30, '易混': 25, 'TOP20': 20 };

// ---------- 状态 ----------
let state = loadState();
let quizCtx = null; // 当前答题上下文

// ============================================================
// 数据持久化
// ============================================================
function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) {}
  }
  return {
    kpProgress: {},      // { kpId: { stars, correctQs: [], wrongQs: [], lastDate } }
    wrongQuestions: {},  // { qId: { firstWrong, lastReview, nextReview, reviewLevel, mastered } }
    stats: {
      totalAnswered: 0,
      totalCorrect: 0,
      streakDays: 0,
      lastActiveDate: null,
      dailyHistory: {}   // { 'YYYY-MM-DD': { answered, correct } }
    }
  };
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ============================================================
// 工具函数
// ============================================================
function todayStr() { return new Date().toISOString().slice(0, 10); }
function addDays(dateStr, days) {
  const d = new Date(dateStr); d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
function dateBeforeOrEqual(a, b) { return a <= b; }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

function getKp(kpId) { return KNOWLEDGE_POINTS.find(k => k.id === kpId); }
function getQuestionsForKp(kpId) {
  return QUESTIONS.filter(q => q.kpId === kpId).sort((a, b) => a.difficulty - b.difficulty);
}
function getKpStars(kpId) {
  const p = state.kpProgress[kpId];
  return p ? (p.stars || 0) : 0;
}
function categoryMasteredCount(category) {
  return KNOWLEDGE_POINTS.filter(k => k.category === category && getKpStars(k.id) >= 3).length;
}

// ============================================================
// 页面切换
// ============================================================
const PAGE_TITLES = {
  'home-page': '乐乐的化学复习魔幻之旅',
  'kp-list-page': '',
  'quiz-page': '答题',
  'wrong-page': '错题本',
  'stats-page': '学习数据'
};
function showPage(pageId, opts = {}) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  const title = opts.title || PAGE_TITLES[pageId] || '';
  document.getElementById('page-title').textContent = title;
  document.body.classList.toggle('show-back', pageId !== 'home-page');
  window.scrollTo(0, 0);
  if (pageId === 'home-page') renderHome();
  if (pageId === 'wrong-page') renderWrongList('due');
  if (pageId === 'stats-page') renderStats();
}

// ============================================================
// 首页渲染
// ============================================================
function renderHome() {
  // 总进度
  const totalMastered = Object.keys(CATEGORY_TOTALS).reduce(
    (s, c) => s + categoryMasteredCount(c), 0
  );
  const totalKp = Object.values(CATEGORY_TOTALS).reduce((s, n) => s + n, 0);
  document.getElementById('welcome-progress').textContent =
    `${totalMastered} / ${totalKp} 知识点已掌握`;

  // 各分类进度
  Object.keys(CATEGORY_TOTALS).forEach(cat => {
    const mastered = categoryMasteredCount(cat);
    const total = CATEGORY_TOTALS[cat];
    document.getElementById(`count-${cat}`).textContent = `${mastered}/${total} 知识点`;
    document.getElementById(`bar-${cat}`).style.width = `${(mastered / total) * 100}%`;
  });

  // 今日复习
  const dueCount = Object.values(state.wrongQuestions)
    .filter(w => !w.mastered && dateBeforeOrEqual(w.nextReview, todayStr())).length;
  const wrongTotal = Object.values(state.wrongQuestions).filter(w => !w.mastered).length;
  document.getElementById('wrong-count').textContent = `${wrongTotal} 道`;
  document.getElementById('review-count').textContent = `${dueCount} 道到期`;

  // 今日学习推荐
  renderTodayRecommendation(dueCount);
}

function renderTodayRecommendation(dueCount) {
  // 找未掌握的知识点（按必背→必懂→易混→TOP20 顺序）
  const order = ['必背', '必懂', '易混', 'TOP20'];
  let nextKp = null;
  for (const cat of order) {
    nextKp = KNOWLEDGE_POINTS.find(k => k.category === cat && getKpStars(k.id) < 3);
    if (nextKp) break;
  }

  const parts = [];
  if (dueCount > 0) parts.push(`📕 ${dueCount} 道错题到期复习`);
  if (nextKp) parts.push(`📝 继续：${nextKp.category} · ${nextKp.title}`);
  if (parts.length === 0) parts.push('🎉 全部知识点已掌握，去模拟考吧！');

  document.getElementById('today-content').innerHTML = parts.join('<br>');

  document.getElementById('start-today-btn').onclick = () => {
    if (dueCount > 0) {
      enterReviewMode();
    } else if (nextKp) {
      enterKpQuiz(nextKp.id);
    }
  };
}

// ============================================================
// 知识点列表
// ============================================================
function showCategory(category) {
  const kps = KNOWLEDGE_POINTS.filter(k => k.category === category);
  document.getElementById('kp-list-header').innerHTML = `
    <div class="h-title">${category}类 · ${kps.length} 个知识点</div>
    <div class="h-desc">点击知识点开始闯关，⭐⭐⭐ 表示精通</div>
  `;
  const listEl = document.getElementById('kp-list');
  listEl.innerHTML = kps.map(kp => {
    const stars = getKpStars(kp.id);
    const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    return `
      <div class="kp-item" data-kp="${kp.id}">
        <div class="kp-info">
          <div class="kp-title">${kp.title}</div>
          <div class="kp-tag">第${kp.unit}单元 · ${kp.desc}</div>
        </div>
        <div class="kp-stars">${starStr}</div>
      </div>
    `;
  }).join('');
  listEl.querySelectorAll('.kp-item').forEach(el => {
    el.onclick = () => enterKpQuiz(el.dataset.kp);
  });
  showPage('kp-list-page', { title: category + '类' });
}

// ============================================================
// 答题流程
// ============================================================
function enterKpQuiz(kpId) {
  const kp = getKp(kpId);
  const allQs = getQuestionsForKp(kpId);
  if (allQs.length === 0) { showToast('该知识点暂无题目'); return; }
  const progress = state.kpProgress[kpId] || { stars: 0, correctQs: [] };
  // 找未答对的题，按难度顺序
  const todoQs = allQs.filter(q => !progress.correctQs.includes(q.id));
  // 全部做对了 → 全部重答（巩固）
  const queue = todoQs.length > 0 ? todoQs : allQs;
  quizCtx = {
    mode: 'kp',
    kpId,
    queue,
    index: 0,
    total: queue.length,
    sessionCorrect: 0
  };
  showQuizQuestion();
}

function enterReviewMode() {
  // 取所有到期的错题
  const today = todayStr();
  const dueIds = Object.keys(state.wrongQuestions).filter(qId => {
    const w = state.wrongQuestions[qId];
    return !w.mastered && dateBeforeOrEqual(w.nextReview, today);
  });
  if (dueIds.length === 0) { showToast('今日无到期错题'); return; }
  const queue = dueIds.map(id => QUESTIONS.find(q => q.id === id)).filter(Boolean);
  quizCtx = {
    mode: 'review',
    queue,
    index: 0,
    total: queue.length,
    sessionCorrect: 0
  };
  showQuizQuestion();
}

function showQuizQuestion() {
  const q = quizCtx.queue[quizCtx.index];
  const kp = getKp(q.kpId);

  // 元信息
  const modeLabel = quizCtx.mode === 'review' ? '🔁 错题复习' : `📝 ${kp.category}类`;
  document.getElementById('quiz-meta').textContent =
    `${modeLabel} · ${kp.title} · ${quizCtx.index + 1}/${quizCtx.total}`;
  document.getElementById('quiz-progress-fill').style.width =
    `${(quizCtx.index / quizCtx.total) * 100}%`;

  // 题目
  const diffLabel = ['', '基础', '易错', '综合'][q.difficulty];
  document.getElementById('question-tag').textContent =
    `${diffLabel}题 · 第${kp.unit}单元`;
  document.getElementById('question-stem').textContent = q.stem;

  // 选项 / 填空
  const optsEl = document.getElementById('question-options');
  const fillEl = document.getElementById('question-fill');
  if (q.type === 'choice') {
    fillEl.style.display = 'none';
    optsEl.style.display = 'flex';
    optsEl.innerHTML = q.options.map((opt, i) => {
      const letter = ['A', 'B', 'C', 'D'][i];
      return `<div class="option" data-letter="${letter}">
        <span class="opt-letter">${letter}.</span>
        <span class="opt-text">${opt.replace(/^[A-D]\.\s*/, '')}</span>
      </div>`;
    }).join('');
    optsEl.querySelectorAll('.option').forEach(el => {
      el.onclick = () => {
        if (el.classList.contains('disabled')) return;
        optsEl.querySelectorAll('.option').forEach(x => x.classList.remove('selected'));
        el.classList.add('selected');
      };
    });
  } else {
    optsEl.style.display = 'none';
    optsEl.innerHTML = '';
    fillEl.style.display = 'block';
    fillEl.value = '';
    fillEl.focus();
  }

  // 提交按钮
  document.getElementById('submit-btn').style.display = 'block';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('explanation-card').style.display = 'none';
  document.getElementById('step-card').style.display = 'none';

  showPage('quiz-page', { title: '答题中' });
}

function submitAnswer() {
  const q = quizCtx.queue[quizCtx.index];
  let userAnswer, isCorrect;

  if (q.type === 'choice') {
    const sel = document.querySelector('.option.selected');
    if (!sel) { showToast('请选择一个选项'); return; }
    userAnswer = sel.dataset.letter;
    isCorrect = userAnswer === q.answer;

    // 标记选项颜色
    document.querySelectorAll('.option').forEach(el => {
      el.classList.add('disabled');
      if (el.dataset.letter === q.answer) el.classList.add('correct');
      else if (el.dataset.letter === userAnswer && !isCorrect) el.classList.add('wrong');
    });
  } else {
    userAnswer = document.getElementById('question-fill').value.trim();
    if (!userAnswer) { showToast('请输入答案'); return; }
    isCorrect = checkFillAnswer(userAnswer, q);
    document.getElementById('question-fill').disabled = true;
  }

  // 更新统计
  state.stats.totalAnswered++;
  if (isCorrect) state.stats.totalCorrect++;
  const today = todayStr();
  if (!state.stats.dailyHistory[today]) {
    state.stats.dailyHistory[today] = { answered: 0, correct: 0 };
  }
  state.stats.dailyHistory[today].answered++;
  if (isCorrect) state.stats.dailyHistory[today].correct++;

  // 连续打卡
  updateStreak(today);

  // 更新知识点进度 / 错题本
  if (quizCtx.mode === 'kp') {
    updateKpProgress(q, isCorrect);
  } else {
    updateReviewProgress(q, isCorrect);
  }

  if (isCorrect) quizCtx.sessionCorrect++;

  // 渲染讲解
  renderExplanation(q, userAnswer, isCorrect);
  saveState();
}

function checkFillAnswer(userAnswer, q) {
  const norm = s => s.replace(/\s+/g, '').replace(/，/g, ',').replace(/；/g, ';').toLowerCase();
  const u = norm(userAnswer);
  if (norm(q.answer) === u) return true;
  if (q.altAnswers) {
    return q.altAnswers.some(alt => norm(alt) === u);
  }
  return false;
}

function updateKpProgress(q, isCorrect) {
  const kpId = q.kpId;
  if (!state.kpProgress[kpId]) {
    state.kpProgress[kpId] = { stars: 0, correctQs: [], lastDate: null };
  }
  const p = state.kpProgress[kpId];
  if (isCorrect) {
    if (!p.correctQs.includes(q.id)) p.correctQs.push(q.id);
    // 更新星级（按已答对的不同难度题数）
    const correctDiffs = new Set(
      p.correctQs.map(id => QUESTIONS.find(qq => qq.id === id)?.difficulty).filter(Boolean)
    );
    let newStars = 0;
    if (correctDiffs.has(1)) newStars = 1;
    if (correctDiffs.has(1) && correctDiffs.has(2)) newStars = 2;
    if (correctDiffs.has(1) && correctDiffs.has(2) && correctDiffs.has(3)) newStars = 3;
    if (newStars > p.stars) p.stars = newStars;
    p.lastDate = todayStr();
  } else {
    addToWrongBook(q);
  }
}

function updateReviewProgress(q, isCorrect) {
  const w = state.wrongQuestions[q.id];
  if (!w) return;
  w.lastReview = todayStr();
  if (isCorrect) {
    w.reviewLevel = (w.reviewLevel || 0) + 1;
    if (w.reviewLevel >= EBBINGHAUS_INTERVALS.length) {
      w.mastered = true;
      w.nextReview = '9999-12-31';
    } else {
      w.nextReview = addDays(todayStr(), EBBINGHAUS_INTERVALS[w.reviewLevel]);
    }
  } else {
    w.reviewLevel = 0;
    w.nextReview = addDays(todayStr(), EBBINGHAUS_INTERVALS[0]);
    // 错题本身就在错题里再错，知识点星级回退
    const kp = state.kpProgress[q.kpId];
    if (kp && kp.stars > 1) kp.stars = Math.max(1, kp.stars - 1);
  }
}

function addToWrongBook(q) {
  if (!state.wrongQuestions[q.id]) {
    state.wrongQuestions[q.id] = {
      firstWrong: todayStr(),
      lastReview: todayStr(),
      nextReview: addDays(todayStr(), EBBINGHAUS_INTERVALS[0]),
      reviewLevel: 0,
      mastered: false
    };
  } else {
    // 已经在错题本，再错 → 重置
    const w = state.wrongQuestions[q.id];
    w.reviewLevel = 0;
    w.nextReview = addDays(todayStr(), EBBINGHAUS_INTERVALS[0]);
    w.mastered = false;
  }
}

function updateStreak(today) {
  const last = state.stats.lastActiveDate;
  if (!last) {
    state.stats.streakDays = 1;
  } else if (last === today) {
    // 同一天，不变
  } else if (addDays(last, 1) === today) {
    state.stats.streakDays++;
  } else {
    state.stats.streakDays = 1;
  }
  state.stats.lastActiveDate = today;
}

function renderExplanation(q, userAnswer, isCorrect) {
  // 答对：直接显示讲解
  // 答错：先走三步引导，最后才显示讲解
  document.getElementById('submit-btn').style.display = 'none';

  if (isCorrect) {
    showFullExplanation(q, userAnswer, true);
  } else {
    quizCtx.wrongUserAnswer = userAnswer;
    showWrongStep(1, q);
  }
}

function showWrongStep(step, q) {
  const card = document.getElementById('step-card');
  const expCard = document.getElementById('explanation-card');
  expCard.style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';

  const userAnswer = quizCtx.wrongUserAnswer;
  const correctText = q.type === 'choice'
    ? `正确答案：${q.answer}　你的答案：${userAnswer}`
    : `正确答案：${q.answer}　你的答案：${userAnswer || '（空）'}`;

  if (step === 1) {
    // 第一步：先重读题目
    document.getElementById('step-header').innerHTML = '✗ 答错了 · 第 1 步：再读一次题目';
    document.getElementById('step-body').innerHTML = `
      <div>别急着看答案。先回到题目，慢慢再读一遍——<strong>这道题到底在问什么？</strong></div>
      <div class="step-quote">${escapeHtml(q.stem)}</div>
      <div style="color:#9ca3af;font-size:13px;">读完了吗？想想题目里有哪些关键词、哪些数据。</div>
    `;
    document.getElementById('step-actions').innerHTML = `
      <button class="step-btn primary" id="step-next-btn">我读完了 →</button>
      <button class="step-btn secondary" id="step-skip-btn">跳过</button>
    `;
    document.getElementById('step-next-btn').onclick = () => showWrongStep(2, q);
    document.getElementById('step-skip-btn').onclick = () => {
      card.style.display = 'none';
      showFullExplanation(q, userAnswer, false);
    };
  } else if (step === 2) {
    // 第二步：先分析题目（题型/答题要求/关键词）+ 启发提示
    const kp = getKp(q.kpId);
    const analysis = analyzeQuestion(q);
    const hint = (typeof HINTS !== 'undefined' && HINTS[q.id])
      ? HINTS[q.id]
      : (q.type === 'choice'
          ? '想想：用到的核心规律是什么？哪些选项可以先排除？'
          : '想想：要填什么？用到哪个知识点？注意条件、配平、↑↓ 符号别漏。');
    document.getElementById('step-header').innerHTML = '✗ 答错了 · 第 2 步：先看清题目要什么';
    document.getElementById('step-body').innerHTML = `
      <div style="color:#374151;font-size:14px;margin-bottom:6px;">📋 先把题目分析清楚：</div>
      <div class="analyze-grid">
        <div class="analyze-row"><span class="analyze-label">题　型</span><span>${analysis.type}</span></div>
        <div class="analyze-row"><span class="analyze-label">答题要求</span><span>${analysis.requirement}</span></div>
        ${analysis.keywords ? `<div class="analyze-row"><span class="analyze-label">注意关键词</span><span>${analysis.keywords}</span></div>` : ''}
        <div class="analyze-row"><span class="analyze-label">考察知识</span><span class="step-kp" style="margin:0;">${kp.category}·${kp.title}</span></div>
      </div>
      <div class="step-quote" style="background:#eff6ff;border-left-color:#2563eb;color:#1e3a8a;margin-top:12px;">
        💡 启发：${hint}
      </div>
      <div style="color:#9ca3af;font-size:13px;margin-top:6px;">看清问题 + 顺着启发推一推，再点下一步看答案。</div>
    `;
    document.getElementById('step-actions').innerHTML = `
      <button class="step-btn primary" id="step-next-btn">我想过了，看答案 →</button>
      <button class="step-btn secondary" id="step-back-btn">返回上一步</button>
    `;
    document.getElementById('step-next-btn').onclick = () => {
      card.style.display = 'none';
      showFullExplanation(q, userAnswer, false);
    };
    document.getElementById('step-back-btn').onclick = () => showWrongStep(1, q);
  }

  card.style.display = 'block';
  // 滚动到引导卡
  setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}

function showFullExplanation(q, userAnswer, isCorrect) {
  const card = document.getElementById('explanation-card');
  card.classList.toggle('wrong', !isCorrect);
  document.getElementById('exp-result').textContent = isCorrect ? '✓ 答对了！' : '✗ 答错了 · 完整讲解';
  document.getElementById('exp-result').className = 'exp-result ' + (isCorrect ? 'right' : 'wrong');

  const correctText = q.type === 'choice'
    ? `正确答案：${q.answer}　你的答案：${userAnswer}`
    : `正确答案：${q.answer}　你的答案：${userAnswer || '（空）'}`;
  document.getElementById('exp-correct').innerHTML = `<strong>${correctText}</strong>`;
  document.getElementById('exp-text').textContent = q.explanation;

  // 关联知识点
  const relatedEl = document.getElementById('exp-related');
  const related = (q.relatedKps || []).filter(id => id !== q.kpId).map(id => getKp(id)).filter(Boolean);
  if (related.length > 0) {
    relatedEl.innerHTML = `<div class="exp-related-title">关联知识点</div>` +
      related.map(kp => `<span class="exp-related-tag" data-kp="${kp.id}">${kp.category}·${kp.title}</span>`).join('');
    relatedEl.querySelectorAll('.exp-related-tag').forEach(el => {
      el.onclick = () => enterKpQuiz(el.dataset.kp);
    });
  } else {
    relatedEl.innerHTML = '';
  }

  card.style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// ============================================================
// 题目结构分析（第 2 步用）
// 自动识别题型、答题要求（要填几个空 / 4 选 1）、关键词
// ============================================================
function analyzeQuestion(q) {
  const result = { type: '', requirement: '', keywords: '' };

  if (q.type === 'choice') {
    result.type = '单项选择题';
    result.requirement = '在 4 个选项中选 1 个';
  } else {
    result.type = '填空题';
    // 用答案的分号数估算空数（更准确）
    const answerParts = String(q.answer || '').split(';').filter(s => s.trim()).length;
    const blankMatches = (q.stem.match(/_{2,}/g) || []).length;
    const blanks = Math.max(answerParts, blankMatches, 1);
    result.requirement = blanks > 1 ? `要填 ${blanks} 个空（每空都要写对才算对）` : '填 1 个空';
  }

  // 检测题干关键词
  const stem = q.stem;
  const tags = [];
  if (/[不没]能|无法|不可|不属于|不是|不会|不正确|错误的/.test(stem)) {
    tags.push('找"<strong>不/错</strong>"的（反向选择）');
  } else if (/正确的|对的/.test(stem)) {
    tags.push('找"<strong>正确</strong>"的');
  }
  if (/最强|最大|最高|最多|最好|最低|最小|最少|最稳定|最活泼/.test(stem)) {
    const m = stem.match(/最[强大高多好低小少稳活]/);
    tags.push(`找"<strong>${m[0]}</strong>..."的`);
  }
  if (/一定/.test(stem)) tags.push('注意"<strong>一定</strong>"——要找绝对成立的');
  if (/可能/.test(stem)) tags.push('注意"<strong>可能</strong>"——只要有一种情况成立即可');
  if (/共存/.test(stem)) tags.push('"<strong>共存</strong>" = 互相不反应');
  if (/足量/.test(stem)) tags.push('注意"<strong>足量</strong>"——某物过量了');
  if (/恰好完全反应/.test(stem)) tags.push('"<strong>恰好完全反应</strong>"——两者都没剩');
  if (/化学方程式/.test(stem)) tags.push('注意配平、条件、↑↓ 符号');
  if (/现象/.test(stem)) tags.push('描述现象——颜色/气泡/沉淀/放热 等');

  result.keywords = tags.join('；');
  return result;
}

function nextQuestion() {
  quizCtx.index++;
  if (quizCtx.index >= quizCtx.total) {
    finishQuizSession();
  } else {
    document.getElementById('question-fill').disabled = false;
    showQuizQuestion();
  }
}

function finishQuizSession() {
  const { sessionCorrect, total, mode, kpId } = quizCtx;
  let msg;
  if (mode === 'kp') {
    const kp = getKp(kpId);
    const stars = getKpStars(kpId);
    const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    msg = `本轮 ${sessionCorrect}/${total} 道答对\n\n${kp.title}\n当前星级：${starStr}`;
    if (stars === 3) msg += '\n\n🎉 已精通！';
    else if (stars >= 1) msg += `\n\n继续刷下一难度题，升至 3 星`;
  } else {
    msg = `复习 ${sessionCorrect}/${total} 道答对！`;
  }
  alert(msg);
  showPage('home-page');
}

// ============================================================
// 错题本
// ============================================================
function renderWrongList(tab) {
  document.querySelectorAll('.wrong-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  const today = todayStr();
  let items = Object.entries(state.wrongQuestions).map(([qId, w]) => ({ qId, ...w }));

  if (tab === 'due') {
    items = items.filter(w => !w.mastered && dateBeforeOrEqual(w.nextReview, today));
  } else if (tab === 'mastered') {
    items = items.filter(w => w.mastered);
  } else {
    items = items.filter(w => !w.mastered);
  }

  const listEl = document.getElementById('wrong-list');
  if (items.length === 0) {
    listEl.innerHTML = `<div class="wrong-empty">${tab === 'due' ? '今日无到期错题，继续刷新题吧！' : tab === 'mastered' ? '还没有已掌握的错题' : '错题本是空的，加油答题！'}</div>`;
    return;
  }
  listEl.innerHTML = items.map(w => {
    const q = QUESTIONS.find(qq => qq.id === w.qId);
    if (!q) return '';
    const kp = getKp(q.kpId);
    return `
      <div class="wrong-item" data-q="${w.qId}">
        <div class="wrong-item-stem">${q.stem.slice(0, 60)}${q.stem.length > 60 ? '…' : ''}</div>
        <div class="wrong-item-meta">
          <span>${kp.category}·${kp.title}</span>
          <span>${tab === 'mastered' ? '已掌握 ✓' : `下次复习：${w.nextReview}`}</span>
        </div>
      </div>
    `;
  }).join('');
  listEl.querySelectorAll('.wrong-item').forEach(el => {
    el.onclick = () => {
      const q = QUESTIONS.find(qq => qq.id === el.dataset.q);
      if (!q) return;
      quizCtx = { mode: 'review', queue: [q], index: 0, total: 1, sessionCorrect: 0 };
      showQuizQuestion();
    };
  });
}

// ============================================================
// 数据统计
// ============================================================
function renderStats() {
  document.getElementById('stat-days').textContent = state.stats.streakDays || 0;
  const totalMastered = Object.keys(CATEGORY_TOTALS).reduce(
    (s, c) => s + categoryMasteredCount(c), 0
  );
  document.getElementById('stat-mastered').textContent = totalMastered;
  document.getElementById('stat-total').textContent = state.stats.totalAnswered;
  const rate = state.stats.totalAnswered > 0
    ? Math.round(state.stats.totalCorrect / state.stats.totalAnswered * 100) + '%'
    : '—';
  document.getElementById('stat-rate').textContent = rate;

  // 分类掌握度
  const catEl = document.getElementById('stats-categories');
  catEl.innerHTML = Object.keys(CATEGORY_TOTALS).map(cat => {
    const m = categoryMasteredCount(cat);
    const total = CATEGORY_TOTALS[cat];
    const pct = (m / total) * 100;
    return `
      <div class="cat-stat-row">
        <div class="cat-stat-name"><span>${cat}类</span><span>${m}/${total}</span></div>
        <div class="cat-stat-bar"><div class="cat-stat-fill" style="width:${pct}%"></div></div>
      </div>
    `;
  }).join('');

  // 近 7 天
  const weekEl = document.getElementById('stats-week');
  const today = new Date();
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    const ds = d.toISOString().slice(0, 10);
    const h = state.stats.dailyHistory[ds] || { answered: 0, correct: 0 };
    days.push({ date: ds.slice(5), answered: h.answered, correct: h.correct });
  }
  weekEl.innerHTML = days.map(d => `
    <div class="cat-stat-row">
      <div class="cat-stat-name"><span>${d.date}</span><span>${d.answered ? d.correct + '/' + d.answered + ' 道' : '—'}</span></div>
    </div>
  `).join('');
}

// ============================================================
// 事件绑定
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // 分类卡片
  document.querySelectorAll('.category-card').forEach(card => {
    card.onclick = () => showCategory(card.dataset.category);
  });
  // 错题本/复习
  document.getElementById('wrong-book-card').onclick = () => showPage('wrong-page');
  document.getElementById('review-card').onclick = () => {
    showPage('wrong-page');
    renderWrongList('due');
  };
  // 错题 tabs
  document.querySelectorAll('.wrong-tab').forEach(tab => {
    tab.onclick = () => renderWrongList(tab.dataset.tab);
  });
  // 顶部按钮
  document.getElementById('back-btn').onclick = () => showPage('home-page');
  document.getElementById('stats-btn').onclick = () => showPage('stats-page');
  // 答题按钮
  document.getElementById('submit-btn').onclick = submitAnswer;
  document.getElementById('next-btn').onclick = nextQuestion;
  // 重置
  document.getElementById('reset-btn').onclick = () => {
    if (confirm('确定要重置所有进度吗？此操作不可撤销！')) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
      showPage('home-page');
      showToast('进度已重置');
    }
  };

  // 导出/导入
  document.getElementById('export-btn').onclick = openExport;
  document.getElementById('import-btn').onclick = openImport;
  document.getElementById('close-export-btn').onclick = () => closeModal('export-modal');
  document.getElementById('close-import-btn').onclick = () => closeModal('import-modal');
  document.getElementById('copy-export-btn').onclick = copyExport;
  document.getElementById('confirm-import-btn').onclick = doImport;

  showPage('home-page');
});

// ============================================================
// 进度导出 / 导入（备份功能）
// ============================================================
function openExport() {
  const payload = {
    v: 1,
    ts: new Date().toISOString(),
    data: state
  };
  const text = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  const formatted = `【乐乐化学进度·${new Date().toLocaleDateString('zh-CN')}】\n` + text;
  document.getElementById('export-text').value = formatted;
  document.getElementById('export-modal').classList.add('show');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

function copyExport() {
  const ta = document.getElementById('export-text');
  ta.select();
  ta.setSelectionRange(0, 99999);
  try {
    const ok = document.execCommand('copy');
    if (ok) showToast('✓ 已复制到剪贴板');
    else showToast('请长按全选后手动复制');
  } catch (e) {
    showToast('请长按全选后手动复制');
  }
}

function openImport() {
  document.getElementById('import-text').value = '';
  document.getElementById('import-modal').classList.add('show');
}

function doImport() {
  const raw = document.getElementById('import-text').value.trim();
  if (!raw) { showToast('请粘贴备份文字'); return; }
  try {
    // 提取 base64 部分（去除标题行）
    const lines = raw.split('\n').map(s => s.trim()).filter(Boolean);
    const b64 = lines[lines.length - 1]; // 最后一行是 base64
    const json = decodeURIComponent(escape(atob(b64)));
    const payload = JSON.parse(json);
    if (!payload.data || !payload.data.kpProgress) {
      throw new Error('格式错误');
    }
    if (!confirm('确认导入？当前进度将被覆盖。')) return;
    state = payload.data;
    saveState();
    closeModal('import-modal');
    showPage('home-page');
    showToast('✓ 进度已恢复');
  } catch (e) {
    alert('导入失败：备份文字损坏或格式错误。\n请确保完整粘贴了【乐乐化学进度...】这段。');
  }
}
