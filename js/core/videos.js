// 视频制作 + 视频平台

const VIDEO_TYPES = {
  mv:      { id: "mv",      name: "MV",     days: 30, desc: "为某首歌曲拍摄音乐视频" },
  trailer: { id: "trailer", name: "预告片", days: 25, desc: "专辑发布前的预告影像" },
  doc:     { id: "doc",     name: "纪录片", days: 90, desc: "记录专辑制作过程的纪录片" },
};

const VIDEO_EDIT_LEVELS = {
  self:  { id: "self",  name: "自我剪辑", quality: 38, cost: 0,      desc: "乐队自己动手，免费但质量一般" },
  basic: { id: "basic", name: "基础外包", quality: 56, cost: 20000,  desc: "普通剪辑团队，性价比尚可" },
  pro:   { id: "pro",   name: "专业外包", quality: 74, cost: 80000,  desc: "专业后期团队，成片质量较高" },
  elite: { id: "elite", name: "顶级外包", quality: 90, cost: 300000, desc: "顶级制作团队，效果最佳" },
};

// ===== 视频平台上线时间与用户规模 =====
const VIDEO_PLATFORM_OPEN = { year: 2009, month: 7, day: 1 };

// 平台用户规模曲线（年份, 用户数）。2020–2022 为爆发式增长期，2026 年达 4 亿。
const VIDEO_USER_CURVE = [
  [2009.5, 200000],
  [2010, 600000],
  [2012, 5000000],
  [2015, 50000000],
  [2018, 110000000],
  [2020, 160000000],
  [2021, 210000000],
  [2022, 280000000],   // 爆炸式增长
  [2023, 330000000],
  [2024, 360000000],
  [2025, 385000000],
  [2026, 400000000],
  [2028, 445000000],
  [2030, 490000000],
  [2035, 570000000],
  [2040, 660000000],
  [2050, 820000000],
];

function videoPlatformOpenDay() {
  return dateToDay(VIDEO_PLATFORM_OPEN.year, VIDEO_PLATFORM_OPEN.month, VIDEO_PLATFORM_OPEN.day);
}
function videoPlatformOnline() {
  return Game.dayIndex >= videoPlatformOpenDay();
}

// 当前平台用户数（按时间在曲线上插值）
function videoUserBase() {
  if (!videoPlatformOnline()) return 0;
  const d = dayToDate(Game.dayIndex);
  const y = d.year + (d.month - 1) / 12 + (d.day - 1) / 365;
  const C = VIDEO_USER_CURVE;
  if (y <= C[0][0]) return C[0][1];
  if (y >= C[C.length - 1][0]) return C[C.length - 1][1];
  for (let i = 0; i < C.length - 1; i++) {
    const a = C[i], b = C[i + 1];
    if (y >= a[0] && y <= b[0]) {
      const t = (y - a[0]) / (b[0] - a[0]);
      return Math.round(a[1] * Math.pow(b[1] / a[1], t));
    }
  }
  return C[C.length - 1][1];
}

// 播放量系数：以 2026 年 4 亿用户为基准 1
function videoUserFactor() {
  const base = videoUserBase();
  if (!base) return 0.01;
  return Math.max(0.02, base / 400000000);
}

// ===== 制作视频 =====
function startVideo(typeId, targetId) {
  const t = VIDEO_TYPES[typeId];
  if (!t) return { ok: false, msg: "未知的视频类型" };

  let target = null, targetName = "", targetKind = "";
  if (typeId === "mv") {
    target = (Game.songs || []).find(s => s.id === targetId && !s.inProgress);
    if (!target) return { ok: false, msg: "请选择一首已完成的歌曲" };
    targetName = target.name; targetKind = "song";
  } else if (typeId === "trailer") {
    target = (Game.releases || []).find(r => r.id === targetId);
    if (!target) return { ok: false, msg: "请选择一张已发布的专辑或 EP" };
    targetName = target.name; targetKind = "release";
  } else {
    target = (Game.releases || []).find(r => r.id === targetId);
    if (!target) return { ok: false, msg: "请选择一张已发布的专辑" };
    targetName = target.name; targetKind = "release";
  }

  if (!Game.videos) Game.videos = [];
  const v = {
    id: "v_" + Date.now() + "_" + rand(1000, 9999),
    type: t.id, typeName: t.name,
    targetId, targetName, targetKind,
    startDay: Game.dayIndex,
    dueDay: Game.dayIndex + t.days,
    status: "making",
    editLevel: null,
    quality: 0,
    views: 0, likes: 0, comments: 0,
    publishDay: null,
  };
  Game.videos.push(v);
  addEvent(`开始制作《${targetName}》${t.name}，预计 ${t.days} 天后完成。`);
  saveGame();
  return { ok: true, video: v, days: t.days };
}

