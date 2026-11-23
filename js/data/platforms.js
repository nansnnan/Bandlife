// 评分平台（12 个，多种分数制度）
// type: 用户评分 / 媒体乐评 / 聚合评分
// scale: 满分；precision: 小数精度；weight: 对综合评分的影响权重
// color: 平台品牌主色（用于评分网站 UI 沉浸感）
window.RATING_PLATFORMS = [
  { name: "豆瓣音乐", en: "Douban", type: "用户评分", scale: 10, precision: 1, weight: 1.2, color: "#00b51d", desc: "华语地区最有影响力的音乐评分社区，用户打分严格、口味挑剔。" },
  { name: "网易云音乐", en: "NetEase Cloud Music", type: "用户评分", scale: 5, precision: 1, weight: 1.0, color: "#c20c0c", desc: "国内主流流媒体平台，以评论氛围浓厚著称，评分反映大众口味。" },
  { name: "QQ音乐", en: "QQ Music", type: "用户评分", scale: 10, precision: 1, weight: 0.9, color: "#31c27c", desc: "用户基数最大的流媒体平台，评分偏大众化、传播导向。" },
  { name: "虾米音乐", en: "Xiami", type: "用户评分", scale: 10, precision: 1, weight: 1.0, color: "#ff6600", desc: "已停服的情怀平台，曾经的评分以资深乐迷口味严苛著称。" },
  { name: "知乎", en: "Zhihu", type: "社区评分", scale: 5, precision: 1, weight: 0.9, color: "#0066ff", desc: "知识社区，围绕作品的艺术性、社会性展开理性讨论与打分。" },
  { name: "滚石", en: "Rolling Stone", type: "媒体乐评", scale: 5, precision: 0.5, weight: 1.3, color: "#e50914", desc: "美国权威音乐杂志，五星制，评价标准兼顾艺术与时代影响力。" },
  { name: "Pitchfork", en: "Pitchfork", type: "媒体乐评", scale: 10, precision: 1, weight: 1.3, color: "#ff3b5c", desc: "独立音乐风向标的乐评网站，十分制，口味先锋、措辞毒辣。" },
  { name: "NME", en: "New Musical Express", type: "媒体乐评", scale: 10, precision: 0, weight: 1.1, color: "#b30000", desc: "英国老牌音乐媒体，十分制，关注摇滚与独立音乐的现场与唱片。" },
  { name: "AllMusic", en: "AllMusic", type: "媒体乐评", scale: 5, precision: 0.5, weight: 1.0, color: "#0044cc", desc: "权威音乐数据库，五星制，评分严谨、以专业视角见长。" },
  { name: "Metacritic", en: "Metacritic", type: "聚合评分", scale: 100, precision: 0, weight: 1.1, color: "#ffcc00", desc: "聚合多家媒体评分的元评分网站，百分制，加权综合各路乐评。" },
  { name: "音乐时空", en: "Music Time", type: "媒体乐评", scale: 100, precision: 0, weight: 1.0, color: "#e6b422", desc: "国内专业音乐杂志，百分制，兼顾商业成绩与艺术价值。" },
  { name: "三联生活周刊", en: "Sanlian Life", type: "媒体乐评", scale: 10, precision: 1, weight: 1.1, color: "#8b0000", desc: "国内文化媒体，十分制，侧重作品的文化内涵与人文关怀。" },
];

// 评分等级（用于把分数映射为文字评价，增强沉浸感）
window.RATING_LEVELS = function(score, scale) {
  const ratio = score / scale;
  if (ratio >= 0.95) return "神作";
  if (ratio >= 0.85) return "杰作";
  if (ratio >= 0.75) return "优秀";
  if (ratio >= 0.65) return "良好";
  if (ratio >= 0.55) return "及格";
  if (ratio >= 0.45) return "平庸";
  if (ratio >= 0.35) return "较差";
  if (ratio >= 0.25) return "差";
  return "极差";
};
