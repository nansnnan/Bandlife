// 金曲奖：每年 11 月提名、12 月 15 日颁奖

const GOLDEN_AWARDS = [
  { id: "band", name: "年度最佳乐队", desc: "综合年度表现最为突出的乐队" },
  { id: "album", name: "年度最佳专辑", desc: "年度最受好评的专辑" },
  { id: "song", name: "年度最佳单曲", desc: "年度专辑中传唱度最高的一首" },
  { id: "newcomer", name: "年度最佳新人", desc: "出道三年内的新锐乐队" },
  { id: "live", name: "年度最佳现场", desc: "最具感染力的现场表现" },
  { id: "lyric", name: "年度最佳作词", desc: "年度专辑中歌词最见功力的一首" },
  { id: "compose", name: "年度最佳作曲", desc: "年度专辑中旋律与编曲最出色的一首" },
  { id: "produce", name: "年度最佳制作", desc: "制作水准最高的作品" },
  { id: "breakthrough", name: "年度最佳风格突破", desc: "在风格上勇于突破的乐队" },
  { id: "popular", name: "年度最受欢迎乐队", desc: "人气最高的乐队" },
];

const AWARD_NOMINEE_COUNT = 5;
const AWARD_FIRST_YEAR = 2001;

// 2001 年为第一届，之后每年递增
function awardEdition(year) { return year - AWARD_FIRST_YEAR + 1; }

// ===== 年度数据 =====
function awardYearRange(year) {
  return { y0: dateToDay(year, 1, 1), y1: dateToDay(year + 1, 1, 1) };
}

function awardAnnualStats(bandName, year) {
  const { y0, y1 } = awardYearRange(year);
  let rels = [];
  if (Game.band && bandName === Game.band.name) {
    rels = (Game.releases || []).filter(r => r.dayIndex >= y0 && r.dayIndex < y1);
  } else {
    const rv = (Game.rivals || []).find(x => x.name === bandName);
    if (rv && rv.releases) rels = rv.releases.filter(r => r.dayIndex >= y0 && r.dayIndex < y1);
  }
  const plays = rels.reduce((s, r) => s + (r.plays || 0), 0);
  const albumPlays = rels.filter(r => r.releaseType === "专辑" || r.releaseType === "EP")
    .reduce((s, r) => s + (r.plays || 0), 0);
  const songPlays = rels.filter(r => r.releaseType === "单曲")
    .reduce((s, r) => s + (r.plays || 0), 0);
  const scoreOf = r => (r.avgScore != null ? r.avgScore : (r.quality != null ? r.quality / 10 : 0));
  const scored = rels.map(scoreOf);
  const avg = scored.length ? scored.reduce((a, b) => a + b, 0) / scored.length : 0;
  const best = scored.length ? Math.max(...scored) : 0;

  const workName = r => (r.album || r.name || "");
  const byScore = (a, b) => (scoreOf(b) * 1e6 + (b.plays || 0)) - (scoreOf(a) * 1e6 + (a.plays || 0));
  // 专辑类（含 EP）作品
  const albumRels = rels.filter(r => r.releaseType === "专辑" || r.releaseType === "EP");
  // 当年专辑中的曲目（单曲奖、作词、作曲均从这些曲目中产生）
  const albumTrackRels = albumRels.slice();
  const bestAlbumRel = albumRels.slice().sort(byScore)[0];
  const bestTrackRel = albumTrackRels.slice().sort(byScore)[0];
  const bestWorkRel = rels.slice().sort(byScore)[0];
  const trackPlays = albumTrackRels.reduce((s, r) => s + (r.plays || 0), 0);
  const trackScores = albumTrackRels.map(scoreOf);
  const trackAvg = trackScores.length ? trackScores.reduce((a, b) => a + b, 0) / trackScores.length : 0;
  const trackBest = trackScores.length ? Math.max(...trackScores) : 0;

  return {
    plays, albumPlays, songPlays, avg, best, count: rels.length,
    trackPlays, trackAvg, trackBest, trackCount: albumTrackRels.length,
    bestAlbum: bestAlbumRel ? workName(bestAlbumRel) : null,
    bestSong: bestTrackRel ? (bestTrackRel.name || "") : null,
    bestWork: bestWorkRel ? workName(bestWorkRel) : null,
  };
}

