// ============================================================
// 化学闯关 · 核心逻辑
// 功能：闯关 + 三星 + 艾宾浩斯错题本 + 进度追踪
// ============================================================

// ---------- 启动页逻辑 ----------
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('hidden');
      // 动画结束后移除 DOM，避免影响后续点击
      setTimeout(() => splash.remove(), 600);
    }, 3000); // 改为 3 秒后开始淡出
  }
});
// ---------- 常量 ----------
const STORAGE_KEY = 'chem_quiz_v1';
const EBBINGHAUS_INTERVALS = [1, 3, 7, 15]; // 错题复习间隔（天）
const CATEGORY_TOTALS = { '必背': 30, '必懂': 30, '易混': 25, 'TOP20': 20 };
const EXAM_DATE = '2026-06-18'; // 中考日期（约）
const STREAK_MILESTONES = [3, 7, 14, 21, 30, 50];
const STREAK_BADGES = {
  3:  { icon: '🔥', title: '坚持 3 天！', sub: '习惯正在养成，继续加油' },
  7:  { icon: '⚡', title: '连续 7 天！', sub: '一周不间断，了不起' },
  14: { icon: '💎', title: '连续 14 天！', sub: '两周稳定刷题，进入状态' },
  21: { icon: '🌟', title: '连续 21 天！', sub: '21 天养成习惯，化学已是日常' },
  30: { icon: '🏆', title: '满 30 天！', sub: '一个月坚持，金牌选手' },
  50: { icon: '👑', title: '连续 50 天！', sub: '从开始到中考，王者归来！' },
};

// 教材章节定义（11 关）—— 绪论合并到第一章
const CHAPTERS = [
  { id: 1, units: [0, 1], icon: '🔬', name: '第一关：化学初识',         desc: '物质变化 · 实验基本操作' },
  { id: 2, units: [2],    icon: '💨', name: '第二关：空气和氧气',       desc: '空气组成 · 氧气性质 · 制取' },
  { id: 3, units: [3],    icon: '⚛️', name: '第三关：物质构成的奥秘',   desc: '分子原子 · 元素周期表' },
  { id: 4, units: [4],    icon: '💧', name: '第四关：自然界的水',       desc: '水净化 · 水的组成 · 化学式' },
  { id: 5, units: [5],    icon: '🧪', name: '第五关：化学方程式',       desc: '质量守恒 · 配平 · 计算' },
  { id: 6, units: [6],    icon: '🪨', name: '第六关：碳和碳的氧化物',   desc: '碳单质 · CO/CO₂ · 制取' },
  { id: 7, units: [7],    icon: '🔋', name: '第七关：能源的合理利用',   desc: '燃烧 · 化石能源 · 新能源' },
  { id: 8, units: [8],    icon: '⚙️', name: '第八关：金属和金属材料',   desc: '金属性质 · 活动顺序 · 炼铁' },
  { id: 9, units: [9],    icon: '🥤', name: '第九关：溶液',             desc: '溶液配制 · 溶解度 · 质量分数' },
  { id: 10,units: [10],   icon: '🧂', name: '第十关：常见的酸和碱',     desc: '酸碱性质 · pH · 中和反应' },
  { id: 11,units: [11],   icon: '🌍', name: '第十一关：化学与社会',     desc: '盐 · 化肥 · 营养 · 环保' },
];

// ---------- 状态 ----------
let state = loadState();
let quizCtx = null; // 当前答题上下文

// ============================================================
// 数据持久化
// ============================================================
function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return migrateState(JSON.parse(raw)); } catch (e) {}
  }
  return {
    kpProgress: {},
    wrongQuestions: {},
    settings: {
      dailyMinutes: 0,    // 0 表示未设置（触发引导）
      onboarded: false
    },
    stats: {
      totalAnswered: 0,
      totalCorrect: 0,
      totalMinutes: 0,
      streakDays: 0,
      lastActiveDate: null,
      dailyHistory: {}    // { 'YYYY-MM-DD': { answered, correct, minutes } }
    },
    celebration: {
      todayGoalShown: '',     // 上次显示"今日达标"的日期
      milestonesShown: []     // 已展示过的打卡里程碑天数
    }
  };
}

