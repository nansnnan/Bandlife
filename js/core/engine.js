// 游戏引擎：初始化、时间推进、竞争对手模拟、播放量与评分模型

// ===== 初始化新游戏 =====
function initGame(mode, bandData) {
  Game.mode = mode;
  Game.dayIndex = 0;
  Game.band = buildBand(bandData);
  Game.finance = initFinance(mode);
  Game.songs = [];
  Game.releases = [];
  Game.events = [];
  Game.stats = { totalPlays: 0, totalFans: 0, reputation: 50, totalSales: 0 };
  Game.rivals = initRivals();
  addEvent("乐队生涯从 2000 年 1 月 1 日开始。");
  addEvent(`乐队「${Game.band.name}」正式成立，风格：${Game.band.style}。`);
  if (mode === "real") {
    addEvent("真实模式开启：请合理规划预算与训练。");
  } else {
    addEvent("沙盒模式开启：资金无限，自由创作。");
  }
  saveGame();
}

function initFinance(mode) {
  if (mode === "real") {
    return { balance: 200000, totalIncome: 0, totalExpense: 0 };  // 初始预算 20 万
  }
  return { balance: Infinity, totalIncome: 0, totalExpense: 0 };  // 沙盒无限资金
}

// ===== 构建乐队对象 =====
function buildBand(bandData) {
  const lineup = bandData.lineup || [];
  // 乐队能力（受编制和成员影响）
  const memberCount = lineup.length;
  const base = 40 + memberCount * 3;  // 成员越多基础能力略高
  const members = lineup.map((m, i) => ({
    name: m.name || `成员${i + 1}`,
    role: m.role || "乐手",
    skill: clamp(Math.round(base + randf(-10, 10)), 20, 95),
  }));
  return {
    name: bandData.name,
    style: bandData.style,
    styleCategory: bandData.styleCategory || "摇滚",
    lineupType: bandData.lineupType || "标准摇滚编制",
    origin: bandData.origin || "北京市",
    originProvince: bandData.originProvince || "北京市",
    members: members,
    // 乐队各项能力（0-100），受成员技能影响
    skill: {
      composition: clamp(Math.round(base + randf(-8, 12)), 20, 95),   // 作曲
      lyrics: clamp(Math.round(base + randf(-8, 12)), 20, 95),        // 作词
      arrangement: clamp(Math.round(base + randf(-8, 12)), 20, 95),   // 编曲
      performance: clamp(Math.round(base + randf(-8, 12)), 20, 95),   // 演奏
      vocal: clamp(Math.round(base + randf(-8, 12)), 20, 95),         // 唱功
    },
    training: { composition: 0, lyrics: 0, arrangement: 0, performance: 0, vocal: 0 },
  };
}

// ===== 初始化竞争对手 =====
function initRivals() {
  return window.RIVAL_BANDS.map(b => {
    const formedDay = Math.max(0, dateToDay(b.formed, 1, 1) - dateToDay(2000, 1, 1));
    return {
      ...b,
      active: b.formed <= 2000,
      activeDay: formedDay,           // 从第几天开始活跃
      currentPopularity: b.popularity,
      fans: b.popularity * 10000,
      totalPlays: 0,
      releases: [],
      lastReleaseDay: -rand(30, 180),
    };
  });
}

// ===== 事件日志 =====
function addEvent(text) {
  Game.events.push({ day: Game.dayIndex, text });
  if (Game.events.length > 200) Game.events.shift();
}

// ===== 时间推进 =====
function advanceTime(days) {
  for (let i = 0; i < days; i++) {
    Game.dayIndex++;
    tickDaily();
    if (Game.dayIndex % 7 === 0) tickWeekly();
    if (Game.dayIndex % 30 === 0) tickMonthly();
  }
  updateRivalActivity();
  saveGame();
}

// 每日更新：已发布作品的播放量自然增长
function tickDaily() {
  for (const rel of Game.releases) {
    growRelease(rel, 1);
  }
  for (const r of Game.rivals) {
    if (r.active && r.releases.length) {
      for (const rel of r.releases) growRelease(rel, 1);
    }
  }
}

// 每周更新：竞争对手动态
function tickWeekly() {
  // 竞争对手可能发布新作品
  for (const r of Game.rivals) {
    if (!r.active) continue;
    if (Game.dayIndex - r.lastReleaseDay > rand(60, 200)) {
      rivalRelease(r);
      r.lastReleaseDay = Game.dayIndex;
    }
  }
}

// 每月更新：市场与名气变化
function tickMonthly() {
  // 乐队名气随作品累积缓慢变化
  if (Game.releases.length) {
    const avgQuality = Game.releases.reduce((s, r) => s + r.quality, 0) / Game.releases.length;
    Game.stats.reputation = clamp(Game.stats.reputation + (avgQuality - 50) / 20, 5, 100);
    Game.stats.totalFans = Math.round(Game.stats.totalFans * (1 + (avgQuality - 50) / 5000) + rand(0, 100));
  }
}

// ===== 竞争对手发布 =====
function rivalRelease(rival) {
  const quality = clamp(rival.currentPopularity * 7 + randf(-15, 15), 10, 98);
  const song = {
    name: rivalSongName(rival),
    bandName: rival.name,
    style: rival.style,
    quality,
    plays: 0,
    likes: 0,
    comments: 0,
    dayIndex: Game.dayIndex,
    releaseType: "单曲",
    isRival: true,
  };
  rival.releases.push(song);
  rival.totalPlays = 0;
  addEvent(`${rival.name} 发布新单曲《${song.name}》。`);
}