function awardCandidates(year) {
  const out = [];
  const { y0 } = awardYearRange(year);
  if (Game.band && Game.band.name) {
    const st = awardAnnualStats(Game.band.name, year);
    if (st.count > 0) {
      out.push({ id: "player", name: Game.band.name, style: Game.band.style, stats: st,
        fans: Game.stats.totalFans || 0, founded: Game.band.foundedDay || 0 });
    }
  }
  for (const r of (Game.rivals || [])) {
    if (!r.active) continue;
    const st = awardAnnualStats(r.name, year);
    if (st.count === 0) continue;
    out.push({ id: r.name, name: r.name, style: r.style, stats: st,
      fans: r.fans || 0, founded: r.activeDay || 0 });
  }
  return out;
}

// 每个奖项使用不同的评分侧重，并加入确定性扰动，避免各奖项结果雷同
function awardScore(awardId, c, year) {
  const s = c.stats;
  let base = 0;
  switch (awardId) {
    case "band": base = s.plays * 0.75 + s.avg * 900; break;
    case "album": base = s.albumPlays * 1.0 + s.best * 400; break;
    case "song": base = s.trackPlays * 1.0 + s.trackBest * 420; break;
    case "newcomer": base = s.plays * 0.6 + s.avg * 1200; break;
    case "live": base = s.plays * 0.5 + s.avg * 1400; break;
    case "lyric": base = s.trackAvg * 1600 + s.trackBest * 620; break;
    case "compose": base = s.trackAvg * 1500 + s.trackPlays * 0.18; break;
    case "produce": base = s.avg * 1500 + s.best * 600; break;
    case "breakthrough": base = s.avg * 1200 + s.plays * 0.3; break;
    case "popular": base = Math.sqrt(Math.max(0, c.fans)) * 120; break;
    default: base = s.plays;
  }
  const jitter = 0.72 + seededUnit(awardId + "|" + c.id + "|" + year) * 0.56;
  return base * jitter;
}

function awardIsEligible(awardId, c, year) {
  if (awardId === "newcomer") {
    const foundedYear = dayToDate(c.founded || 0).year;
    return year - foundedYear <= 3;
  }
  if (awardId === "album") return c.stats.albumPlays > 0;
  if (awardId === "song" || awardId === "lyric" || awardId === "compose") return (c.stats.trackCount || 0) > 0;
  return true;
}

// 各奖项对应的获奖作品（乐队类奖项不展示作品）
function awardWorkFor(awardId, c) {
  const s = c.stats;
  switch (awardId) {
    case "album": return s.bestAlbum;
    case "song":
    case "lyric":
    case "compose": return s.bestSong;     // 当年专辑中的一首曲目
    case "live":
    case "produce":
    case "breakthrough": return s.bestWork;
    default: return null;   // band / newcomer / popular 仅显示乐队名
  }
}