// 兼容老版本数据（缺字段时补默认）
function migrateState(s) {
  if (!s.settings) s.settings = { dailyMinutes: 0, onboarded: false };
  if (typeof s.stats.totalMinutes !== 'number') s.stats.totalMinutes = 0;
  Object.values(s.stats.dailyHistory || {}).forEach(d => {
    if (typeof d.minutes !== 'number') d.minutes = 0;
  });
  if (!s.celebration) {
    s.celebration = { todayGoalShown: '', milestonesShown: [] };
  }
  return s;
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

// ============================================================
// 中考倒计时
// ============================================================
function daysUntilExam() {
  const today = new Date(todayStr());
  const exam = new Date(EXAM_DATE);
  const diff = Math.ceil((exam - today) / (1000 * 60 * 60 * 24));
  return diff;
}

function renderExamCountdown() {
  const numEl = document.getElementById('ec-day-num');
  const streakEl = document.getElementById('ec-streak-num');
  const banner = document.getElementById('exam-countdown');
  if (!numEl || !banner) return;
  const days = daysUntilExam();
  if (days < 0) {
    banner.innerHTML = '<div class="ec-left"><div class="ec-label">中考已结束</div><div class="ec-days">辛苦了，卓阳！</div></div>';
    return;
  }
  numEl.textContent = days;
  if (streakEl) streakEl.textContent = state.stats.streakDays || 0;
}

// ============================================================
// 庆祝弹窗
// ============================================================
function showCelebration({ icon, title, msg, sub }) {
  document.getElementById('celeb-icon').textContent = icon || '🎉';
  document.getElementById('celeb-title').textContent = title || '恭喜！';
  document.getElementById('celeb-msg').textContent = msg || '';
  document.getElementById('celeb-sub').textContent = sub || '';
  document.getElementById('celebration-modal').classList.add('show');
}

// 检查是否触发各种庆祝（按优先级一次只显示一个，剩下的在下次进入主页时显示）
function checkAllCelebrations() {
  // 1. 打卡里程碑（最高优先级）
  const streak = state.stats.streakDays || 0;
  for (const m of STREAK_MILESTONES) {
    if (streak >= m && !state.celebration.milestonesShown.includes(m)) {
      state.celebration.milestonesShown.push(m);
      saveState();
      const badge = STREAK_BADGES[m];
      showCelebration({
        icon: badge.icon,
        title: badge.title,
        msg: `🔥 已经连续打卡 ${streak} 天`,
        sub: badge.sub
      });
      return; // 一次只显示一个
    }
  }

  // 2. 今日学习目标达成
  const today = todayStr();
  const goal = state.settings.dailyMinutes || 0;
  if (goal > 0 && state.celebration.todayGoalShown !== today) {
    const todayMin = (state.stats.dailyHistory[today]?.minutes) || 0;
    if (todayMin >= goal) {
      state.celebration.todayGoalShown = today;
      saveState();
      const days = daysUntilExam();
      showCelebration({
        icon: '🎯',
        title: '今日目标达成！',
        msg: `今天学了 ${todayMin.toFixed(1)} 分钟`,
        sub: `连续打卡 ${streak} 天 · 距离中考 ${days} 天`
      });
      return;
    }
  }
}

// ============================================================
// 时长追踪（核心）
// ============================================================
let _timerStart = null;
let _activePage = null;

function startTimer() {
  if (_timerStart) return; // 已启动
  _timerStart = Date.now();
}
function stopTimer() {
  if (!_timerStart) return;
  const elapsed = (Date.now() - _timerStart) / 1000 / 60; // 分钟
  _timerStart = null;
  // 太短的不计（< 3 秒可能是误触）
  if (elapsed < 0.05) return;
  const today = todayStr();
  if (!state.stats.dailyHistory[today]) {
    state.stats.dailyHistory[today] = { answered: 0, correct: 0, minutes: 0 };
  }
  state.stats.dailyHistory[today].minutes = (state.stats.dailyHistory[today].minutes || 0) + elapsed;
  state.stats.totalMinutes = (state.stats.totalMinutes || 0) + elapsed;
  saveState();
  // 更新首页时长进度（如果在首页）
  if (_activePage === 'home-page') renderTodayProgress();
  // 检查是否触发"今日目标达成"庆祝
  checkAllCelebrations();
}

// 切换标签页/锁屏：暂停计时
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopTimer();
  else if (_activePage === 'quiz-page') startTimer();
});
window.addEventListener('beforeunload', stopTimer);

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

