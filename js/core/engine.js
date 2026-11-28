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
  Game.studio = { level: 1 };          // 初始为初级工作室
  Game.videos = [];                     // 视频（制作中 / 待剪辑 / 已发布）
  Game.videoPlatform = { week: -1, videos: [], infWeek: -1 };
  Game.rivalVideoArchive = {};
  Game.tours = [];
  Game.awards = { nominations: null, results: null, history: [] };
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
  // 成员：各自独立的技能（可在创建时单独编辑，也可后续训练提升）
  const members = lineup.map((m, i) => ({
    id: "m" + i,
    name: m.name || `成员${i + 1}`,
    role: m.role || "乐手",
    skill: m.skill != null ? clamp(Math.round(m.skill), 20, 99) : clamp(Math.round(50 + randf(-10, 15)), 20, 99),
    trained: 0,   // 累计训练天数
  }));
  const avgSkill = members.length ? members.reduce((s, m) => s + m.skill, 0) / members.length : 50;
  // 乐队各项能力（0-100），由成员平均能力派生
  const skill = {
    composition: clamp(Math.round(avgSkill + randf(-5, 8)), 20, 95),   // 作曲
    lyrics: clamp(Math.round(avgSkill + randf(-5, 8)), 20, 95),        // 作词
    arrangement: clamp(Math.round(avgSkill + randf(-5, 8)), 20, 95),   // 编曲
    performance: clamp(Math.round(avgSkill + randf(-5, 8)), 20, 95),   // 演奏
    vocal: clamp(Math.round(avgSkill + randf(-5, 8)), 20, 95),         // 唱功
  };
  return {
    name: bandData.name,
    style: bandData.style,
    styleCategory: bandData.styleCategory || "摇滚",
    lineupType: bandData.lineupType || "标准摇滚编制",
    origin: bandData.origin || "北京市",
    originProvince: bandData.originProvince || "北京市",
    members: members,
    skill: skill,
    training: { composition: 0, lyrics: 0, arrangement: 0, performance: 0, vocal: 0 },
  };
}

// 重新根据成员平均能力刷新乐队整体能力（成员训练后调用）
function refreshBandSkill() {
  const b = Game.band;
  if (!b || !b.members.length) return;
  const avgSkill = b.members.reduce((s, m) => s + m.skill, 0) / b.members.length;
  const base = avgSkill + (b.training.performance || 0) * 0.5;
  b.skill.composition = clamp(Math.round(base + randf(-3, 5)), 20, 99);
  b.skill.lyrics = clamp(Math.round(base + randf(-3, 5)), 20, 99);
  b.skill.arrangement = clamp(Math.round(base + randf(-3, 5)), 20, 99);
  b.skill.performance = clamp(Math.round(base + randf(-3, 5)), 20, 99);
  b.skill.vocal = clamp(Math.round(base + randf(-3, 5)), 20, 99);
}

// ===== 初始化竞争对手 =====
// 解析 "YYYY-MM-DD" 为游戏内天数
function dateStrToDay(dateStr) {
  const [y, m, d] = (dateStr || "2000-01-01").split("-").map(Number);
  return dateToDay(y, m, d);
}

// 把乐队的真实作品目录展开为按时间排序的歌曲列表
function buildRivalCatalog(bandName) {
  const disc = window.BAND_DISCOGRAPHY[bandName] || [];
  const songs = [];
  for (const album of disc) {
    for (const song of album.songs) {
      songs.push({
        name: song.name, duration: song.duration, date: album.date,
        album: album.name, type: album.type, rating: album.rating,
      });
    }
  }
  songs.sort((a, b) => a.date.localeCompare(b.date));
  return songs;
}

