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
    const formedDay = Math.max(0, dateToDay(b.formed, 1, 1) - dateToDay(2000, 1, 1));
    const catalog = buildRivalCatalog(b.name);
    const rival = {
      ...b,
      active: b.formed <= 2000,
      activeDay: formedDay,           // 从第几天开始活跃
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
      addEvent(`${r.name}（${r.style}）于本年度正式成立并进入乐坛。`);
    }
    if (!r.active) continue;
    if (r.catalog && r.releaseIndex < r.catalog.length) {
      const track = r.catalog[r.releaseIndex];
      if (dateStrToDay(track.date) <= Game.dayIndex) {
        rivalRelease(r);
        r.lastReleaseDay = Game.dayIndex;
      }
    }
  }
  applyWeeklyNewsEffects();
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
  if (count > 0) addEvent(`${rival.name} 发布${releaseType}《${albumName}》（共 ${count} 首）。`);
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
  if (rel.saleMode === "数字") {
    const priceF = Math.max(0.2, 1 - rel.price / 60);
    const unit = (rel.quality / 100) * heat * 0.08 * priceF * days;
    rel.salesDigital += Math.round(unit * randf(0.7, 1.3));
  } else {
    if ((rel.stock || 0) <= 0) {
      rel.sales = (rel.salesDigital || 0) + (rel.salesPhysical || 0);
      return;
    }
    const priceF = Math.max(0.2, 1 - rel.price / 400);
    const unit = (rel.quality / 100) * heat * 0.03 * priceF * days;
    let add = Math.round(unit * randf(0.7, 1.3));
    add = Math.min(add, rel.stock);
    rel.salesPhysical += add;
    rel.stock -= add;
  }
  rel.sales = (rel.salesDigital || 0) + (rel.salesPhysical || 0);
}

function likeRate(quality) {
  return clamp(quality / 1000, 0.002, 0.12);
}
function commentRate(quality) {
  return clamp(quality / 5000, 0.0005, 0.05);
}

// ===== 评分生成 =====
function seededUnit(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return (h % 10000) / 10000;
}