// 章节统计：返回 KP 总数、已掌握数、题数、已答数、星级
function chapterStats(chapter) {
  const kps = KNOWLEDGE_POINTS.filter(k => chapter.units.includes(k.unit));
  const totalKps = kps.length;
  const masteredKps = kps.filter(k => getKpStars(k.id) >= 3).length;
  const totalQs = QUESTIONS.filter(q => kps.some(k => k.id === q.kpId)).length;
  const answeredQs = kps.reduce((s, k) => {
    const p = state.kpProgress[k.id];
    return s + (p ? (p.correctQs || []).length : 0);
  }, 0);
  // 章节星级：按 KP 掌握比例
  const ratio = totalKps > 0 ? masteredKps / totalKps : 0;
  let stars = 0;
  if (ratio >= 0.30) stars = 1;
  if (ratio >= 0.60) stars = 2;
  if (ratio >= 1.00) stars = 3;
  return { totalKps, masteredKps, totalQs, answeredQs, stars, kps };
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
  // 时长追踪：进入/离开 quiz-page
  if (_activePage === 'quiz-page' && pageId !== 'quiz-page') stopTimer();
  if (pageId === 'quiz-page' && _activePage !== 'quiz-page') startTimer();
  _activePage = pageId;

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
  
  // 更新进度环
  const pct = totalKp > 0 ? Math.round((totalMastered / totalKp) * 100) : 0;
  const circleFill = document.getElementById('welcome-circle-fill');
  const pctText = document.getElementById('welcome-pct');
  if (circleFill) circleFill.setAttribute('stroke-dasharray', `${pct}, 100`);
  if (pctText) pctText.textContent = `${pct}%`;

  // 各分类进度（更新标签）
  Object.keys(CATEGORY_TOTALS).forEach(cat => {
    const mastered = categoryMasteredCount(cat);
    const total = CATEGORY_TOTALS[cat];
    const elCount = document.getElementById(`count-${cat}`);
    if (elCount) elCount.textContent = `${mastered}/${total} 知识点`;
  });

  // 章节闯关（主入口）
  renderChapterGrid();

  // 中考倒计时
  renderExamCountdown();

  // 进入主页时检查是否有未展示的庆祝
  setTimeout(() => checkAllCelebrations(), 200);

  // 今日复习
  const dueCount = Object.values(state.wrongQuestions)
    .filter(w => !w.mastered && dateBeforeOrEqual(w.nextReview, todayStr())).length;
  const wrongTotal = Object.values(state.wrongQuestions).filter(w => !w.mastered).length;
  document.getElementById('wrong-count').textContent = `${wrongTotal} 道`;
  document.getElementById('review-count').textContent = `${dueCount} 道到期`;

  // 今日学习推荐
  renderTodayRecommendation(dueCount);

  // 今日学习进度
  renderTodayProgress();

  // 当前目标提示（设置区）
  const goalTip = document.getElementById('current-goal-tip');
  if (goalTip) {
    const m = state.settings.dailyMinutes || 15;
    goalTip.textContent = `当前目标：每天 ${m} 分钟`;
  }
}

function renderTodayProgress() {
  const today = todayStr();
  const goal = state.settings.dailyMinutes || 0;
  if (!goal) return; // 未设置目标
  const todayMin = (state.stats.dailyHistory[today]?.minutes) || 0;
  const pct = Math.min(100, todayMin / goal * 100);
  const completed = todayMin >= goal;
  const progressBox = document.getElementById('today-progress');
  const text = document.getElementById('today-progress-text');
  const fill = document.getElementById('today-progress-fill');
  if (progressBox) {
    progressBox.style.display = 'block';
    text.innerHTML = completed
      ? `<span>🎉 今日已学 ${todayMin.toFixed(1)} 分钟</span><span>已完成目标</span>`
      : `<span>今日已学 ${todayMin.toFixed(1)} 分钟</span><span>目标 ${goal} 分钟</span>`;
    fill.style.width = pct + '%';
    fill.classList.toggle('completed', completed);
  }
}

