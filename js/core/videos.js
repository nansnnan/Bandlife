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
  const users = videoUserBase();
  const fame = (Game.stats.reputation || 50) / 100;                       // 0~1
  const fansFactor = clamp(Math.sqrt(Math.max(0, Game.stats.totalFans || 0)) / 800, 0.15, 3);
  // 成片质量决定触达率（约 0.5%~22%），再乘名气与粉丝系数
  const reach = clamp(q / 450, 0.005, 0.22);
  const baseViews = Math.round(users * reach * (0.4 + fame * 0.8) * fansFactor * randf(0.8, 1.25));
  v.views = unedited ? Math.round(baseViews * 0.35) : baseViews;
  v.likes = Math.round(v.views * (0.03 + q / 4000));
  v.comments = Math.round(v.views * (0.008 + q / 12000));
  v.status = "published";
  v.publishDay = Game.dayIndex;
  v.unedited = unedited;
  v.quality = q;
  v.author = (Game.band ? Game.band.name : "乐队") + "官方";
  if (v.type === "doc") v.duration = 900 + rand(0, 1500);           // 纪录片：15~40 分钟
  else if (v.type === "trailer") v.duration = 30 + rand(0, 30);     // 预告片：30~60 秒
  else {
    const song = (Game.songs || []).find(x => x.id === v.targetId);  // MV：与歌曲时长一致
    v.duration = song && song.duration ? song.duration : 180 + rand(0, 60);
  }

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

// 视频封面配色（确定性色块组合）与 UP 主信息
const VIDEO_CRITIC_ACCOUNTS = ["乐评人阿修", "声音研究所", "独立音乐观察", "听歌的猫", "音乐区老张", "耳朵的旅行"];
const VIDEO_CHART_ACCOUNTS = ["音乐周榜", "华语热榜", "独立音乐榜", "新歌速递", "播放量排行榜"];

function videoCoverStyle(id) {
  const h1 = Math.floor(seededUnit("cv1|" + id) * 360);
  const h2 = (h1 + 45 + Math.floor(seededUnit("cv2|" + id) * 110)) % 360;
  const h3 = (h1 + 170 + Math.floor(seededUnit("cv3|" + id) * 90)) % 360;
  return "background-color:hsl(" + h1 + ",50%,36%);"
    + "background-image:"
    + "linear-gradient(135deg,hsl(" + h2 + ",68%,56%) 0%,transparent 58%),"
    + "radial-gradient(circle at 80% 20%,hsl(" + h3 + ",72%,62%) 0%,transparent 44%),"
    + "linear-gradient(160deg,transparent 42%,hsl(" + h1 + ",62%,22%) 100%);";
}

// 作品总时长（专辑/EP 为整张曲目时长之和，单曲为自身时长）
function releaseTotalDuration(rel) {
  if (!rel) return 240;
  if (rel.songs && rel.songs.length) {
    return rel.songs.reduce((s, x) => s + (x.duration || 240), 0);
  }
  if (rel.album && (rel.releaseType === "专辑" || rel.releaseType === "EP")) {
    let total = 0, found = 0;
    for (const r of (Game.rivals || [])) {
      for (const x of (r.releases || [])) {
        if (x.bandName === rel.bandName && x.album === rel.album) { total += (x.duration || 240); found++; }
      }
    }
    for (const x of (Game.releases || [])) {
      if (x.album === rel.album && x.bandName === rel.bandName && x.songs) {
        return x.songs.reduce((s, y) => s + (y.duration || 240), 0);
      }
    }
    if (found) return total;
  }
  return rel.duration || 240;
}

function fmtVideoDuration(sec) {
  const m = Math.floor(sec / 60), s = sec % 60;
  return m + ":" + String(s).padStart(2, "0");
}

