// 歌曲创作 + 发布系统

// ===== 创建歌曲 =====
function createSong(data) {
  const song = {
    id: Date.now() + "_" + rand(1000, 9999),
    name: data.name || "未命名歌曲",
    style: data.style || Game.band.style,
    styleCategory: data.styleCategory || "摇滚",
    lyricist: data.lyricist || Game.band.name,
    composer: data.composer || Game.band.name,
    arranger: data.arranger || Game.band.name,
    members: data.members || Game.band.members.map(m => m.id),
    duration: data.duration || 240,   // 秒
    lyrics: data.lyrics || "",
    quality: 0,
    createdDay: Game.dayIndex,
    released: false,
  };
  song.quality = calcSongQuality(song);
  Game.songs.push(song);
  addEvent(`新歌《${song.name}》创作完成。`);
  saveGame();
  return song;
}

// ===== 计算歌曲质量（0-99） =====
function calcSongQuality(song) {
  const s = Game.band.skill;
  const t = Game.band.training;
  // 能力 + 训练加成 + 风格匹配（同风格创作有加成）
  const styleBonus = song.style === Game.band.style ? 6 : 0;
  const comp = s.composition + t.composition * 2 + styleBonus;
  const lyr = s.lyrics + t.lyrics * 2 + styleBonus;
  const arr = s.arrangement + t.arrangement * 2 + styleBonus;
  // 演奏能力：由被指派成员的平均能力决定
  const memberIds = song.members || [];
  const memberSkills = memberIds.map(id => {
    const m = Game.band.members.find(x => x.id === id);
    return m ? m.skill : 50;
  });
  const avgMemberSkill = memberSkills.length ? memberSkills.reduce((a, b) => a + b, 0) / memberSkills.length : s.performance;
  const perf = avgMemberSkill + t.performance * 2;
  const voc = s.vocal + t.vocal * 2;
  // 歌词是否填写（自定义歌词加分）
  const lyricBonus = song.lyrics && song.lyrics.trim().length > 20 ? 8 : 0;
  const quality = comp * 0.25 + lyr * 0.22 + arr * 0.20 + perf * 0.15 + voc * 0.18 + lyricBonus + randf(-8, 8);
  return clamp(Math.round(quality), 5, 99);
}

// ===== 发布作品 =====
// type: '单曲' | 'EP' | '专辑'
function releaseWork(type, songIds, options = {}) {
  const songs = Game.songs.filter(s => songIds.includes(s.id) && !s.released);
  if (!songs.length) return { ok: false, msg: "没有可发布的歌曲" };

  // 校验数量
  if (type === "单曲" && songs.length !== 1) return { ok: false, msg: "单曲只能包含 1 首歌" };
  if (type === "EP" && (songs.length < 2 || songs.length > 5)) return { ok: false, msg: "EP 需包含 2~5 首歌" };
  if (type === "专辑" && songs.length < 6) return { ok: false, msg: "专辑需至少 6 首歌" };

  const cost = releaseCost(type, songs.length, options);
  if (Game.mode === "real" && Game.finance.balance < cost) {
    return { ok: false, msg: `预算不足，需 ¥${cost.toLocaleString()}` };
  }

  // 扣除费用
  if (Game.mode === "real") {
    Game.finance.balance -= cost;
    Game.finance.totalExpense += cost;
  }

  // 计算作品整体质量（歌曲平均 + 编制加成）
  const avgQ = songs.reduce((s, x) => s + x.quality, 0) / songs.length;
  const quality = clamp(Math.round(avgQ * (options.promotion ? 1.05 : 1)), 5, 99);

  const release = {
    id: Date.now() + "_" + rand(1000, 9999),
    name: options.title || songs[0].name,
    releaseType: type,
    style: songs[0].style,
    styleCategory: songs[0].styleCategory,
    bandName: Game.band.name,
    songs: songs.map(s => ({ ...s })),
    songIds: songs.map(s => s.id),
    quality,
    plays: 0,
    likes: 0,
    comments: 0,
    dayIndex: Game.dayIndex,
    releaseDay: Game.dayIndex,
    ratings: null,
    commentList: null,
    promotion: !!options.promotion,
    isRival: false,
  };

  // 标记歌曲已发布
  songs.forEach(s => { s.released = true; });

  Game.releases.push(release);
  addEvent(`${Game.band.name} 发布${type}《${release.name}》。`);

  // 发布即生成评分
  generateRatings(release);
  saveGame();
  return { ok: true, release, cost };
}

function releaseCost(type, songCount, options) {
  const base = { "单曲": 5000, "EP": 20000, "专辑": 50000 }[type];
  const perSong = songCount * 2000;
  const promotion = options.promotion ? 30000 : 0;
  return base + perSong + promotion;
}

// ===== 训练（针对单个成员） =====
function trainMember(memberId, days) {
  const cost = days * 200;  // 每天训练成本
  if (Game.mode === "real" && Game.finance.balance < cost) {
    return { ok: false, msg: "预算不足，无法训练" };
  }
  if (Game.mode === "real") {
    Game.finance.balance -= cost;
    Game.finance.totalExpense += cost;
  }
  const member = Game.band.members.find(m => m.id === memberId);
  if (!member) return { ok: false, msg: "成员不存在" };
  const gain = days * 0.15 * randf(0.8, 1.2);
  member.skill = clamp(member.skill + gain, 20, 99);
  member.trained = (member.trained || 0) + days;
  refreshBandSkill();  // 成员能力提升后刷新乐队整体能力
  advanceTime(days);
  addEvent(`成员 ${member.name}（${member.role}）进行了 ${days} 天的训练。`);
  saveGame();
  return { ok: true, cost, member };
}

function skillName(key) {
  return { composition: "作曲", lyrics: "作词", arrangement: "编曲", performance: "演奏", vocal: "唱功" }[key] || key;
}