// ===== 每日检查视频制作进度 =====
function checkVideoProgress() {
  let changed = false;
  for (const v of (Game.videos || [])) {
    if (v.status === "making" && Game.dayIndex >= v.dueDay) {
      v.status = "unedited";
      addEvent(`《${v.targetName}》${v.typeName}已完成初剪，等待剪辑。`);
      changed = true;
    }
  }
  if (changed) saveGame();
  return changed;
}

// ===== 剪辑视频 =====
function editVideo(videoId, levelId) {
  const v = (Game.videos || []).find(x => x.id === videoId);
  if (!v) return { ok: false, msg: "视频不存在" };
  if (v.status !== "unedited") return { ok: false, msg: "该视频当前不可剪辑" };
  const lv = VIDEO_EDIT_LEVELS[levelId];
  if (!lv) return { ok: false, msg: "未知的剪辑方式" };
  if (Game.mode === "real" && Game.finance.balance < lv.cost) {
    return { ok: false, msg: `预算不足，剪辑需 ¥${lv.cost.toLocaleString()}` };
  }
  if (Game.mode === "real") {
    Game.finance.balance -= lv.cost;
    Game.finance.totalExpense += lv.cost;
  }
  v.status = "edited";
  v.editLevel = lv.id;
  v.editName = lv.name;
  v.quality = clamp(Math.round(lv.quality + randf(-5, 8)), 10, 99);
  addEvent(`《${v.targetName}》${v.typeName}已完成${lv.name}。`);
  saveGame();
  return { ok: true, video: v, cost: lv.cost };
}

// ===== 发布视频到乐队官方账号 =====
function publishVideo(videoId) {
  const v = (Game.videos || []).find(x => x.id === videoId);
  if (!v) return { ok: false, msg: "视频不存在" };
  if (v.status !== "edited" && v.status !== "unedited") return { ok: false, msg: "该视频当前不可发布" };

  const unedited = v.status === "unedited";
  const q = unedited ? clamp(25 + rand(0, 10), 10, 40) : v.quality;
  const fame = (Game.stats.reputation || 50) + Math.sqrt(Math.max(0, Game.stats.totalFans || 0)) / 20;
  const baseViews = Math.round((q * 1200 + fame * 800) * randf(0.8, 1.3) * videoUserFactor());
  v.views = unedited ? Math.round(baseViews * 0.45) : baseViews;
  v.likes = Math.round(v.views * (0.03 + q / 4000));
  v.comments = Math.round(v.views * (0.008 + q / 12000));
  v.status = "published";
  v.publishDay = Game.dayIndex;
  v.unedited = unedited;
  v.quality = q;

  if (unedited) {
    // 直接发布未剪辑视频：大幅减少乐队评价
    Game.stats.reputation = clamp((Game.stats.reputation || 50) - 2.5, 0, 100);
    addEvent(`乐队官方账号发布了未经剪辑的《${v.targetName}》${v.typeName}，口碑受损。`);
  } else {
    addEvent(`乐队官方账号发布了《${v.targetName}》${v.typeName}，播放量约 ${v.views.toLocaleString()}。`);
  }
  saveGame();
  return { ok: true, video: v, unedited };
}

// ===== 视频类型对应的平台视频数据 =====
const VIDEO_FEED_TYPES = [
  { id: "critic",      name: "专业乐评",   related: true },
  { id: "casual",      name: "大众听感",   related: true },
  { id: "share",       name: "音乐分享",   related: true },
  { id: "chart",       name: "音乐排行",   related: true },
  { id: "bandofficial",name: "乐队官方",   related: true },
  { id: "other",       name: "生活区",     related: false },
];

