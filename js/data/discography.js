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
       { name: "异乡客", duration: 667 }, { name: "路桥", duration: 489 }, { name: "你的幻境", duration: 277 },
       { name: "黑色幽默", duration: 262 }, { name: "演义", duration: 584 }, { name: "时间", duration: 421 },
       { name: "缘生缘灭", duration: 492 }, { name: "童年", duration: 299 }, { name: "时间 (Live)", duration: 419 },
       { name: "送别", duration: 268 } ] },
    { name: "浪漫骑士", type: "专辑", date: "2008-06-13", songs: [
       { name: "封禅祭", duration: 413 }, { name: "承诺", duration: 316 }, { name: "追溯", duration: 300 },
       { name: "绝望致谎言", duration: 281 }, { name: "大风歌", duration: 381 }, { name: "快乐的忧愁", duration: 365 },
       { name: "浪漫骑士", duration: 392 }, { name: "嚎叫列车", duration: 369 }, { name: "酒狂", duration: 287 },
       { name: "路", duration: 305 } ] },
    { name: "芒刺", type: "专辑", date: "2013-11-08", songs: [
       { name: "异乡客岚池", duration: 463 }, { name: "紫叶", duration: 308 }, { name: "斑马线", duration: 375 },
       { name: "沉浮", duration: 357 }, { name: "大象不抱怨", duration: 307 }, { name: "麋鹿的眼泪", duration: 281 },
       { name: "梅花赐", duration: 245 }, { name: "睡莲", duration: 495 }, { name: "响尾蛇", duration: 125 } ] },
    { name: "沉浮", type: "EP", date: "2010-03-28", songs: [ { name: "沉浮", duration: 300 } ] },
  ],
  "黑豹乐队": [
    { name: "黑豹", type: "专辑", date: "1992-12-22", rating: 9.0, songs: [
      { name: "无地自容", duration: 338 }, { name: "Take Care", duration: 362 }, { name: "体会", duration: 285 },
      { name: "别来纠缠我", duration: 285 }, { name: "靠近我", duration: 369 }, { name: "Don't Break My Heart", duration: 316 },
      { name: "脸谱", duration: 294 }, { name: "怕你为自己流泪", duration: 294 }, { name: "眼光里", duration: 282 },
      { name: "别去糟蹋", duration: 448 } ] },
    { name: "光芒之神", type: "专辑", date: "1993-09-21", songs: [
       { name: "光芒之神", duration: 318 }, { name: "同在一片天空下", duration: 322 }, { name: "我问", duration: 291 },
       { name: "你就是你", duration: 279 }, { name: "美丽的天堂 没有悲伤", duration: 394 }, { name: "海市蜃楼", duration: 395 },
       { name: "渴望的地方", duration: 356 }, { name: "我不想说", duration: 313 }, { name: "绿色劫难", duration: 344 } ] },
    { name: "无是无非", type: "专辑", date: "1996-02-11", songs: [
       { name: "无是无非", duration: 350 }, { name: "放心走吧", duration: 377 }, { name: "谎言", duration: 237 },
       { name: "天外有天", duration: 311 }, { name: "黑夜没有陌生", duration: 256 }, { name: "谁最爱我", duration: 336 },
       { name: "为所有爱我们的人", duration: 390 }, { name: "不要指望我", duration: 255 }, { name: "呼唤", duration: 325 },
       { name: "朝前走", duration: 316 } ] },
    { name: "黑豹IV", type: "专辑", date: "1998-05-01", songs: [
      { name: "我们这一代", duration: 300 }, { name: "不能让我的烦恼没机会表白", duration: 310 },
      { name: "逃离", duration: 280 }, { name: "已足够", duration: 270 } ] },
    { name: "黑豹V", type: "专辑", date: "2004-07-22", songs: [
       { name: "生活方式", duration: 236 }, { name: "空", duration: 245 }, { name: "孤焰烈火", duration: 303 },
       { name: "I Don't Want To Say Goodbye", duration: 322 }, { name: "错觉", duration: 336 },
       { name: "未知的世纪", duration: 260 }, { name: "旋转", duration: 280 }, { name: "继续地飞", duration: 366 },
       { name: "透明的影子", duration: 274 }, { name: "照亮我心", duration: 249 } ] },
    { name: "我们是谁", type: "专辑", date: "2013-07-11", songs: [
       { name: "枷锁", duration: 225 }, { name: "潮汐", duration: 251 }, { name: "寻找", duration: 235 },
       { name: "不再沉默", duration: 215 }, { name: "虎口", duration: 214 }, { name: "洒脱", duration: 237 },
       { name: "一个人", duration: 264 }, { name: "奔跑", duration: 224 }, { name: "It's My Time", duration: 213 },
       { name: "我们", duration: 292 }, { name: "一个人 (钢琴版)", duration: 136 } ] },
    { name: "本色", type: "专辑", date: "2017-04-20", songs: [
      { name: "How do we find a way", duration: 240 }, { name: "键盘·狭", duration: 221 }, { name: "孤独的灵魂", duration: 246 },
      { name: "炙热", duration: 187 }, { name: "Back to rock", duration: 231 }, { name: "低头士", duration: 140 },
      { name: "无畏", duration: 197 }, { name: "较量", duration: 196 }, { name: "战", duration: 179 },
      { name: "干杯", duration: 222 }, { name: "放不开你", duration: 230 }, { name: "兄弟", duration: 210 } ] },
    { name: "尽余欢", type: "EP", date: "2015-12-14", songs: [ { name: "送别", duration: 280 }, { name: "兄弟", duration: 270 } ] },
  ],
  "零点乐队": [
    { name: "别误会", type: "专辑", date: "1995-12-01", rating: 7.8, songs: [
       { name: "站起来", duration: 266 }, { name: "承受", duration: 322 }, { name: "别误会", duration: 324 },
       { name: "晕了醒了", duration: 323 }, { name: "爱的谎言", duration: 357 }, { name: "Don't Cry", duration: 376 },
       { name: "挥挥手", duration: 282 }, { name: "一座桥梁", duration: 341 }, { name: "送亲歌", duration: 528 } ] },
    { name: "永恒的起点", type: "专辑", date: "1997-01-01", songs: [
       { name: "放弃", duration: 310 }, { name: "别让我离开你", duration: 271 }, { name: "爱不爱我", duration: 329 },
       { name: "面具", duration: 309 }, { name: "永恒的起点", duration: 325 }, { name: "共同的家", duration: 391 },
       { name: "一切都会好", duration: 356 }, { name: "I am sorry 别误会", duration: 310 }, { name: "过去", duration: 386 } ] },
    { name: "每一夜每一天", type: "专辑", date: "1998-01-01", songs: [
       { name: "粉墨人生", duration: 222 }, { name: "回心转意", duration: 350 }, { name: "该让我如何爱你", duration: 281 },
       { name: "别和他一样", duration: 237 }, { name: "放开我", duration: 261 }, { name: "离开", duration: 307 },
       { name: "每一夜 每一天", duration: 271 }, { name: "燃烧", duration: 210 }, { name: "睁开你的双眼", duration: 221 } ] },
    { name: "00:00:00", type: "专辑", date: "1999-09-21", songs: [
       { name: "无依无靠", duration: 258 }, { name: "等你把梦做完", duration: 278 }, { name: "爱太难", duration: 297 },
       { name: "回到从前", duration: 269 }, { name: "记忆中的天空", duration: 309 }, { name: "Bar Street", duration: 276 },
       { name: "往日", duration: 300 }, { name: "永远不说再见", duration: 306 }, { name: "梦", duration: 379 } ] },
    { name: "没有什么不可以", type: "专辑", date: "2002-01-20", songs: [
       { name: "Don't Runaway", duration: 236 }, { name: "没有什么不可以", duration: 301 }, { name: "飘", duration: 228 },
       { name: "冒险家", duration: 262 }, { name: "相信自己", duration: 213 }, { name: "梦游", duration: 303 },
       { name: "我要", duration: 303 }, { name: "好好过吧", duration: 218 }, { name: "战胜自己", duration: 257 } ] },
    { name: "越来越", type: "专辑", date: "2003-09-01", songs: [
       { name: "从零开始", duration: 251 }, { name: "越来越", duration: 252 }, { name: "你的爱给了谁", duration: 250 },
       { name: "无处可逃", duration: 218 }, { name: "玩够了没有", duration: 330 }, { name: "祝福", duration: 333 },
       { name: "分手一周年", duration: 244 }, { name: "说声谢谢", duration: 223 }, { name: "怎么过", duration: 253 },
       { name: "跟我跳起来", duration: 268 } ] },
    { name: "风雷动", type: "专辑", date: "2005-01-01", songs: [
       { name: "打虎上山", duration: 162 }, { name: "让我们荡起双桨", duration: 210 }, { name: "襟裳岬", duration: 302 },
       { name: "天上掉下林妹妹", duration: 173 }, { name: "多谢了", duration: 222 }, { name: "谁说女子不如男", duration: 175 },
       { name: "牧歌", duration: 230 }, { name: "希望的田野", duration: 250 }, { name: "跟着感觉走", duration: 226 },
       { name: "过了今天会永远", duration: 263 } ] },
    { name: "多么爱你，你知道吗？！", type: "专辑", date: "2014-09-17", songs: [
       { name: "相信我", duration: 285 }, { name: "多么爱你", duration: 297 }, { name: "当思念变成回忆", duration: 297 },
       { name: "无论我走到哪里总会想起你", duration: 235 }, { name: "好寂寞", duration: 340 }, { name: "爱不离", duration: 307 },
       { name: "冲出霾伏", duration: 306 }, { name: "零点快乐", duration: 258 }, { name: "我曾以为", duration: 286 } ] },
    { name: "我还爱着你", type: "专辑", date: "2016-08-01", songs: [
       { name: "我还爱着你", duration: 265 }, { name: "欲望 付出", duration: 262 }, { name: "唱一首歌给所有的朋友", duration: 283 },
       { name: "永远一起走", duration: 187 }, { name: "救赎", duration: 312 }, { name: "想你2016", duration: 272 },
       { name: "风暴", duration: 203 }, { name: "一切会好的", duration: 284 }, { name: "Flying Free", duration: 158 } ] },
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
       { name: "盛开", duration: 188 }, { name: "博卡拉", duration: 252 }, { name: "改变你的生活", duration: 227 },
       { name: "最后一班列车", duration: 265 }, { name: "空隙", duration: 289 }, { name: "生命中最美丽的一天", duration: 325 } ] },
    { name: "愿爱无忧", type: "专辑", date: "2014-08-12", rating: 7.9, songs: [
      { name: "引子", duration: 120 }, { name: "扎西德勒", duration: 280 }, { name: "哈利路亚", duration: 290 },
      { name: "夏天", duration: 270 }, { name: "行星消失的夜空", duration: 300 }, { name: "戴着镣铐起舞", duration: 280 },
      { name: "汪洋中的一条船", duration: 290 }, { name: "太阳照常升起", duration: 270 }, { name: "野歌", duration: 280 },
      { name: "美丽新世界", duration: 290 }, { name: "两个人的假期", duration: 270 }, { name: "思疆调", duration: 260 },
      { name: "愿爱无忧", duration: 300 } ] },
    { name: "今日青年", type: "专辑", date: "2016-11-01", songs: [
       { name: "四相", duration: 309 }, { name: "今日青年", duration: 224 }, { name: "黑名单上的人", duration: 218 },
       { name: "黄皮肤的吉普赛", duration: 192 }, { name: "冲锋队", duration: 209 }, { name: "自由吧电台", duration: 331 },
       { name: "Downtown", duration: 225 }, { name: "支离", duration: 397 }, { name: "如期", duration: 250 },
       { name: "午夜芭蕾", duration: 263 }, { name: "好梦", duration: 350 } ] },
    { name: "过海", type: "专辑", date: "2019-12-16", songs: [
       { name: "Morning Espresso", duration: 240 }, { name: "Rosemary", duration: 421 },
       { name: "Mirage", duration: 456 }, { name: "Ethereal", duration: 381 }, { name: "Wandering", duration: 289 },
       { name: "White Dew", duration: 243 }, { name: "Highland", duration: 450 }, { name: "Jambo", duration: 328 },
       { name: "Nightlife", duration: 426 }, { name: "Melody of the Rain", duration: 339 } ] },
  ],
  "万能青年旅店": [
    { name: "万能青年旅店", type: "专辑", date: "2010-11-12", rating: 9.3, songs: [
      { name: "狗尿馆", duration: 116 }, { name: "不万能的喜剧", duration: 334 }, { name: "揪心的玩笑与漫长的白日梦", duration: 335 },
      { name: "大石碎胸口", duration: 423 }, { name: "洋鸟消夏录", duration: 70 }, { name: "秦皇岛", duration: 485 },
      { name: "十万嬉皮", duration: 285 }, { name: "在这颗行星所有的酒馆", duration: 549 }, { name: "杀死那个石家庄人", duration: 344 } ] },
    { name: "冀西南林路行", type: "专辑", date: "2020-12-22", rating: 8.9, songs: [
       { name: "冀西南林路行 (专辑全长)", duration: 0 }, { name: "早", duration: 83 }, { name: "泥河", duration: 348 },
       { name: "平等雲霧", duration: 86 }, { name: "採石", duration: 536 }, { name: "山雀", duration: 198 },
       { name: "繞越", duration: 163 }, { name: "河北墨麒麟", duration: 688 }, { name: "郊眠寺", duration: 580 } ] },
    { name: "废人们 都在忙什么？", type: "EP", date: "2006-01-01", songs: [
      { name: "不再万能的喜剧", duration: 330 }, { name: "喜剧", duration: 300 }, { name: "秦皇岛", duration: 480 } ] },
  ],
  "二手玫瑰": [
    { name: "二手玫瑰", type: "专辑", date: "2003-01-01", rating: 8.5, songs: [
       { name: "伎俩", duration: 257 }, { name: "火车快开", duration: 347 }, { name: "允许部分艺术家先富起来", duration: 271 },
       { name: "征婚启示", duration: 288 }, { name: "招安", duration: 384 }, { name: "采花", duration: 269 },
       { name: "因为所以", duration: 247 }, { name: "嫂子颂", duration: 341 }, { name: "公益歌曲", duration: 212 },
       { name: "好花红", duration: 423 } ] },
    { name: "娱乐江湖", type: "专辑", date: "2006-10-17", songs: [
       { name: "狼心狗肺", duration: 262 }, { name: "娱乐江湖", duration: 303 }, { name: "E时代桃园", duration: 263 },
       { name: "夜深了", duration: 266 }, { name: "感觉错了", duration: 245 }, { name: "起飞", duration: 286 },
       { name: "命运", duration: 227 }, { name: "跳大神", duration: 299 }, { name: "可是我还是在歌唱", duration: 197 },
       { name: "春天的故事", duration: 442 } ] },
    { name: "一枝独秀", type: "专辑", date: "2013-08-12", rating: 8.0, songs: [
       { name: "坏东西 (同期录音)", duration: 182 }, { name: "舞曲", duration: 350 }, { name: "仙儿", duration: 304 },
       { name: "串门 (致2012) (致2012)", duration: 307 }, { name: "黄诗", duration: 234 },
       { name: "白花 (致昂山素季)", duration: 401 }, { name: "黏人", duration: 444 }, { name: "渣儿 (仙落南城版)", duration: 298 },
       { name: "正人君子", duration: 284 }, { name: "你幸福吗", duration: 289 },
       { name: "小石头（致已故鼓手张越） (致已故鼓手张越)", duration: 271 }, { name: "小短歌 (同期录音)", duration: 144 } ] },
    { name: "如你所愿", type: "现场", date: "2019-04-11", songs: [ { name: "匠", duration: 220 } ] },
  ],
  "新裤子": [
    { name: "新裤子", type: "专辑", date: "1998-01-01", rating: 8.1, songs: [
       { name: "I'm OK", duration: 139 }, { name: "我们的时代", duration: 162 }, { name: "嘿！你", duration: 136 },
       { name: "新的恋爱", duration: 175 }, { name: "我不想失去你", duration: 173 }, { name: "爱情催泪弹", duration: 89 },
       { name: "你是我的雷蒙斯", duration: 128 }, { name: "爱", duration: 172 }, { name: "别对我说失去了Baby", duration: 195 },
       { name: "每一天", duration: 178 }, { name: "我是一个服务员", duration: 210 }, { name: "来来去去", duration: 98 },
       { name: "猴子", duration: 121 }, { name: "过时", duration: 222 }, { name: "新裤子 (MIX)", duration: 119 } ] },
    { name: "龙虎人丹", type: "专辑", date: "2005-12-01", rating: 8.2, songs: [
       { name: "你就是我的明星", duration: 148 }, { name: "Bye Bye Disco", duration: 305 }, { name: "两个男朋友", duration: 204 },
       { name: "神秘的香波", duration: 233 }, { name: "龙虎人丹", duration: 227 }, { name: "需要爱", duration: 248 },
       { name: "Love Brings Me Home", duration: 292 }, { name: "爱瑞巴迪", duration: 176 },
       { name: "我想她", duration: 215 }, { name: "御宅", duration: 306 } ] },
    { name: "野人也有爱", type: "专辑", date: "2008-11-14", songs: [
       { name: "北海怪兽", duration: 192 }, { name: "金色偶像", duration: 198 }, { name: "两个女朋友", duration: 216 },
       { name: "大熊猫", duration: 153 }, { name: "分裂", duration: 202 }, { name: "著名导演", duration: 149 },
       { name: "囍", duration: 155 }, { name: "伤心招待所", duration: 280 }, { name: "Not Too Apart", duration: 168 },
       { name: "隔离", duration: 194 }, { name: "我们可以在一起", duration: 310 } ] },
    { name: "Go East", type: "专辑", date: "2009-01-01", songs: [
       { name: "Go East", duration: 246 }, { name: "野人也有爱", duration: 234 }, { name: "我爱你", duration: 313 },
       { name: "我不想失去你", duration: 168 }, { name: "御宅", duration: 280 }, { name: "爱带我回家", duration: 228 },
       { name: "计算机", duration: 223 }, { name: "猴子", duration: 264 }, { name: "我们不能在一起", duration: 278 },
       { name: "Bye Bye Disco (SLOW BYE VERSION)", duration: 373 } ] },
    { name: "Sex Drugs Internet", type: "专辑", date: "2011-01-01", songs: [
       { name: "The Song Is Not For You", duration: 310 }, { name: "你还记得那个电影演员吗？", duration: 245 },
       { name: "不放开", duration: 127 }, { name: "总有一天我会欺骗你", duration: 201 },
       { name: "Sex Drugs Internet", duration: 192 }, { name: "以眼杀人", duration: 159 },
       { name: "After Party", duration: 163 }, { name: "我不想模仿你", duration: 205 },
       { name: "I'm Not Gay", duration: 200 }, { name: "别再问我什么是迪斯科", duration: 197 },
       { name: "两个女孩的无声对话", duration: 306 }, { name: "I'm OK (Bonus Track)", duration: 139 },
       { name: "我们的时代 (Bonus Track)", duration: 162 } ] },
    { name: "生命因你而火热", type: "专辑", date: "2016-04-01", rating: 8.3, songs: [
       { name: "你要跳舞吗", duration: 193 }, { name: "我们最好的时光 就是现在", duration: 293 },
       { name: "没有理想的人不伤心", duration: 341 }, { name: "每一次我们开始争吵", duration: 234 }, { name: "生活因你而火热", duration: 291 },
       { name: "难过时 把舞跳", duration: 253 }, { name: "关于夜晚和失眠的世界", duration: 347 },
       { name: "没有你的旅途 没有意义", duration: 245 }, { name: "在我死去之前", duration: 205 },
       { name: "走在什刹海的冰面上", duration: 276 } ] },
    { name: "爱 广播 飞机", type: "专辑", date: "2021-03-18", songs: [
       { name: "每次相聚都是为了分离", duration: 135 }, { name: "爱 广播 飞机", duration: 162 }, { name: "除了你我一无所有", duration: 247 },
       { name: "迷人的你", duration: 214 }, { name: "散步到夏宫", duration: 214 }, { name: "你都忘了你有多美", duration: 186 },
       { name: "我好希望未来不来", duration: 222 }, { name: "夏日终曲", duration: 320 }, { name: "风向哪里去", duration: 329 },
       { name: "戏中人", duration: 255 }, { name: "最后的乐队", duration: 302 } ] },
  ],
  "五条人": [
    { name: "县城记", type: "专辑", date: "2009-07-11", rating: 8.4, songs: [
      { name: "十年水流东 十年水流西", duration: 285 }, { name: "道山靓仔", duration: 328 },
      { name: "倒港纸", duration: 260 }, { name: "乐乐哭哭", duration: 184 },
      { name: "踏架脚车牵条猪", duration: 367 }, { name: "李阿伯", duration: 446 },
      { name: "梦想化工厂", duration: 244 }, { name: "问题出现我再告诉大家", duration: 213 },
      { name: "童年往事", duration: 310 }, { name: "绿苍苍", duration: 219 },
      { name: "阿炳耀", duration: 292 }, { name: "十年水流东 十年水流西（天合原始版）", duration: 218 } ] },
    { name: "一些风景", type: "专辑", date: "2012-05-25", songs: [
      { name: "曹操你别怕", duration: 270 }, { name: "抄电表", duration: 260 }, { name: "莫怪你老爹", duration: 280 },,
      { name: "酒鬼猪哥伯", duration: 250 }, { name: "彭啊湃", duration: 300 }, { name: "陈先生", duration: 280 },,
      { name: "清明过纸", duration: 265 }, { name: "两顿饱", duration: 240 }, { name: "上县城", duration: 255 },,
      { name: "做梦", duration: 270 }, { name: "大会", duration: 250 }, { name: "世情", duration: 260 },,
      { name: "收冬", duration: 245 }, { name: "城市找猪", duration: 280 }, { name: "踏架脚车牵条猪(2012)", duration: 367 },,
      { name: "鲜花在岸上开", duration: 300 }, { name: "含叭哩细", duration: 240 }, { name: "雨来淋秀才", duration: 255 },,
      { name: "隆啊隆，骑马去海丰", duration: 270 }, { name: "一些风景", duration: 290 }, { name: "海风", duration: 290 } ] },
    { name: "广东姑娘", type: "专辑", date: "2015-03-09", rating: 8.1, songs: [
      { name: "海风", duration: 280 }, { name: "心肝痛", duration: 270 }, { name: "广东姑娘", duration: 266 },
      { name: "走鬼", duration: 280 }, { name: "我的头发就是这样被吹乱的啊", duration: 290 }, { name: "像将军那样喝酒", duration: 270 },
      { name: "龙哥有真爱", duration: 280 }, { name: "东莞的月亮", duration: 270 }, { name: "我哈你", duration: 260 },
      { name: "晚上好，春天小姐", duration: 257 }, { name: "猪母上山咬老虎", duration: 280 }, { name: "美丽漂亮，英俊潇洒", duration: 270 },
      { name: "请到老祖宗", duration: 280 } ] },
    { name: "梦幻丽莎发廊", type: "专辑", date: "2017-03-29", rating: 8.2, songs: [
      { name: "初恋", duration: 292 }, { name: "热带", duration: 259 }, { name: "石牌桥", duration: 210 },,
      { name: "有所追求", duration: 182 }, { name: "阿虎", duration: 196 }, { name: "梦幻丽莎发廊", duration: 249 },,
      { name: "柔河里", duration: 200 }, { name: "秧歌舞", duration: 191 }, { name: "很多很多", duration: 264 },,
      { name: "九条人", duration: 148 }, { name: "阿珍爱上了阿强", duration: 409 },,
      { name: "楼房来四散起 路不见狗相连", duration: 147 } ] },
    { name: "故事会", type: "专辑", date: "2019-02-21", rating: 8.0, songs: [
      { name: "仙女", duration: 260 }, { name: "小燕子", duration: 240 }, { name: "烂尾楼", duration: 270 },,
      { name: "匈奴王", duration: 250 }, { name: "深圳的街头", duration: 280 }, { name: "阿琳娜", duration: 260 },,
      { name: "喜鹊", duration: 240 }, { name: "老鼠影", duration: 255 }, { name: "最寒冷的一天", duration: 270 },,
      { name: "满天神佛请来保庇我", duration: 260 }, { name: "马白草", duration: 250 },,
      { name: "深圳的街头(卡拉OK)", duration: 280 } ] },
    { name: "活鱼逆流而上，死鱼随波逐流", type: "专辑", date: "2021-08-18", songs: [
      { name: "南方恋曲", duration: 260 }, { name: "左车道", duration: 270 }, { name: "越南", duration: 250 },,
      { name: "他把反话正面讲", duration: 265 }, { name: "活生生的生活", duration: 280 },,
      { name: "Canton Express", duration: 300 }, { name: "伤心的人", duration: 270 },,
      { name: "世界的理想", duration: 307 }, { name: "活鱼逆流而上，死鱼随波逐流", duration: 290 },,
      { name: "地球仪", duration: 280 }, { name: "夜已晚", duration: 270 } ] },
    { name: "一半真情流露，一半靠表演", type: "专辑", date: "2021-08-18", songs: [
      { name: "无嫫歌", duration: 260 }, { name: "阮厝阿嫂爱唱歌", duration: 270 },,
      { name: "一半真情流露，一半靠表演", duration: 280 }, { name: "Love Makes Me Lose Control", duration: 250 },,
      { name: "食醉狗", duration: 240 }, { name: "猪肉炒辣椒", duration: 230 }, { name: "塑料花", duration: 255 },,
      { name: "另一条食醉狗", duration: 260 }, { name: "另一个地球仪", duration: 270 }, { name: "隔壁的诗人", duration: 290 },,
      { name: "在码头", duration: 300 } ] },
  ],
  "重塑雕像的权利": [
    { name: "CUT OFF!", type: "EP", date: "2005-01-01", rating: 8.0, songs: [
      { name: "Cut Off", duration: 300 } ] },
    { name: "WATCH OUT!CLIMATE HAS CHANGED,FAT MUM RISES...", type: "专辑", date: "2009-01-09", rating: 8.1, songs: [
       { name: "Watch Out, Climate Has Changed", duration: 95 }, { name: "Surrender", duration: 338 },
       { name: "My Great Location", duration: 232 }, { name: "Momentarily Out Of Mind", duration: 182 },
       { name: "Escape Behind... I", duration: 150 }, { name: "Vis-A-Vis", duration: 206 },
       { name: "Escape Behind...II", duration: 286 }, { name: "Up Next: Bela Lugosi's Back", duration: 515 },
       { name: "Billy Cannot Stop", duration: 321 }, { name: "By Your Both Sides, Left And Right", duration: 333 },
       { name: "...Fat Mum Rises!", duration: 77 } ] },
    { name: "Before The Applause", type: "专辑", date: "2017-09-15", rating: 8.3, songs: [
       { name: "HUM", duration: 96 }, { name: "HAILING DRUMS", duration: 553 }, { name: "8+2+8 I", duration: 285 },
       { name: "8+2+8 II", duration: 618 }, { name: "PIGS IN THE RIVER", duration: 403 },
       { name: "AT MOSP HERE", duration: 726 }, { name: "THE LAST DANCE, W.", duration: 399 },
       { name: "SOUNDS FOR CELEBRATION", duration: 420 } ] },
  ],
  "草东没有派对": [
    { name: "丑奴儿", type: "专辑", date: "2016-02-19", rating: 9.1, songs: [
       { name: "Intro", duration: 86 }, { name: "丑", duration: 117 }, { name: "烂泥", duration: 149 },
       { name: "勇敢的人", duration: 220 }, { name: "大风吹", duration: 236 }, { name: "艾玛", duration: 201 },
       { name: "等", duration: 155 }, { name: "鬼", duration: 160 }, { name: "在 (Explicit)", duration: 280 },
       { name: "山海", duration: 251 }, { name: "我们", duration: 218 }, { name: "情歌", duration: 256 } ] },
    { name: "瓦合", type: "专辑", date: "2023-05-20", rating: 8.5, songs: [
       { name: "苦难精算师", duration: 245 }, { name: "缸", duration: 186 }, { name: "空", duration: 177 },
       { name: "人洞山", duration: 207 }, { name: "孑", duration: 55 }, { name: "白日梦", duration: 224 },
       { name: "床", duration: 232 }, { name: "八", duration: 226 }, { name: "老张", duration: 219 },
       { name: "芽", duration: 192 }, { name: "但", duration: 142 } ] },
  ],
  "海龟先生": [
    { name: "POGO不如跳舞", type: "EP", date: "2005-11-01", songs: [
      { name: "你好再见", duration: 270 } ] },
    { name: "海龟先生", type: "专辑", date: "2012-12-31", rating: 8.1, songs: [
       { name: "玛卡瑞纳", duration: 245 }, { name: "年轻", duration: 260 }, { name: "一起跳舞", duration: 184 },
       { name: "好片明星", duration: 166 }, { name: "小酒馆", duration: 273 }, { name: "保持火力", duration: 210 },
       { name: "男孩别哭", duration: 306 }, { name: "微笑", duration: 213 }, { name: "加州", duration: 325 } ] },
    { name: "Where are you going?", type: "专辑", date: "2014-06-28", songs: [
       { name: "Where Are You Going?", duration: 243 }, { name: "悬崖巴士", duration: 382 },
       { name: "脱狱", duration: 290 }, { name: "她", duration: 161 }, { name: "接纳", duration: 327 },
       { name: "给摇滚绑架", duration: 257 }, { name: "那时阳光明媚", duration: 181 }, { name: "变形金刚", duration: 150 },
       { name: "Snoopy", duration: 211 }, { name: "Last Chance", duration: 217 } ] },
    { name: "咔咪哈咪哈", type: "专辑", date: "2019-03-07", songs: [
      { name: "龟波气功", duration: 280 }, { name: "内人广林", duration: 270 }, { name: "海龟之歌", duration: 290 },
      { name: "热血新纪录", duration: 280 }, { name: "赖宁", duration: 270 }, { name: "我", duration: 260 },
      { name: "望望先辈", duration: 280 }, { name: "恩典", duration: 270 }, { name: "锡安", duration: 260 },
      { name: "好时光", duration: 280 } ] },
    { name: "死不回头", type: "专辑", date: "2021-05-08", songs: [
      { name: "老手", duration: 280 }, { name: "你知道", duration: 270 }, { name: "黑暗暂把他们隐藏", duration: 280 },
      { name: "迷呓之喑", duration: 270 }, { name: "盼望", duration: 260 }, { name: "捕风", duration: 280 },
      { name: "伪君子", duration: 270 }, { name: "湾仔", duration: 260 }, { name: "忽然闯入", duration: 280 },
      { name: "海的女儿", duration: 270 } ] },
  ],
  "后海大鲨鱼": [
    { name: "Queen Sea Big Shark", type: "专辑", date: "2007-01-01", songs: [
       { name: "Lightning Metropolis", duration: 123 }, { name: "Hard Heart", duration: 216 },
       { name: "No! No! No!", duration: 196 }, { name: "Tiger Dance", duration: 142 },
       { name: "Kiss! Kill! Bang!", duration: 191 }, { name: "Girl Boss", duration: 20 },
       { name: "Man on the Moon", duration: 287 }, { name: "Hello! Passengers", duration: 371 },
       { name: "Hold Your Hand", duration: 212 }, { name: "Dirty Mind", duration: 151 },
       { name: "Money Fxxker", duration: 197 }, { name: "Lady Sisters", duration: 281 },
       { name: "Get Away", duration: 167 }, { name: "Love Is Pop", duration: 295 } ] },
    { name: "浪潮", type: "专辑", date: "2010-01-01", songs: [
       { name: "GLOW IN THE DARK", duration: 254 }, { name: "BACK 2 THE FUTURE", duration: 228 },
       { name: "E OCEAN", duration: 300 }, { name: "COMXXPUDA", duration: 212 },
       { name: "LOOP OF THE SUN", duration: 234 }, { name: "WAVE", duration: 383 },
       { name: "NEO!MAN", duration: 258 }, { name: "STARZ", duration: 293 }, { name: "YOUTH", duration: 283 },
       { name: "C.B.D", duration: 376 } ] },
    { name: "心要野", type: "专辑", date: "2015-03-18", rating: 8.3, songs: [
       { name: "心要野", duration: 276 }, { name: "喜马拉雅", duration: 316 }, { name: "猛犸", duration: 304 },
       { name: "时间之间", duration: 370 }, { name: "今夜留给今夜吧", duration: 296 }, { name: "漂流去世界最中心", duration: 289 },
       { name: "88奥林匹克", duration: 351 }, { name: "偷月亮的人", duration: 414 }, { name: "时髦人都好fancy", duration: 227 },
       { name: "后海冲浪手", duration: 269 }, { name: "BlingBlingbling", duration: 284 } ] },
  ],
  "木马乐队": [
    { name: "木马", type: "专辑", date: "1999-12-01", rating: 8.2, songs: [
      { name: "低处生活", duration: 280 }, { name: "没有声音的房间", duration: 290 } ] },
    { name: "Yellow Star", type: "EP", date: "2003-04-21", songs: [
      { name: "爱得像蜜糖", duration: 280 }, { name: "我失去了她", duration: 270 }, { name: "美丽的南方", duration: 290 },
      { name: "Feifei Run", duration: 300 }, { name: "伟大的演奏家", duration: 280 } ] },
    { name: "果冻帝国", type: "专辑", date: "2004-09-01", rating: 8.0, songs: [
       { name: "庆祝生活的方法", duration: 409 }, { name: "Feifei Run", duration: 296 }, { name: "超级Party", duration: 364 },
       { name: "情节", duration: 245 }, { name: "果冻帝国", duration: 338 }, { name: "把嘴唇摘除掉", duration: 195 },
       { name: "美丽的南方", duration: 433 }, { name: "如果真的恨一个人，那就是我自己", duration: 339 },
       { name: "我失去了她 (Remix)", duration: 247 }, { name: "Run Feifei.Run", duration: 213 } ] },
    { name: "丝绒公路", type: "专辑", date: "2007-01-01", songs: [
       { name: "Intro", duration: 129 }, { name: "天鹅绒", duration: 278 }, { name: "她是黯淡星", duration: 324 },
       { name: "爱在流逝中", duration: 262 }, { name: "你想跳支怎样的舞", duration: 168 }, { name: "赞美之歌", duration: 262 },
       { name: "欲望号", duration: 341 }, { name: "超现实预言", duration: 258 }, { name: "The third party", duration: 327 },
       { name: "他真的在哭泣", duration: 340 } ] },
    { name: "进化", type: "专辑", date: "2011-01-01", songs: [
       { name: "进化", duration: 450 }, { name: "纳迪", duration: 350 }, { name: "空洞", duration: 382 },
       { name: "无可救药", duration: 278 }, { name: "像一个漩涡", duration: 326 }, { name: "守护", duration: 409 },
       { name: "黑色的奔驰舞", duration: 359 }, { name: "弱冠之年", duration: 382 }, { name: "当黎明温暖的风……", duration: 304 },
       { name: "彼岸", duration: 296 } ] },
    { name: "旧城之王", type: "专辑", date: "2018-12-05", songs: [
       { name: "旧城之王", duration: 318 } ] },
  ],
  "舌头乐队": [
    { name: "小鸡出壳", type: "专辑", date: "1999-01-01", rating: 8.3, songs: [
       { name: "贼船(On Board)", duration: 283 }, { name: "仙人掌(Cactus)", duration: 190 },
       { name: "下注(Bet)", duration: 460 }, { name: "三十七计(Thirty-Seven Stratagems)", duration: 189 },
       { name: "看你的了(It's Up to You)", duration: 337 }, { name: "猜(Guess)", duration: 147 },
       { name: "歌颂你赞美你(Praise You)", duration: 253 } ] },
    { name: "这就是你", type: "专辑", date: "2002-01-01", rating: 8.1, songs: [
       { name: "乌鸦", duration: 425 }, { name: "中国龙", duration: 278 }, { name: "靶子", duration: 168 },
       { name: "尾巴", duration: 292 }, { name: "这就是你", duration: 386 } ] },
    { name: "妈妈一起飞吧，妈妈一起摇滚吧", type: "专辑", date: "2014-08-01", songs: [
       { name: "这就是我", duration: 280 }, { name: "猜", duration: 184 }, { name: "妈妈一起飞吧，妈妈一起摇滚吧", duration: 507 } ] },
    { name: "原始人爱空调协会", type: "专辑", date: "2016-08-01", rating: 7.9, songs: [
       { name: "对牛弹琴", duration: 664 }, { name: "转基因共和国里的辩证唯心主义者", duration: 297 },
       { name: "机器。。全人类", duration: 494 }, { name: "时光机器", duration: 809 }, { name: "原始人爱空调协会", duration: 230 },
       { name: "动物和人", duration: 574 } ] },
    { name: "怎么能够说我爱你", type: "专辑", date: "2019-01-01", songs: [
      { name: "怎么能够说我爱你", duration: 300 } ] },
    { name: "中国制造", type: "专辑", date: "2021-01-01", songs: [
      { name: "猫和老鼠", duration: 280 }, { name: "摇滚教父", duration: 270 } ] },
  ],
  "杭盖乐队": [
    { name: "介绍杭盖", type: "专辑", date: "2008-07-28", rating: 8.0, songs: [
       { name: "我的陶布竖尔", duration: 224 }, { name: "呼和那木吉拉的骏马", duration: 175 }, { name: "交德日娜娜", duration: 119 },
       { name: "五条好汉", duration: 331 }, { name: "花儿", duration: 181 }, { name: "黑小子", duration: 204 },
       { name: "乌仁都西", duration: 155 }, { name: "波如莱", duration: 234 }, { name: "酒歌", duration: 240 },
       { name: "四季", duration: 308 } ] },
    { name: "远走的人", type: "专辑", date: "2010-10-25", rating: 8.1, songs: [
       { name: "戈壁路 Gobi Road", duration: 213 }, { name: "乌仁都希 Uruumdush", duration: 162 },
       { name: "圆顶的帽子 Yuan Ding Cap", duration: 188 }, { name: "海然，海然 Hairan Hairan", duration: 203 },
       { name: "樟登树 ZHANG DAN", duration: 146 }, { name: "察哈尔 Cha Har", duration: 238 },
       { name: "希格希日 Xiger Xiger", duration: 293 }, { name: "波如来 Borulai's Lullab", duration: 200 },
       { name: "杭盖 Hanggai", duration: 355 }, { name: "酒歌 Ayrhindu", duration: 214 },
       { name: "四季 Dorov Morlaril", duration: 332 }, { name: "金手镯 Golden Bangle", duration: 251 },
       { name: "远走的人 He Who Travels Far", duration: 211 }, { name: "托尔金山 Togur Jin Mountain", duration: 202 },
       { name: "兄弟 Brothers", duration: 270 }, { name: "漂亮的蒙古马 Beautiful Mongolian Horse", duration: 283 },
       { name: "达亚波尔 Daya Boor", duration: 203 } ] },
    { name: "四季", type: "专辑", date: "2012-05-01", rating: 7.9, songs: [
       { name: "戈壁路", duration: 213 }, { name: "乌仁都西", duration: 162 }, { name: "圆顶帽", duration: 188 },
       { name: "海然海然", duration: 203 }, { name: "希格希日", duration: 293 }, { name: "波如莱", duration: 200 },
       { name: "杭盖", duration: 355 }, { name: "酒歌", duration: 214 }, { name: "花儿", duration: 181 },
       { name: "四季", duration: 332 }, { name: "托尔金山", duration: 202 } ] },
    { name: "回到你身旁", type: "专辑", date: "2014-05-22", songs: [
       { name: "回到你身旁（拜访）(BAIFANG)", duration: 226 }, { name: "硕特英雄 (Hershut Hero)", duration: 236 },
       { name: "五条好汉 (TAVAN HASAG)", duration: 350 }, { name: "思念女儿 (MISS DAUGHTER)", duration: 278 },
       { name: "青海摇篮曲(Qinghai Lullaby)", duration: 169 }, { name: "鸿雁 (HONG GALUU)", duration: 241 },
       { name: "金扣子 (Gold Buttons)", duration: 349 }, { name: "乌兰巴托之夜 (ULANBATAAR NIGHTS)", duration: 293 },
       { name: "白河滩上的兔子 (Long Song, the Rabbit on the White River Bank)", duration: 252 },
       { name: "金秋 (Golden Autumn)", duration: 340 }, { name: "我的母亲(My Mother)", duration: 287 },
       { name: "呼和那木吉拉的骏马 (HUHE NAMJILA)", duration: 259 },
       { name: "漂亮的蒙古马(Beautiful Mongolian Horse)", duration: 426 }, { name: "达亚波尔 (DAYA BALA)", duration: 224 },
       { name: "河套湾高树 (High Trees)", duration: 269 } ] },
    { name: "花斑马", type: "专辑", date: "2016-05-15", songs: [
       { name: "花斑马", duration: 343 }, { name: "轮回", duration: 268 }, { name: "阿里河，母亲河", duration: 148 },
       { name: "海然海然", duration: 300 }, { name: "初升的太阳", duration: 347 }, { name: "美丽的草原我的家", duration: 220 },
       { name: "上海产的半导体", duration: 263 }, { name: "小兔子", duration: 222 }, { name: "辽阔的草原", duration: 381 },
       { name: "故乡山峰", duration: 247 }, { name: "天上的风", duration: 288 }, { name: "圣主", duration: 160 } ] },
    { name: "故乡", type: "专辑", date: "2017-01-01", songs: [
       { name: "喇嘛大叔探亲记", duration: 250 }, { name: "汗青格勒", duration: 254 }, { name: "Dink's Song", duration: 262 },
       { name: "杭盖精神", duration: 402 }, { name: "父亲", duration: 282 }, { name: "枣红马", duration: 362 },
       { name: "江格尔", duration: 261 }, { name: "故乡", duration: 391 }, { name: "探望慈母", duration: 260 },
       { name: "嘎达梅林", duration: 347 }, { name: "恒干河畔的雀", duration: 248 }, { name: "超越才酷", duration: 148 } ] },
    { name: "杭盖与铜管", type: "专辑", date: "2019-01-01", songs: [
       { name: "鸿雁", duration: 271 }, { name: "丁吉图湾", duration: 286 }, { name: "四岁的海骝马", duration: 39 },
       { name: "古纳根乌兰巴特", duration: 338 }, { name: "北边的芨芨草", duration: 352 }, { name: "花斑马", duration: 324 },
       { name: "约会", duration: 351 }, { name: "乌仁都希", duration: 222 }, { name: "戈壁路", duration: 284 },
       { name: "初升的太阳", duration: 340 }, { name: "喇嘛大叔寻亲记", duration: 212 }, { name: "上海产的半导体", duration: 284 } ] },
  ],
  "九宝乐队": [
    { name: "十丈铜嘴", type: "专辑", date: "2012-05-05", rating: 7.9, songs: [
      { name: "圣赞", duration: 132 }, { name: "神秘之力", duration: 207 }, { name: "十丈铜嘴", duration: 235 },
      { name: "骑兵", duration: 236 }, { name: "娜明达赖", duration: 168 }, { name: "吆呼尔", duration: 164 },
      { name: "英雄", duration: 206 }, { name: "钟声为谁而鸣", duration: 305 }, { name: "神秘之力(Acoustic)", duration: 205 } ] },
    { name: "九宝", type: "专辑", date: "2013-12-13", rating: 8.0, songs: [
       { name: "序曲", duration: 115 }, { name: "黑心", duration: 228 }, { name: "特斯河之赞", duration: 233 },
       { name: "Sonsii", duration: 240 }, { name: "满古斯寓言", duration: 297 }, { name: "骏马赞", duration: 233 },
       { name: "映山红花满山坡", duration: 247 }, { name: "城南游幻", duration: 234 }, { name: "三岁神童", duration: 285 } ] },
    { name: "灵眼", type: "专辑", date: "2016-08-19", rating: 8.1, songs: [
       { name: "顽固", duration: 286 }, { name: "我的呼伦贝尔", duration: 184 }, { name: "灵眼", duration: 204 },
       { name: "世界末日", duration: 286 }, { name: "旗里的孩子", duration: 221 }, { name: "你与我", duration: 339 },
       { name: "王爷的袍子", duration: 274 }, { name: "不爱跳舞的孩子", duration: 234 }, { name: "十年", duration: 283 } ] },
    { name: "Awakening From Dukkha", type: "精选", date: "2020-11-18", songs: [
      { name: "特斯河之赞", duration: 290 }, { name: "黑心", duration: 280 } ] },
    { name: "究极之境", type: "专辑", date: "2025-09-24", songs: [
       { name: "直到如今", duration: 296 }, { name: "彷徨", duration: 287 }, { name: "黑金暴风 (纯器乐)", duration: 95 },
       { name: "青铜鹰隼", duration: 304 }, { name: "真梦", duration: 310 }, { name: "愈来愈近", duration: 336 },
       { name: "正如您", duration: 185 }, { name: "孤独的老马 (纯器乐)", duration: 244 }, { name: "究极之境", duration: 339 } ] },
  ],
  "夜叉乐队": [
    { name: "自由", type: "专辑", date: "2000-12-01", rating: 8.0, songs: [
       { name: "四个火枪手", duration: 187 } ] },
    { name: "发发发", type: "专辑", date: "2003-06-01", songs: [
       { name: "选择", duration: 297 }, { name: "中国人的方式", duration: 193 }, { name: "是什么，让我们留在这里", duration: 345 },
       { name: "生来的本性", duration: 230 }, { name: "觉悟了", duration: 193 }, { name: "命运", duration: 251 },
       { name: "爱情", duration: 339 } ] },
    { name: "Keep on Fighting", type: "EP", date: "2006-07-15", songs: [
      { name: "Keep on Fighting", duration: 280 } ] },
    { name: "You Aren't The Loser", type: "专辑", date: "2010-01-01", songs: [
      { name: "You Aren't The Loser", duration: 280 } ] },
    { name: "暗流", type: "专辑", date: "2015-09-01", songs: [
       { name: "Intro", duration: 44 }, { name: "与魔鬼同行", duration: 271 }, { name: "恶道", duration: 295 },
       { name: "我们", duration: 223 }, { name: "暗流", duration: 370 }, { name: "心的家", duration: 397 },
       { name: "夕阳下", duration: 319 }, { name: "愿为你", duration: 276 }, { name: "逍遥骑士", duration: 250 },
       { name: "人造天堂", duration: 329 }, { name: "舞悟", duration: 357 }, { name: "如果有把上了膛的枪", duration: 368 },
       { name: "渐醒渐逝", duration: 424 } ] },
    { name: "我即是神", type: "专辑", date: "2018-01-01", songs: [
       { name: "Intro", duration: 102 }, { name: "我即是", duration: 406 }, { name: "Circle Pit", duration: 258 },
       { name: "不置可否", duration: 274 }, { name: "炼之地", duration: 325 }, { name: "自由路66号", duration: 264 },
       { name: "粉色的狗", duration: 218 }, { name: "1%", duration: 250 }, { name: "Back To Dark", duration: 304 },
       { name: "无翼鸟", duration: 341 } ] },
  ],
  "反光镜": [
    { name: "Reflector", type: "EP", date: "2002-05-01", songs: [
      { name: "别上当", duration: 250 }, { name: "天天有时间", duration: 260 }, { name: "韩怂", duration: 250 } ] },
    { name: "成长瞬间", type: "专辑", date: "2007-10-11", songs: [
       { name: "成长瞬间", duration: 227 }, { name: "无烦恼", duration: 170 }, { name: "晚安北京", duration: 259 },
       { name: "果儿", duration: 287 }, { name: "还我蔚蓝", duration: 181 }, { name: "You Are My Sunshine", duration: 118 },
       { name: "陌生的房间", duration: 267 }, { name: "毒药", duration: 196 }, { name: "无奈", duration: 294 },
       { name: "坦白 (Explicit)", duration: 209 }, { name: "路", duration: 222 } ] },
    { name: "释你", type: "EP", date: "2010-04-26", songs: [
      { name: "溶化", duration: 260 }, { name: "只有音乐才是我的解药", duration: 280 }, { name: "嘿！姑娘", duration: 270 },
      { name: "释你", duration: 280 }, { name: "麻痹", duration: 260 }, { name: "长大", duration: 270 } ] },
    { name: "我们的歌", type: "专辑", date: "2013-12-21", rating: 7.8, songs: [
       { name: "Intro", duration: 28 }, { name: "大海", duration: 234 }, { name: "那四年", duration: 252 },
       { name: "孩子不哭", duration: 339 }, { name: "我们的歌", duration: 232 }, { name: "算了吧", duration: 298 },
       { name: "约定", duration: 266 }, { name: "冲", duration: 234 }, { name: "情愿放弃一切", duration: 322 } ] },
    { name: "因为,所以", type: "专辑", date: "2019-02-22", songs: [
       { name: "Intro", duration: 86 }, { name: "明天再说", duration: 136 }, { name: "这不是我想要的感觉", duration: 309 },
       { name: "如果不能选择，我们就去歌唱", duration: 287 }, { name: "没人在乎你", duration: 289 }, { name: "青春的代价", duration: 274 },
       { name: "以为", duration: 228 }, { name: "因为所以", duration: 76 }, { name: "来到你身边", duration: 257 } ] },
  ],
  "脑浊": [
    { name: "踩响失真", type: "专辑", date: "2002-01-01", songs: [
       { name: "2008", duration: 172 }, { name: "Call The Police", duration: 256 },
       { name: "No Dirty Punx", duration: 217 }, { name: "Sail", duration: 202 },
       { name: "The party's down", duration: 142 }, { name: "Coming Down To Beijing", duration: 265 },
       { name: "Living In The City (Live)", duration: 277 }, { name: "Lick Me Baby", duration: 113 },
       { name: "My Simple Life", duration: 230 }, { name: "Tuqian Song's", duration: 95 },
       { name: "No Apologize", duration: 97 } ] },
    { name: "American Dreamer", type: "专辑", date: "2004-08-01", songs: [
       { name: "Listen to My Back", duration: 169 }, { name: "Stay Free", duration: 129 },
       { name: "Second Hand Pogo", duration: 164 }, { name: "Played", duration: 113 },
       { name: "Coming to the USA", duration: 201 }, { name: "Fun and Fight Tonight", duration: 183 },
       { name: "Holy Bullshit", duration: 135 }, { name: "Summer Afternoon", duration: 114 },
       { name: "8899", duration: 180 }, { name: "Give Me the Cash", duration: 204 },
       { name: "Oi! Man", duration: 115 }, { name: "Human", duration: 146 },
       { name: "Such a Dangerous", duration: 202 }, { name: "Hangout Tonight", duration: 133 },
       { name: "Come Together", duration: 182 }, { name: "New York City", duration: 147 } ] },
    { name: "欢迎来到北京", type: "专辑", date: "2007-03-01", songs: [
       { name: "HUMAN", duration: 146 }, { name: "Coming Down To Beijing", duration: 224 } ] },
    { name: "歪打正着", type: "专辑", date: "2012-11-01", songs: [
       { name: "碎肉拌面肉啃肉", duration: 260 }, { name: "我比你OK", duration: 275 }, { name: "给我一刀", duration: 213 },
       { name: "永远的乌托邦", duration: 335 }, { name: "街上的疯子", duration: 166 }, { name: "我总是", duration: 248 },
       { name: "十年", duration: 247 }, { name: "歪打正着", duration: 320 }, { name: "八千里路云和月", duration: 289 } ] },
    { name: "皂.白", type: "专辑", date: "2016-01-01", songs: [
       { name: "Future", duration: 0 }, { name: "My Week", duration: 0 }, { name: "无所畏", duration: 0 },
       { name: "My Generation", duration: 0 }, { name: "你还好吗 我的愤怒", duration: 0 }, { name: "等等 我的青春", duration: 0 },
       { name: "绿色生命线", duration: 0 }, { name: "无法忍受", duration: 0 }, { name: "野火", duration: 0 },
       { name: "无所畏 (30秒预告版)", duration: 0 }, { name: "再见乌托邦", duration: 0 }, { name: "理想的新街口", duration: 0 },
       { name: "我比你OK", duration: 0 }, { name: "游击队之歌", duration: 0 }, { name: "顽主", duration: 0 },
       { name: "TA", duration: 0 }, { name: "Call the Police", duration: 0 }, { name: "摇滚的琴人", duration: 0 },
       { name: "永远的乌托邦", duration: 0 } ] },
  ],
  "达达乐队": [
    { name: "天使", type: "专辑", date: "2001-01-01", rating: 8.0, songs: [
       { name: "化学心情下的爱情反应", duration: 319 }, { name: "我的天使", duration: 199 }, { name: "瞬间", duration: 263 },
       { name: "节日快乐", duration: 219 }, { name: "暴雨", duration: 283 }, { name: "玩偶", duration: 308 },
       { name: "1999", duration: 304 }, { name: "毛病", duration: 273 }, { name: "荒诞", duration: 157 },
       { name: "五分儿", duration: 186 }, { name: "UNO", duration: 168 } ] },
    { name: "黄金时代", type: "专辑", date: "2003-12-25", rating: 8.2, songs: [
       { name: "不经意间", duration: 195 }, { name: "巴巴罗萨", duration: 248 }, { name: "无双", duration: 225 },
       { name: "Song F", duration: 391 }, { name: "午夜说再见", duration: 186 }, { name: "等待", duration: 228 },
       { name: "浮出水面", duration: 330 }, { name: "南方", duration: 271 }, { name: "黄金时代", duration: 282 },
       { name: "收音机之恋", duration: 257 }, { name: "ROCKLIFE", duration: 187 }, { name: "Intro", duration: 164 } ] },
  ],
  "果味VC": [
    { name: "双重生命", type: "专辑", date: "2001-11-11", rating: 7.9, songs: [
       { name: "模糊", duration: 359 }, { name: "超音速列车", duration: 272 }, { name: "年轻人", duration: 286 },
       { name: "Love Me,Girl", duration: 241 }, { name: "基因", duration: 186 }, { name: "北欧洲", duration: 351 },
       { name: "透明", duration: 272 }, { name: "Big Bang", duration: 214 }, { name: "十四层", duration: 274 },
       { name: "双重生命", duration: 314 } ] },
    { name: "来自VC的礼物", type: "专辑", date: "2005-01-01", songs: [
       { name: "C调哀歌", duration: 269 }, { name: "优雅", duration: 247 }, { name: "Kiss Me", duration: 259 },
       { name: "海岸", duration: 266 }, { name: "零下", duration: 261 }, { name: "北极冰川", duration: 209 },
       { name: "叁壹陆", duration: 194 }, { name: "降落", duration: 98 }, { name: "石像", duration: 291 },
       { name: "最后的诗", duration: 222 }, { name: "Amy And Betty", duration: 225 } ] },
    { name: "伟大的复兴", type: "专辑", date: "2008-12-12", songs: [
        { name: "1978", duration: 270 }, { name: "沙滩绅士", duration: 276 }, { name: "午后三点", duration: 259 },,
        { name: "柔光", duration: 247 }, { name: "低声细语", duration: 285 }, { name: "Me&I", duration: 261 },,
        { name: "夜空多灿烂", duration: 283 }, { name: "木偶剧", duration: 261 },,
        { name: "Ocean Is Dead", duration: 125 }, { name: "The Great Disappointment", duration: 303 } ] },
    { name: "THE SUPERVC", type: "专辑", date: "2017-01-01", songs: [
       { name: "妈妈我要回来了", duration: 326 }, { name: "躁不完的青春", duration: 265 }, { name: "白色羽毛2017", duration: 296 },
       { name: "生命之花", duration: 309 }, { name: "今夜要谁主宰我们的世界", duration: 231 }, { name: "梦开始的人", duration: 273 },
       { name: "哪怕只剩一秒", duration: 266 }, { name: "唯一拥有的筹码是我们的一生", duration: 254 }, { name: "带我回家", duration: 202 },
       { name: "哈利路亚", duration: 245 } ] },
    { name: "新世纪罗曼史", type: "专辑", date: "2020-01-01", songs: [
       { name: "拥抱之城", duration: 281 }, { name: "日落", duration: 311 }, { name: "一个名字", duration: 359 },
       { name: "Elope", duration: 328 }, { name: "就让悲伤来得更狂野", duration: 237 }, { name: "寄往天堂的情书", duration: 256 },
       { name: "短发", duration: 278 }, { name: "阴天（把浪漫画在身体上） (把浪漫画在身体上)", duration: 232 },
       { name: "洛丽塔Lolita", duration: 248 }, { name: "国安国安", duration: 283 } ] },
  ],
  "惘闻": [
    { name: "凌水河", type: "专辑", date: "2000-09-01", songs: [
       { name: "雨 (Demo)", duration: 328 }, { name: "属于记忆的部分 (Demo)", duration: 119 },
       { name: "我爱爱情 (Demo)", duration: 290 }, { name: "1/2 (Demo)", duration: 216 },
       { name: "妈妈 (Demo)", duration: 358 }, { name: "生我 (Demo)", duration: 344 },
       { name: "留给自己的 (Demo)", duration: 216 }, { name: "春夏秋冬 (Demo)", duration: 254 },
       { name: "渔和网 (Demo)", duration: 124 }, { name: "沿着来时的路...... (Demo)", duration: 187 } ] },
    { name: "二十八天失眠日记", type: "专辑", date: "2003-08-01", rating: 7.3, songs: [
       { name: "光", duration: 583 }, { name: "垂死的岁末", duration: 468 }, { name: "丰收", duration: 469 },
       { name: "奔丧", duration: 368 }, { name: "报仇", duration: 309 }, { name: "汉人", duration: 273 },
       { name: "辞行", duration: 349 }, { name: "素食者", duration: 351 }, { name: "A Song For Yu Wen", duration: 206 } ] },
    { name: "Re:Re:Re:", type: "专辑", date: "2005-12-01", rating: 7.1, songs: [
       { name: "隧道", duration: 644 }, { name: "劳动公园", duration: 602 }, { name: "My Crime", duration: 409 },
       { name: "最后的麻山", duration: 502 }, { name: "酒狂", duration: 487 }, { name: "圆周率", duration: 750 } ] },
    { name: "7 Objects in Another Infinite Space", type: "专辑", date: "2007-04-14", rating: 7.0, songs: [
       { name: "缘", duration: 810 }, { name: "Break the Cars", duration: 576 }, { name: "甜井", duration: 151 },
       { name: "思乡病", duration: 608 }, { name: "2005.1.26", duration: 299 }, { name: "驿站", duration: 370 },
       { name: "No Dust at All", duration: 570 } ] },
    { name: "IV", type: "专辑", date: "2008-05-17", rating: 7.4, songs: [
       { name: "污水塘", duration: 386 }, { name: "龙西", duration: 249 }, { name: "Rust inside", duration: 512 },
       { name: "06M", duration: 387 }, { name: "花满都VS川味子", duration: 463 }, { name: "抿嘴谣", duration: 459 },
       { name: "To the mars", duration: 690 }, { name: "污水塘 (Remix)", duration: 805 } ] },
    { name: "L&R", type: "专辑", date: "2010-04-09", rating: 6.6, songs: [
      { name: "童篇", duration: 438 }, { name: "近景", duration: 361 }, { name: "焦虑抑制剂", duration: 530 },,
      { name: "M", duration: 367 }, { name: "悬在时间轴上", duration: 626 }, { name: "合乐", duration: 596 },,
      { name: "凡士林", duration: 356 } ] },
    { name: "0.7", type: "专辑", date: "2012-06-08", rating: 7.9, songs: [
       { name: "2012", duration: 403 }, { name: "Rain Watcher", duration: 338 },
       { name: "Lonely God", duration: 570 }, { name: "Angelo's Portrait", duration: 459 },
       { name: "Absent Minded Theme", duration: 218 }, { name: "Dragon in the Pool", duration: 433 },
       { name: "Seasons", duration: 309 } ] },
    { name: "八匹马", type: "专辑", date: "2014-06-03", rating: 7.6, songs: [
      { name: "北方向北", duration: 380 }, { name: "大连天空", duration: 400 }, { name: "第八层地狱", duration: 460 },
      { name: "万佛朝宗", duration: 420 }, { name: "逃离母宇宙", duration: 440 }, { name: "酒神经", duration: 400 },
      { name: "最后旅程", duration: 460 }, { name: "Welcome to Utopia", duration: 480 } ] },
    { name: "岁月鸿沟", type: "专辑", date: "2016-04-25", rating: 7.5, songs: [
       { name: "黄泉水", duration: 895 }, { name: "红墙黑墙", duration: 487 }, { name: "海洋之心", duration: 653 },
       { name: "少年宫", duration: 818 }, { name: "21世纪不适症", duration: 540 }, { name: "岁月鸿沟", duration: 872 },
       { name: "归零", duration: 139 } ] },
    { name: "看不见的城市", type: "专辑", date: "2018-07-02", rating: 7.5, songs: [
       { name: "破晓", duration: 490 }, { name: "老虎棒子鸡", duration: 631 }, { name: "水之湄", duration: 377 },
       { name: "Lost in Train Station", duration: 451 }, { name: "独舞", duration: 312 }, { name: "竹鹤", duration: 244 },
       { name: "大连，勿语", duration: 512 }, { name: "尾声", duration: 257 } ] },
    { name: "十万个为什么", type: "专辑", date: "2020-09-23", rating: 6.9, songs: [
      { name: "鍛高潭", duration: 410 }, { name: "幽魂", duration: 522 }, { name: "五五路", duration: 440 },,
      { name: "假若明天来临", duration: 353 }, { name: "流浪者之歌", duration: 553 }, { name: "孤独的鸟", duration: 425 },,
      { name: "敢问路在何方", duration: 538 }, { name: "醉忘川", duration: 500 } ] },
    { name: "辛丑壬寅", type: "专辑", date: "2022-01-01", rating: 6.6, songs: [
       { name: "凿壁寻光 (Light behind the wall)", duration: 528 }, { name: "消失的图书馆 (Gone Library)", duration: 290 },
       { name: "白加黑 (Black Pill & White Pill)", duration: 563 }, { name: "辛丑 (Painful Clown)", duration: 380 },
       { name: "壬寅 (Ninja Tiger)", duration: 392 },
       { name: "奥林匹克广场 (There's a Walmart underneath the Olympic Square)", duration: 510 },
       { name: "野火 (Wild Fire)", duration: 455 } ] },
  ],
  "沼泽乐队": [
    { name: "沧浪星", type: "专辑", date: "2010-12-18", rating: 7.0, songs: [
       { name: "摇篮星", duration: 187 }, { name: "落木", duration: 435 }, { name: "飞天猪", duration: 797 },
       { name: "打捞星星的少年", duration: 419 }, { name: "声声急", duration: 607 }, { name: "过客", duration: 154 },
       { name: "沧浪谁与游", duration: 679 } ] },
    { name: "1911", type: "专辑", date: "2011-12-31", rating: 8.4, songs: [
       { name: "1911第一回", duration: 938 }, { name: "1911第三回", duration: 508 }, { name: "1911第二回", duration: 793 },
       { name: "1911第四回", duration: 1399 } ] },
    { name: "远", type: "专辑", date: "2013-01-01", rating: 6.4, songs: [
       { name: "离", duration: 389 }, { name: "失梦客", duration: 597 }, { name: "世界是块忧伤的石头", duration: 761 },
       { name: "憧憬之船", duration: 671 }, { name: "变形记", duration: 904 }, { name: "灰鹱望海", duration: 225 } ] },
    { name: "琴晚", type: "专辑", date: "2015-01-01", rating: 7.0, songs: [
       { name: "酉时 废柴", duration: 306 }, { name: "戌时 人约黄昏后", duration: 379 }, { name: "亥时 闭上眼望星", duration: 507 },
       { name: "子时 孑影舞", duration: 301 }, { name: "丑时 二维 乙未篇", duration: 371 }, { name: "寅时 稚儿笑", duration: 240 },
       { name: "卯时 早鸟", duration: 333 } ] },
    { name: "争鸣", type: "专辑", date: "2018-01-01", rating: 8.7, songs: [
       { name: "争鸣 (Excerpt)", duration: 381 }, { name: "争鸣", duration: 2607 } ] },
  ],
  "刺猬乐队": [
    { name: "Happy Idle Kid", type: "专辑", date: "2006-03-12", songs: [
       { name: "Idle", duration: 266 }, { name: "Buffer", duration: 181 }, { name: "Cool Bad Girl", duration: 103 },
       { name: "Wink", duration: 198 }, { name: "Smart", duration: 243 }, { name: "Elra", duration: 210 },
       { name: "Teenage Regrets", duration: 181 }, { name: "One", duration: 210 }, { name: "柏油公路", duration: 245 },
       { name: "Lapse", duration: 227 }, { name: "Cure Me In Your Case", duration: 181 } ] },
    { name: "噪音袭击世界", type: "专辑", date: "2007-10-01", songs: [
       { name: "玩具和61儿童节", duration: 222 }, { name: "南瓜", duration: 220 }, { name: "小鬼儿", duration: 101 },
       { name: "爱之废语", duration: 199 }, { name: "龙珠", duration: 186 }, { name: "新星 新星", duration: 252 },
       { name: "噪音袭击世界", duration: 158 }, { name: "这不是你自己但这是未来", duration: 187 }, { name: "分离", duration: 254 },
       { name: "我们最后的话", duration: 185 }, { name: "白纸年华", duration: 237 } ] },
    { name: "白日梦蓝", type: "专辑", date: "2009-03-01", rating: 8.1, songs: [
       { name: "白日梦蓝", duration: 296 }, { name: "春天来了", duration: 331 }, { name: "爱之过往", duration: 185 },
       { name: "假象", duration: 185 }, { name: "树", duration: 179 }, { name: "告诉他们我爱你", duration: 193 },
       { name: "圣诞最后", duration: 315 }, { name: "电影", duration: 388 }, { name: "胖女孩想", duration: 303 },
       { name: "24小时摇滚聚会", duration: 288 }, { name: "最后一班车", duration: 323 }, { name: "金色年华，无限伤感", duration: 253 } ] },
    { name: "甜蜜与杀害", type: "专辑", date: "2011-03-18", songs: [
       { name: "埋葬在阳光下", duration: 149 }, { name: "甜蜜与杀害", duration: 270 }, { name: "闪马", duration: 300 },
       { name: "你好 糖果", duration: 283 }, { name: "纸飞机", duration: 223 }, { name: "白娃娃", duration: 251 },
       { name: "疯狂生死恋", duration: 241 }, { name: "橙色", duration: 177 }, { name: "最后,我们会一起去海边", duration: 373 },
       { name: "生命意味", duration: 238 } ] },
    { name: "阳光、欢乐、枪", type: "专辑", date: "2012-04-05", songs: [
       { name: "亲爱的，我想做你女朋友", duration: 151 }, { name: "天歌", duration: 471 }, { name: "和鲨鱼一起冲浪", duration: 170 },
       { name: "黑吻", duration: 299 }, { name: "永远选你想要的", duration: 276 }, { name: "乐队", duration: 381 },
       { name: "重庆", duration: 317 }, { name: "最寂寞的一天", duration: 301 }, { name: "清晨里燃烧的太阳", duration: 369 },
       { name: "伙计们真摇滚，那天我也在D22", duration: 391 }, { name: "你真有名 (Unreleased Bonus Track)", duration: 135 } ] },
    { name: "幻象波普星", type: "专辑", date: "2014-04-20", songs: [
       { name: "我们飞向太空", duration: 397 }, { name: "幻象波普星", duration: 212 }, { name: "星光", duration: 268 },
       { name: "阿司匹林", duration: 276 }, { name: "梦幻想", duration: 385 }, { name: "画", duration: 279 },
       { name: "金色褪去，燃于天际", duration: 384 }, { name: "徙鸟", duration: 381 }, { name: "她在月光下", duration: 326 },
       { name: "暖浪拂心田", duration: 285 } ] },
    { name: "生之响往", type: "专辑", date: "2018-04-25", rating: 8.0, songs: [
       { name: "二十一世纪,当我们还年轻时", duration: 247 }, { name: "盼暖春来", duration: 282 }, { name: "勐巴拉娜西", duration: 364 },
       { name: "我们是动物", duration: 187 }, { name: "Kill Rock Stars", duration: 188 }, { name: "生之响往", duration: 356 },
       { name: "梦游一生", duration: 327 }, { name: "O,Lord", duration: 220 }, { name: "火车驶向云外,梦安魂于九霄", duration: 324 } ] },
    { name: "赤子白仙", type: "专辑", date: "2020-07-13", songs: [
       { name: "太阳下( Under The Sun)", duration: 193 },
       { name: "往昔耀今朝，The Future Is Now（Yesterday Was Shining On, The Future Is Now）", duration: 273 },
       { name: "光阴·流年·夏恋(The Fleeting-Time And Summer Love)", duration: 339 },
       { name: "星夜祈盼( Sky Roar, When We Light Up The Stars)", duration: 302 },
       { name: "在心间(Bottom Of Heart)", duration: 325 }, { name: "蝙蝠(Bat)", duration: 194 },
       { name: "漂离去月球(Drift Away To The Moon)", duration: 263 },
       { name: "仙情爱问( Immortal Asks What Is Love Is What Asks Immortal)", duration: 223 },
       { name: "我的矛盾，我的恨(My Contradictions, My Hatred)", duration: 312 },
       { name: "白白白白( White whitE wHiTe WhItE)", duration: 314 },
       { name: "赤子呓语一生梦 (A Newborn Baby Sleep Talking About The Dream Through Life)", duration: 290 },
       { name: "明天以后(Tomorrow Tomorrow)", duration: 454 } ] },
  ],
  "逃跑计划": [
    { name: "带我离开", type: "EP", date: "2008-08-08", songs: [
      { name: "Take Me Away", duration: 206 }, { name: "Is This Love", duration: 219 },
      { name: "08年我们结婚", duration: 338 }, { name: "再见再见", duration: 276 } ] },
    { name: "世界", type: "专辑", date: "2012-07-01", rating: 8.0, songs: [
       { name: "Is This Love", duration: 216 }, { name: "阳光照进回忆里", duration: 321 },
       { name: "Take Me Away", duration: 208 }, { name: "一万次悲伤", duration: 255 }, { name: "Apple", duration: 229 },
       { name: "结婚", duration: 326 }, { name: "夜空中最亮的星", duration: 252 }, { name: "哪里是你的拥抱", duration: 415 },
       { name: "Chemical Bus", duration: 250 }, { name: "再见 再见", duration: 329 } ] },
    { name: "时代之梦", type: "EP", date: "2016-01-01", songs: [
      { name: "时代之梦", duration: 280 }, { name: "重来", duration: 270 } ] },
    { name: "回到海洋", type: "专辑", date: "2021-09-06", songs: [
       { name: "梦中的你", duration: 266 }, { name: "琴岛漫步", duration: 262 }, { name: "暗示", duration: 246 },
       { name: "你的爱情", duration: 357 }, { name: "海鸥", duration: 225 }, { name: "Noise In My Head", duration: 323 },
       { name: "只是感觉", duration: 326 }, { name: "没什么比你更难忘", duration: 230 },
       { name: "Magic Elevator", duration: 353 }, { name: "10th", duration: 269 } ] },
  ],
  "布衣乐队": [
    { name: "那么久", type: "专辑", date: "2007-12-18", rating: 7.8, songs: [
       { name: "那么久", duration: 325 }, { name: "在你身旁", duration: 268 }, { name: "羊肉面", duration: 300 },
       { name: "丢", duration: 334 }, { name: "风", duration: 210 }, { name: "我爱你亲爱的姑娘", duration: 229 },
       { name: "小朋友", duration: 136 }, { name: "三十里铺", duration: 286 }, { name: "唯一的理由", duration: 312 },
       { name: "新的一天", duration: 215 } ] },
    { name: "布衣", type: "专辑", date: "2009-09-26", rating: 8.0, songs: [
       { name: "遥远的地方", duration: 329 }, { name: "世事难料", duration: 437 }, { name: "你是我的希望", duration: 234 },
       { name: "雪花", duration: 408 }, { name: "三疯", duration: 291 }, { name: "三峰", duration: 291 },
       { name: "不累", duration: 276 }, { name: "光荣的愤怒", duration: 172 }, { name: "粼兰曲", duration: 405 },
       { name: "离别", duration: 257 }, { name: "粼蓝曲", duration: 405 } ] },
    { name: "秋天", type: "专辑", date: "2010-11-18", songs: [
       { name: "秋天", duration: 244 }, { name: "L B C", duration: 220 }, { name: "布衣", duration: 317 },
       { name: "想着你", duration: 193 }, { name: "小花", duration: 322 }, { name: "漫漫归乡路", duration: 277 },
       { name: "我要飞", duration: 178 }, { name: "远走", duration: 301 }, { name: "净土", duration: 429 },
       { name: "秋天 (不插电)", duration: 299 } ] },
    { name: "出发", type: "专辑", date: "2013-10-18", songs: [
       { name: "出发", duration: 239 }, { name: "浪花", duration: 246 }, { name: "空间", duration: 259 },
       { name: "亲你一口", duration: 253 }, { name: "自由的鸟", duration: 280 }, { name: "追日", duration: 231 },
       { name: "问", duration: 346 }, { name: "彩虹", duration: 310 }, { name: "你", duration: 228 },
       { name: "沙", duration: 217 } ] },
    { name: "小怪兽", type: "专辑", date: "2018-09-03", songs: [
       { name: "宁夏川", duration: 50 }, { name: "小怪兽", duration: 183 }, { name: "啤酒怪兽", duration: 196 },
       { name: "火焰山", duration: 291 }, { name: "流星", duration: 249 }, { name: "院子", duration: 229 },
       { name: "小狗", duration: 230 }, { name: "梦", duration: 263 }, { name: "从今以后", duration: 270 },
       { name: "等不及告别就要出发", duration: 231 } ] },
    { name: "八宝茶", type: "专辑", date: "2021-03-14", songs: [
       { name: "好风", duration: 366 }, { name: "怎么办", duration: 298 }, { name: "眼泪花花把心淹了", duration: 252 },
       { name: "绿韭菜", duration: 223 }, { name: "阵阵格桑", duration: 276 }, { name: "荒野", duration: 300 },
       { name: "未来", duration: 303 }, { name: "云", duration: 259 }, { name: "莲花", duration: 302 },
       { name: "世事难料", duration: 497 }, { name: "遥远的地方", duration: 278 }, { name: "秋天", duration: 296 },
       { name: "雪花", duration: 309 }, { name: "丢", duration: 334 }, { name: "那么久", duration: 325 },
       { name: "羊肉面", duration: 300 }, { name: "粼兰曲", duration: 407 }, { name: "三疯", duration: 291 },
       { name: "三十里铺", duration: 286 }, { name: "我爱你亲爱的姑娘", duration: 230 }, { name: "守候", duration: 206 } ] },
  ],
  "扭曲的机器": [
    { name: "扭曲的机器", type: "专辑", date: "2000-01-01", songs: [
       { name: "没人给你面子", duration: 194 }, { name: "我没错", duration: 270 }, { name: "小心点", duration: 223 },
       { name: "证件", duration: 185 }, { name: "疯狗", duration: 188 }, { name: "禁止", duration: 218 },
       { name: "我决不会照你们说的去做", duration: 211 }, { name: "压抑不住的愤怒", duration: 346 } ] },
    { name: "重返地下", type: "专辑", date: "2003-01-01", songs: [
       { name: "新世纪", duration: 334 }, { name: "本能", duration: 207 }, { name: "阴影", duration: 345 },
       { name: "全体出动", duration: 187 }, { name: "界线", duration: 474 }, { name: "推动我", duration: 281 },
       { name: "我们来自地下 (Live)", duration: 269 } ] },
    { name: "存在", type: "专辑", date: "2007-01-01", songs: [
       { name: "镜子中", duration: 559 }, { name: "理想的背后", duration: 352 }, { name: "别惹我", duration: 250 },
       { name: "存在的意义", duration: 351 } ] },
    { name: "XXX", type: "专辑", date: "2015-01-01", songs: [
       { name: "三十", duration: 467 }, { name: "困兽斗", duration: 310 }, { name: "那一天", duration: 343 },
       { name: "剃刀边缘", duration: 289 }, { name: "让摇滚的声音响彻整个夜晚", duration: 338 }, { name: "紧随节奏POGO", duration: 267 },
       { name: "坚定的信念", duration: 334 }, { name: "天堂里", duration: 254 } ] },
  ],
  "窒息乐队": [
    { name: "窒息", type: "专辑", date: "2004-01-01", songs: [
      { name: "窒息", duration: 280 }, { name: "极限", duration: 270 } ] },
    { name: "无界", type: "专辑", date: "2020-07-27", songs: [
       { name: "Intro", duration: 111 }, { name: "衣锦寒", duration: 300 }, { name: "亚特兰蒂斯", duration: 262 },
       { name: "归航", duration: 301 }, { name: "巨鲸落", duration: 334 }, { name: "黎明之下", duration: 318 } ] },
  ],
  "郁乐队": [
    { name: "日落伊甸园", type: "EP", date: "2009-01-01", songs: [
      { name: "仙女座", duration: 280 }, { name: "悲伤致死", duration: 270 } ] },
    { name: "悲伤之旅", type: "专辑", date: "2012-01-01", rating: 7.8, songs: [
       { name: "Intro", duration: 129 }, { name: "悲伤之旅", duration: 273 }, { name: "仙女座", duration: 309 },
       { name: "针锋相对", duration: 253 }, { name: "九分之五", duration: 310 }, { name: "日落伊甸园", duration: 366 },
       { name: "随行如影", duration: 345 }, { name: "傀儡精神", duration: 349 }, { name: "逆向穿行", duration: 323 },
       { name: "Die From Sorrow", duration: 386 } ] },
    { name: "异海之王", type: "专辑", date: "2016-01-01", songs: [
       { name: "异海之王", duration: 277 }, { name: "在风暴的中央", duration: 347 }, { name: "云雾湾", duration: 381 },
       { name: "永恒的守望", duration: 363 }, { name: "轮回之海", duration: 337 } ] },
    { name: "盛大的狂欢", type: "专辑", date: "2024-02-19", songs: [
       { name: "盛大的狂欢", duration: 262 }, { name: "再见平凡世界", duration: 264 }, { name: "夜·幕", duration: 336 },
       { name: "真理的黄昏", duration: 330 }, { name: "沉默信徒", duration: 237 },
       { name: "DIE FROM SORROW (郁郁而终) (20周年纪念版)", duration: 415 }, { name: "盛大的狂欢 (器乐纯享版)", duration: 262 },
       { name: "再见平凡世界 (器乐纯享版)", duration: 264 }, { name: "夜·幕 (器乐纯享版)", duration: 336 },
       { name: "真理的黄昏 (器乐纯享版)", duration: 330 }, { name: "沉默信徒 (器乐纯享版)", duration: 237 },
       { name: "DIE FROM SORROW (郁郁而终) (20周年纪念版|器乐纯享版)", duration: 415 } ] },
  ],
  "声音玩具": [
    { name: "最美妙的旅行", type: "专辑", date: "2003-12-01", rating: 8.4, songs: [
       { name: "星期天大街", duration: 457 }, { name: "爱玲", duration: 441 }, { name: "未来", duration: 467 },
       { name: "秘密的爱", duration: 375 }, { name: "不朽", duration: 688 }, { name: "完美的一天", duration: 183 },
       { name: "青春", duration: 391 }, { name: "奇迹", duration: 417 }, { name: "Sleeper", duration: 248 },
       { name: "伟大说谎者", duration: 370 } ] },
    { name: "爱是昂贵的", type: "专辑", date: "2015-01-01", rating: 8.5, songs: [
       { name: "最美妙的旅行", duration: 327 }, { name: "生命", duration: 540 }, { name: "和那些人一样", duration: 514 },
       { name: "请问哪里才能买到晶体管收音机", duration: 385 }, { name: "明天你依旧在我身旁", duration: 306 },
       { name: "抚琴小夜曲", duration: 479 }, { name: "你是无可替代", duration: 431 }, { name: "星航者发现号", duration: 478 },
       { name: "时间", duration: 720 } ] },
    { name: "劳动之余", type: "专辑", date: "2021-04-30", rating: 8.2, songs: [
       { name: "爱是昂贵的", duration: 398 }, { name: "你的城市", duration: 359 }, { name: "没有人能够比我们更接近对方", duration: 370 },
       { name: "昨夜我飞向遥远的火星", duration: 405 }, { name: "月上乌尤", duration: 358 }, { name: "清塘荷韵", duration: 320 },
       { name: "时间之外", duration: 259 }, { name: "超级巨星", duration: 311 } ] },
  ],
  "秘密行动": [
    { name: "奇怪的老式娱乐", type: "EP", date: "2013-10-01", songs: [
      { name: "奇怪的老式娱乐", duration: 280 } ] },
    { name: "Loop 循环", type: "专辑", date: "2015-08-01", rating: 7.8, songs: [
       { name: "Hook", duration: 257 }, { name: "A Glossy Flirt", duration: 419 },
       { name: "Black Hole’s Metronome", duration: 259 }, { name: "Suicidium Morbus", duration: 282 },
       { name: "Electric Echo", duration: 284 }, { name: "Corridor 17", duration: 272 },
       { name: "No Replay", duration: 378 }, { name: "Tech Chords 1.0", duration: 85 },
       { name: "Aamir", duration: 378 }, { name: "Sorrow", duration: 337 }, { name: "她在每晚的夜空中穿行", duration: 387 } ] },
    { name: "碎片", type: "专辑", date: "2019-01-01", songs: [
       { name: "CHAOS", duration: 339 }, { name: "NEUTRAL LIFE", duration: 345 },
       { name: "WHY WE CHOSE TO DIE IN BERLIN", duration: 429 }, { name: "ENTER THE GAP", duration: 221 },
       { name: "COPY SHOP", duration: 361 }, { name: "VAMPIRE LOVERS", duration: 327 },
       { name: "FROZEN SONG", duration: 315 }, { name: "TURN BLACK", duration: 323 },
       { name: "FROM THE FUTURE", duration: 368 }, { name: "THE LOOP SIN", duration: 483 } ] },
  ],
  "大波浪": [
    { name: "THE BIG WAVE", type: "专辑", date: "2016-09-01", rating: 7.8, songs: [
       { name: "Not Just Imagining", duration: 306 }, { name: "02", duration: 244 },
       { name: "Kiss Girls", duration: 264 }, { name: "Sheep with a Shepherd", duration: 299 },
       { name: "Synth", duration: 281 }, { name: "Modern", duration: 223 }, { name: "Fill In", duration: 262 },
       { name: "Rough Sea", duration: 260 }, { name: "Unknown", duration: 232 }, { name: "Seek", duration: 274 } ] },
    { name: "蓝色的脸", type: "专辑", date: "2018-01-01", rating: 8.0, songs: [
       { name: "他的方式", duration: 265 }, { name: "No Such Disease", duration: 343 }, { name: "新时代", duration: 253 },
       { name: "离开我你会后悔", duration: 292 }, { name: "See You Looking Through Me", duration: 251 },
       { name: "Just No", duration: 235 }, { name: "祝贺", duration: 245 },
       { name: "The Song of Silence", duration: 335 }, { name: "See The Sun", duration: 241 },
       { name: "Love or Kill", duration: 227 } ] },
    { name: "新逻辑", type: "专辑", date: "2021-01-01", songs: [
       { name: "I Have Nothing But You", duration: 321 }, { name: "嘴上功夫", duration: 223 },
       { name: "Hold On", duration: 275 }, { name: "Mickey", duration: 195 },
       { name: "Secret  Lover", duration: 261 }, { name: "Mommy", duration: 202 },
       { name: "Falling World", duration: 293 }, { name: "迷之微笑", duration: 302 },
       { name: "Machine Control The Earth", duration: 263 }, { name: "病态新城", duration: 236 } ] },
    { name: "不止一面", type: "专辑", date: "2021-01-01", songs: [
       { name: "终于有一天我不再开口", duration: 319 }, { name: "被自己掏空", duration: 238 }, { name: "人浮于事", duration: 254 },
       { name: "药石罔效", duration: 204 }, { name: "我们在一起颤抖", duration: 232 }, { name: "愿与他重修旧好", duration: 225 },
       { name: "再见！马克西姆", duration: 267 }, { name: "无法忘记她", duration: 222 }, { name: "欲言又止", duration: 231 },
       { name: "踽踽独行", duration: 270 } ] },
  ],
  "房东的猫": [
    { name: "房东的猫", type: "专辑", date: "2017-01-26", rating: 7.8, songs: [
      { name: "美好事物", duration: 280 }, { name: "不知归期的故人", duration: 270 }, { name: "秋酿", duration: 260 },
      { name: "往往", duration: 270 }, { name: "简情歌(钢琴版)", duration: 250 }, { name: "短叹", duration: 270 },
      { name: "所以来吧", duration: 280 } ] },
    { name: "柔软", type: "专辑", date: "2018-04-01", songs: [
      { name: "远去的飞鸟", duration: 270 }, { name: "柔软", duration: 280 }, { name: "如常", duration: 270 },
      { name: "独一", duration: 260 }, { name: "等我们老了，就定居在重庆", duration: 290 }, { name: "白", duration: 270 },
      { name: "你是我最愚蠢的一次浪漫", duration: 280 } ] },
    { name: "这是你想要的生活吗", type: "专辑", date: "2020-04-18", songs: [
       { name: "Distance (Intro)", duration: 211 }, { name: "这是你想要的生活吗", duration: 244 },
       { name: "孤独之书", duration: 298 }, { name: "月亮拥抱我", duration: 228 }, { name: "由于时间与地域的关系", duration: 219 },
       { name: "谈恋爱前不如先养猫", duration: 231 }, { name: "海", duration: 314 }, { name: "Indigo", duration: 251 },
       { name: "愿你有故乡", duration: 253 }, { name: "时间简史", duration: 464 } ] },
    { name: "世界/青年", type: "专辑", date: "2023-05-04", songs: [
       { name: "不来也不去", duration: 307 }, { name: "城市动物园", duration: 249 }, { name: "慢游", duration: 273 },
       { name: "西部故事", duration: 251 }, { name: "生日快乐", duration: 272 }, { name: "潮", duration: 218 },
       { name: "如何", duration: 245 }, { name: "浪漫日记", duration: 236 }, { name: "光的房子", duration: 250 },
       { name: "是永不止息的海浪", duration: 299 }, { name: "浅的堆叠", duration: 281 }, { name: "边界", duration: 224 },
       { name: "光的房子 (乐队版)", duration: 230 } ] },
  ],
  "鹿先森乐队": [
    { name: "所有的酒, 都不如你", type: "专辑", date: "2016-01-01", rating: 7.5, songs: [
       { name: "失眠", duration: 329 }, { name: "我们拥抱亲吻相爱的人", duration: 279 }, { name: "愿长夜里有人陪你说话", duration: 320 },
       { name: "Time", duration: 328 }, { name: "风云日记", duration: 295 }, { name: "你喜欢海却不喜欢山", duration: 288 },
       { name: "很久以前", duration: 441 }, { name: "春风十里", duration: 375 }, { name: "晚安", duration: 267 } ] },
    { name: "华年", type: "专辑", date: "2018-01-01", songs: [
       { name: "与我轻轻唱", duration: 260 }, { name: "之间", duration: 303 }, { name: "他", duration: 264 },
       { name: "昨日", duration: 316 }, { name: "华年", duration: 258 }, { name: "你住在我心里的原因", duration: 271 },
       { name: "他们满足了你所有的美梦", duration: 211 }, { name: "诗人的家", duration: 323 }, { name: "一场雨落下来要用多久", duration: 228 },
       { name: "能随心情来听歌", duration: 288 }, { name: "小夜曲", duration: 260 } ] },
    { name: "在心碎处", type: "专辑", date: "2020-01-01", songs: [
       { name: "生逢灿烂", duration: 310 }, { name: "再唱一次这首歌好吗？", duration: 291 }, { name: "潮汐中的归期", duration: 320 },
       { name: "爱着的，经过的", duration: 220 }, { name: "话语", duration: 258 }, { name: "第一次看见你时我就看见了我的衰老", duration: 370 },
       { name: "拥抱过后的漫长", duration: 226 }, { name: "你的诗行", duration: 244 }, { name: "远离他们", duration: 348 },
       { name: "一起跳支舞", duration: 190 }, { name: "水生", duration: 250 }, { name: "短篇", duration: 238 },
       { name: "梦", duration: 200 } ] },
    { name: "滔滔", type: "专辑", date: "2023-01-01", songs: [
       { name: "你说", duration: 204 }, { name: "希望你的明天比昨天更自由", duration: 224 }, { name: "重庆", duration: 299 },
       { name: "消失在子夜", duration: 201 }, { name: "夏夜没有你，但有海风吹", duration: 238 }, { name: "人间幕幕", duration: 263 },
       { name: "生之河", duration: 245 } ] },
  ],
  "低苦艾": [
    { name: "苦艾酒", type: "EP", date: "2006-01-01", songs: [
      { name: "苦艾酒", duration: 280 } ] },
    { name: "低苦艾", type: "专辑", date: "2007-05-06", songs: [
       { name: "玄", duration: 299 }, { name: "挽歌", duration: 294 }, { name: "长衫、幼僧、经文、竹篱笆上的手印", duration: 313 },
       { name: "二月肖像", duration: 261 }, { name: "温柔的碾碎", duration: 320 }, { name: "守 夜 人", duration: 240 },
       { name: "张开冰冷的双臂跳跃", duration: 237 }, { name: "苦艾酒", duration: 247 }, { name: "另一个方向", duration: 259 },
       { name: "门 (Live)", duration: 370 } ] },
    { name: "我们不由自主的亲吻对方", type: "专辑", date: "2008-01-01", rating: 7.8, songs: [
       { name: "来自迷宫的音乐", duration: 345 }, { name: "二月的素描与光", duration: 280 }, { name: "哑脊背", duration: 347 },
       { name: "谁", duration: 351 }, { name: "大圣", duration: 338 }, { name: "我们不由自主的亲吻对方", duration: 299 },
       { name: "小花花", duration: 294 }, { name: "候鸟", duration: 324 }, { name: "再见 再不见", duration: 296 },
       { name: "迷宫的音乐 (piano)", duration: 182 } ] },
    { name: "兰州 兰州", type: "专辑", date: "2011-09-30", rating: 8.0, songs: [
        { name: "兰州 兰州", duration: 393 }, { name: "阿帮阿忙", duration: 281 }, { name: "随风而逝", duration: 339 },,
        { name: "不叫鸟", duration: 307 }, { name: "小草草", duration: 258 }, { name: "那只船", duration: 268 },,
        { name: "清晨日暮", duration: 373 }, { name: "一个和一万个", duration: 245 }, { name: "红与黑", duration: 368 } ] },
    { name: "守望者", type: "专辑", date: "2013-01-01", songs: [
       { name: "火车快开", duration: 311 }, { name: "荒原", duration: 363 }, { name: "转山", duration: 372 },
       { name: "守望者", duration: 250 }, { name: "清河", duration: 346 }, { name: "小树树", duration: 229 },
       { name: "马拉足球", duration: 332 }, { name: "过什布隆克喀", duration: 341 }, { name: "漂浮城", duration: 211 } ] },
    { name: "一天", type: "专辑", date: "2017-01-01", songs: [
       { name: "赶路人", duration: 296 }, { name: "原谅我无法回复你姑娘", duration: 240 }, { name: "优雅的梦游者", duration: 282 },
       { name: "子弹 GO GO GO", duration: 314 }, { name: "风吹过火", duration: 266 }, { name: "晚安", duration: 264 },
       { name: "缺席", duration: 330 }, { name: "一个人的午夜场电影", duration: 272 }, { name: "你在哪里", duration: 209 },
       { name: "命若琴弦", duration: 265 } ] },
    { name: "驰名商标", type: "专辑", date: "2020-01-01", songs: [
       { name: "我爱你", duration: 297 }, { name: "漫长的告别", duration: 246 }, { name: "卡拉永远OK", duration: 209 },
       { name: "少年", duration: 267 }, { name: "驰名商标", duration: 230 }, { name: "游泳冠军与水乳钟", duration: 244 },
       { name: "Cheer Up", duration: 215 }, { name: "素西", duration: 257 }, { name: "怀抱吉他改变世界", duration: 361 },
       { name: "季宏路", duration: 37 } ] },
  ],
  "丢火车": [
    { name: "丢火车", type: "EP", date: "2008-01-01", songs: [
      { name: "茶底世界", duration: 281 } ] },
    { name: "火车日记", type: "专辑", date: "2011-12-20", songs: [
       { name: "火车日记", duration: 322 }, { name: "角落", duration: 302 }, { name: "香水之旅", duration: 326 },
       { name: "呼吸", duration: 293 }, { name: "昆虫幻想", duration: 231 }, { name: "漂浮", duration: 290 },
       { name: "无限可能", duration: 245 }, { name: "孩子的脸", duration: 239 } ] },
    { name: "游歌", type: "EP", date: "2014-10-21", songs: [
      { name: "游歌", duration: 280 } ] },
    { name: "浮生", type: "专辑", date: "2017-10-26", songs: [
       { name: "索菲亚", duration: 257 }, { name: "浮生", duration: 263 }, { name: "哈喽 哈喽", duration: 220 },
       { name: "晚安", duration: 360 }, { name: "瑞秋", duration: 278 }, { name: "生日快乐", duration: 326 },
       { name: "傻鸟", duration: 208 }, { name: "小猫咪", duration: 208 } ] },
  ],
  "旅行团": [
    { name: "来福胶泥", type: "专辑", date: "2008-05-08", rating: 7.9, songs: [
       { name: "Intro", duration: 165 }, { name: "回到巴巴拉拉的城堡", duration: 248 },
       { name: "The Story Of Sun And I", duration: 232 }, { name: "罗马假日", duration: 206 },
       { name: "My Desert", duration: 170 }, { name: "Panda", duration: 247 },
       { name: "Take Me Away", duration: 320 }, { name: "稻田间", duration: 509 }, { name: "全世界都在水里游", duration: 219 },
       { name: "Dog Dog Dogs", duration: 223 }, { name: "中央花园", duration: 218 },
       { name: "Lonely Day", duration: 198 } ] },
    { name: "等你吃饭", type: "EP", date: "2009-04-17", songs: [
      { name: "等你吃饭", duration: 260 }, { name: "悠长假期", duration: 270 } ] },
    { name: "Wonderful Day", type: "专辑", date: "2011-06-24", songs: [
      { name: "天上人间(Intro)", duration: 60 }, { name: "行人要走斑马线", duration: 240 },,
      { name: "利物浦", duration: 250 }, { name: "Our Monday Is Free", duration: 230 },,
      { name: "柳江", duration: 260 }, { name: "厦门之夏", duration: 245 }, { name: "岛屿", duration: 250 },,
      { name: "船", duration: 260 }, { name: "残酷青春", duration: 240 }, { name: "Marry", duration: 230 },,
      { name: "80", duration: 220 }, { name: "Wonderful Day", duration: 250 } ] },
    { name: "于是我不再唱歌", type: "专辑", date: "2013-12-28", rating: 8.0, songs: [
       { name: "于是我不再唱歌", duration: 295 }, { name: "Bye Bye", duration: 220 }, { name: "小龙人", duration: 200 },
       { name: "天后舞厅", duration: 206 }, { name: "北京夏夜", duration: 228 }, { name: "Outro", duration: 149 } ] },
    { name: "B-SIDE", type: "专辑", date: "2015-05-15", songs: [
      { name: "生命是场马拉松", duration: 280 }, { name: "Sleep", duration: 260 }, { name: "时间的手", duration: 250 },,
      { name: "悲伤珊瑚群", duration: 270 }, { name: "问号", duration: 245 }, { name: "轮廓", duration: 260 },,
      { name: "红色的雅儒路体校", duration: 240 }, { name: "控", duration: 250 }, { name: "驾", duration: 255 } ] },
    { name: "10 Day's", type: "专辑", date: "2015-12-21", songs: [
      { name: "此时此刻", duration: 260 }, { name: "Africa", duration: 240 }, { name: "逝去的歌", duration: 290 },,
      { name: "父亲", duration: 280 }, { name: "新开世界", duration: 270 }, { name: "我们的爱在地震带", duration: 250 },,
      { name: "星辰", duration: 255 }, { name: "奔跑在孤傲的路上", duration: 260 },,
      { name: "Goodnight girl", duration: 245 }, { name: "隐秘的国", duration: 265 } ] },
    { name: "永远都会在", type: "专辑", date: "2017-07-06", rating: 8.1, songs: [
      { name: "永远都会在", duration: 280 }, { name: "你", duration: 270 }, { name: "西雅图阳光", duration: 280 },,
      { name: "封夜", duration: 260 }, { name: "乘风而来", duration: 270 }, { name: "滚", duration: 255 },,
      { name: "勇", duration: 260 }, { name: "此刻是唯一的意义", duration: 290 } ] },
    { name: "感+", type: "专辑", date: "2018-06-21", songs: [
      { name: "夏之恋", duration: 280 }, { name: "圣地亚哥", duration: 270 }, { name: "爱情的模样", duration: 275 },,
      { name: "我的蒙娜丽莎", duration: 280 }, { name: "情书", duration: 260 }, { name: "My Shadow", duration: 250 },,
      { name: "终结日", duration: 270 }, { name: "没有说明书的机器", duration: 260 }, { name: "爱的备份", duration: 270 },,
      { name: "周末玩具", duration: 265 }, { name: "亲爱的", duration: 280 } ] },
    { name: "似近似远", type: "专辑", date: "2020-09-16", songs: [
      { name: "你没有名字", duration: 260 }, { name: "红色的河", duration: 290 }, { name: "温柔的代价", duration: 280 },,
      { name: "风定忧深", duration: 270 }, { name: "生命的独特", duration: 265 }, { name: "夜明灯", duration: 280 },,
      { name: "红色的河(Feat.吴青峰)", duration: 290 } ] },
    { name: "似你似我", type: "专辑", date: "2020-11-30", songs: [
      { name: "天涯路口", duration: 280 }, { name: "她在哪，家在哪", duration: 270 }, { name: "老朋友", duration: 265 },,
      { name: "最好的时候", duration: 280 }, { name: "夏夜的绚烂", duration: 275 }, { name: "阿奶", duration: 270 },,
      { name: "下一站", duration: 280 } ] },
  ],
  "落日飞车": [
    { name: "Bossa Nova", type: "专辑", date: "2011-09-22", songs: [
      { name: "Bomb of Love", duration: 180 }, { name: "No Man's Land", duration: 260 }, { name: "Hogi Hogi LaLa Jo", duration: 185 },
      { name: "Punk", duration: 184 }, { name: "A Little Piece of Sadness", duration: 99 }, { name: "Pinky Pinky", duration: 122 },
      { name: "Little Monkey Rides on the Little Donkey", duration: 226 }, { name: "I Know You Know I Love You", duration: 120 },
      { name: "Blues", duration: 284 }, { name: "No Man's Land (Reprise)", duration: 111 }, { name: "Queen", duration: 185 },
      { name: "My Monday Throne", duration: 277 } ] },
    { name: "金桔希子", type: "EP", date: "2016-01-01", rating: 8.0, songs: [
      { name: "My Jinji", duration: 300 }, { name: "Burgundy Red", duration: 280 } ] },
    { name: "Cassa Nova", type: "专辑", date: "2018-01-01", rating: 8.1, songs: [
       { name: "Almost Mature '87", duration: 201 }, { name: "Greedy", duration: 258 },
       { name: "Cool of Lullaby", duration: 322 }, { name: "Angel Disco Love", duration: 248 },
       { name: "Slow", duration: 122 }, { name: "Oriental", duration: 159 }, { name: "Summum Bonum", duration: 281 },
       { name: "Libidream", duration: 296 }, { name: "10-Year-Taipei (Matured '17)", duration: 218 } ] },
    { name: "Soft Storm", type: "专辑", date: "2020-01-01", songs: [
       { name: "Soft Storm", duration: 141 }, { name: "Overlove", duration: 237 },
       { name: "Under the Skin", duration: 210 }, { name: "Passerby (feat. Michael Seyer)", duration: 240 },
       { name: "Teahouse", duration: 230 }, { name: "Overlove (Rehab)", duration: 230 },
       { name: "Hyperfocus", duration: 200 }, { name: "Midnight with Paul", duration: 230 },
       { name: "Candlelight (feat. OHHYUK)", duration: 250 } ] },
  ],
  "声音碎片": [
    { name: "世界是噪音的花园", type: "专辑", date: "2002-01-01", songs: [
       { name: "自欺", duration: 312 }, { name: "平衡", duration: 244 }, { name: "妄想狂", duration: 259 },
       { name: "狂欢", duration: 249 }, { name: "这一刻", duration: 245 }, { name: "所有人都必须这样吗", duration: 266 },
       { name: "从内部成熟", duration: 289 }, { name: "请不要关我的灯", duration: 302 }, { name: "投降", duration: 317 },
       { name: "秘密路线", duration: 291 }, { name: "世界是噪音的花园", duration: 311 } ] },
    { name: "优美的低于生活", type: "专辑", date: "2005-01-01", rating: 8.1, songs: [
       { name: "优美的低于生活", duration: 330 }, { name: "通过愤怒之门", duration: 371 }, { name: "在流逝之外", duration: 382 },
       { name: "在时代华美的盛宴上", duration: 303 }, { name: "不合时宜的忧伤", duration: 255 }, { name: "向外", duration: 300 },
       { name: "烟灰", duration: 335 }, { name: "赞歌", duration: 399 }, { name: "从现在开始", duration: 297 },
       { name: "再轻松一些", duration: 311 } ] },
    { name: "把光芒洒向更开阔的地方", type: "专辑", date: "2008-09-30", rating: 8.3, songs: [
       { name: "在一起", duration: 295 }, { name: "天边一朵云", duration: 341 }, { name: "陌生城市的早晨", duration: 335 },
       { name: "星光照亮你回家的路", duration: 334 }, { name: "把光芒洒向开阔之地", duration: 338 }, { name: "黑白电影", duration: 321 },
       { name: "骑手的悲伤之歌", duration: 278 }, { name: "顺流而下", duration: 262 }, { name: "幸运的人", duration: 308 },
       { name: "随意跳舞吧", duration: 276 }, { name: "情歌而已", duration: 325 } ] },
    { name: "没有鸟鸣,关上窗吧", type: "专辑", date: "2019-01-01", rating: 8.2, songs: [
       { name: "神游", duration: 341 }, { name: "致我的迷茫兄弟", duration: 399 }, { name: "伊斯特伍德", duration: 101 },
       { name: "送流水", duration: 291 }, { name: "九月行歌", duration: 290 }, { name: "望星空", duration: 317 },
       { name: "小凉山", duration: 118 }, { name: "不惑之年", duration: 295 }, { name: "少年游", duration: 355 },
       { name: "送马玉华到2011年", duration: 276 } ] },
    { name: "有限身 无穷念", type: "专辑", date: "2022-01-01", songs: [
       { name: "康小午的自由之心", duration: 263 }, { name: "野火", duration: 333 }, { name: "电子荒野", duration: 326 },
       { name: "有限身", duration: 254 }, { name: "愿你旅途漫长", duration: 351 }, { name: "方可的单人舞", duration: 288 },
       { name: "迷途相聚", duration: 363 }, { name: "两千万分之一", duration: 319 }, { name: "飞跃蚂蚁城", duration: 278 },
       { name: "是你", duration: 269 } ] },
  ],
};
