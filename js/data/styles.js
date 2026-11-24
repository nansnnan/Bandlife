// 音乐风格体系：摇滚全面覆盖 + 其他主流/独立风格
// popularity: 1-10 受众规模基数（影响潜在播放量）；difficulty: 1-10 创作/演奏难度（影响训练成本）
window.MUSIC_STYLES = [
  // ===== 摇滚（大类，全面覆盖） =====
  { name: "硬摇滚", en: "Hard Rock", category: "摇滚", popularity: 8, difficulty: 6, desc: "以强烈失真吉他、强劲节奏和高亢人声为特征，摇滚最主流的分支之一。" },
  { name: "重金属", en: "Heavy Metal", category: "摇滚", popularity: 7, difficulty: 7, desc: "更重、更快、更暗的摇滚，标志性的强力和弦与尖锐吉他独奏。" },
  { name: "朋克摇滚", en: "Punk Rock", category: "摇滚", popularity: 7, difficulty: 3, desc: "三和弦、快节奏、反叛精神，简单直接却充满力量。" },
  { name: "流行摇滚", en: "Pop Rock", category: "摇滚", popularity: 9, difficulty: 4, desc: "摇滚与流行旋律的结合，朗朗上口，受众最广。" },
  { name: "独立摇滚", en: "Indie Rock", category: "摇滚", popularity: 7, difficulty: 5, desc: "独立厂牌或 DIY 精神下的摇滚，风格自由、注重个性表达。" },
  { name: "另类摇滚", en: "Alternative Rock", category: "摇滚", popularity: 8, difficulty: 5, desc: "90 年代兴起的非主流摇滚统称，融合多元元素。" },
  { name: "垃圾摇滚", en: "Grunge", category: "摇滚", popularity: 7, difficulty: 5, desc: "西雅图之声，失真、颓废、脏脏的吉他音色与压抑情绪。" },
  { name: "后摇", en: "Post-Rock", category: "摇滚", popularity: 6, difficulty: 6, desc: "弱化人声与主歌副歌结构，以器乐氛围层层递进。" },
  { name: "前卫摇滚", en: "Progressive Rock", category: "摇滚", popularity: 6, difficulty: 9, desc: "复杂编曲、不规则拍号、长篇结构，技术流巅峰。" },
  { name: "迷幻摇滚", en: "Psychedelic Rock", category: "摇滚", popularity: 6, difficulty: 6, desc: "源自 60 年代，迷离音效、延时与混响营造迷幻氛围。" },
  { name: "蓝调摇滚", en: "Blues Rock", category: "摇滚", popularity: 6, difficulty: 6, desc: "蓝调为基础的摇滚，即兴与吉他技巧的较量。" },
  { name: "民谣摇滚", en: "Folk Rock", category: "摇滚", popularity: 7, difficulty: 4, desc: "民谣叙事与摇滚节奏结合，温暖质朴。" },
  { name: "车库摇滚", en: "Garage Rock", category: "摇滚", popularity: 6, difficulty: 3, desc: "粗糙、原始、lo-fi 的摇滚，车库精神的回归。" },
  { name: "华丽摇滚", en: "Glam Rock", category: "摇滚", popularity: 6, difficulty: 5, desc: "夸张造型与华丽舞台，旋律戏剧化。" },
  { name: "英伦摇滚", en: "Britpop", category: "摇滚", popularity: 7, difficulty: 4, desc: "90 年代英国摇滚复兴，旋律悦耳，关注都市生活。" },
  { name: "新金属", en: "Nu Metal", category: "摇滚", popularity: 7, difficulty: 5, desc: "金属与嘻哈、放克元素的融合，说唱金属风格。" },
  { name: "鞭挞金属", en: "Thrash Metal", category: "摇滚", popularity: 6, difficulty: 9, desc: "极快、极重的金属，高速扫弦与密集鼓点。" },
  { name: "死亡金属", en: "Death Metal", category: "摇滚", popularity: 5, difficulty: 9, desc: "极端金属，低吼、双踩、黑暗主题。" },
  { name: "黑金属", en: "Black Metal", category: "摇滚", popularity: 4, difficulty: 8, desc: "冰冷、氛围化、高速 tremolo 扫弦的极端金属。" },
  { name: "力量金属", en: "Power Metal", category: "摇滚", popularity: 6, difficulty: 8, desc: "史诗、高亢、英雄主义主题，旋律化金属。" },
  { name: "工业金属", en: "Industrial Metal", category: "摇滚", popularity: 6, difficulty: 7, desc: "金属与电子、工业噪音结合，机械冷峻。" },
  { name: "前卫金属", en: "Progressive Metal", category: "摇滚", popularity: 6, difficulty: 9, desc: "融合前卫摇滚复杂性的金属，技术性极强。" },
  { name: "哥特摇滚", en: "Gothic Rock", category: "摇滚", popularity: 5, difficulty: 5, desc: "阴郁、浪漫、戏剧化，与哥特文化紧密相连。" },
  { name: "情绪摇滚", en: "Emo", category: "摇滚", popularity: 6, difficulty: 4, desc: "情感宣泄、私密歌词，旋律化朋克/摇滚分支。" },
  { name: "后朋克", en: "Post-Punk", category: "摇滚", popularity: 6, difficulty: 5, desc: "朋克的实验延续，冷峻、棱角分明的音色。" },
  { name: "新浪潮", en: "New Wave", category: "摇滚", popularity: 7, difficulty: 4, desc: "朋克后的流行化转向，合成器与舞曲节奏。" },
  { name: "合成器摇滚", en: "Synth Rock", category: "摇滚", popularity: 6, difficulty: 5, desc: "以合成器为主导音色的摇滚，复古未来感。" },
  { name: "数学摇滚", en: "Math Rock", category: "摇滚", popularity: 5, difficulty: 9, desc: "复杂节奏、不规则拍号、精准的器乐编排。" },
  { name: "噪音摇滚", en: "Noise Rock", category: "摇滚", popularity: 4, difficulty: 6, desc: "以噪音、反馈、失真为素材的实验摇滚。" },
  { name: "石人摇滚", en: "Stoner Rock", category: "摇滚", popularity: 5, difficulty: 5, desc: "慢、重、低音轰鸣的复古摇滚，布鲁斯根源。" },
  { name: "厄运金属", en: "Doom Metal", category: "摇滚", popularity: 5, difficulty: 6, desc: "极慢、极重、绝望氛围的金属。" },
  { name: "民谣金属", en: "Folk Metal", category: "摇滚", popularity: 5, difficulty: 7, desc: "金属与民族乐器、旋律的融合。" },
  { name: "国摇", en: "Chinese Rock", category: "摇滚", popularity: 8, difficulty: 5, desc: "中国本土摇滚，融入中文歌词与中国现实关怀，本土特色鲜明。" },
  { name: "土摇", en: "Tuyao", category: "摇滚", popularity: 7, difficulty: 4, desc: "中国本土化摇滚的俗称，旋律通俗、接地气，传唱度高。" },
  { name: "民谣金属摇滚", en: "Folk Rock Metal", category: "摇滚", popularity: 6, difficulty: 6, desc: "摇滚与金属、民谣的混合，兼顾旋律与力量。" },
  { name: "日系摇滚", en: "J-Rock", category: "摇滚", popularity: 8, difficulty: 5, desc: "日本摇滚，旋律化、编曲精致，常与动画、游戏主题曲紧密相连。" },
  { name: "动画摇滚", en: "Anime Rock", category: "摇滚", popularity: 8, difficulty: 5, desc: "日本动画主题曲风格的摇滚，燃向、旋律性极强、青春感十足。" },
  { name: "后硬核", en: "Post-Hardcore", category: "摇滚", popularity: 6, difficulty: 7, desc: "硬核的情绪化延伸，猛烈与旋律、嘶吼与清唱交织。" },
  { name: "古典摇滚", en: "Orchestral Rock", category: "摇滚", popularity: 6, difficulty: 7, desc: "摇滚乐队与管弦乐融合，编制宏大、旋律优雅。" },

  // ===== 金属（独立大类补充） =====
  { name: "旋律死亡金属", en: "Melodic Death Metal", category: "金属", popularity: 5, difficulty: 8, desc: "死亡金属的旋律化，双吉他和声与悲壮旋律。" },
  { name: "金属核", en: "Metalcore", category: "金属", popularity: 6, difficulty: 7, desc: "硬核与金属融合，breakdown 与嘶吼。" },
  { name: "后核", en: "Post-Hardcore", category: "金属", popularity: 6, difficulty: 6, desc: "硬核的旋律化与实验化，情绪起伏大。" },

  // ===== 流行 =====
  { name: "流行", en: "Pop", category: "流行", popularity: 10, difficulty: 3, desc: "大众流行音乐，旋律为王，受众最广。" },
  { name: "华语流行", en: "Mandopop", category: "流行", popularity: 10, difficulty: 3, desc: "中文流行乐，华语乐坛主流。" },
  { name: "流行舞曲", en: "Dance Pop", category: "流行", popularity: 9, difficulty: 4, desc: "面向舞池的流行乐，节奏驱动。" },
  { name: "合成器流行", en: "Synthpop", category: "流行", popularity: 8, difficulty: 4, desc: "合成器主导的流行乐，复古未来。" },
  { name: "卧室流行", en: "Bedroom Pop", category: "流行", popularity: 7, difficulty: 3, desc: "lo-fi、私密、自制的流行乐。" },
  { name: "独立流行", en: "Indie Pop", category: "流行", popularity: 7, difficulty: 4, desc: "独立精神的流行乐，清新另类。" },
  { name: "梦幻流行", en: "Dream Pop", category: "流行", popularity: 6, difficulty: 4, desc: "朦胧、空灵、氛围化的流行乐。" },
  { name: "盯鞋", en: "Shoegaze", category: "流行", popularity: 5, difficulty: 5, desc: "层层效果器堆叠出的迷离音墙。" },

  // ===== 民谣 =====
  { name: "民谣", en: "Folk", category: "民谣", popularity: 8, difficulty: 3, desc: "木吉他、叙事性歌词、质朴表达。" },
  { name: "城市民谣", en: "Urban Folk", category: "民谣", popularity: 8, difficulty: 3, desc: "关注都市生活的民谣，华语乐坛重要分支。" },
  { name: "新民谣", en: "Neofolk", category: "民谣", popularity: 5, difficulty: 5, desc: "实验、暗色、氛围化的民谣。" },

  // ===== 电子 =====
  { name: "电子", en: "Electronic", category: "电子", popularity: 8, difficulty: 5, desc: "以电子音色与编曲为核心的广义电子音乐。" },
  { name: "浩室", en: "House", category: "电子", popularity: 8, difficulty: 5, desc: "四四拍舞曲，电子舞曲的基石。" },
  { name: "科技舞曲", en: "Techno", category: "电子", popularity: 7, difficulty: 6, desc: "极简、机械、重复的电子舞曲。" },
  { name: "电子舞曲", en: "EDM", category: "电子", popularity: 9, difficulty: 5, desc: "面向大众的电子舞曲，drop 与音色设计。" },
  { name: "氛围电子", en: "Ambient", category: "电子", popularity: 5, difficulty: 4, desc: "营造氛围的电子音乐，弱化节奏。" },
  { name: "鼓打贝斯", en: "Drum & Bass", category: "电子", popularity: 6, difficulty: 7, desc: "高速碎拍与低沉贝斯线的电子风格。" },
  { name: "未来贝斯", en: "Future Bass", category: "电子", popularity: 7, difficulty: 5, desc: "明亮、甜美的电子风格，wobble 贝斯。" },

  // ===== 嘻哈 =====
  { name: "嘻哈", en: "Hip-Hop", category: "嘻哈", popularity: 9, difficulty: 5, desc: "说唱与节奏为核心的文化音乐形式。" },
  { name: "说唱", en: "Rap", category: "嘻哈", popularity: 9, difficulty: 5, desc: "以说唱为主体的音乐，节奏与押韵。" },
  { name: "陷阱说唱", en: "Trap", category: "嘻哈", popularity: 8, difficulty: 5, desc: "808 鼓机、hi-hat 滚奏的现代说唱。" },
  { name: "老派嘻哈", en: "Boom Bap", category: "嘻哈", popularity: 6, difficulty: 5, desc: "经典采样与硬核鼓点的老派说唱。" },

  // ===== 节奏布鲁斯/灵魂 =====
  { name: "节奏布鲁斯", en: "R&B", category: "节奏布鲁斯", popularity: 8, difficulty: 4, desc: "律动与和声见长的黑人音乐传统。" },
  { name: "灵魂乐", en: "Soul", category: "节奏布鲁斯", popularity: 7, difficulty: 5, desc: "情感充沛的演唱与福音和声。" },
  { name: "放克", en: "Funk", category: "节奏布鲁斯", popularity: 7, difficulty: 6, desc: "以律动为核心的舞曲性音乐。" },

  // ===== 爵士/布鲁斯 =====
  { name: "爵士", en: "Jazz", category: "爵士", popularity: 6, difficulty: 8, desc: "即兴与和声复杂性的音乐艺术。" },
  { name: "布鲁斯", en: "Blues", category: "爵士", popularity: 6, difficulty: 5, desc: "十二小节结构与蓝调音阶的根源音乐。" },
  { name: "融合爵士", en: "Jazz Fusion", category: "爵士", popularity: 5, difficulty: 9, desc: "爵士与摇滚、放克等融合。" },

  // ===== 其他 =====
  { name: "古典", en: "Classical", category: "其他", popularity: 5, difficulty: 9, desc: "西方古典音乐传统。" },
  { name: "雷鬼", en: "Reggae", category: "其他", popularity: 6, difficulty: 4, desc: "牙买加根源音乐，反拍律动。" },
  { name: "乡村", en: "Country", category: "其他", popularity: 5, difficulty: 4, desc: "美国根源音乐，叙事与弦乐。" },
  { name: "新世纪", en: "New Age", category: "其他", popularity: 5, difficulty: 4, desc: "冥想、治愈、氛围化的音乐。" },
  { name: "实验音乐", en: "Experimental", category: "其他", popularity: 3, difficulty: 9, desc: "打破常规的前卫探索。" },
  { name: "中国风", en: "Chinoiserie", category: "其他", popularity: 8, difficulty: 5, desc: "融合中国传统音乐元素的现代音乐。" },
  { name: "民乐", en: "Chinese Folk", category: "其他", popularity: 6, difficulty: 6, desc: "中国传统民族器乐。" },
  { name: "后朋克复兴", en: "Post-Punk Revival", category: "摇滚", popularity: 6, difficulty: 5, desc: "21 世纪对后朋克与独立摇滚的复兴。" },
];

// 风格大类（用于筛选）
window.STYLE_CATEGORIES = ["摇滚", "金属", "流行", "民谣", "电子", "嘻哈", "节奏布鲁斯", "爵士", "其他"];