function initRivals() {
  return window.RIVAL_BANDS.map(b => {
    // 成立日期：年份取数据中的 formed，月/日按乐队名确定性随机，避免全部落在 1 月 1 日
    const fm = 1 + Math.floor(seededUnit("formed-m|" + b.name) * 12);
    const fdim = daysInMonth(b.formed, fm);
    const fd = 1 + Math.floor(seededUnit("formed-d|" + b.name) * fdim);
    const formedDay = dateToDay(b.formed, fm, fd) - dateToDay(2000, 1, 1);
    const catalog = buildRivalCatalog(b.name);
    const rival = {
      ...b,
      active: formedDay <= 0,
      activeDay: formedDay,           // 从第几天开始活跃（可为负，表示开局前已成立）
      formedDate: { year: b.formed, month: fm, day: fd },
      currentPopularity: b.popularity,
      fans: b.popularity * 10000,
      totalPlays: 0,
      releases: [],
      lastReleaseDay: -rand(30, 180),
      catalog: catalog,
      releaseIndex: 0,
    };
    // 游戏开始（2000 年）前已发行的真实作品：保留并生成历史播放量数据
    for (const track of catalog) {
      const day = dateStrToDay(track.date);
      if (day <= 0) {
        const quality = track.rating
          ? clamp(Math.round(track.rating * 10), 10, 98)
          : clamp(b.popularity * 7 + randf(-15, 15), 10, 98);
        const ageDays = Math.abs(day);
        const relYear = parseInt(track.date.slice(0, 4)) || 2000;
        const cmtF = 0.5 + Game.rng() * 1.2;  // 评论差异化因子（同专辑各曲评论不同）
        const rel = {
          name: track.name, bandName: b.name, style: b.style, quality,
          duration: track.duration, plays: 0, likes: 0, comments: 0,
          dayIndex: day,
          releaseType: track.type === "EP" ? "EP" : track.type === "专辑" ? "专辑" : "单曲",
          isRival: true, album: track.album, cmtF,
        };
        // 历史播放量：平均日播放 × 发行天数 × 衰减
        const baseDaily = quality * 50 * (0.5 + b.popularity / 10);
        rel.plays = Math.round(baseDaily * ageDays * 0.5);
        rel.likes = Math.round(rel.plays * likeRate(quality));
        rel.comments = Math.round(rel.plays * commentRate(quality) * cmtF);
        // 实体专辑自 1997 年起出现：1997 年及以后发行的作品按实体销量模拟
        let sales = 0;
        if (relYear >= 1997) {
          const yrs = Math.max(0.5, 2000 - relYear);
          sales = Math.round(quality * 130 * (0.4 + b.popularity / 8) * yrs * (0.7 + Game.rng() * 0.6));
        }
        rel.sales = sales;
        rival.releases.push(rel);
        rival.totalPlays += rel.plays;
        rival.releaseIndex++;
      }
    }
    return rival;
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
    // 创作中的歌曲到期则完成
    if (typeof checkSongProgress === "function") checkSongProgress();
    // 金曲奖日程（11/1 提名、12/15 颁奖）
    if (typeof checkAwardSchedule === "function") checkAwardSchedule();
    // 视频制作进度
    if (typeof checkVideoProgress === "function") checkVideoProgress();
  }
  updateRivalActivity();
  saveGame();
}

// 每日更新：已发布作品的播放量自然增长
function tickDaily() {
  for (const rel of Game.releases) {
    growRelease(rel, 1);
    growSales(rel, 1);
  }
  for (const r of Game.rivals) {
    if (r.active && r.releases.length) {
      for (const rel of r.releases) growRelease(rel, 1);
    }
  }
  // 约 1% 概率：某首歌突然爆火（播放量暴涨）
  const allRels = [];
  for (const rel of Game.releases) allRels.push(rel);
  for (const r of Game.rivals) if (r.active) for (const rel of r.releases) allRels.push(rel);
  if (allRels.length) {
    if (Game.rng() < 0.01) {
      const rel = allRels[Math.floor(Game.rng() * allRels.length)];
      const mult = 5 + Game.rng() * 8;
      rel.plays = Math.round((rel.plays || 0) * mult + 30000);
      addEvent(`《${rel.name}》（${rel.bandName}）突然爆火，播放量暴涨，登上各大榜单。`);
    }
    // 约 1% 概率：某首歌评分突然暴涨或骤降
    if (Game.rng() < 0.01) {
      const rel = allRels[Math.floor(Game.rng() * allRels.length)];
      const up = Game.rng() < 0.5;
      const ratings = generateRatings(rel);
      ratings.forEach(rt => { rt.score = clamp(rt.score + (up ? 1 : -1) * (rt.scale / 10) * (2 + Game.rng() * 2), 0, rt.scale); });
      rel.avgScore = calcAvgScore(ratings);
      addEvent(`《${rel.name}》（${rel.bandName}）评分${up ? "暴涨" : "骤降"}，乐迷议论纷纷。`);
    }
  }
}

// 每周更新：竞争对手按真实发行日期发布作品
function tickWeekly() {
  for (const r of Game.rivals) {
    // 先更新活跃状态（2000 年后成立的乐队，到达成立年份后激活）
    if (!r.active && Game.dayIndex >= r.activeDay) {
      r.active = true;
      addEvent(`${r.name}（${r.style}）正式成立并进入乐坛。`);
    }
    if (!r.active) continue;
    // 发布所有已到期的作品（快进时可能积压多张，需一次补发完）
    let guard = 0;
    while (r.catalog && r.releaseIndex < r.catalog.length && guard++ < 200) {
      const track = r.catalog[r.releaseIndex];
      if (dateStrToDay(track.date) > Game.dayIndex) break;
      rivalRelease(r);
      r.lastReleaseDay = Game.dayIndex;
    }
  }
  applyWeeklyNewsEffects();
}

// 每月更新：市场与名气变化
function tickMonthly() {
  // 工作室租金与维护费
  if (typeof studioMonthlyCharge === "function") studioMonthlyCharge();
  // 乐队名气随作品累积缓慢变化
  if (Game.releases.length) {
    const avgQuality = Game.releases.reduce((s, r) => s + r.quality, 0) / Game.releases.length;
    Game.stats.reputation = clamp(Game.stats.reputation + (avgQuality - 50) / 20, 5, 100);
    Game.stats.totalFans = Math.round(Game.stats.totalFans * (1 + (avgQuality - 50) / 5000) + rand(0, 100));
  }
}

// ===== 竞争对手发布（按专辑整张一次性发布） =====
function rivalRelease(rival) {
  const catalog = rival.catalog;
  if (!catalog || rival.releaseIndex >= catalog.length) return;
  const first = catalog[rival.releaseIndex];
  const albumName = first.album || first.name;
  const now = Game.dayIndex;
  let count = 0, releaseType = "";
  // 同属一张专辑且发行日期已到的歌曲，一次性全部上架
  while (rival.releaseIndex < catalog.length) {
    const track = catalog[rival.releaseIndex];
    if (track.album !== first.album) break;
    if (dateStrToDay(track.date) > now) break;
    const quality = track.rating
      ? clamp(Math.round(track.rating * 10), 10, 98)
      : clamp(rival.currentPopularity * 7 + randf(-15, 15), 10, 98);
    releaseType = track.type === "EP" ? "EP" : track.type === "专辑" ? "专辑" : "单曲";
    rival.releases.push({
      name: track.name,
      bandName: rival.name,
      style: rival.style,
      quality,
      duration: track.duration,
      plays: 0,
      likes: 0,
      comments: 0,
      dayIndex: now,
      releaseType,
      isRival: true,
      album: track.album,
      sales: 0,
      cmtF: 0.5 + Game.rng() * 1.2,
    });
    rival.releaseIndex++;
    count++;
  }
  if (count > 0) {
    // 发布即刻计入首日播放，避免列表显示为 0
    for (let i = rival.releases.length - count; i < rival.releases.length; i++) {
      growRelease(rival.releases[i], 1);
    }
    addEvent(`${rival.name} 发布${releaseType}《${albumName}》（共 ${count} 首）。`);
  }
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
  const decay = Math.pow(0.997, ageDays);  // 衰减（略缓，延长长尾）
  // 时代因子：随年份推进，播放器与听众规模扩大，播放量增速逐年提升（后期更快）
  const eraFactor = 1 + Game.dayIndex / 365 * 0.25;
  const daily = baseRate * popularityFactor * eraFactor * decay * days;
  rel.plays = Math.round((rel.plays || 0) + daily);
  rel.likes = Math.round((rel.likes || 0) + daily * likeRate(rel.quality));
  rel.comments = Math.round((rel.comments || 0) + daily * commentRate(rel.quality) * (rel.isRival ? (rel.cmtF || 1) : 1));
  // 竞争对手作品同步累积销量（用于专辑销量榜）
  if (rel.isRival) rel.sales = Math.round((rel.sales || 0) + daily * 0.0015);
}

// ===== 专辑销量增长（玩家专辑：数字/实体） =====
function growSales(rel, days) {
  if (rel.releaseType !== "专辑" || !rel.saleMode) return;
  if (!rel.price) return;
  const heat = Math.pow(Math.max(1, rel.plays || 0), 0.5);
  rel.salesDigital = rel.salesDigital || 0;
  rel.salesPhysical = rel.salesPhysical || 0;
  let units = 0;
  if (rel.saleMode === "数字") {
    const priceF = Math.max(0.2, 1 - rel.price / 60);
    const unit = (rel.quality / 100) * heat * 0.08 * priceF * days;
    units = Math.round(unit * randf(0.7, 1.3));
    rel.salesDigital += units;
  } else {
    if ((rel.stock || 0) <= 0) {
      rel.sales = (rel.salesDigital || 0) + (rel.salesPhysical || 0);
      return;
    }
    const priceF = Math.max(0.2, 1 - rel.price / 400);
    const unit = (rel.quality / 100) * heat * 0.03 * priceF * days;
    units = Math.round(unit * randf(0.7, 1.3));
    units = Math.min(units, rel.stock);
    rel.salesPhysical += units;
    rel.stock -= units;
  }
  rel.sales = (rel.salesDigital || 0) + (rel.salesPhysical || 0);
  // 销售收入计入预算（实体制作成本已在发布时预付，此处按售价结算）
  if (units > 0) settleSalesIncome(units * (rel.price || 0));
}

// 专辑销售款入账
function settleSalesIncome(income) {
  const amount = Math.round(income || 0);
  if (amount <= 0) return;
  if (!Game.finance) Game.finance = { balance: 0, totalIncome: 0, totalExpense: 0 };
  Game.finance.totalIncome = (Game.finance.totalIncome || 0) + amount;
  if (Game.mode === "real") {
    Game.finance.balance += amount;
  }
}

function likeRate(quality) {
  return clamp(quality / 1000, 0.002, 0.12);
}
function commentRate(quality) {
  return clamp(quality / 5000, 0.0005, 0.05);
}

// ===== 评分生成 =====
function seededUnit(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995) >>> 0; h ^= h >>> 15;
  return (h >>> 0) / 4294967296;
}