function renderChapterGrid() {
  const grid = document.getElementById('chapter-grid');
  if (!grid) return;
  grid.innerHTML = CHAPTERS.map(ch => {
    const s = chapterStats(ch);
    const pct = s.totalQs > 0 ? Math.min(100, s.answeredQs / s.totalQs * 100) : 0;
    const starStr = '⭐'.repeat(s.stars) + '☆'.repeat(3 - s.stars);
    const completed = s.stars === 3 ? 'completed' : '';
    // 现代风格卡片
    return `
      <div class="chapter-card-modern ${completed}" data-chapter="${ch.id}">
        <div class="ch-icon-container">
          <div class="ch-icon">${ch.icon}</div>
        </div>
        <div class="ch-name">${ch.name.replace(/第.*关：/, '')}</div>
        <div class="ch-meta">${s.answeredQs}/${s.totalQs} 题</div>
        <div class="ch-bottom">
           <div class="ch-stars">${starStr}</div>
        </div>
      </div>
    `;
  }).join('');
  grid.querySelectorAll('.chapter-card-modern').forEach(card => {
    card.onclick = () => {
      const chId = parseInt(card.dataset.chapter, 10);
      const ch = CHAPTERS.find(c => c.id === chId);
      if (ch) showChapter(ch);
    };
  });
}

function showChapter(chapter) {
  const s = chapterStats(chapter);
  const sortedKps = s.kps.slice().sort((a, b) => {
    const orderA = ['必背', '必懂', '易混', 'TOP20'].indexOf(a.category);
    const orderB = ['必背', '必懂', '易混', 'TOP20'].indexOf(b.category);
    return orderA - orderB;
  });
  document.getElementById('kp-list-header').innerHTML = `
    <div class="h-title">${chapter.icon} ${chapter.name}</div>
    <div class="h-desc">${chapter.desc}</div>
    <div class="h-desc" style="margin-top:6px;color:#374151;">
      <strong>${s.masteredKps}/${s.totalKps}</strong> 知识点已掌握 ·
      <strong>${s.answeredQs}/${s.totalQs}</strong> 题已答 ·
      ${'⭐'.repeat(s.stars) + '☆'.repeat(3 - s.stars)}
    </div>
  `;
  const listEl = document.getElementById('kp-list');
  listEl.innerHTML = sortedKps.map(kp => {
    const stars = getKpStars(kp.id);
    const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    const tag = `<span class="kp-cat-tag kp-cat-${kp.category}">${kp.category}</span>`;
    return `
      <div class="kp-item" data-kp="${kp.id}">
        <div class="kp-info">
          <div class="kp-title">${tag} ${kp.title}</div>
          <div class="kp-tag">${kp.desc}</div>
        </div>
        <div class="kp-stars">${starStr}</div>
      </div>
    `;
  }).join('');
  listEl.querySelectorAll('.kp-item').forEach(el => {
    el.onclick = () => enterKpQuiz(el.dataset.kp);
  });
  showPage('kp-list-page', { title: chapter.name });
}