function videoAuthorOf(typeId, bandName, seed) {
  const k = seed || bandName || "";
  if (typeId === "critic") return VIDEO_CRITIC_ACCOUNTS[Math.floor(seededUnit("au|c|" + k) * VIDEO_CRITIC_ACCOUNTS.length) % VIDEO_CRITIC_ACCOUNTS.length];
  if (typeId === "chart") return VIDEO_CHART_ACCOUNTS[Math.floor(seededUnit("au|h|" + k) * VIDEO_CHART_ACCOUNTS.length) % VIDEO_CHART_ACCOUNTS.length];
  if (typeId === "bandofficial") return (bandName || "乐队") + "官方";
  const pool = window.BILI_USERNAMES || [];
  if (!pool.length) return "某位用户";
  return pool[Math.floor(seededUnit("au|u|" + k) * pool.length) % pool.length];
}

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
  const N = 18;
  // 9 个有关视频覆盖全部五类（多出的按类循环补足），顺序按周期确定性打乱
  const baseTypes = ["critic", "casual", "share", "chart", "bandofficial"];
  const seqBuild = [];
  for (let k = 0; k < Math.ceil(N / 2); k++) seqBuild.push(baseTypes[k % baseTypes.length]);
  const relSeq = seqBuild
    .map((id, k) => ({ id, o: rnd("seq" + k) }))
    .sort((a, b) => a.o - b.o)
    .map(x => x.id);
  let relIdx = 0;
  const usedTpl = {};   // 同一期内同类摘要不重复
  for (let i = 0; i < N; i++) {
    // 50% 与乐队有关，50% 无关
    const related = i % 2 === 0;
    const typeId = related ? relSeq[relIdx++] : "other";
    const t = VIDEO_FEED_TYPES.find(x => x.id === typeId);
    const tplPool = window.VIDEO_SUMMARY[t.id] || window.VIDEO_SUMMARY.other;
    if (!usedTpl[t.id]) usedTpl[t.id] = new Set();
    let tpl = null;
    for (let k = 0; k < 25; k++) {
      const idx = Math.floor(rnd("s" + i + "_" + k) * tplPool.length) % tplPool.length;
      if (!usedTpl[t.id].has(idx)) { usedTpl[t.id].add(idx); tpl = tplPool[idx]; break; }
    }
    if (!tpl) tpl = pick(tplPool, "s" + i);
    let rel = null, bandName = "", albumName = "", songName = "";
    if (related && allRels.length) {
      let relPool = allRels;
      if (t.id === "share") {
        // 摘要为整轨/歌单时优先选专辑，为单曲分享时优先选单曲
        const wantAlbum = /整轨|全专|全曲|专辑分享|歌单|播放列表/.test(tpl || "");
        const filtered = allRels.filter(x => wantAlbum
          ? (x.releaseType === "专辑" || x.releaseType === "EP")
          : true);   // 单曲分享：任意一首均可，专辑曲目同样计入
        if (filtered.length) relPool = filtered;
      }
      rel = relPool[Math.floor(rnd("r" + i) * relPool.length) % relPool.length];
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
    // 播放量由「平台用户数 × 触达率 × 人均观看次数」决定，天然受用户规模约束
    const users = videoUserBase();
    const viral = rnd("viral" + i);
    let reach, watch;
    if (viral > 0.975) {          // 现象级爆款：10%~26% 的用户看过
      reach = 0.08 + rnd("rc0" + i) * 0.12;
      watch = 1.1 + rnd("wc0" + i) * 1.1;
    } else if (viral > 0.90) {    // 大爆款：2%~7%
      reach = 0.015 + rnd("rc1" + i) * 0.035;
      watch = 1.05 + rnd("wc1" + i) * 0.75;
    } else if (viral > 0.74) {    // 较热门：0.4%~1.6%
      reach = 0.003 + rnd("rc2" + i) * 0.009;
      watch = 1 + rnd("wc2" + i) * 0.6;
    } else {                      // 普通：0.03%~0.2%
      reach = 0.0002 + rnd("rc3" + i) * 0.0013;
      watch = 1 + rnd("wc3" + i) * 0.3;
    }
    let views = users * reach * watch * (related ? 1 : 0.6);
    // 专业乐评与其他乐队官方内容更容易获得高播放
    if (t.id === "critic" || t.id === "bandofficial") views *= 1 + rnd("boost" + i) * 0.5;
    views = Math.round(views);
    // 标题取摘要首句，正文保留完整观点
    const firstSentence = (summary.split(/[。！？!?]/)[0] || summary).trim();
    const title = firstSentence.length > 34 ? firstSentence.slice(0, 34) + "…" : firstSentence;
    const author = videoAuthorOf(t.id, bandName, "pf_" + week + "_" + i);
    let duration, subKind = null;
    if (t.id === "critic") {
      duration = 600 + Math.floor(rnd("dur" + i) * 1500);            // 深度解析：10~35 分钟
    } else if (t.id === "casual") {
      duration = 60 + Math.floor(rnd("dur" + i) * 150);              // 简要听感：1~3.5 分钟
    } else if (t.id === "share") {
      const wantAlbum = /整轨|全专|全曲|专辑分享|歌单|播放列表/.test(tpl || "");
      if (rel && wantAlbum && (rel.releaseType === "专辑" || rel.releaseType === "EP")) {
        duration = releaseTotalDuration(rel);                        // 整轨：与专辑总时长一致
      } else if (rel) {
        duration = rel.duration || 240;                              // 单曲：与单曲时长一致
      } else {
        duration = 240 + Math.floor(rnd("dur" + i) * 120);
      }
    } else if (t.id === "chart") {
      duration = 480 + Math.floor(rnd("dur" + i) * 900);             // 排行榜：8~23 分钟
    } else if (t.id === "bandofficial") {
      // 其他乐队官方也会制作 MV、预告片与纪录片，时长基准与自制视频一致
      const sub = rnd("sub" + i);
      if (sub < 0.5) { subKind = "mv"; duration = rel ? (rel.duration || 240) : 240; }
      else if (sub < 0.78) { subKind = "trailer"; duration = 30 + Math.floor(rnd("dur" + i) * 30); }
      else { subKind = "doc"; duration = 900 + Math.floor(rnd("dur" + i) * 900); }
    } else {
      duration = 120 + Math.floor(rnd("dur" + i) * 780);             // 生活区：2~15 分钟
    }
    videos.push({
      id: "pf_" + week + "_" + i,
      type: t.id,
      typeName: subKind === "mv" ? "官方MV" : subKind === "trailer" ? "官方预告" : subKind === "doc" ? "官方纪录" : t.name,
      subtype: subKind, related, author, duration,
      title,
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
  const day = Game.dayIndex;
  if (!Game.videoPlatform) Game.videoPlatform = { week: -1, videos: [], infWeek: -1 };
  if (Game.videoPlatform.week === day) return Game.videoPlatform.videos;
  const videos = buildPlatformFeed(day);
  // 列表每日刷新，影响结算保持每周一次，避免播放量增长过快
  const wk = Math.floor(day / 7);
  if (Game.videoPlatform.infWeek !== wk) {
    videos.forEach(applyVideoInfluence);
    Game.videoPlatform.infWeek = wk;
  }
  Game.videoPlatform = { week: day, videos, infWeek: Game.videoPlatform.infWeek };
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
  // 与乐队无关的视频使用生活区评论池，避免出现乐队相关评价
  const related = video.related !== false && video.type !== "other";
  const pool = (related ? window.VIDEO_COMMENTS : (window.VIDEO_COMMENTS_OTHER || window.VIDEO_COMMENTS));
  const short = pickN(pool.short, 6, "s");
  const long = pickN(pool.long || [], 3, "l");
  const fill = t => related
    ? t.replace(/\{band\}/g, video.band || "这支乐队")
       .replace(/\{album\}/g, video.album || "这张专辑")
       .replace(/\{song\}/g, video.song || "这首歌")
       .replace(/\{style\}/g, "独立音乐")
    : t;
  return {
    short: short.map(fill),
    long: long.map(fill),
  };
}