// ===== 生成提名（11 月） =====
function generateAwardNominations(year) {
  const cands = awardCandidates(year);
  const list = GOLDEN_AWARDS.map(aw => {
    let pool = cands.filter(c => awardIsEligible(aw.id, c, year));
    // 新人奖若无乐队符合「出道三年内」，则退而取出道最晚的几支，避免奖项空缺
    if (aw.id === "newcomer" && pool.length === 0) {
      pool = cands.slice().sort((a, b) => (b.founded || 0) - (a.founded || 0));
    }
    const ranked = pool
      .map(c => ({ c, score: awardScore(aw.id, c, year) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, AWARD_NOMINEE_COUNT)
      .map(x => ({
        id: x.c.id, name: x.c.name, style: x.c.style, score: Math.round(x.score),
        work: awardWorkFor(aw.id, x.c),
      }));
    return { id: aw.id, name: aw.name, desc: aw.desc, nominees: ranked };
  });
  return { year, list };
}

// ===== 颁奖（12 月 15 日） =====
function resolveAwardWinners(nomination) {
  const list = nomination.list.map(aw => {
    if (!aw.nominees.length) return { ...aw, winner: null };
    const winner = aw.nominees[0];
    return { ...aw, winner };
  });
  return { year: nomination.year, list };
}

// ===== 奖励 =====
function awardRewardTarget(name) {
  if (Game.band && name === Game.band.name) return { type: "player" };
  const rv = (Game.rivals || []).find(x => x.name === name);
  return rv ? { type: "rival", rival: rv } : null;
}

function applyNominationReward(names) {
  const seen = new Set();
  for (const name of names) {
    if (seen.has(name)) continue;
    seen.add(name);
    const t = awardRewardTarget(name);
    if (!t) continue;
    if (t.type === "player") {
      Game.stats.reputation = clamp((Game.stats.reputation || 0) + 0.6, 0, 100);
      Game.stats.totalFans = Math.round((Game.stats.totalFans || 0) * 1.004 + 200);
    } else {
      t.rival.popularity = clamp((t.rival.popularity || 0) + 0.06, 0, 10);
      t.rival.fans = Math.round((t.rival.fans || 0) * 1.004 + 150);
    }
  }
}

function applyWinnerReward(names) {
  let money = 0;
  for (const name of names) {
    const t = awardRewardTarget(name);
    if (!t) continue;
    if (t.type === "player") {
      Game.stats.reputation = clamp((Game.stats.reputation || 0) + 2.4, 0, 100);
      Game.stats.totalFans = Math.round((Game.stats.totalFans || 0) * 1.02 + 3000);
      money += 800000;
    } else {
      t.rival.popularity = clamp((t.rival.popularity || 0) + 0.28, 0, 10);
      t.rival.fans = Math.round((t.rival.fans || 0) * 1.02 + 2000);
    }
  }
  if (money > 0) {
    Game.finance.balance = (Game.finance.balance || 0) + money;
    Game.finance.totalIncome = (Game.finance.totalIncome || 0) + money;
    addEvent(`金曲奖奖金到账：${money.toLocaleString()} 元。`);
  }
}

// ===== 新闻文本 =====
function awardNominationNews(nomination) {
  const names = new Set();
  nomination.list.forEach(aw => aw.nominees.forEach(n => names.add(n.name)));
  const playerHit = Game.band && [...nomination.list].some(aw => aw.nominees.some(n => n.name === Game.band.name));
  const lead = [...names].slice(0, 6);
  const ed = awardEdition(nomination.year);
  const detail = nomination.list.map(aw => {
    const list = aw.nominees.map(n => (n.work ? `《${n.work}》` : "") + n.name).join("、");
    return `${aw.name}：${list}`;
  }).join("\n");
  return {
    short: `第${ed}届金曲奖提名公布，${names.size} 支乐队入围十个奖项，颁奖典礼将于 12 月 15 日举行。${playerHit ? "你的乐队亦名列其中。" : ""}`,
    long: {
      title: `第${ed}届金曲奖提名揭晓　${names.size}支乐队角逐十项大奖`,
      body:
        `本报讯　第${ed}届金曲奖提名名单于本月正式公布。作为华语乐坛最具分量的年度评选，本届共设年度最佳乐队、年度最佳专辑、年度最佳单曲、年度最佳新人、年度最佳现场、年度最佳作词、年度最佳作曲、年度最佳制作、年度最佳风格突破、年度最受欢迎乐队十个奖项，每个奖项各提名五支乐队。\n` +
        `据主办方介绍，本届评选依据各乐队过去一年在作品播放、听众口碑、专业评分等方面的综合表现，经评审委员会多轮讨论后确定提名名单。${lead.length ? `入围乐队中，${lead.join("、")}等均榜上有名。` : ""}\n` +
        (detail ? `各项提名如下：\n${detail}\n` : "") +
        `值得注意的是，本届提名既有成名多年的资深乐队，也有初出茅庐的新面孔，新老同台角逐，令最终结果充满悬念。有乐评人认为，这份名单较好地呈现了过去一年乐坛的整体面貌，也反映出听众审美的多元与变化。\n` +
        `按照往年惯例，获奖乐队将获得奖杯、奖金，以及随之而来的关注度与人气提升。而获得提名本身，同样意味着专业领域的认可，对乐队而言是难得的肯定。\n` +
        `${playerHit ? "值得一提的是，你的乐队也出现在本届提名名单之中，这无疑是过去一年努力的最好回报。\n" : ""}` +
        `随着提名名单的公布，业界的讨论也迅速升温。谁将最终捧起金奖，成为各方关注的焦点。颁奖典礼定于 12 月 15 日举行，届时十个奖项的悬念将逐一揭晓。（记者 本报编辑部）`,
    },
  };
}

function awardResultNews(result) {
  const winners = result.list.filter(a => a.winner);
  const playerWins = Game.band ? winners.filter(a => a.winner.name === Game.band.name) : [];
  const ed = awardEdition(result.year);
  const detail = winners.slice(0, 10).map(a => {
    const w = a.winner;
    return `${a.name}：${w.work ? `《${w.work}》` : ""}${w.name}`;
  }).join("\n");
  return {
    short: `第${ed}届金曲奖颁奖典礼落幕，${winners.length} 个奖项各归其主。${playerWins.length ? `你的乐队斩获 ${playerWins.length} 项金奖。` : ""}`,
    long: {
      title: `第${ed}届金曲奖揭晓　${winners.length ? winners[0].winner.name + "等摘得金奖" : "十项大奖各有归属"}`,
      body:
        `本报讯　第${ed}届金曲奖颁奖典礼于 12 月 15 日晚隆重举行，十个奖项的金奖逐一揭晓，现场星光熠熠，掌声不断。\n` +
        (detail ? `本届获奖名单如下：\n${detail}\n` : "") +
        `颁奖典礼上，获奖乐队纷纷登台致辞。有人难掩激动，几度哽咽；有人则谈到多年来的坚持与不易，感谢一路相伴的乐迷与伙伴。台下观众不时报以热烈掌声，气氛一次次被推向高潮。\n` +
        `评委表示，本届各奖项的竞争都相当激烈，提名乐队实力接近，最终结果经过反复斟酌才得以确定。“金曲奖看重的不只是数据，更是作品与乐队本身的成色。”一位评委这样说。\n` +
        `获得金奖的乐队，除奖杯与奖金外，还将收获显著的关注度与人气提升。而对所有入围者而言，能够站上这个舞台，本身就是对过去一年努力的肯定。\n` +
        `${playerWins.length ? `你的乐队在本届评选中表现出色，一举拿下${playerWins.map(a => a.name).join("、")}等 ${playerWins.length} 项金奖，成为当晚最受瞩目的名字之一。\n` : ""}` +
        `随着颁奖典礼落幕，本届金曲奖正式画上句号。新的赛季已经开始，乐坛的下一段故事，正在等待被书写。（记者 本报编辑部）`,
    },
  };
}

// ===== 日程触发 =====
function checkAwardSchedule() {
  const d = dayToDate(Game.dayIndex);
  if (!Game.awards) {
    Game.awards = { nominations: null, results: null, history: [] };
  }
  const year = d.year;
  if (year < AWARD_FIRST_YEAR) return;   // 2001 年为第一届，此前不举办
  // 11 月 1 日：生成提名
  if (d.month === 11 && d.day === 1) {
    if (!Game.awards.nominations || Game.awards.nominations.year !== year) {
      const nom = generateAwardNominations(year);
      Game.awards.nominations = nom;
      Game.awards.results = null;
      const names = [];
      nom.list.forEach(aw => aw.nominees.forEach(n => names.push(n.name)));
      applyNominationReward(names);
      addEvent(`第${awardEdition(year)}届金曲奖提名公布，共 ${new Set(names).size} 支乐队入围。`);
    }
  }
  // 12 月 15 日：颁奖
  if (d.month === 12 && d.day === 15) {
    const nom = Game.awards.nominations;
    if (nom && nom.year === year && (!Game.awards.results || Game.awards.results.year !== year)) {
      const res = resolveAwardWinners(nom);
      Game.awards.results = res;
      const winners = res.list.filter(a => a.winner).map(a => a.winner.name);
      applyWinnerReward(winners);
      Game.awards.history = Game.awards.history || [];
      Game.awards.history.unshift({
        year,
        winners: res.list.filter(a => a.winner).map(a => ({ award: a.name, band: a.winner.name })),
      });
      if (Game.awards.history.length > 30) Game.awards.history.pop();
      addEvent(`第${awardEdition(year)}届金曲奖颁奖典礼落幕，十个奖项各归其主。`);
    }
  }
}

function currentAwardYear() {
  return dayToDate(Game.dayIndex).year;
}