function rivalSongName(rival) {
  const prefixes = ["夜", "风", "梦", "光", "路", "远方", "归", "海", "星", "城", "少年", "浮生", "流年", "回声", "荒野", "灯火"];
  const suffixes = ["之歌", "的呼唤", "背后", "之上", "未央", "行", "谣", "序曲", "挽歌", "慢", "不眠", "如昨", "无问", "散场", "无期", "归途"];
  return pick(prefixes) + pick(suffixes);
}

// ===== 播放量增长模型 =====
function growRelease(rel, days) {
  if (rel.plays <= 0 && rel.likes <= 0) {
    // 首次初始化
  }
  const ageDays = Game.dayIndex - rel.dayIndex;
  // 增长随年龄衰减（先快后慢）
  const baseRate = rel.quality * (rel.isRival ? 50 : 60);
  const popularityFactor = rel.isRival ? 1 : (1 + Game.stats.reputation / 100);
  const decay = Math.pow(0.995, ageDays);  // 衰减
  const daily = baseRate * popularityFactor * decay * days;
  rel.plays = Math.round((rel.plays || 0) + daily);
  rel.likes = Math.round((rel.likes || 0) + daily * likeRate(rel.quality));
  rel.comments = Math.round((rel.comments || 0) + daily * commentRate(rel.quality));
}

function likeRate(quality) {
  return clamp(quality / 1000, 0.002, 0.12);
}
function commentRate(quality) {
  return clamp(quality / 5000, 0.0005, 0.05);
}

// ===== 评分生成 =====
// 为已发布作品生成各平台评分
function generateRatings(release) {
  if (release.ratings && release.ratings.length) return release.ratings;
  const ratings = [];
  for (const pf of window.RATING_PLATFORMS) {
    const base = release.quality;
    // 平台口味偏差 + 随机噪音
    const bias = pf.type === "媒体乐评" ? randf(-4, 2) : randf(-3, 3);
    let score = clamp(base + bias, 0, 100);
    // 映射到平台分数制度
    const scaled = (score / 100) * pf.scale;
    let finalScore;
    if (pf.precision === 0) finalScore = Math.round(scaled);
    else if (pf.precision === 0.5) finalScore = Math.round(scaled * 2) / 2;
    else finalScore = Math.round(scaled * 10) / 10;
    finalScore = clamp(finalScore, 0, pf.scale);
    ratings.push({
      platform: pf.name,
      score: finalScore,
      scale: pf.scale,
      level: window.RATING_LEVELS(finalScore, pf.scale),
      weight: pf.weight,
    });
  }
  release.ratings = ratings;
  release.avgScore = calcAvgScore(ratings);
  return ratings;
}

function calcAvgScore(ratings) {
  let totalW = 0, totalS = 0;
  for (const r of ratings) {
    const normalized = (r.score / r.scale) * 10;  // 归一化到 10 分
    totalW += r.weight;
    totalS += normalized * r.weight;
  }
  return totalW ? Math.round(totalS / totalW * 10) / 10 : 0;
}

// ===== 生成评论 =====
function generateComments(release, count) {
  if (release.commentList && release.commentList.length) return release.commentList;
  const list = [];
  const ratio = release.quality / 100;
  for (let i = 0; i < count; i++) {
    const r = Game.rng();
    let pool;
    if (r < ratio * 0.7) pool = window.COMMENT_TEMPLATES.praise;
    else if (r < ratio * 0.7 + (1 - ratio) * 0.6) pool = window.COMMENT_TEMPLATES.criticize;
    else if (r < 0.85) pool = window.COMMENT_TEMPLATES.neutral;
    else pool = window.COMMENT_TEMPLATES.short;
    let text = pick(pool);
    text = text.replace(/\{song\}/g, release.name)
      .replace(/\{band\}/g, release.bandName || Game.band?.name || "")
      .replace(/\{style\}/g, release.style || "")
      .replace(/\{album\}/g, release.name)
      .replace(/\{ep\}/g, release.name);
    list.push({
      user: pick(window.COMMENT_USERS),
      text,
      likes: rand(0, 5000),
      time: formatDateShort(Math.max(0, Game.dayIndex - rand(0, Math.max(1, Game.dayIndex - release.dayIndex)))),
    });
  }
  release.commentList = list;
  return list;
}

// ===== 更新竞争对手活跃状态 =====
function updateRivalActivity() {
  for (const r of Game.rivals) {
    if (!r.active && Game.dayIndex >= r.activeDay) {
      r.active = true;
      addEvent(`${r.name}（${r.style}）于本年度正式成立并进入乐坛。`);
    }
    if (r.active) {
      r.currentPopularity = clamp(r.popularity + (Game.dayIndex - r.activeDay) / 365 * 0.3, 0, 10);
      r.fans = Math.round(r.fans * (1 + randf(0, 0.0003)));
    }
  }
}

// ===== 通用：格式化大数字 =====
function formatNumber(n) {
  if (n == null || isNaN(n)) return "0";
  if (n >= 1e8) return (n / 1e8).toFixed(1) + "亿";
  if (n >= 1e4) return (n / 1e4).toFixed(1) + "万";
  return String(Math.round(n));
}