function renderTodayRecommendation(dueCount) {
  // 找未通关的章节（按章节顺序）
  let nextChapter = null;
  let nextKp = null;
  for (const ch of CHAPTERS) {
    const s = chapterStats(ch);
    if (s.stars < 3) {
      nextChapter = ch;
      // 章节内找未掌握的 KP（按必背→必懂→易混→TOP20）
      const order = ['必背', '必懂', '易混', 'TOP20'];
      for (const cat of order) {
        nextKp = s.kps.find(k => k.category === cat && getKpStars(k.id) < 3);
        if (nextKp) break;
      }
      break;
    }
  }

  const parts = [];
  if (dueCount > 0) parts.push(`📕 ${dueCount} 道错题到期复习`);
  if (nextChapter && nextKp) {
    parts.push(`📚 继续闯：${nextChapter.name}`);
    parts.push(`<span style="color:#9ca3af;font-size:13px;">下一关键点：${nextKp.title}</span>`);
  }
  if (parts.length === 0) parts.push('🎉 全部章节已通关，可以去模拟考啦！');

  document.getElementById('today-content').innerHTML = parts.join('<br>');

  document.getElementById('start-today-btn').onclick = () => {
    if (dueCount > 0) {
      enterReviewMode();
    } else if (nextKp) {
      enterKpQuiz(nextKp.id);
    } else if (nextChapter) {
      showChapter(nextChapter);
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
  const progress = state.kpProgress[kpId] || { stars: 0, correctQs: [], skippedUntil: {} };
  const today = todayStr();
  // 过滤：未答对 且 不在今日跳过名单
  const todoQs = allQs.filter(q => {
    if (progress.correctQs.includes(q.id)) return false;
    const sk = progress.skippedUntil?.[q.id];
    if (sk && sk > today) return false; // 还在跳过期内
    return true;
  });
  // 如果全部都跳过了或全部都对了 → 用全部题巩固
  let queue;
  if (todoQs.length > 0) {
    queue = todoQs;
  } else {
    const remaining = allQs.filter(q => !progress.correctQs.includes(q.id));
    if (remaining.length > 0) {
      // 还有未答对但都被跳过 → 提示用户
      showToast('未答对的题已设置明天再做，今天先攻其他章节吧');
      return;
    }
    queue = allQs; // 全部答对，重新巩固
  }
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
  const fillContainer = document.getElementById('question-fill-container');
  if (q.type === 'choice') {
    fillContainer.style.display = 'none';
    fillContainer.innerHTML = '';
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
    fillContainer.style.display = 'block';

    // 检测空数：按答案的分号数
    const blanks = (q.answer || '').toString().split(';').filter(x => x.trim()).length;
    if (blanks <= 1) {
      // 单空：一个大输入框
      fillContainer.innerHTML = '<input type="text" class="fill-input single" placeholder="请输入答案">';
    } else {
      // 多空：N 个独立输入框
      let html = '';
      for (let i = 0; i < blanks; i++) {
        html += `<div class="fill-row">
          <span class="fill-label">第 ${i + 1} 空</span>
          <input type="text" class="fill-input" data-idx="${i}" placeholder="第 ${i + 1} 空的答案">
        </div>`;
      }
      fillContainer.innerHTML = html;
      // 回车自动跳下一空
      const inputs = fillContainer.querySelectorAll('input');
      inputs.forEach((inp, i) => {
        inp.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (i < inputs.length - 1) inputs[i + 1].focus();
            else document.getElementById('submit-btn').click();
          }
        });
      });
    }
    const firstInput = fillContainer.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  // 提交按钮
  document.getElementById('submit-btn').style.display = 'block';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('defer-btn').style.display = 'none';
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
    const inputs = document.querySelectorAll('#question-fill-container .fill-input');
    if (inputs.length === 1) {
      // 单空填空
      userAnswer = inputs[0].value.trim();
      if (!userAnswer) { showToast('请输入答案'); return; }
      isCorrect = checkFillAnswer(userAnswer, q);
      inputs[0].disabled = true;
      inputs[0].classList.add(isCorrect ? 'correct' : 'wrong');
    } else {
      // 多空填空：每个空独立判断 + 视觉反馈
      const userValues = Array.from(inputs).map(i => i.value.trim());
      if (userValues.some(v => !v)) { showToast('请把每个空都填完'); return; }
      userAnswer = userValues.join(';');

      const correctParts = q.answer.toString().split(';');
      let allCorrect = true;
      inputs.forEach((input, i) => {
        const userVal = userValues[i];
        const correctVal = correctParts[i] || '';
        let match = lenientMatch(userVal, correctVal);
        // 备选答案按 ; 拆分，每个空对应位置
        if (!match && q.altAnswers) {
          for (const alt of q.altAnswers) {
            const altParts = alt.toString().split(';');
            if (altParts[i] && lenientMatch(userVal, altParts[i])) {
              match = true; break;
            }
          }
        }
        input.classList.add(match ? 'correct' : 'wrong');
        input.disabled = true;
        if (!match) allCorrect = false;
      });
      isCorrect = allCorrect;
    }
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
  if (lenientMatch(userAnswer, q.answer)) return true;
  if (q.altAnswers) {
    return q.altAnswers.some(alt => lenientMatch(userAnswer, alt));
  }
  return false;
}

// ============================================================
// 宽容匹配：标点不敏感 + 同义词归一 + 中文长答案关键词命中
// ============================================================
const _CN_STOPWORDS = ['的', '了', '着', '过', '在', '是', '和', '也', '与', '有', '为', '之', '等', '将', '都', '把', '被', '所', '让', '使', '或', '又', '即', '其', '此', '该', '此', '便'];
const _SYNONYMS = [
  ['产生', '生成'], ['冒出', '生成'], ['释放', '放出'],
  ['出现', '生成'], ['形成', '生成'],
  ['气味', '味'],   // 有刺激性气味的气体 ↔ 刺激性气体
  ['温度升高', '放热'], ['温度上升', '放热'],
  ['一种', ''], ['现象', ''],
];

