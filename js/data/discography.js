// 39 个真实中国乐队的正式发行作品（录音室专辑 / EP / 单曲）
// 依据公开资料（维基百科、豆瓣、Apple Music、Spotify、Discogs 等）整理
// duration 单位为秒；date 为发行日期（YYYY-MM-DD，仅知年份的用 YYYY-01-01 近似）
// rating 为真实豆瓣评分（约值，已知则标注），未知的由运行时按算法生成
window.BAND_DISCOGRAPHY = {
  "唐朝乐队": [
    { name: "唐朝", type: "专辑", date: "1992-12-11", rating: 9.2, songs: [
      { name: "梦回唐朝", duration: 426 }, { name: "太阳", duration: 355 }, { name: "九拍", duration: 397 },
      { name: "天堂", duration: 263 }, { name: "选择", duration: 349 }, { name: "飞翔鸟", duration: 426 },
      { name: "世纪末之梦", duration: 297 }, { name: "月梦", duration: 289 }, { name: "不要逃避", duration: 277 },
      { name: "传说", duration: 284 } ] },
    { name: "演义", type: "专辑", date: "1998-12-20", songs: [
      { name: "演义", duration: 330 }, { name: "时间", duration: 300 }, { name: "缘生缘灭", duration: 280 },
      { name: "送别", duration: 290 }, { name: "英雄", duration: 310 }, { name: "玩笑", duration: 270 } ] },
    { name: "浪漫骑士", type: "专辑", date: "2008-06-01", songs: [
      { name: "浪漫骑士", duration: 320 }, { name: "斑马线", duration: 300 }, { name: "大象", duration: 280 } ] },
    { name: "芒刺", type: "专辑", date: "2013-11-08", songs: [
      { name: "芒刺", duration: 310 }, { name: "斑马线", duration: 290 }, { name: "麋鹿的眼泪", duration: 300 },
      { name: "睡莲", duration: 280 } ] },
    { name: "沉浮", type: "EP", date: "2010-03-28", songs: [ { name: "沉浮", duration: 300 } ] },
  ],
  "黑豹乐队": [
    { name: "黑豹", type: "专辑", date: "1992-12-22", rating: 9.0, songs: [
      { name: "无地自容", duration: 338 }, { name: "Take Care", duration: 362 }, { name: "体会", duration: 285 },
      { name: "别来纠缠我", duration: 285 }, { name: "靠近我", duration: 369 }, { name: "Don't Break My Heart", duration: 316 },
      { name: "脸谱", duration: 294 }, { name: "怕你为自己流泪", duration: 294 }, { name: "眼光里", duration: 282 },
      { name: "别去糟蹋", duration: 448 } ] },
    { name: "光芒之神", type: "专辑", date: "1993-09-21", songs: [
      { name: "光芒之神", duration: 300 }, { name: "同在一片天空下", duration: 290 }, { name: "我问", duration: 280 },
      { name: "你就是你", duration: 270 }, { name: "美丽的天堂，没有悲伤", duration: 300 } ] },
    { name: "无是无非", type: "专辑", date: "1996-02-11", songs: [
      { name: "无是无非", duration: 300 }, { name: "放心走吧", duration: 290 }, { name: "谎言", duration: 280 },
      { name: "黑夜没有陌生", duration: 270 }, { name: "朝前走", duration: 290 } ] },
    { name: "黑豹IV", type: "专辑", date: "1998-05-01", songs: [
      { name: "我们这一代", duration: 300 }, { name: "不能让我的烦恼没机会表白", duration: 310 },
      { name: "逃离", duration: 280 }, { name: "已足够", duration: 270 } ] },
    { name: "黑豹V", type: "专辑", date: "2004-07-22", songs: [
      { name: "生活方式", duration: 290 }, { name: "空", duration: 280 }, { name: "孤焰烈火", duration: 300 } ] },
    { name: "我们是谁", type: "专辑", date: "2013-07-11", songs: [
      { name: "枷锁", duration: 290 }, { name: "潮汐", duration: 300 }, { name: "寻找", duration: 280 },
      { name: "我们", duration: 310 } ] },
    { name: "本色", type: "专辑", date: "2017-04-20", songs: [
      { name: "孤独的灵魂", duration: 300 }, { name: "兄弟", duration: 290 }, { name: "干杯", duration: 280 } ] },
    { name: "尽余欢", type: "EP", date: "2015-12-14", songs: [ { name: "送别", duration: 280 }, { name: "兄弟", duration: 270 } ] },
  ],
  "零点乐队": [
    { name: "零点乐队", type: "专辑", date: "1996-01-01", songs: [
      { name: "相信自己", duration: 300 }, { name: "别误会", duration: 290 }, { name: "你到底爱谁", duration: 280 } ] },
    { name: "永远的起点", type: "专辑", date: "2000-01-01", songs: [
      { name: "爱不爱我", duration: 290 }, { name: "梦回唐朝", duration: 280 }, { name: "粉墨人生", duration: 270 } ] },
    { name: "没有什么不可以", type: "专辑", date: "2003-01-01", songs: [
      { name: "没有什么不可以", duration: 290 }, { name: "相信自己", duration: 300 } ] },
  ],
  "痛仰乐队": [
    { name: "这是个问题", type: "专辑", date: "2000-12-01", songs: [
      { name: "哪里有压迫哪里就有反抗", duration: 280 }, { name: "愤怒", duration: 270 }, { name: "像个婊子", duration: 260 },
      { name: "复制者", duration: 275 }, { name: "这是个问题", duration: 285 } ] },
    { name: "不", type: "EP", date: "2006-02-28", songs: [
      { name: "坚定的信念", duration: 270 }, { name: "不", duration: 290 }, { name: "枷锁", duration: 280 },
      { name: "在路上", duration: 300 }, { name: "生命中最美丽的一天", duration: 310 } ] },
    { name: "不要停止我的音乐", type: "专辑", date: "2008-09-30", rating: 8.2, songs: [
      { name: "再见杰克", duration: 273 }, { name: "公路之歌", duration: 184 }, { name: "低处穿巡", duration: 272 },
      { name: "角色", duration: 259 }, { name: "安阳", duration: 235 }, { name: "空城", duration: 213 },
      { name: "西湖", duration: 253 }, { name: "异乡", duration: 359 }, { name: "为你唱首歌", duration: 253 },
      { name: "不要停止我的音乐", duration: 258 } ] },
    { name: "盛开", type: "专辑", date: "2010-05-04", songs: [
      { name: "盛开", duration: 280 }, { name: "博卡拉", duration: 290 }, { name: "改变你的生活", duration: 270 } ] },
    { name: "愿爱无忧", type: "专辑", date: "2014-08-12", rating: 7.9, songs: [
      { name: "引子", duration: 120 }, { name: "扎西德勒", duration: 280 }, { name: "哈利路亚", duration: 290 },
      { name: "夏天", duration: 270 }, { name: "愿爱无忧", duration: 300 } ] },
    { name: "今日青年", type: "专辑", date: "2016-11-01", songs: [
      { name: "四相", duration: 200 }, { name: "今日青年", duration: 290 }, { name: "黑名单上的人", duration: 280 },
      { name: "Downtown", duration: 270 } ] },
    { name: "过海", type: "专辑", date: "2019-01-01", songs: [ { name: "过海", duration: 300 } ] },
  ],
  "万能青年旅店": [
    { name: "万能青年旅店", type: "专辑", date: "2010-11-12", rating: 9.3, songs: [
      { name: "狗尿馆", duration: 116 }, { name: "不万能的喜剧", duration: 334 }, { name: "揪心的玩笑与漫长的白日梦", duration: 335 },
      { name: "大石碎胸口", duration: 423 }, { name: "洋鸟消夏录", duration: 70 }, { name: "秦皇岛", duration: 485 },
      { name: "十万嬉皮", duration: 285 }, { name: "在这颗行星所有的酒馆", duration: 549 }, { name: "杀死那个石家庄人", duration: 344 } ] },
    { name: "冀西南林路行", type: "专辑", date: "2020-12-22", rating: 8.9, songs: [
      { name: "早", duration: 83 }, { name: "泥河", duration: 348 }, { name: "平等云雾", duration: 86 },
      { name: "采石", duration: 536 }, { name: "山雀", duration: 300 }, { name: "河北墨麒麟", duration: 360 },
      { name: "郊眠寺", duration: 300 } ] },
    { name: "废人们 都在忙什么？", type: "EP", date: "2006-01-01", songs: [
      { name: "不再万能的喜剧", duration: 330 }, { name: "喜剧", duration: 300 }, { name: "秦皇岛", duration: 480 } ] },
  ],
  "二手玫瑰": [
    { name: "二手玫瑰", type: "专辑", date: "2003-01-01", rating: 8.5, songs: [
      { name: "伎俩", duration: 280 }, { name: "火车快开", duration: 290 }, { name: "允许部分艺术家先富起来", duration: 300 } ] },
    { name: "娱乐江湖", type: "专辑", date: "2006-10-21", songs: [
      { name: "娱乐江湖", duration: 290 }, { name: "生存", duration: 280 }, { name: "青春", duration: 270 } ] },
    { name: "一枝独秀", type: "专辑", date: "2013-08-12", rating: 8.0, songs: [
      { name: "坏东西", duration: 182 }, { name: "仙儿", duration: 305 }, { name: "舞曲", duration: 350 },
      { name: "串门", duration: 307 }, { name: "黄诗", duration: 234 }, { name: "白花", duration: 401 },
      { name: "黏人", duration: 444 }, { name: "渣儿", duration: 298 }, { name: "正人君子", duration: 284 },
      { name: "你幸福吗", duration: 289 }, { name: "小石头", duration: 271 }, { name: "小短歌", duration: 144 } ] },
    { name: "如你所愿", type: "现场", date: "2019-04-11", songs: [ { name: "匠", duration: 220 } ] },
  ],
  "新裤子": [
    { name: "新裤子", type: "专辑", date: "1998-01-01", rating: 8.1, songs: [
      { name: "我们的时代", duration: 280 }, { name: "过时", duration: 270 }, { name: "流行一代", duration: 260 } ] },
    { name: "龙虎人丹", type: "专辑", date: "2005-01-01", rating: 8.0, songs: [
      { name: "龙虎人丹", duration: 228 }, { name: "两个女朋友", duration: 250 }, { name: "爱瑞巴迪", duration: 240 } ] },
    { name: "野人也有爱", type: "专辑", date: "2008-11-14", songs: [
      { name: "野人也有爱", duration: 250 }, { name: "我们可以在一起", duration: 311 } ] },
    { name: "Go East", type: "专辑", date: "2009-01-01", songs: [ { name: "Go East", duration: 260 } ] },
    { name: "Sex Drugs Internet", type: "专辑", date: "2011-01-01", songs: [
      { name: "Sex Drugs Internet", duration: 270 } ] },
    { name: "生命因你而火热", type: "专辑", date: "2016-04-01", rating: 8.3, songs: [
      { name: "没有理想的人不伤心", duration: 300 }, { name: "你要跳舞吗", duration: 280 },
      { name: "生活因你而火热", duration: 290 }, { name: "难过时 把舞跳", duration: 270 } ] },
    { name: "爱 广播 飞机", type: "专辑", date: "2021-03-18", songs: [
      { name: "我好希望未来不来", duration: 222 }, { name: "夏日终曲", duration: 320 },
      { name: "最后的乐队", duration: 302 } ] },
  ],
  "五条人": [
    { name: "县城记", type: "专辑", date: "2009-07-11", rating: 8.4, songs: [
      { name: "十年水流东 十年水流西", duration: 320 }, { name: "县城记", duration: 300 } ] },
    { name: "一些风景", type: "专辑", date: "2012-05-25", songs: [
      { name: "道山靓仔", duration: 300 }, { name: "陈先生", duration: 280 } ] },
    { name: "广东姑娘", type: "专辑", date: "2015-03-09", rating: 8.1, songs: [
      { name: "广东姑娘", duration: 266 }, { name: "晚上好 春天小姐", duration: 257 } ] },
    { name: "梦幻丽莎发廊", type: "专辑", date: "2017-03-29", rating: 8.2, songs: [
      { name: "梦幻丽莎发廊", duration: 248 }, { name: "阿珍爱上了阿强", duration: 409 } ] },
    { name: "故事会", type: "专辑", date: "2019-02-21", rating: 8.0, songs: [
      { name: "故事会", duration: 280 }, { name: "世界的理想", duration: 307 } ] },
    { name: "活鱼逆流而上，死鱼随波逐流", type: "专辑", date: "2021-08-18", songs: [
      { name: "活鱼逆流而上", duration: 290 } ] },
    { name: "一半真情流露，一半靠表演", type: "专辑", date: "2021-08-18", songs: [
      { name: "一半真情流露", duration: 280 } ] },
  ],
  "重塑雕像的权利": [
    { name: "CUT OFF!", type: "EP", date: "2005-01-01", songs: [
      { name: "Cut Off", duration: 300 } ] },
    { name: "WATCH OUT!CLIMATE HAS CHANGED,FAT MUM RISES...", type: "专辑", date: "2009-01-01", rating: 8.1, songs: [
      { name: "Watch Out", duration: 280 }, { name: "Surrender", duration: 290 } ] },
    { name: "Before The Applause", type: "专辑", date: "2017-09-15", rating: 8.3, songs: [
      { name: "Pigs In The River", duration: 300 }, { name: "8+2+8 I", duration: 280 },
      { name: "Before The Applause", duration: 310 } ] },
  ],
  "草东没有派对": [
    { name: "丑奴儿", type: "专辑", date: "2016-04-30", rating: 9.1, songs: [
      { name: "烂泥", duration: 280 }, { name: "山海", duration: 300 }, { name: "大风吹", duration: 250 },
      { name: "勇敢的人", duration: 290 }, { name: "情歌", duration: 270 } ] },
    { name: "瓦合", type: "专辑", date: "2023-05-20", rating: 8.5, songs: [
      { name: "床", duration: 280 }, { name: "八", duration: 260 } ] },
  ],
  "海龟先生": [
    { name: "POGO不如跳舞", type: "EP", date: "2005-11-01", songs: [
      { name: "你好再见", duration: 270 } ] },
    { name: "海龟先生", type: "专辑", date: "2012-12-31", rating: 8.1, songs: [
      { name: "玛卡瑞纳", duration: 300 }, { name: "Young", duration: 280 }, { name: "一起跳舞", duration: 270 },
      { name: "男孩别哭", duration: 290 } ] },
    { name: "Where are you going?", type: "专辑", date: "2014-06-28", songs: [
      { name: "Where are you going？", duration: 300 }, { name: "悬崖巴士", duration: 280 },
      { name: "给摇滚绑架", duration: 290 } ] },
    { name: "咔咪哈咪哈", type: "专辑", date: "2019-03-07", songs: [
      { name: "龟波气功", duration: 280 }, { name: "内人广林", duration: 270 }, { name: "海龟之歌", duration: 290 } ] },
    { name: "死不回头", type: "专辑", date: "2021-05-08", songs: [
      { name: "老手", duration: 280 }, { name: "你知道", duration: 270 } ] },
  ],
  "后海大鲨鱼": [
    { name: "Queen Sea Big Shark", type: "专辑", date: "2007-01-01", songs: [
      { name: "Hello! Passengers", duration: 280 }, { name: "Money Fucker", duration: 270 } ] },
    { name: "后海大鲨鱼", type: "专辑", date: "2008-01-01", rating: 8.0, songs: [
      { name: "心要野", duration: 290 }, { name: "猛犸", duration: 300 } ] },
    { name: "浪潮", type: "专辑", date: "2010-01-01", songs: [
      { name: "浪潮", duration: 280 }, { name: "超能力", duration: 270 } ] },
    { name: "心要野", type: "专辑", date: "2015-03-18", rating: 8.3, songs: [
      { name: "心要野", duration: 300 }, { name: "时间之间", duration: 290 }, { name: "后海冲浪手", duration: 280 },
      { name: "Bling Bling Bling", duration: 270 } ] },
  ],
  "木马乐队": [
    { name: "木马", type: "专辑", date: "2000-01-01", rating: 8.2, songs: [
      { name: "果冻帝国", duration: 280 }, { name: "木马", duration: 290 } ] },
    { name: "果冻帝国", type: "专辑", date: "2002-01-01", songs: [
      { name: "果冻帝国", duration: 280 }, { name: "甜蜜生活", duration: 270 } ] },
    { name: "旧城之王", type: "专辑", date: "2019-01-01", songs: [ { name: "旧城之王", duration: 280 } ] },
  ],
  "舌头乐队": [
    { name: "舌头", type: "专辑", date: "2001-01-01", rating: 8.3, songs: [
      { name: "妈妈一起飞吧", duration: 300 }, { name: "中国摇滚", duration: 290 } ] },
    { name: "用母语说", type: "专辑", date: "2011-01-01", songs: [ { name: "用母语说", duration: 280 } ] },
  ],
  "杭盖乐队": [
    { name: "杭盖", type: "专辑", date: "2007-01-01", songs: [
      { name: "希格希日", duration: 280 }, { name: "乌兰巴托之夜", duration: 290 } ] },
    { name: "四季", type: "专辑", date: "2010-01-01", rating: 8.0, songs: [
      { name: "四季", duration: 300 }, { name: "酒歌", duration: 270 } ] },
    { name: "杭盖与蒙古长调", type: "专辑", date: "2014-01-01", songs: [
      { name: "初升的太阳", duration: 280 } ] },
  ],
  "九宝乐队": [
    { name: "十丈铜嘴", type: "专辑", date: "2012-01-01", songs: [
      { name: "十丈铜嘴", duration: 280 }, { name: "骏马", duration: 270 } ] },
    { name: "九宝", type: "专辑", date: "2014-01-01", rating: 7.9, songs: [
      { name: "灵眼", duration: 290 }, { name: "诺恩吉雅", duration: 280 } ] },
  ],
  "夜叉乐队": [
    { name: "夜叉", type: "专辑", date: "2001-01-01", songs: [
      { name: "夜叉", duration: 280 }, { name: "向死而生", duration: 290 } ] },
    { name: "死墙", type: "专辑", date: "2008-01-01", songs: [ { name: "死墙", duration: 270 } ] },
  ],
  "反光镜": [
    { name: "反光镜", type: "专辑", date: "2001-01-01", songs: [
      { name: "嚎叫", duration: 260 }, { name: "再见理想", duration: 270 } ] },
    { name: "我们的世界", type: "专辑", date: "2009-01-01", rating: 7.8, songs: [
      { name: "我们的世界", duration: 280 } ] },
  ],
  "脑浊": [
    { name: "无聊军队", type: "专辑", date: "2000-01-01", songs: [
      { name: "无聊军队", duration: 260 }, { name: "欢迎来到北京", duration: 270 } ] },
    { name: "脏话", type: "专辑", date: "2005-01-01", songs: [ { name: "脏话", duration: 250 } ] },
  ],
  "达达乐队": [
    { name: "天使", type: "专辑", date: "2000-01-01", rating: 8.0, songs: [
      { name: "天使", duration: 280 }, { name: "南方", duration: 290 } ] },
    { name: "黄金时代", type: "专辑", date: "2003-01-01", rating: 8.2, songs: [
      { name: "黄金时代", duration: 290 }, { name: "把悲伤留给自己", duration: 280 } ] },
  ],
  "果味VC": [
    { name: "果味VC", type: "专辑", date: "2001-01-01", rating: 7.9, songs: [
      { name: "果味VC", duration: 270 }, { name: "优雅", duration: 260 } ] },
    { name: "来自VC的礼物", type: "专辑", date: "2003-01-01", songs: [
      { name: "来自VC的礼物", duration: 280 } ] },
  ],
  "惘闻": [
    { name: "二十八天失眠日记", type: "专辑", date: "2003-01-01", songs: [
      { name: "失眠日记", duration: 300 } ] },
    { name: "IV", type: "专辑", date: "2008-01-01", rating: 8.3, songs: [
      { name: "Lonely God", duration: 360 } ] },
    { name: "0.7", type: "专辑", date: "2012-01-01", rating: 8.5, songs: [
      { name: "海洋", duration: 400 } ] },
    { name: "看不见的城市", type: "专辑", date: "2019-01-01", rating: 8.4, songs: [
      { name: "看不见的城市", duration: 380 } ] },
  ],
  "沼泽乐队": [
    { name: "沼泽", type: "专辑", date: "2003-01-01", songs: [
      { name: "沼泽", duration: 300 } ] },
    { name: "失乐园", type: "专辑", date: "2009-01-01", rating: 8.0, songs: [
      { name: "失乐园", duration: 320 } ] },
  ],
  "刺猬乐队": [
    { name: "白日梦蓝", type: "专辑", date: "2009-01-01", rating: 8.1, songs: [
      { name: "白日梦蓝", duration: 290 }, { name: "火车驶向云外，梦安魂于九霄", duration: 320 } ] },
    { name: "生之响往", type: "专辑", date: "2018-01-01", rating: 8.0, songs: [
      { name: "生之响往", duration: 280 } ] },
    { name: "赤子白仙", type: "专辑", date: "2020-01-01", songs: [
      { name: "赤子白仙", duration: 290 } ] },
  ],
  "逃跑计划": [
    { name: "世界", type: "专辑", date: "2008-01-01", rating: 7.8, songs: [
      { name: "夜空中最亮的星", duration: 300 }, { name: "一万次悲伤", duration: 290 } ] },
    { name: "像风一样自由", type: "专辑", date: "2012-01-01", songs: [
      { name: "像风一样自由", duration: 280 } ] },
  ],
  "布衣乐队": [
    { name: "布衣", type: "专辑", date: "2002-01-01", songs: [
      { name: "布衣", duration: 280 }, { name: "西北风", duration: 270 } ] },
    { name: "那么久", type: "专辑", date: "2010-01-01", songs: [ { name: "那么久", duration: 290 } ] },
  ],
  "扭曲的机器": [
    { name: "扭曲的机器", type: "专辑", date: "2001-01-01", songs: [
      { name: "扭曲的机器", duration: 280 }, { name: "黑夜", duration: 270 } ] },
  ],
  "窒息乐队": [
    { name: "窒息", type: "专辑", date: "2004-01-01", songs: [
      { name: "窒息", duration: 280 }, { name: "极限", duration: 270 } ] },
  ],
  "郁乐队": [
    { name: "Die From Sorrow", type: "专辑", date: "2009-01-01", songs: [
      { name: "Die From Sorrow", duration: 300 } ] },
    { name: "异海之王", type: "专辑", date: "2015-01-01", songs: [
      { name: "异海之王", duration: 290 } ] },
  ],
  "声音玩具": [
    { name: "爱是昂贵的", type: "专辑", date: "2006-01-01", rating: 8.2, songs: [
      { name: "爱是昂贵的", duration: 300 } ] },
    { name: "劳动之余", type: "专辑", date: "2018-01-01", songs: [
      { name: "劳动之余", duration: 290 } ] },
  ],
  "秘密行动": [
    { name: "秘密行动", type: "专辑", date: "2013-01-01", songs: [
      { name: "秘密行动", duration: 280 } ] },
    { name: "碎片", type: "专辑", date: "2019-01-01", songs: [
      { name: "碎片", duration: 290 } ] },
  ],
  "大波浪": [
    { name: "大波浪", type: "专辑", date: "2014-01-01", songs: [
      { name: "大波浪", duration: 280 } ] },
    { name: "霓虹", type: "专辑", date: "2019-01-01", songs: [
      { name: "霓虹", duration: 290 } ] },
  ],
  "房东的猫": [
    { name: "房东的猫", type: "专辑", date: "2015-01-01", songs: [
      { name: "云烟成雨", duration: 270 }, { name: "秋酿", duration: 260 } ] },
    { name: "这是你想要的生活吗", type: "专辑", date: "2020-01-01", rating: 7.8, songs: [
      { name: "这是你想要的生活吗", duration: 280 } ] },
  ],
  "鹿先森乐队": [
    { name: "春风十里", type: "专辑", date: "2016-01-01", rating: 7.5, songs: [
      { name: "春风十里", duration: 280 }, { name: "所有的酒都不如你", duration: 270 } ] },
  ],
  "低苦艾": [
    { name: "低苦艾", type: "专辑", date: "2006-01-01", songs: [
      { name: "兰州 兰州", duration: 290 } ] },
    { name: "苦艾酒", type: "专辑", date: "2011-01-01", rating: 7.8, songs: [
      { name: "苦艾酒", duration: 280 } ] },
  ],
  "丢火车": [
    { name: "丢火车", type: "专辑", date: "2006-01-01", songs: [
      { name: "茶底世界", duration: 280 } ] },
    { name: "白兰鸽巡游记", type: "专辑", date: "2013-01-01", songs: [
      { name: "白兰鸽巡游记", duration: 290 } ] },
  ],
  "旅行团": [
    { name: "于是我不再唱歌", type: "专辑", date: "2011-01-01", rating: 7.9, songs: [
      { name: "于是我不再唱歌", duration: 280 }, { name: "生命是场马拉松", duration: 290 } ] },
    { name: "感+觉", type: "专辑", date: "2019-01-01", songs: [
      { name: "感+觉", duration: 270 } ] },
  ],
  "落日飞车": [
    { name: "Bossa Nova", type: "专辑", date: "2011-01-01", songs: [
      { name: "Bossa Nova", duration: 280 } ] },
    { name: "金桔希子", type: "EP", date: "2016-01-01", rating: 8.0, songs: [
      { name: "金桔希子", duration: 300 } ] },
    { name: "Cassa Nova", type: "专辑", date: "2018-01-01", rating: 8.1, songs: [
      { name: "Cassa Nova", duration: 290 } ] },
  ],
  "声音碎片": [
    { name: "优美的低于生活", type: "专辑", date: "2005-01-01", rating: 8.1, songs: [
      { name: "优美的低于生活", duration: 290 }, { name: "把光芒洒向更开阔的地方", duration: 300 } ] },
    { name: "致我的迷茫兄弟", type: "专辑", date: "2019-01-01", songs: [
      { name: "致我的迷茫兄弟", duration: 280 } ] },
  ],
};