// 为已发布作品生成各平台评分
function generateRatings(release) {
  if (release.ratings && release.ratings.length) return release.ratings;
  const ratings = [];
  for (const pf of window.RATING_PLATFORMS) {
    const base = release.quality;
    // 平台口味偏差：种子按「乐队 + 专辑 + 曲名」组合，保证各页面看到的同一首作品评分一致
    const seedKey = (release.bandName || "") + "|" + (release.album || release.name || "") + "|" + (release.name || release.id || "");
    const u = seededUnit(seedKey + "|" + pf.name);
    const bias = pf.type === "媒体乐评" ? (-4 + u * 6) : (-3 + u * 6);
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
function pickCommentTemplate(ratio) {
  const T = window.COMMENT_TEMPLATES;
  const r = Game.rng();
  const isLong = Game.rng() < 0.15;
  let emo;
  if (ratio >= 0.66) emo = r < 0.6 ? "praise" : (r < 0.72 ? "criticize" : "neutral");
  else if (ratio >= 0.5) emo = r < 0.35 ? "praise" : (r < 0.62 ? "criticize" : "neutral");
  else if (ratio >= 0.34) emo = r < 0.08 ? "praise" : (r < 0.6 ? "criticize" : "neutral");
  else emo = r < 0.62 ? "criticize" : "neutral";
  let pools;
  if (isLong) {
    const lp = T["long" + emo.charAt(0).toUpperCase() + emo.slice(1)];
    pools = lp && lp.length ? lp : T[emo];
  } else if (Game.rng() < 0.12) {
    pools = emo === "praise" ? T.shortPraise : emo === "criticize" ? T.shortCriticize : T.neutral;
  } else {
    pools = T[emo];
  }
  return pick(pools);
}

function generateComments(release, count) {
  if (release.commentList && release.commentList.length) return release.commentList;
  const T = window.COMMENT_STREAM_TEMPLATES;
  const U = window.COMMENT_STREAM_USERS;
  const quality = (release.quality || 50) / 100;
  const negProb = quality < 0.4 ? 0.4 : quality < 0.6 ? 0.18 : 0.05;
  const posKeys = ["resonance", "resonance", "resonance", "nostalgic", "sad", "humor", "punchline"];
  // 用确定性种子，保证同一条目评论稳定、不同歌曲互不相同
  const seedKey = String(release.id || release.name || "x");
  const rnd = salt => seededUnit("cmt|" + seedKey + "|" + salt);
  const usedText = new Set();
  const userPool = (U || []).map((u, i) => ({ u, k: rnd("u" + i) }))
    .sort((a, b) => a.k - b.k).map(x => x.u);
  const spanDays = Math.max(1, Game.dayIndex - (release.dayIndex || 0));
  const list = [];
  for (let i = 0; i < count; i++) {
    const isNeg = rnd("n" + i) < negProb;
    let pool;
    if (isNeg) pool = T.negative;
    else if (rnd("p" + i) < 0.18) pool = T.short;
    else pool = T[posKeys[Math.floor(rnd("k" + i) * posKeys.length)]];
    let tpl = null;
    for (let t = 0; t < 12; t++) {
      const cand = pool[Math.floor(rnd("c" + i + "_" + t) * pool.length) % pool.length];
      if (!usedText.has(cand)) { tpl = cand; usedText.add(cand); break; }
    }
    if (!tpl) tpl = pool[Math.floor(rnd("f" + i) * pool.length) % pool.length];
    const text = tpl
      .replace(/\{song\}/g, release.name)
      .replace(/\{band\}/g, release.bandName || Game.band?.name || "")
      .replace(/\{style\}/g, release.style || "")
      .replace(/\{album\}/g, release.name);
    const day = Game.dayIndex - Math.floor(rnd("d" + i) * spanDays);
    const likes = Math.round(Math.pow(rnd("l" + i), 4) * 15000);
    const pool2 = userPool.length ? userPool : ["听众"];
    const user = pool2[i % pool2.length] + (i >= pool2.length ? (Math.floor(i / pool2.length) + 1) : "");
    list.push({ user, text, likes, time: formatDateShort(day) });
  }
  list.sort((a, b) => b.likes - a.likes);
  release.commentList = list;
  return list;
}

// ===== 更新竞争对手活跃状态 =====
function updateRivalActivity() {
  for (const r of Game.rivals) {
    if (!r.active && Game.dayIndex >= r.activeDay) {
      r.active = true;
      addEvent(`${r.name}（${r.style}）正式成立并进入乐坛。`);
    }
    if (r.active) {
      r.currentPopularity = clamp(r.popularity + Math.max(0, Game.dayIndex - r.activeDay) / 365 * 0.3, 0, 10);
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


// ===== 新闻生成与市场影响 =====
function newsSentiment(text) {
  const neg = ["争议","质疑","批评","失望","翻车","下滑","退步","风波","抄袭","骂声","吐槽","骤降","骤减","解散","失败","崩塌","拉胯","翻唱争议","暂停活动","休整"];
  const pos = ["破纪录","登顶","爆火","好评","获奖","成功","热潮","突破","期待","恭喜","刷新","霸榜","力荐","走红","出圈","热榜","动容","暖心","暴涨","飙升","卖爆","惊艳","称赞","双丰收","力荐","高光"];
  for (const k of neg) if (text.indexOf(k) >= 0) return -1;
  for (const k of pos) if (text.indexOf(k) >= 0) return 1;
  return 0;
}

function bandOfText(text) {
  for (const r of Game.rivals) if (r.name && text.indexOf(r.name) >= 0) return { name: r.name, releases: r.releases };
  if (Game.band && text.indexOf(Game.band.name) >= 0) return { name: Game.band.name, releases: Game.releases };
  return null;
}

function applyBandNewsEffect(b, sens) {
  if (!sens) return;
  for (const rel of b.releases) {
    const f = 0.06 + Game.rng() * 0.12;
    rel.plays = Math.round((rel.plays || 0) * (1 + sens * f));
    let ratings = rel.ratings;
    if (!ratings && typeof generateRatings === "function") { try { ratings = generateRatings(rel); } catch (err) { ratings = null; } }
    if (ratings && ratings.length) {
      ratings.forEach(rt => { rt.score = clamp(rt.score + sens * (rt.scale / 10) * (0.1 + Game.rng() * 0.3), 0, rt.scale); });
      rel.avgScore = calcAvgScore(ratings);
    }
  }
}

function applyWeeklyNewsEffects() {
  const week = Math.floor(Game.dayIndex / 7) - 1;
  if (week < 0) return;
  if (!Game.newsApplied) Game.newsApplied = {};
  if (Game.newsApplied[week]) return;
  Game.newsApplied[week] = true;
  const issue = generateNewsIssue(week);
  if (!issue) return;
  (issue.items || []).forEach(it => {
    if (!it.band) return;
    const sens = newsSentiment(it.text);
    if (!sens) return;
    const b = bandOfText(it.text);
    if (b) applyBandNewsEffect(b, sens);
  });
}

// ===== 社会新闻：日期与地点 =====
function _pad2(n){ return (n<10?"0":"")+n; }
function _dateStr(day){ const d=dayToDate(day); return d.year+"-"+_pad2(d.month)+"-"+_pad2(d.day); }

function festivalPrio(name) {
  const P = {
    "春节":120,"国庆节":118,"建党节":100,"建军节":95,"中秋节":82,"除夕":78,"元旦":60,"端午节":70,"清明节":66,"元宵节":60,
    "重阳节（老年节）":56,"劳动节":80,"南京大屠杀死难者国家公祭日":86,"烈士纪念日":84,"抗战胜利纪念日":80,"九一八纪念日":62,"七七抗战纪念日":60,
    "台湾光复纪念日":54,"澳门回归祖国纪念日":56,"香港回归祖国纪念日":56,"教师节":62,"儿童节":56,"青年节":56,"妇女节":46,"护士节":42,
    "记者节":36,"国家宪法日":52,"腊八节":40,"七夕":36,"植树节":30,"学雷锋纪念日":30,"中国人民警察节":42,"全民国家安全教育日":46,
    "中国航天日":46,"全国防灾减灾日":46,"中国医师节":42,"全民健身日":30,"中国农民丰收节":38,"全民国防教育日":36,"全国消防日":36,"全国交通安全日":30,"中国医师节":42,"二七纪念日":34,"五卅纪念日 / 全国科技工作者日":38
  };
  return P[name] || 30;
}

// 事件表名称与长文 event 字段常有差异，按年份 + 关键词宽松匹配
const _MAJOR_KEYS = ["神舟五号", "非典", "十六届三中全会", "十六届四中全会", "十六届五中全会", "十六届六中全会",
  "一号文件", "反分裂国家法", "农业税", "荣辱观", "三峡", "汶川", "奥运", "物权法", "嫦娥一号", "劳动合同法",
  "金融危机", "六十周年", "国庆60周年", "世博会", "玉树", "嫦娥二号", "十七届五中全会", "九十周年", "天宫一号",
  "十七届六中全会", "青藏高原", "蛟龙", "辽宁舰", "十八大", "八项规定", "一带一路", "十八届三中全会", "4G",
  "建党100周年", "纪念建党", "脱贫攻坚", "冬奥", "冬残奥", "二十大", "北斗", "嫦娥五号", "奋斗者", "天和",
  "太空授课", "互联网大会", "公祭日", "南水北调", "深化改革"];
function _rngDays(r) {
  const a = new Date(r[0] + "T00:00:00").getTime();
  const b = new Date(r[1] + "T00:00:00").getTime();
  return Math.round((b - a) / 86400000);
}

function _matchMajorLong(year, m, d) {
  const y = String(year);
  const evName = String(m.event);
  for (const x of (window.NEWS_MAJOR_LONG || [])) {
    if (String(x.year) !== y) continue;
    if (x.range) {
      const ds = d.year + "-" + String(d.month).padStart(2, "0") + "-" + String(d.day).padStart(2, "0");
      const inRange = ds >= x.range[0] && ds <= x.range[1];
      if (inRange && x.event === evName) return x;
      continue;
    }
    if (x.event === evName) return x;
    if (_MAJOR_KEYS.some(k => evName.indexOf(k) >= 0 && x.event.indexOf(k) >= 0)) return x;
    const a = x.event.replace(/[《》]/g, ""), b = evName.replace(/[《》]/g, "");
    if (a.length >= 4 && b.length >= 4 && (a.indexOf(b) >= 0 || b.indexOf(a) >= 0)) return x;
  }
  return null;
}

function getSpecialNews(day) {
  const d = dayToDate(day);
  const y = String(d.year);
  const dateStr = d.year + "-" + String(d.month).padStart(2, "0") + "-" + String(d.day).padStart(2, "0");
  const _rngAll = (window.NEWS_MAJOR_LONG || [])
    .filter(x => x.range && dateStr >= x.range[0] && dateStr <= x.range[1]);
  // 短周期事件优先展示，长周期（如疫情防控）退居其后
  const rangeHit = _rngAll
    .sort((a, b) => {
      const da = _rngDays(a.range), db = _rngDays(b.range);
      return da - db;
    })[0];
  // 范围内遇到单日重大事件时，以单日事件为准；否则持续展示范围长讯
  const _rngPri = rangeHit ? (rangeHit.headline === false ? 96 : 115) : 0;
  // 新年贺词：每年 1 月 1 日。当日无重要事件时置于头条；有重要事件时让位（由调用方排到第二位）
  const newYearItem = (d.month === 1 && d.day === 1 && window.NEWS_NEW_YEAR && window.NEWS_NEW_YEAR.length)
    ? (() => { const n = window.NEWS_NEW_YEAR[0]; return { title: n.title, body: n.body, social: true, level: "major", _prio: 130, _isNewYear: true }; })()
    : null;
  // 国家重要级长文：按事件表日期（单日事件优先于长周期范围事件）
  const M = (window.MAJOR_EVENTS || []).filter(m => String(m.year) === y).filter(m => {
    const mm = m.date.match(/^(\d+)月(\d+)日/);
    return mm && Number(mm[1]) === d.month && Number(mm[2]) === d.day;
  });
  // 第一轮：找出与当日事件对应的长文（单日事件优先于范围事件）
  let dayLong = null, rngLong = null;
  for (const m of M) {
    const ml = _matchMajorLong(d.year, m, d);
    if (!ml) continue;
    if (!ml.range) { dayLong = ml; break; }
    if (!rngLong) rngLong = ml;
  }
  // 第二轮：当日无长文时，若处于某范围事件区间内，优先展示该范围长文（高于占位条目）
  const hitLong = dayLong || rngLong || rangeHit;
  if (hitLong) {
    const isRng = !!hitLong.range;
    const prio = dayLong === hitLong ? 118 : (hitLong.headline === false ? 96 : 115);
    return { title: hitLong.title, body: hitLong.body, social: true, level: "major", _prio: prio };
  }
  if (M.length) {
    const m = M[0];
    return { title: m.event, body: m.content + "\n\n（本报编辑部）", social: true, level: "major", _prio: 108 };
  }
  if (rangeHit) return { title: rangeHit.title, body: rangeHit.body, social: true, level: "major", _prio: _rngPri };
  if (newYearItem) return newYearItem;

  // 国家级节日
  const F = window.FESTIVALS || [];
  const ds = _dateStr(day);
  const md = d.month + "月" + d.day + "日";
  const makeFestival = (f) => {
    const fl = (window.NEWS_FESTIVAL_LONG || []).find(x => x.name === f.name);
    if (fl) return { title: fl.title, body: fl.body, social: true, level: "festival", _prio: festivalPrio(f.name) };
    return { title: f.name + "：各地举行丰富多彩的庆祝活动", body: f.act + "。\n\n（本报编辑部）", social: true, level: "festival", _prio: festivalPrio(f.name) };
  };
  for (const f of F) {
    if (f.type === "solar" && f.date === md) return makeFestival(f);
    if (f.type === "lunar") {
      const ls = (window.LUNAR_SOLAR || {})[y] || {};
      const core = f.name.split(/[节（]/)[0];
      for (const k in ls) { if ((k.indexOf(core) >= 0 || k.indexOf(f.name) >= 0) && ls[k] === ds) return makeFestival(f); }
    }
  }
  return null;
}

function getSpecialNewsWeek(startDay) {
  const list = [];
  const seenTitle = new Set();
  for (let d = 0; d < 7; d++) {
    const s = getSpecialNews(startDay + d);
    if (!s) continue;
    // 同一篇长讯（如范围事件、跨日事件）在同一周刊内只收录一次
    if (seenTitle.has(s.title)) continue;
    seenTitle.add(s.title);
    list.push(s);
  }
  // 元旦所在周：无重要事件时贺词即头条；有重要事件时让位到第二版位
  const _hasMajor = list.some(x => !x._isNewYear && (x._prio || 0) >= 108);
  if (_hasMajor) {
    list.forEach(x => { if (x._isNewYear) x._prio = 107; });
  }
  if (window.NEWS_NEW_YEAR && window.NEWS_NEW_YEAR.length) {
    for (let d = 0; d < 7; d++) {
      const dd = dayToDate(startDay + d);
      if (dd.month === 1 && dd.day === 1 && !list.some(x => x._isNewYear)) {
        const ny = getSpecialNews(startDay + d);
        if (!ny || !ny._isNewYear) {
          const n = window.NEWS_NEW_YEAR[0];
          list.push({ title: n.title, body: n.body, social: true, level: "major", _prio: _hasMajor ? 107 : 129, _isNewYear: true });
        }
      }
    }
  }
  // 同一周多个特殊日：字数多的放头条，字数少的放第二，其余顺延
  // 版位规则：先按事件重要度（_prio）决定名次，同重要度再按字数降序。
  // 长周期事件（如疫情、重大赛事）重要度较低，有其他更重要事件时自动退居第 2 版位，
  // 待头条位置空出后自然回到第 1 版位。
  list.sort((a, b) => (b._prio || 0) - (a._prio || 0) || (b.body || "").length - (a.body || "").length);
  return list;
}

function _pickPlace(rnd, salt, level) {
  const CHINA = window.CHINA_REGIONS || [];
  if (!CHINA.length) return { place: "某地", level: level };
  const pick = (arr, s) => arr[Math.floor(rnd(s) * arr.length) % Math.max(1, arr.length)];
  const prov = pick(CHINA, salt + "p");
  const city = pick(prov.cities, salt + "c");
  const county = pick(city.districts, salt + "d");
  const countyName = (county && county !== city.name) ? county : "";
  if (level === "county") {
    if (!countyName) return { place: city.name, level: "city" };
    const prefix = (city.name === prov.province) ? prov.province : city.name;
    return { place: prefix + countyName, level: "county" };
  }
  if (level === "city") return { place: city.name, level: "city" };
  return { place: prov.province, level: "province" };
}

function generateNewsIssue(week) {
  const startDay = week * 7;
  const issueNo = week + 1;
  const date = dayToDate(startDay);
  const rnd = (salt) => seededUnit("news|" + week + "|" + salt);
  const pick = (arr, salt) => arr[Math.floor(rnd(salt) * arr.length) % Math.max(1, arr.length)];
  // 只取该乐队在当前期号之前已经发行的专辑，避免出现尚未发布的作品
  const albumsOf = (name) => {
    const rv = (Game.rivals || []).find(r => r.name === name);
    if (rv && rv.releases) {
      return rv.releases.filter(rel => (rel.dayIndex || 0) <= startDay)
        .map(rel => rel.album || rel.name).filter(Boolean);
    }
    return ((window.BAND_DISCOGRAPHY && window.BAND_DISCOGRAPHY[name]) || []).map(x => x.name);
  };
  let B = (Game.rivals || []).filter(r => r.releases && r.releases.length > 0);
  if (!B.length) B = (window.RIVAL_BANDS || []).filter(b => dateToDay(b.formed || 2000, 1, 1) <= startDay);
  if (!B.length) B = window.RIVAL_BANDS || [];
  const cities = ["北京","上海","广州","深圳","成都","武汉","杭州","西安","南京","重庆"];
  const pickLevel = (salt) => { const r = rnd(salt); return r < 0.6 ? "county" : r < 0.9 ? "city" : "province"; };

  // ===== 长讯 5 篇：社会 ≥2 / 乐坛 ≤3 =====
  const leads = [];
  const usedLong = new Set();
  const usedLeadBands = new Set();
  const specials = getSpecialNewsWeek(startDay);
  specials.forEach(s => leads.push(s));

  const localLongs = window.NEWS_LOCAL_LONG || [];
  const usedLocalLong = new Set();
  const addSocialLong = (i) => {
    const lvl = pickLevel("ll" + i);
    const pool = localLongs.filter(x => x.level === lvl);
    let item = null;
    for (let t = 0; t < 30; t++) { const c = pick(pool.length ? pool : localLongs, "lli" + i + "_" + t); if (c && !usedLocalLong.has(c)) { item = c; usedLocalLong.add(c); break; } }
    if (!item) item = pick(pool.length ? pool : localLongs, "lli" + i);
    const pl = _pickPlace(rnd, "llp" + i, lvl);
    const fill = (t) => t.replace(/\{place\}/g, pl.place);
    leads.push({ title: fill(item.title), body: fill(item.body), social: true, level: lvl });
  };
  let si = 0;
  while (leads.filter(l => l.social).length < 2 && localLongs.length && si < 6) { addSocialLong(si++); }

  const bandLongs = window.NEWS_LONG_TEMPLATES || [];
  const usedBandsLead = new Set();
  const targetLeads = Math.max(5, leads.length + 1);
  let bi = 0;
  while (leads.length < targetLeads && bandLongs.length && bi < 20) {
    let lt = null;
    for (let t = 0; t < 30; t++) { const c = pick(bandLongs, "bl" + bi + "_" + t); if (!usedLong.has(c)) { lt = c; usedLong.add(c); break; } }
    if (!lt) lt = pick(bandLongs, "bl" + bi);
    let bObj = pick(B, "blb" + bi);
    for (let k = 0; k < 12 && usedBandsLead.has(bObj.name) && usedBandsLead.size < B.length; k++) bObj = pick(B, "blb" + bi + "_" + k);
    usedBandsLead.add(bObj.name);
    const al = albumsOf(bObj.name); const la = al.length ? pick(al, "bla" + bi) : "新专辑";
    const fillB = (t) => t.replace(/\{band\}/g, bObj.name).replace(/\{style\}/g, bObj.style).replace(/\{album\}/g, la).replace(/\{city\}/g, pick(cities, "blc" + bi));
    leads.push({ title: fillB(lt.title), body: fillB(lt.body), social: false });
    bi++;
  }

  // ===== 短讯 10 篇：社会 ≥4 / 乐坛 6 =====
  const items = [];
  const usedShort = new Set();
  const localShorts = window.NEWS_LOCAL_SHORT || [];
  const usedLocalShort = new Set();
  for (let i = 0; i < 4 && localShorts.length; i++) {
    const lvl = pickLevel("sl" + i);
    const pool = localShorts.filter(x => x.level === lvl);
    let it = null;
    for (let t = 0; t < 30; t++) { const c = pick(pool.length ? pool : localShorts, "sli" + i + "_" + t); if (c && !usedLocalShort.has(c)) { it = c; usedLocalShort.add(c); break; } }
    if (!it) it = pick(pool.length ? pool : localShorts, "sli" + i);
    const pl = _pickPlace(rnd, "slp" + i, lvl);
    items.push({ band: false, text: it.text.replace(/\{place\}/g, pl.place) });
  }
  const bandShorts = window.NEWS_BAND_TEMPLATES || [];
  for (let i = 0; i < 6 && bandShorts.length; i++) {
    let tpl = null;
    for (let t = 0; t < 30; t++) { const c = pick(bandShorts, "bs" + i + "_" + t); if (!usedShort.has(c)) { tpl = c; usedShort.add(c); break; } }
    if (!tpl) tpl = pick(bandShorts, "bs" + i);
    const bObj = pick(B, "bsb" + i);
    const al = albumsOf(bObj.name); const la = al.length ? pick(al, "bsa" + i) : "新专辑";
    items.push({ band: true, text: tpl.replace(/\{band\}/g, bObj.name).replace(/\{style\}/g, bObj.style).replace(/\{album\}/g, la).replace(/\{city\}/g, pick(cities, "bsc" + i)) });
  }


  const metaKw = ["沙盒模式","乐队生涯","资金无限","自由创作","正式成立"];
  // 本周动态并入「乐坛快讯」，不再单独成块
  const weekEvents = (Game.events || [])
    .filter(e => e.day >= startDay && e.day < startDay + 7
      && !metaKw.some(k => (e.text || "").indexOf(k) >= 0)
      && (e.text || "").indexOf("金曲奖") < 0)   // 金曲奖不进入新闻版面
    .reverse().slice(0, 3);
  weekEvents.forEach(ev => {
    const txt = String(ev.text || "").trim();
    if (txt && !items.some(i => i.text === txt)) items.push({ band: true, text: txt });
  });
  return { issueNo, startDay, date, leads, items, weekEvents };
}