function _normalizeForMatch(s) {
  let r = String(s)
    .replace(/[\s，。、；：!！？?·　()（）"'""'']+/g, '')
    .replace(/[₀⁰]/g, '0').replace(/[₁¹]/g, '1').replace(/[₂²]/g, '2')
    .replace(/[₃³]/g, '3').replace(/[₄⁴]/g, '4').replace(/[₅⁵]/g, '5')
    .replace(/[₆⁶]/g, '6').replace(/[₇⁷]/g, '7').replace(/[₈⁸]/g, '8')
    .replace(/[₉⁹]/g, '9')
    .replace(/[⁻]/g, '-').replace(/[⁺]/g, '+')
    .toLowerCase();
  return r;
}

function _stripStopwords(s) {
  let r = s;
  for (const sw of _CN_STOPWORDS) {
    r = r.split(sw).join('');
  }
  return r;
}

function _applySynonyms(s) {
  let r = s;
  for (const [a, b] of _SYNONYMS) {
    r = r.split(a).join(b);
  }
  return r;
}

function _extractKeywords(rawExpected) {
  // 用标点和停用词切分，提取连续 2+ 中文字符作为关键词
  let s = String(rawExpected).replace(/[\s，。、；：,.;!！？?·　()（）]+/g, '|');
  for (const sw of _CN_STOPWORDS) {
    s = s.split(sw).join('|');
  }
  return s.split('|').filter(k => /[一-龥]{2,}/.test(k) && k.length >= 2);
}

function lenientMatch(user, expected) {
  if (!user || !expected) return false;
  const u0 = _normalizeForMatch(user);
  const e0 = _normalizeForMatch(expected);
  if (u0 === e0) return true;

  // 短答案（化学式/方程式/数字 等）：严格比较即可，不做语义宽容
  // 含较多中文字才走语义宽容流程
  const cnCount = (e0.match(/[一-龥]/g) || []).length;
  if (cnCount < 4) return false;

  // 1) 去停用词 + 同义词归一
  const u1 = _applySynonyms(_stripStopwords(u0));
  const e1 = _applySynonyms(_stripStopwords(e0));
  if (u1 === e1) return true;

  // 2) 关键词命中率 ≥ 70% 视为命中（描述性长答案兜底）
  const keywords = _extractKeywords(expected);
  if (keywords.length === 0) return false;
  // 用户答案先做同义词归一，再判断每个关键词是否包含
  const userBag = _applySynonyms(u0);
  const expBag = _applySynonyms(e0);
  const hits = keywords.filter(k => {
    const kn = _applySynonyms(k);
    return userBag.includes(kn) || userBag.includes(k);
  }).length;
  return (hits / keywords.length) >= 0.7;
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
  const oldStreak = state.stats.streakDays || 0;
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
  // 打卡天数变化时检查里程碑（在保存后异步触发）
  if (state.stats.streakDays !== oldStreak) {
    setTimeout(() => checkAllCelebrations(), 100);
  }
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
    // 第 1 步：重读题目 + 题目结构分析（明确"问什么、答什么"）
    const kp = getKp(q.kpId);
    const analysis = analyzeQuestion(q);
    document.getElementById('step-header').innerHTML = '✗ 答错了 · 第 1 步：先看清题目';
    document.getElementById('step-body').innerHTML = `
      <div style="color:#4b5563;font-size:14px;margin-bottom:8px;">📖 别急着看答案。先回到题目，慢慢再读一遍——</div>
      <div class="step-quote">${escapeHtml(q.stem)}</div>
      <div style="color:#374151;font-size:14px;margin:14px 0 6px;">📋 把题目分析清楚：</div>
      <div class="analyze-grid">
        <div class="analyze-row"><span class="analyze-label">题　型</span><span>${analysis.type}</span></div>
        <div class="analyze-row"><span class="analyze-label">答题要求</span><span>${analysis.requirement}</span></div>
        ${analysis.keywords ? `<div class="analyze-row"><span class="analyze-label">注意关键词</span><span>${analysis.keywords}</span></div>` : ''}
        <div class="analyze-row"><span class="analyze-label">考察知识</span><span class="step-kp" style="margin:0;">${kp.category}·${kp.title}</span></div>
      </div>
      <div style="color:#9ca3af;font-size:13px;margin-top:8px;">看清"问什么、答什么"了吗？再点下一步。</div>
    `;
    document.getElementById('step-actions').innerHTML = `
      <button class="step-btn primary" id="step-next-btn">我看清了 →</button>
      <button class="step-btn secondary" id="step-skip-btn">跳过</button>
    `;
    document.getElementById('step-next-btn').onclick = () => showWrongStep(2, q);
    document.getElementById('step-skip-btn').onclick = () => {
      card.style.display = 'none';
      showFullExplanation(q, userAnswer, false);
    };
  } else if (step === 2) {
    // 第 2 步：专属启发提示（针对内容怎么想）
    const hint = (typeof HINTS !== 'undefined' && HINTS[q.id])
      ? HINTS[q.id]
      : (q.type === 'choice'
          ? '想想：用到的核心规律是什么？哪些选项可以先排除？'
          : '想想：要填什么？用到哪个知识点？注意条件、配平、↑↓ 符号别漏。');
    document.getElementById('step-header').innerHTML = '✗ 答错了 · 第 2 步：跟着启发想一想';
    document.getElementById('step-body').innerHTML = `
      <div class="step-quote" style="background:#eff6ff;border-left-color:#2563eb;color:#1e3a8a;font-size:15px;line-height:1.7;">
        💡 ${hint}
      </div>
      <div style="color:#9ca3af;font-size:13px;margin-top:8px;">顺着这个思路自己推一遍——主动思考比直接看答案有用 10 倍。</div>
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
  // 答错且是填空题时：附带"我自己答对了"按钮
  let overrideBtn = '';
  if (!isCorrect && q.type === 'fill') {
    overrideBtn = `<button class="self-grade-btn" id="self-grade-btn">✓ 我对照后觉得意思一样，记为答对</button>`;
  }
  document.getElementById('exp-correct').innerHTML = `<strong>${correctText}</strong>${overrideBtn}`;
  document.getElementById('exp-text').textContent = q.explanation;

  // 绑定自评按钮
  const selfBtn = document.getElementById('self-grade-btn');
  if (selfBtn) {
    selfBtn.onclick = () => {
      // 改判为答对：移除错题、更新 KP 进度
      if (state.wrongQuestions[q.id]) {
        delete state.wrongQuestions[q.id];
      }
      const kpId = q.kpId;
      if (!state.kpProgress[kpId]) {
        state.kpProgress[kpId] = { stars: 0, correctQs: [], lastDate: null };
      }
      const p = state.kpProgress[kpId];
      if (!p.correctQs.includes(q.id)) p.correctQs.push(q.id);
      const correctDiffs = new Set(
        p.correctQs.map(id => QUESTIONS.find(qq => qq.id === id)?.difficulty).filter(Boolean)
      );
      let newStars = 0;
      if (correctDiffs.has(1)) newStars = 1;
      if (correctDiffs.has(1) && correctDiffs.has(2)) newStars = 2;
      if (correctDiffs.has(1) && correctDiffs.has(2) && correctDiffs.has(3)) newStars = 3;
      if (newStars > p.stars) p.stars = newStars;
      p.lastDate = todayStr();
      // 更新统计
      state.stats.totalCorrect++;
      const today = todayStr();
      if (state.stats.dailyHistory[today]) state.stats.dailyHistory[today].correct++;
      saveState();
      // UI 反馈
      selfBtn.textContent = '✓ 已记为答对';
      selfBtn.disabled = true;
      selfBtn.classList.add('done');
      // 标记当前轮答对
      quizCtx.sessionCorrect++;
      // 刷新结果文字
      document.getElementById('exp-result').textContent = '✓ 已自评为答对';
      document.getElementById('exp-result').className = 'exp-result right';
      card.classList.remove('wrong');
      showToast('已改判为答对，错题本已移除');
    };
  }

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
  // 答错时显示"今天先放过"按钮，方便跳出循环
  const deferBtn = document.getElementById('defer-btn');
  if (deferBtn) {
    deferBtn.style.display = isCorrect ? 'none' : 'block';
  }
}

// ============================================================
// "今天先放过"：把当前题推迟到明天，退出当前轮
// ============================================================
function deferCurrentQuestion() {
  if (!quizCtx || !quizCtx.queue) return;
  const q = quizCtx.queue[quizCtx.index];
  if (!q) return;
  const tomorrow = addDays(todayStr(), 1);

  if (quizCtx.mode === 'review') {
    // 错题复习：推迟下次复习到明天
    const w = state.wrongQuestions[q.id];
    if (w) {
      w.nextReview = tomorrow;
      w.lastReview = todayStr();
    }
  } else {
    // KP 闯关：标记 skippedUntil，今天不再出现
    const kpId = q.kpId;
    if (!state.kpProgress[kpId]) {
      state.kpProgress[kpId] = { stars: 0, correctQs: [], skippedUntil: {}, lastDate: null };
    }
    if (!state.kpProgress[kpId].skippedUntil) state.kpProgress[kpId].skippedUntil = {};
    state.kpProgress[kpId].skippedUntil[q.id] = tomorrow;
  }
  saveState();
  showToast('好的，明天再来挑战 💪');
  // 退回主页
  setTimeout(() => showPage('home-page'), 500);
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
  // 把"累计答题"换成"累计学习时长"
  const totalMin = Math.round(state.stats.totalMinutes || 0);
  document.getElementById('stat-total').textContent = totalMin > 60
    ? `${(totalMin/60).toFixed(1)}h`
    : totalMin + '分';
  const totalLabel = document.querySelector('#stat-total')?.parentElement?.querySelector('.stat-label');
  if (totalLabel) totalLabel.textContent = '累计学习时长';
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

  // 近 7 天（含时长）
  const weekEl = document.getElementById('stats-week');
  const goal = state.settings.dailyMinutes || 15;
  const today = new Date();
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    const ds = d.toISOString().slice(0, 10);
    const h = state.stats.dailyHistory[ds] || { answered: 0, correct: 0, minutes: 0 };
    days.push({
      date: ds.slice(5),
      answered: h.answered, correct: h.correct,
      minutes: h.minutes || 0
    });
  }
  weekEl.innerHTML = days.map(d => {
    const minDisp = d.minutes > 0 ? `${d.minutes.toFixed(1)}分钟` : '—';
    const qDisp = d.answered > 0 ? `${d.correct}/${d.answered} 题` : '';
    const pct = Math.min(100, d.minutes / goal * 100);
    const reached = d.minutes >= goal ? '✓' : '';
    return `
    <div class="cat-stat-row">
      <div class="cat-stat-name">
        <span>${d.date} ${reached}</span>
        <span>${minDisp}${qDisp ? ' · ' + qDisp : ''}</span>
      </div>
      <div class="cat-stat-bar"><div class="cat-stat-fill" style="width:${pct}%; background:${d.minutes >= goal ? '#10b981' : '#3b82f6'};"></div></div>
    </div>
  `;
  }).join('');
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
  document.getElementById('defer-btn').onclick = deferCurrentQuestion;
  // 重置
  document.getElementById('reset-btn').onclick = () => {
    if (confirm('确定要重置所有进度吗？此操作不可撤销！')) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
      showPage('home-page');
      showToast('进度已重置');
    }
  };

  // 引导：每个目标卡片
  document.querySelectorAll('.goal-card').forEach(card => {
    card.onclick = () => {
      const mins = parseInt(card.dataset.mins, 10);
      state.settings.dailyMinutes = mins;
      state.settings.onboarded = true;
      saveState();
      closeModal('onboarding-modal');
      renderHome();
      showToast(`已设定每日 ${mins} 分钟，加油！`);
    };
  });

  // 调整目标
  document.getElementById('change-goal-btn').onclick = () => {
    document.getElementById('onboarding-modal').classList.add('show');
  };

  // 首次启动：未引导则弹窗
  if (!state.settings.onboarded) {
    setTimeout(() => {
      document.getElementById('onboarding-modal').classList.add('show');
    }, 300);
  }

  // 导出/导入
  document.getElementById('export-btn').onclick = openExport;
  document.getElementById('import-btn').onclick = openImport;
  document.getElementById('close-export-btn').onclick = () => closeModal('export-modal');
  document.getElementById('close-import-btn').onclick = () => closeModal('import-modal');
  document.getElementById('copy-export-btn').onclick = copyExport;
  document.getElementById('confirm-import-btn').onclick = doImport;

  // 庆祝弹窗关闭：可能还有下一个待显示的庆祝
  document.getElementById('celeb-close').onclick = () => {
    closeModal('celebration-modal');
    setTimeout(() => checkAllCelebrations(), 400); // 链式：可能还有下一个
  };

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