// 生成一期平台视频列表（确定性），并返回结算信息
function buildPlatformFeed(week) {
  const rnd = salt => seededUnit("vfeed|" + week + "|" + salt);
  const pick = (arr, salt) => arr[Math.floor(rnd(salt) * arr.length) % Math.max(1, arr.length)];

  const rels = (Game.releases || []).filter(r => r.dayIndex <= Game.dayIndex);
  const rivalRels = [];
  for (const r of (Game.rivals || [])) {
    if (!r.active || !r.releases) continue;
    for (const rel of r.releases) {
      if (rel.dayIndex <= Game.dayIndex) rivalRels.push(rel);
    }
  }
  const allRels = rels.concat(rivalRels);
  const bandNames = [];
  if (Game.band) bandNames.push(Game.band.name);
  for (const r of (Game.rivals || [])) if (r.active) bandNames.push(r.name);

  const videos = [];
  const N = 12;
  // 6 个有关视频覆盖全部五类（其中一类出现两次），顺序按周确定性打乱
  const relSeq = ["critic", "casual", "share", "chart", "bandofficial", "critic"]
    .map((id, k) => ({ id, o: rnd("seq" + k) }))
    .sort((a, b) => a.o - b.o)
    .map(x => x.id);
  let relIdx = 0;
  for (let i = 0; i < N; i++) {
    // 50% 与乐队有关，50% 无关
    const related = i % 2 === 0;
    const typeId = related ? relSeq[relIdx++] : "other";
    const t = VIDEO_FEED_TYPES.find(x => x.id === typeId);
    const tpl = pick(window.VIDEO_SUMMARY[t.id] || window.VIDEO_SUMMARY.other, "s" + i);
    let rel = null, bandName = "", albumName = "", songName = "";
    if (related && allRels.length) {
      rel = allRels[Math.floor(rnd("r" + i) * allRels.length) % allRels.length];
      bandName = rel.bandName || rel.name;
      albumName = rel.album || rel.name;
      songName = rel.name;
    } else if (related && bandNames.length) {
      bandName = bandNames[Math.floor(rnd("b" + i) * bandNames.length) % bandNames.length];
    }
    const summary = (tpl || "")
      .replace(/\{band\}/g, bandName || "某乐队")
      .replace(/\{album\}/g, albumName || "新专辑")
      .replace(/\{song\}/g, songName || "新歌")
      .replace(/\{style\}/g, (rel && rel.style) || "独立音乐");

    // 情感倾向（critic 才有明确倾向；chart 有排名）
    let sentiment = "neutral", rank = 0;
    if (t.id === "critic") {
      const r = rnd("sent" + i);
      sentiment = r < 0.55 ? "pos" : (r < 0.8 ? "neutral" : "neg");
    }
    if (t.id === "chart") rank = 1 + Math.floor(rnd("rank" + i) * 10);
    // 播放量呈重尾分布：多数视频中等，少数成为爆款
    const viral = rnd("viral" + i);
    let mult;
    if (viral > 0.93) mult = 8 + rnd("vm1" + i) * 22;        // 爆款
    else if (viral > 0.78) mult = 2.2 + rnd("vm2" + i) * 2.6; // 较热门
    else mult = 0.25 + rnd("vm3" + i) * 0.85;                 // 普通
    // 专业乐评与其他乐队官方内容更容易获得高播放
    if (t.id === "critic" || t.id === "bandofficial") mult *= 1 + rnd("boost" + i) * 0.6;
    const views = Math.round(50000 * mult * (related ? 1 : 0.6) * videoUserFactor());
    videos.push({
      id: "pf_" + week + "_" + i,
      type: t.id, typeName: t.name, related,
      title: summary.slice(0, 34) + (summary.length > 34 ? "…" : ""),
      summary, band: bandName, album: albumName, song: songName,
      sentiment, rank, views,
      likes: Math.round(views * 0.04), comments: Math.round(views * 0.01),
      releaseId: rel ? rel.id : null,
      week,
    });
  }
  return videos;
}