// 为已发布作品生成各平台评分
function generateRatings(release) {
  if (release.ratings && release.ratings.length) return release.ratings;
  const ratings = [];
  for (const pf of window.RATING_PLATFORMS) {
    const base = release.quality;
    // 平台口味偏差（基于 id + 平台名的确定性种子，保证同一作品评分稳定不变）
    const u = seededUnit(String(release.id || release.name) + "|" + pf.name);
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
  const usedText = new Set();
  const userPool = shuffle(U);
  const spanDays = Math.max(1, Game.dayIndex - (release.dayIndex || 0));
  const list = [];
  for (let i = 0; i < count; i++) {
    const isNeg = Game.rng() < negProb;
    let pool;
    if (isNeg) pool = T.negative;
    else if (Game.rng() < 0.18) pool = T.short;
    else pool = T[posKeys[Math.floor(Game.rng() * posKeys.length)]];
    let tpl = null;
    for (let t = 0; t < 12; t++) {
      const cand = pick(pool);
      if (!usedText.has(cand)) { tpl = cand; usedText.add(cand); break; }
    }
    if (!tpl) tpl = pick(pool);
    const text = tpl
      .replace(/\{song\}/g, release.name)
      .replace(/\{band\}/g, release.bandName || Game.band?.name || "")
      .replace(/\{style\}/g, release.style || "")
      .replace(/\{album\}/g, release.name);
    const day = Game.dayIndex - Math.floor(Game.rng() * spanDays);
    const likes = Math.round(Math.pow(Game.rng(), 4) * 15000);
    const user = userPool[i % userPool.length] + (i >= userPool.length ? (Math.floor(i / userPool.length) + 1) : "");
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

function getSpecialNews(day) {
  const d = dayToDate(day);
  const y = String(d.year);
  // 新年贺词：每年 1 月 1 日（优先，覆盖当日重要级）
  if (d.month === 1 && d.day === 1 && window.NEWS_NEW_YEAR && window.NEWS_NEW_YEAR.length) {
    const n = window.NEWS_NEW_YEAR[0];
    return { title: n.title, body: n.body, social: true, level: "major" };
  }
  // 国家重要级：按事件表日期
  const M = window.MAJOR_EVENTS || [];
  for (const m of M) {
    if (String(m.year) !== y) continue;
    const mm = m.date.match(/^(\d+)月(\d+)日/);
    if (mm && Number(mm[1]) === d.month && Number(mm[2]) === d.day) {
      return { title: m.event, body: m.content + "\n\n（本报编辑部）", social: true, level: "major" };
    }
  }
  // 国家级节日
  const F = window.FESTIVALS || [];
  const ds = _dateStr(day);
  const md = d.month + "月" + d.day + "日";
  for (const f of F) {
    if (f.type === "solar" && f.date === md) {
      return { title: f.name + "：各地举行丰富多彩的庆祝活动", body: f.act + "。\n\n（本报编辑部）", social: true, level: "festival" };
    }
    if (f.type === "lunar") {
      const ls = (window.LUNAR_SOLAR || {})[y] || {};
      for (const k in ls) { if (k.indexOf(f.name) >= 0 && ls[k] === ds) {
        return { title: f.name + "：各地举行丰富多彩的庆祝活动", body: f.act + "。\n\n（本报编辑部）", social: true, level: "festival" };
      } }
    }
  }
  return null;
}

function getSpecialNewsWeek(startDay) {
  for (let d = 0; d < 7; d++) { const s = getSpecialNews(startDay + d); if (s) return s; }
  return null;
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
  const albumsOf = (name) => ((window.BAND_DISCOGRAPHY && window.BAND_DISCOGRAPHY[name]) || []).map(x => x.name);
  let B = (Game.rivals || []).filter(r => r.releases && r.releases.length > 0);
  if (!B.length) B = (window.RIVAL_BANDS || []).filter(b => dateToDay(b.formed || 2000, 1, 1) <= startDay);
  if (!B.length) B = window.RIVAL_BANDS || [];
  const cities = ["北京","上海","广州","深圳","成都","武汉","杭州","西安","南京","重庆"];
  const pickLevel = (salt) => { const r = rnd(salt); return r < 0.6 ? "county" : r < 0.9 ? "city" : "province"; };

  // ===== 长讯 5 篇：社会 ≥2 / 乐坛 ≤3 =====
  const leads = [];
  const usedLong = new Set();
  const usedLeadBands = new Set();
  const special = getSpecialNewsWeek(startDay);
  if (special) leads.push(special);

  const localLongs = window.NEWS_LOCAL_LONG || [];
  const addSocialLong = (i) => {
    const lvl = pickLevel("ll" + i);
    const pool = localLongs.filter(x => x.level === lvl);
    const item = pick(pool.length ? pool : localLongs, "lli" + i);
    const pl = _pickPlace(rnd, "llp" + i, lvl);
    const fill = (t) => t.replace(/\{place\}/g, pl.place);
    leads.push({ title: fill(item.title), body: fill(item.body), social: true, level: lvl });
  };
  let si = 0;
  while (leads.filter(l => l.social).length < 2 && localLongs.length && si < 6) { addSocialLong(si++); }

  const bandLongs = window.NEWS_LONG_TEMPLATES || [];
  const usedBandsLead = new Set();
  let bi = 0;
  while (leads.length < 5 && bandLongs.length && bi < 20) {
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
  for (let i = 0; i < 4 && localShorts.length; i++) {
    const lvl = pickLevel("sl" + i);
    const pool = localShorts.filter(x => x.level === lvl);
    const it = pick(pool.length ? pool : localShorts, "sli" + i);
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
  const weekEvents = (Game.events || []).filter(e => e.day >= startDay && e.day < startDay + 7 && !metaKw.some(k => (e.text || "").indexOf(k) >= 0)).reverse().slice(0, 3);
  return { issueNo, startDay, date, leads, items, weekEvents };
}