// 应用一条平台视频对作品 / 乐队的影响
function applyVideoInfluence(v) {
  const rel = v.releaseId
    ? (Game.releases || []).find(x => x.id === v.releaseId)
    : null;
  const rivalRel = !rel && v.releaseId ? (() => {
    for (const r of (Game.rivals || [])) {
      const hit = (r.releases || []).find(x => x.id === v.releaseId);
      if (hit) return { rel: hit, rival: r };
    }
    return null;
  })() : null;
  const target = rel || (rivalRel && rivalRel.rel);
  if (!target) return;

  // 播放量越高，影响越大
  const scale = clamp(Math.log10(Math.max(10, v.views)) / 6, 0.4, 1.4);

  if (v.type === "critic") {
    if (v.sentiment === "pos") {
      target.plays = Math.round((target.plays || 0) * (1 + 0.08 * scale) + 3000 * scale);
      if (target.avgScore != null) target.avgScore = clamp(target.avgScore + 0.18 * scale, 0, 10);
      if (target.sales != null) target.sales = Math.round((target.sales || 0) * (1 + 0.06 * scale));
      if (target === rel) Game.stats.reputation = clamp((Game.stats.reputation || 50) + 0.5 * scale, 0, 100);
    } else if (v.sentiment === "neg") {
      if (target.avgScore != null) target.avgScore = clamp(target.avgScore - 0.35 * scale, 0, 10);
      if (target.sales != null) target.sales = Math.round((target.sales || 0) * (1 - 0.12 * scale));
      target.plays = Math.round((target.plays || 0) * (1 - 0.02 * scale));
      if (target === rel) Game.stats.reputation = clamp((Game.stats.reputation || 50) - 0.6 * scale, 0, 100);
    }
  } else if (v.type === "share") {
    target.plays = Math.round((target.plays || 0) * (1 + 0.025 * scale) + 800 * scale);
    if (target.avgScore != null) target.avgScore = clamp(target.avgScore + 0.05 * scale, 0, 10);
    if (target.sales != null) target.sales = Math.round((target.sales || 0) * (1 - 0.015 * scale));
  } else if (v.type === "chart") {
    if (v.rank && v.rank <= 10) {
      const boost = (11 - v.rank) / 10 * scale;
      target.plays = Math.round((target.plays || 0) * (1 + 0.02 * boost) + 1500 * boost);
      if (target.avgScore != null) target.avgScore = clamp(target.avgScore + 0.06 * boost, 0, 10);
    }
  } else if (v.type === "bandofficial") {
    if (rivalRel) {
      const r = rivalRel.rival;
      r.fans = Math.round((r.fans || 0) * (1 + 0.004 * scale) + 100);
    }
  }
  // casual / other：基本无影响
}

// 每周结算一次平台影响
function settleVideoPlatform() {
  if (!videoPlatformOnline()) return [];
  const week = Math.floor(Game.dayIndex / 7);
  if (!Game.videoPlatform) Game.videoPlatform = { week: -1, videos: [] };
  if (Game.videoPlatform.week === week) return Game.videoPlatform.videos;
  const videos = buildPlatformFeed(week);
  videos.forEach(applyVideoInfluence);
  Game.videoPlatform = { week, videos };
  saveGame();
  return videos;
}

// 视频评论（确定性）
function videoCommentList(video) {
  const seed = "vcmt|" + video.id;
  const pickN = (arr, n, salt) => {
    const out = [], used = new Set();
    for (let i = 0; i < n; i++) {
      for (let t = 0; t < 20; t++) {
        const idx = Math.floor(seededUnit(seed + "|" + salt + i + "_" + t) * arr.length) % arr.length;
        if (!used.has(idx)) { used.add(idx); out.push(arr[idx]); break; }
      }
    }
    return out;
  };
  const short = pickN(window.VIDEO_COMMENTS.short, 6, "s");
  const long = pickN(window.VIDEO_COMMENTS.long, 3, "l");
  const fill = t => t.replace(/\{band\}/g, video.band || "这支乐队").replace(/\{album\}/g, video.album || "这张专辑").replace(/\{song\}/g, video.song || "这首歌").replace(/\{style\}/g, "独立音乐");
  return {
    short: short.map(fill),
    long: long.map(fill),
  };
}
