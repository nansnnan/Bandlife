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
      { name: "铁塔", type: "专辑", date: "2027-10-06", songs: [
      { name: "铁塔", duration: 226 }, { name: "烈焰", duration: 411 }, { name: "巅峰高原", duration: 279 },
      { name: "圣坛", duration: 324 }, { name: "灰狼", duration: 389 }, { name: "铸剑灰烬", duration: 335 },
      { name: "极北", duration: 333 }, { name: "铁爪", duration: 224 }, { name: "铸剑", duration: 351 } ] },
    { name: "巅峰", type: "专辑", date: "2032-07-01", songs: [
      { name: "巅峰", duration: 319 }, { name: "火山", duration: 232 }, { name: "王座", duration: 313 },
      { name: "铁魂", duration: 255 }, { name: "巨浪", duration: 356 }, { name: "长矛", duration: 371 },
      { name: "孤城铁丘", duration: 503 }, { name: "高原苍穹", duration: 268 }, { name: "雷霆", duration: 334 },
      { name: "绝境铁矛", duration: 342 } ] },
    { name: "铁棺孤城", type: "专辑", date: "2036-01-03", songs: [
      { name: "铁棺孤城", duration: 386 }, { name: "沉默的铁渊", duration: 282 }, { name: "深夜的灰烬", duration: 389 },
      { name: "铁幕", duration: 364 }, { name: "冰川极北", duration: 309 }, { name: "铁鳞亡魂", duration: 365 },
      { name: "深渊", duration: 315 }, { name: "寒霜", duration: 329 }, { name: "熔炉", duration: 560 } ] },
    { name: "铁谷", type: "专辑", date: "2040-08-05", songs: [
      { name: "铁谷", duration: 215 }, { name: "铁刺", duration: 269 }, { name: "铁翼铁牢", duration: 383 },
      { name: "铁律", duration: 384 }, { name: "火海", duration: 391 }, { name: "铁翼", duration: 311 },
      { name: "雷鸣", duration: 344 }, { name: "漫长的重盾", duration: 505 } ] },
    { name: "暗狱", type: "EP", date: "2044-09-09", songs: [
      { name: "暗狱", duration: 246 }, { name: "遥远的铁刺", duration: 335 }, { name: "纪念碑", duration: 349 },
      { name: "铁鳞", duration: 402 } ] },
    { name: "无名的荒原", type: "EP", date: "2049-04-07", songs: [
      { name: "无名的荒原", duration: 364 }, { name: "重盾", duration: 368 }, { name: "久违的铁翼", duration: 380 },
      { name: "孤鹰苍穹", duration: 241 }, { name: "铁棺", duration: 377 } ] },
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
      { name: "荒径", type: "EP", date: "2028-02-14", songs: [
      { name: "荒径", duration: 318 }, { name: "久违的旧梦", duration: 279 }, { name: "铁笼", duration: 252 },
      { name: "遥远的野火", duration: 448 }, { name: "街角星光", duration: 272 }, { name: "久违的甲板", duration: 236 } ] },
    { name: "走廊", type: "专辑", date: "2031-10-17", songs: [
      { name: "走廊", duration: 244 }, { name: "风筝暮色", duration: 268 }, { name: "漫长的尘埃", duration: 327 },
      { name: "天桥", duration: 266 }, { name: "暗巷潮声", duration: 324 }, { name: "暴雨汽笛", duration: 524 },
      { name: "暮色", duration: 273 }, { name: "环流站台", duration: 282 }, { name: "潮间带", duration: 262 },
      { name: "狂风", duration: 203 }, { name: "废墟", duration: 268 } ] },
    { name: "铁轨", type: "专辑", date: "2035-04-20", songs: [
      { name: "铁轨", duration: 300 }, { name: "冷月", duration: 294 }, { name: "曦光", duration: 302 },
      { name: "逆光", duration: 305 }, { name: "逆流", duration: 312 }, { name: "风筝", duration: 259 },
      { name: "屋顶", duration: 328 }, { name: "铁道", duration: 335 }, { name: "镜面", duration: 160 },
      { name: "回声壁", duration: 297 } ] },
    { name: "野火暗号", type: "专辑", date: "2038-07-17", songs: [
      { name: "野火暗号", duration: 270 }, { name: "杂草", duration: 282 }, { name: "电线", duration: 241 },
      { name: "晨雾", duration: 287 }, { name: "渡轮", duration: 291 }, { name: "夜雾极夜", duration: 313 },
      { name: "夜车", duration: 293 }, { name: "霜降", duration: 237 }, { name: "沙丘", duration: 280 },
      { name: "涂鸦", duration: 284 }, { name: "台阶", duration: 256 } ] },
    { name: "暗涌", type: "专辑", date: "2041-11-04", songs: [
      { name: "暗涌", duration: 304 }, { name: "站台", duration: 334 }, { name: "闪电", duration: 280 },
      { name: "遥远的荒野", duration: 335 }, { name: "天光", duration: 280 }, { name: "雪线", duration: 301 },
      { name: "灯塔", duration: 205 } ] },
    { name: "信号灯", type: "专辑", date: "2045-11-16", songs: [
      { name: "信号灯", duration: 305 }, { name: "路口", duration: 218 }, { name: "沉默的黑巷", duration: 262 },
      { name: "车窗", duration: 289 }, { name: "环流", duration: 274 }, { name: "锈迹", duration: 253 },
      { name: "星光锈迹", duration: 287 }, { name: "旧巷", duration: 309 }, { name: "游园", duration: 278 },
      { name: "深夜的环流", duration: 231 } ] },
    { name: "荒径雨夜", type: "专辑", date: "2049-08-01", songs: [
      { name: "荒径雨夜", duration: 296 }, { name: "沉默的街灯", duration: 219 }, { name: "风铃", duration: 303 },
      { name: "逆旅", duration: 258 }, { name: "深夜的星光", duration: 303 }, { name: "沉默的暮光", duration: 306 },
      { name: "夜雾", duration: 269 }, { name: "深夜", duration: 303 }, { name: "灰烬路口", duration: 265 },
      { name: "无名的街角", duration: 252 } ] },
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
      { name: "铃铛", type: "专辑", date: "2027-06-17", songs: [
      { name: "铃铛", duration: 293 }, { name: "琥珀", duration: 222 }, { name: "深夜的课桌", duration: 272 },
      { name: "蝴蝶结", duration: 284 }, { name: "风车", duration: 435 }, { name: "银河", duration: 337 },
      { name: "课桌", duration: 286 }, { name: "葡萄柚", duration: 269 }, { name: "棉花", duration: 280 },
      { name: "草莓", duration: 315 } ] },
    { name: "信笺", type: "专辑", date: "2029-10-27", songs: [
      { name: "信笺", duration: 287 }, { name: "深夜的气球", duration: 255 }, { name: "花火", duration: 294 },
      { name: "雨伞", duration: 296 }, { name: "蓝调", duration: 211 }, { name: "信笺笔袋", duration: 230 },
      { name: "漫长的单车", duration: 271 }, { name: "倒计时", duration: 232 } ] },
    { name: "花束", type: "专辑", date: "2032-06-19", songs: [
      { name: "花束", duration: 331 }, { name: "晚风", duration: 281 }, { name: "糖果", duration: 234 },
      { name: "棉花秋千", duration: 283 }, { name: "月亮睫毛", duration: 326 }, { name: "香草", duration: 185 },
      { name: "柠檬水", duration: 274 }, { name: "晚霞", duration: 222 }, { name: "萤火", duration: 459 },
      { name: "余光", duration: 294 }, { name: "微风", duration: 305 } ] },
    { name: "初恋暖阳", type: "专辑", date: "2034-09-30", songs: [
      { name: "初恋暖阳", duration: 272 }, { name: "晴天", duration: 243 }, { name: "浅蓝", duration: 292 },
      { name: "沙滩", duration: 265 }, { name: "甜梦", duration: 248 }, { name: "童话", duration: 275 },
      { name: "暖阳", duration: 287 } ] },
    { name: "雨伞风筝", type: "专辑", date: "2037-06-14", songs: [
      { name: "雨伞风筝", duration: 266 }, { name: "奶昔课桌", duration: 285 }, { name: "遥远的摩天轮", duration: 287 },
      { name: "沉默的气球", duration: 304 }, { name: "深夜的海岸", duration: 296 }, { name: "沉默的雨伞", duration: 235 },
      { name: "少女", duration: 272 }, { name: "秋千", duration: 266 }, { name: "星期天", duration: 218 },
      { name: "拥抱", duration: 319 }, { name: "银河流星", duration: 218 } ] },
    { name: "深夜的花火", type: "专辑", date: "2039-10-17", songs: [
      { name: "深夜的花火", duration: 254 }, { name: "盛夏", duration: 257 }, { name: "深夜的蝉鸣", duration: 268 },
      { name: "教室", duration: 259 }, { name: "沉默的校门", duration: 405 }, { name: "白裙", duration: 306 },
      { name: "课本", duration: 169 }, { name: "沉默的蝉鸣", duration: 279 }, { name: "操场", duration: 268 },
      { name: "棉花糖", duration: 268 } ] },
    { name: "深夜的秋千", type: "专辑", date: "2042-01-16", songs: [
      { name: "深夜的秋千", duration: 246 }, { name: "睫毛", duration: 268 }, { name: "云朵", duration: 218 },
      { name: "心跳初恋", duration: 312 }, { name: "沉默的棉花", duration: 289 }, { name: "月亮柠檬茶", duration: 308 },
      { name: "日记", duration: 244 }, { name: "心跳", duration: 287 } ] },
    { name: "玻璃糖甜梦", type: "专辑", date: "2044-07-05", songs: [
      { name: "玻璃糖甜梦", duration: 254 }, { name: "蜜糖", duration: 279 }, { name: "遥远的蓝调", duration: 263 },
      { name: "裙摆", duration: 287 }, { name: "汽水", duration: 285 }, { name: "漫游", duration: 273 },
      { name: "许愿", duration: 249 }, { name: "星群", duration: 277 }, { name: "棉花糖蝉鸣", duration: 288 },
      { name: "贝壳橘子", duration: 290 }, { name: "雨靴棉花糖", duration: 304 } ] },
    { name: "音乐盒", type: "专辑", date: "2047-06-11", songs: [
      { name: "音乐盒", duration: 241 }, { name: "纸飞机蝴蝶结", duration: 287 }, { name: "课桌蝴蝶结", duration: 257 },
      { name: "沉默的流星", duration: 220 }, { name: "音乐盒气球", duration: 264 }, { name: "雨靴", duration: 440 },
      { name: "晴天娃娃", duration: 286 } ] },
    { name: "篮球", type: "专辑", date: "2049-11-23", songs: [
      { name: "篮球", duration: 444 }, { name: "沉默的少女", duration: 295 }, { name: "沉默的葡萄柚", duration: 274 },
      { name: "漫游暖阳", duration: 306 }, { name: "萤火篮球", duration: 267 }, { name: "漫长的香草", duration: 276 },
      { name: "薄荷", duration: 204 }, { name: "奶昔", duration: 292 } ] },
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
      { name: "霓虹疾风", type: "专辑", date: "2027-06-08", songs: [
      { name: "霓虹疾风", duration: 294 }, { name: "灯塔暗涌", duration: 292 }, { name: "涂鸦夜潮", duration: 309 },
      { name: "无名的白墙", duration: 278 }, { name: "遥远的岔路", duration: 258 }, { name: "灰墙", duration: 301 },
      { name: "高墙", duration: 305 }, { name: "电塔", duration: 523 }, { name: "影中人", duration: 284 },
      { name: "暮云", duration: 257 } ] },
    { name: "旧城走廊", type: "专辑", date: "2030-09-30", songs: [
      { name: "旧城走廊", duration: 158 }, { name: "深夜的疾风", duration: 218 }, { name: "残阳", duration: 167 },
      { name: "雨夜", duration: 280 }, { name: "惊雷站台", duration: 262 }, { name: "晚钟", duration: 266 },
      { name: "暗巷", duration: 283 }, { name: "深巷", duration: 226 }, { name: "迷途", duration: 169 },
      { name: "匝道长夜", duration: 260 } ] },
    { name: "停电", type: "专辑", date: "2033-06-26", songs: [
      { name: "停电", duration: 282 }, { name: "晚风风口", duration: 337 }, { name: "边界狂风", duration: 310 },
      { name: "逆流星光", duration: 299 }, { name: "漫长的阁楼", duration: 292 }, { name: "碎片", duration: 259 },
      { name: "冷月路口", duration: 299 }, { name: "铁笼天台", duration: 277 }, { name: "疾风", duration: 295 },
      { name: "潮声", duration: 265 } ] },
    { name: "白墙", type: "专辑", date: "2037-02-24", songs: [
      { name: "白墙", duration: 280 }, { name: "高架信号", duration: 313 }, { name: "夜航", duration: 297 },
      { name: "废楼影中人", duration: 294 }, { name: "野火铁轨", duration: 238 }, { name: "夜航屋顶", duration: 240 },
      { name: "残响", duration: 311 }, { name: "野猫", duration: 304 }, { name: "末班车夜潮", duration: 278 } ] },
    { name: "寒潮渡轮", type: "EP", date: "2040-04-24", songs: [
      { name: "寒潮渡轮", duration: 294 }, { name: "出口", duration: 535 }, { name: "天台远方", duration: 270 } ] },
    { name: "岔路暮光", type: "专辑", date: "2043-03-23", songs: [
      { name: "岔路暮光", duration: 274 }, { name: "回声", duration: 168 }, { name: "暗号", duration: 266 },
      { name: "巷子岔路", duration: 438 }, { name: "夜车寒潮", duration: 232 }, { name: "落雪", duration: 308 },
      { name: "深巷疾风", duration: 262 }, { name: "暴雨野火", duration: 271 }, { name: "铁门", duration: 259 } ] },
    { name: "星光深巷", type: "专辑", date: "2046-01-23", songs: [
      { name: "星光深巷", duration: 200 }, { name: "铁桥", duration: 286 }, { name: "疾风夜航", duration: 292 },
      { name: "沉默的曦光", duration: 527 }, { name: "沙丘夜班", duration: 271 }, { name: "末班车", duration: 176 },
      { name: "荒岛深夜", duration: 279 }, { name: "荒野站台", duration: 331 }, { name: "久违的暗涌", duration: 277 },
      { name: "阁楼", duration: 295 } ] },
    { name: "沉默的回声", type: "专辑", date: "2049-06-02", songs: [
      { name: "沉默的回声", duration: 244 }, { name: "星光碎片", duration: 268 }, { name: "雨篷", duration: 255 },
      { name: "深夜的沙丘", duration: 258 }, { name: "边界晚风", duration: 203 }, { name: "夜班", duration: 241 },
      { name: "无名的远方", duration: 233 }, { name: "久违的逆光", duration: 281 }, { name: "汽笛", duration: 283 } ] },
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
      { name: "疾风晚钟", type: "EP", date: "2028-01-19", songs: [
      { name: "疾风晚钟", duration: 189 }, { name: "荒野环流", duration: 281 }, { name: "久违的风口", duration: 363 },
      { name: "沉默的路口", duration: 346 }, { name: "旧巷光年", duration: 320 }, { name: "极夜", duration: 311 } ] },
    { name: "断层", type: "EP", date: "2031-11-12", songs: [
      { name: "断层", duration: 205 }, { name: "断线", duration: 312 }, { name: "余烬", duration: 368 } ] },
    { name: "灰烬出口", type: "专辑", date: "2036-10-16", songs: [
      { name: "灰烬出口", duration: 333 }, { name: "漫长的迷途", duration: 346 }, { name: "铁轨狂风", duration: 342 },
      { name: "倒影", duration: 332 }, { name: "巷子公路", duration: 541 }, { name: "高架", duration: 330 },
      { name: "远方", duration: 362 } ] },
    { name: "匝道", type: "专辑", date: "2041-01-17", songs: [
      { name: "匝道", duration: 311 }, { name: "晚风逆光", duration: 308 }, { name: "静默", duration: 309 },
      { name: "公路", duration: 309 }, { name: "逆流镜面", duration: 215 }, { name: "久违的街灯", duration: 486 },
      { name: "街灯", duration: 360 } ] },
    { name: "沉默的街角", type: "专辑", date: "2044-12-10", songs: [
      { name: "沉默的街角", duration: 335 }, { name: "寒潮", duration: 467 }, { name: "无名的台阶", duration: 342 },
      { name: "旧城", duration: 336 }, { name: "骤雨", duration: 326 }, { name: "水岸", duration: 313 },
      { name: "白墙沙漏", duration: 351 } ] },
    { name: "逆光霓虹", type: "专辑", date: "2049-05-17", songs: [
      { name: "逆光霓虹", duration: 340 }, { name: "久违的初晴", duration: 280 }, { name: "信号", duration: 327 },
      { name: "斑马线晴天", duration: 326 }, { name: "暮光", duration: 330 }, { name: "信号灯潮汐", duration: 349 },
      { name: "楼顶", duration: 347 }, { name: "码头", duration: 322 }, { name: "信号阁楼", duration: 338 },
      { name: "孤岛", duration: 296 }, { name: "街角", duration: 531 } ] },
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
      { name: "废楼", type: "专辑", date: "2027-08-10", songs: [
      { name: "废楼", duration: 315 }, { name: "雨夜尘埃", duration: 256 }, { name: "逆流天桥", duration: 346 },
      { name: "天台", duration: 293 }, { name: "边界游园", duration: 236 }, { name: "久违的铁轨", duration: 269 },
      { name: "沉默的惊雷", duration: 245 }, { name: "无名的停电", duration: 268 }, { name: "风口寒潮", duration: 277 },
      { name: "沉默的晚钟", duration: 262 } ] },
    { name: "深夜雪线", type: "单曲", date: "2032-01-24", songs: [
      { name: "深夜雪线", duration: 292 } ] },
    { name: "沉默的站台", type: "专辑", date: "2036-06-04", songs: [
      { name: "沉默的站台", duration: 264 }, { name: "无名的渡轮", duration: 178 }, { name: "雪线锈迹", duration: 251 },
      { name: "无名的杂草", duration: 265 }, { name: "旧梦", duration: 279 }, { name: "雪线台阶", duration: 274 },
      { name: "阁楼深巷", duration: 161 }, { name: "久违的潮汐", duration: 351 }, { name: "无名的暮光", duration: 327 },
      { name: "久违的灰烬", duration: 183 }, { name: "漫长的电塔", duration: 253 } ] },
    { name: "尘埃", type: "专辑", date: "2040-06-16", songs: [
      { name: "尘埃", duration: 261 }, { name: "公路斑马线", duration: 245 }, { name: "渡轮极夜", duration: 280 },
      { name: "沉默的汽笛", duration: 304 }, { name: "夜潮", duration: 282 }, { name: "晴天甲板", duration: 303 },
      { name: "夜潮荒野", duration: 279 }, { name: "霓虹", duration: 304 }, { name: "码头公路", duration: 325 },
      { name: "漫长的走廊", duration: 281 }, { name: "巷子", duration: 280 } ] },
    { name: "风口", type: "专辑", date: "2044-10-02", songs: [
      { name: "风口", duration: 227 }, { name: "阁楼雨夜", duration: 406 }, { name: "街灯暮云", duration: 288 },
      { name: "狂风信号", duration: 213 }, { name: "甲板", duration: 265 }, { name: "深夜白墙", duration: 232 },
      { name: "黑巷", duration: 271 }, { name: "暗号屋顶", duration: 304 }, { name: "沉默的长夜", duration: 301 },
      { name: "深夜的尘埃", duration: 267 } ] },
    { name: "余烬雨篷", type: "专辑", date: "2048-06-10", songs: [
      { name: "余烬雨篷", duration: 276 }, { name: "裂痕", duration: 284 }, { name: "余烬走廊", duration: 314 },
      { name: "岔路", duration: 285 }, { name: "惊雷", duration: 341 }, { name: "光年", duration: 296 },
      { name: "无名的晴天", duration: 308 }, { name: "沉默的高墙", duration: 165 } ] },
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
      { name: "久违的拆迁", type: "专辑", date: "2028-03-14", songs: [
      { name: "久违的拆迁", duration: 206 }, { name: "警报", duration: 237 }, { name: "遥远的乱码", duration: 194 },
      { name: "沉默的噪点", duration: 196 }, { name: "街头", duration: 218 }, { name: "断线高墙", duration: 223 },
      { name: "火花", duration: 207 }, { name: "沉默的野火", duration: 193 }, { name: "黑烟", duration: 289 } ] },
    { name: "街头冲锋", type: "专辑", date: "2032-07-14", songs: [
      { name: "街头冲锋", duration: 227 }, { name: "蓬乱", duration: 214 }, { name: "电焊", duration: 236 },
      { name: "无名的铁链", duration: 203 }, { name: "乱码", duration: 220 }, { name: "呐喊碎屏", duration: 222 },
      { name: "噪音", duration: 294 } ] },
    { name: "静电", type: "专辑", date: "2036-01-24", songs: [
      { name: "静电", duration: 161 }, { name: "破烂", duration: 217 }, { name: "密电夜班", duration: 209 },
      { name: "高音", duration: 151 }, { name: "野狗噪音", duration: 176 }, { name: "无名的夜班", duration: 211 },
      { name: "飞奔", duration: 208 }, { name: "廉价", duration: 198 }, { name: "铁皮破烂", duration: 205 } ] },
    { name: "沉默的反光", type: "专辑", date: "2040-09-28", songs: [
      { name: "沉默的反光", duration: 211 }, { name: "铁皮", duration: 129 }, { name: "拆迁", duration: 235 },
      { name: "蓬乱破烂", duration: 155 }, { name: "逆行", duration: 251 }, { name: "拉链", duration: 220 },
      { name: "快逃野火", duration: 206 }, { name: "沉默的廉价", duration: 228 }, { name: "久违的铁链", duration: 181 } ] },
    { name: "电压火种", type: "专辑", date: "2045-02-09", songs: [
      { name: "电压火种", duration: 153 }, { name: "拦截", duration: 230 }, { name: "无名的反抗", duration: 238 },
      { name: "铁锈", duration: 123 }, { name: "推土机", duration: 214 }, { name: "破洞", duration: 248 },
      { name: "快逃", duration: 205 }, { name: "快闪铁钉", duration: 211 }, { name: "冲锋", duration: 220 },
      { name: "遥远的铁皮", duration: 234 } ] },
    { name: "快跑", type: "专辑", date: "2049-05-03", songs: [
      { name: "快跑", duration: 235 }, { name: "密电碎屏", duration: 202 }, { name: "火种", duration: 120 },
      { name: "旧车快跑", duration: 199 }, { name: "灰头", duration: 196 }, { name: "无名的废厂", duration: 230 },
      { name: "摩托", duration: 125 }, { name: "油污", duration: 337 }, { name: "破洞铁皮", duration: 211 },
      { name: "呐喊碎片", duration: 207 }, { name: "漫长的涂鸦", duration: 293 } ] },
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
      { name: "曹操你别怕", duration: 270 }, { name: "抄电表", duration: 260 }, { name: "莫怪你老爹", duration: 280 },
      { name: "酒鬼猪哥伯", duration: 250 }, { name: "彭啊湃", duration: 300 }, { name: "陈先生", duration: 280 },
      { name: "清明过纸", duration: 265 }, { name: "两顿饱", duration: 240 }, { name: "上县城", duration: 255 },
      { name: "做梦", duration: 270 }, { name: "大会", duration: 250 }, { name: "世情", duration: 260 },
      { name: "收冬", duration: 245 }, { name: "城市找猪", duration: 280 }, { name: "踏架脚车牵条猪(2012)", duration: 367 },
      { name: "鲜花在岸上开", duration: 300 }, { name: "含叭哩细", duration: 240 }, { name: "雨来淋秀才", duration: 255 },
      { name: "隆啊隆，骑马去海丰", duration: 270 }, { name: "一些风景", duration: 290 }, { name: "海风", duration: 290 } ] },
    { name: "广东姑娘", type: "专辑", date: "2015-03-09", rating: 8.1, songs: [
      { name: "海风", duration: 280 }, { name: "心肝痛", duration: 270 }, { name: "广东姑娘", duration: 266 },
      { name: "走鬼", duration: 280 }, { name: "我的头发就是这样被吹乱的啊", duration: 290 }, { name: "像将军那样喝酒", duration: 270 },
      { name: "龙哥有真爱", duration: 280 }, { name: "东莞的月亮", duration: 270 }, { name: "我哈你", duration: 260 },
      { name: "晚上好，春天小姐", duration: 257 }, { name: "猪母上山咬老虎", duration: 280 }, { name: "美丽漂亮，英俊潇洒", duration: 270 },
      { name: "请到老祖宗", duration: 280 } ] },
    { name: "梦幻丽莎发廊", type: "专辑", date: "2017-03-29", rating: 8.2, songs: [
      { name: "初恋", duration: 292 }, { name: "热带", duration: 259 }, { name: "石牌桥", duration: 210 },
      { name: "有所追求", duration: 182 }, { name: "阿虎", duration: 196 }, { name: "梦幻丽莎发廊", duration: 249 },
      { name: "柔河里", duration: 200 }, { name: "秧歌舞", duration: 191 }, { name: "很多很多", duration: 264 },
      { name: "九条人", duration: 148 }, { name: "阿珍爱上了阿强", duration: 409 },
      { name: "楼房来四散起 路不见狗相连", duration: 147 } ] },
    { name: "故事会", type: "专辑", date: "2019-02-21", rating: 8.0, songs: [
      { name: "仙女", duration: 260 }, { name: "小燕子", duration: 240 }, { name: "烂尾楼", duration: 270 },
      { name: "匈奴王", duration: 250 }, { name: "深圳的街头", duration: 280 }, { name: "阿琳娜", duration: 260 },
      { name: "喜鹊", duration: 240 }, { name: "老鼠影", duration: 255 }, { name: "最寒冷的一天", duration: 270 },
      { name: "满天神佛请来保庇我", duration: 260 }, { name: "马白草", duration: 250 },
      { name: "深圳的街头(卡拉OK)", duration: 280 } ] },
    { name: "活鱼逆流而上，死鱼随波逐流", type: "专辑", date: "2021-08-18", songs: [
      { name: "南方恋曲", duration: 260 }, { name: "左车道", duration: 270 }, { name: "越南", duration: 250 },
      { name: "他把反话正面讲", duration: 265 }, { name: "活生生的生活", duration: 280 },
      { name: "Canton Express", duration: 300 }, { name: "伤心的人", duration: 270 },
      { name: "世界的理想", duration: 307 }, { name: "活鱼逆流而上，死鱼随波逐流", duration: 290 },
      { name: "地球仪", duration: 280 }, { name: "夜已晚", duration: 270 } ] },
    { name: "一半真情流露，一半靠表演", type: "专辑", date: "2021-08-18", songs: [
      { name: "无嫫歌", duration: 260 }, { name: "阮厝阿嫂爱唱歌", duration: 270 },
      { name: "一半真情流露，一半靠表演", duration: 280 }, { name: "Love Makes Me Lose Control", duration: 250 },
      { name: "食醉狗", duration: 240 }, { name: "猪肉炒辣椒", duration: 230 }, { name: "塑料花", duration: 255 },
      { name: "另一条食醉狗", duration: 260 }, { name: "另一个地球仪", duration: 270 }, { name: "隔壁的诗人", duration: 290 },
      { name: "在码头", duration: 300 } ] },
      { name: "晒场", type: "专辑", date: "2027-01-18", songs: [
      { name: "晒场", duration: 265 }, { name: "雨巷", duration: 234 }, { name: "青瓦", duration: 280 },
      { name: "桃枝", duration: 277 }, { name: "沉默的桃枝", duration: 267 }, { name: "槐花", duration: 286 },
      { name: "老树", duration: 273 }, { name: "木梯", duration: 254 }, { name: "秋雨", duration: 255 } ] },
    { name: "石榴", type: "专辑", date: "2029-10-20", songs: [
      { name: "石榴", duration: 252 }, { name: "田埂", duration: 300 }, { name: "溪水", duration: 240 },
      { name: "旧信芦苇", duration: 314 }, { name: "云边", duration: 244 }, { name: "行囊", duration: 265 },
      { name: "扁舟", duration: 241 }, { name: "春雨", duration: 246 }, { name: "遥远的木窗", duration: 281 } ] },
    { name: "蝉鸣", type: "专辑", date: "2032-02-07", songs: [
      { name: "蝉鸣", duration: 289 }, { name: "土路", duration: 242 }, { name: "土墙", duration: 251 },
      { name: "草垛", duration: 315 }, { name: "石阶", duration: 278 }, { name: "月台", duration: 278 },
      { name: "沉默的晚归", duration: 285 }, { name: "石路旧信", duration: 288 }, { name: "山岗", duration: 257 },
      { name: "深夜的故乡", duration: 290 } ] },
    { name: "菜园谷场", type: "专辑", date: "2034-07-01", songs: [
      { name: "菜园谷场", duration: 290 }, { name: "青苔", duration: 274 }, { name: "瓦房竹筐", duration: 165 },
      { name: "茶山", duration: 258 }, { name: "遥远的石桥", duration: 251 }, { name: "车站秋千", duration: 241 },
      { name: "山风", duration: 284 }, { name: "木桥", duration: 221 }, { name: "晚霞老井", duration: 279 } ] },
    { name: "晚归茶山", type: "专辑", date: "2036-12-17", songs: [
      { name: "晚归茶山", duration: 252 }, { name: "木窗山径", duration: 223 }, { name: "竹篱", duration: 261 },
      { name: "晚钟旧书", duration: 266 }, { name: "柴火", duration: 274 }, { name: "长椅", duration: 412 },
      { name: "土墙秋千", duration: 211 }, { name: "竹影", duration: 263 }, { name: "麦浪", duration: 283 },
      { name: "石阶故人", duration: 154 } ] },
    { name: "窗棂", type: "专辑", date: "2039-11-24", songs: [
      { name: "窗棂", duration: 289 }, { name: "沉默的犁铧", duration: 255 }, { name: "谷雨", duration: 300 },
      { name: "石桥", duration: 251 }, { name: "木舟", duration: 350 }, { name: "溪桥", duration: 277 },
      { name: "邮局", duration: 275 }, { name: "冬雪", duration: 319 }, { name: "石磨", duration: 148 } ] },
    { name: "无名的石磨", type: "专辑", date: "2042-07-10", songs: [
      { name: "无名的石磨", duration: 166 }, { name: "沉默的木舟", duration: 321 }, { name: "石路", duration: 213 },
      { name: "北风", duration: 264 }, { name: "羊群", duration: 171 }, { name: "小院", duration: 287 },
      { name: "久违的屋檐", duration: 225 }, { name: "青苔霜降", duration: 274 }, { name: "谷仓", duration: 227 },
      { name: "沉默的月夜", duration: 190 } ] },
    { name: "漫长的木舟", type: "专辑", date: "2044-12-06", songs: [
      { name: "漫长的木舟", duration: 247 }, { name: "青梅青石", duration: 294 }, { name: "车站", duration: 487 },
      { name: "青梅", duration: 417 }, { name: "槐树", duration: 279 }, { name: "乡音", duration: 252 },
      { name: "立秋北风", duration: 269 } ] },
    { name: "深夜的星夜", type: "专辑", date: "2047-06-19", songs: [
      { name: "深夜的星夜", duration: 280 }, { name: "山岗稻草", duration: 245 }, { name: "谷场", duration: 250 },
      { name: "稻田", duration: 269 }, { name: "无名的门环", duration: 247 }, { name: "稻草", duration: 214 },
      { name: "犁铧春分", duration: 285 }, { name: "芦苇", duration: 219 }, { name: "瓦房", duration: 267 },
      { name: "巷口", duration: 215 } ] },
    { name: "木门稻田", type: "专辑", date: "2049-11-01", songs: [
      { name: "木门稻田", duration: 299 }, { name: "露水", duration: 270 }, { name: "灯火", duration: 282 },
      { name: "梯田", duration: 246 }, { name: "青石", duration: 255 }, { name: "深夜的河流", duration: 237 },
      { name: "久违的水车", duration: 322 }, { name: "溪边", duration: 180 }, { name: "深夜的晚霞", duration: 245 } ] },
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
      { name: "Golden", type: "专辑", date: "2028-05-31", songs: [
      { name: "Golden（金色）", duration: 312 }, { name: "Field（原野）", duration: 339 }, { name: "Nightfall Field（夜幕的原野）", duration: 194 },
      { name: "Pulse（脉冲）", duration: 395 }, { name: "Smoke（烟雾）", duration: 307 }, { name: "Dusk（薄暮）", duration: 339 },
      { name: "Fleet Beacon（舰队的灯塔）", duration: 340 } ] },
    { name: "Wires", type: "专辑", date: "2031-11-07", songs: [
      { name: "Wires（电线）", duration: 307 }, { name: "Moss（青苔）", duration: 560 }, { name: "Orbit Stone（轨道的石头）", duration: 560 },
      { name: "Winter Heart（冬天的心）", duration: 355 }, { name: "Loam（沃土）", duration: 326 }, { name: "Circle Summer（圆圈的夏天）", duration: 352 },
      { name: "Carousel（旋转木马）", duration: 552 }, { name: "Petal Drift（花瓣的漂流）", duration: 320 }, { name: "Ridge（山脊）", duration: 309 },
      { name: "Ballet Roof（芭蕾的屋顶）", duration: 312 } ] },
    { name: "Fleet", type: "EP", date: "2036-05-02", songs: [
      { name: "Fleet（舰队）", duration: 318 }, { name: "Quiet Roof（寂静的屋顶）", duration: 359 }, { name: "Salt Song（盐的歌）", duration: 346 },
      { name: "Ice（冰）", duration: 260 } ] },
    { name: "Midnight Kite", type: "专辑", date: "2040-02-15", songs: [
      { name: "Midnight Kite（午夜的风筝）", duration: 336 }, { name: "Shadow（影子）", duration: 257 }, { name: "Slope（斜坡）", duration: 348 },
      { name: "Hill（山丘）", duration: 298 }, { name: "Shore（岸边）", duration: 332 }, { name: "Veil（帷幕）", duration: 352 },
      { name: "Heart Sun（心的太阳）", duration: 352 } ] },
    { name: "Nightfall", type: "专辑", date: "2044-06-28", songs: [
      { name: "Nightfall（夜幕）", duration: 357 }, { name: "Haze Soil（轻雾的土壤）", duration: 358 }, { name: "Star（星）", duration: 310 },
      { name: "Leaf Cinder（叶的炭烬）", duration: 331 }, { name: "Grain Sea（颗粒的海）", duration: 263 }, { name: "Fable（寓言）", duration: 318 },
      { name: "Asphalt（柏油）", duration: 309 }, { name: "Echo（回声）", duration: 336 } ] },
    { name: "Whisper", type: "EP", date: "2048-12-24", songs: [
      { name: "Whisper（低语）", duration: 350 }, { name: "Breeze（微风）", duration: 341 }, { name: "Tide（潮汐）", duration: 300 },
      { name: "Rust Roof（锈迹的屋顶）", duration: 307 }, { name: "Concrete（水泥）", duration: 339 } ] },
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
      { name: "冷月长风", type: "专辑", date: "2028-02-25", songs: [
      { name: "冷月长风", duration: 343 }, { name: "回声壁岔路", duration: 208 }, { name: "迷途灯塔", duration: 174 },
      { name: "荒径逆光", duration: 225 }, { name: "野猫孤岛", duration: 192 }, { name: "汽笛迷途", duration: 114 },
      { name: "沙漏", duration: 298 }, { name: "风铃阁楼", duration: 196 }, { name: "沉默的暗涌", duration: 138 } ] },
    { name: "遥远的走廊", type: "专辑", date: "2032-09-01", songs: [
      { name: "遥远的走廊", duration: 170 }, { name: "废墟电线", duration: 234 }, { name: "铁道暗巷", duration: 210 },
      { name: "荒岛阁楼", duration: 198 }, { name: "黑巷野猫", duration: 287 }, { name: "暴雨夜车", duration: 150 },
      { name: "沉默的公路", duration: 233 }, { name: "初晴", duration: 158 }, { name: "孤岛甲板", duration: 193 },
      { name: "久违的归途", duration: 176 }, { name: "长夜裂痕", duration: 194 } ] },
    { name: "雨夜岔路", type: "专辑", date: "2036-01-05", songs: [
      { name: "雨夜岔路", duration: 200 }, { name: "久违的逆旅", duration: 160 }, { name: "冷月暗涌", duration: 182 },
      { name: "甲板极夜", duration: 198 }, { name: "霜降静默", duration: 191 }, { name: "末班车断层", duration: 197 },
      { name: "初晴停电", duration: 185 }, { name: "曦光电线", duration: 196 } ] },
    { name: "黑巷锈迹", type: "专辑", date: "2040-02-08", songs: [
      { name: "黑巷锈迹", duration: 177 }, { name: "霜降雨夜", duration: 168 }, { name: "灰烬", duration: 112 },
      { name: "深夜的倒影", duration: 207 }, { name: "阁楼逆光", duration: 135 }, { name: "废楼骤雨", duration: 201 },
      { name: "灰墙星光", duration: 159 }, { name: "沙丘铁门", duration: 196 }, { name: "残阳孤岛", duration: 188 },
      { name: "天台荒岛", duration: 195 }, { name: "长夜", duration: 229 } ] },
    { name: "电塔残响", type: "专辑", date: "2045-03-01", songs: [
      { name: "电塔残响", duration: 195 }, { name: "深夜的残阳", duration: 211 }, { name: "沉默的雨篷", duration: 211 },
      { name: "天台高墙", duration: 175 }, { name: "暗巷汽笛", duration: 179 }, { name: "天桥裂痕", duration: 209 },
      { name: "无名的路口", duration: 188 }, { name: "深夜的废楼", duration: 179 }, { name: "无名的黑巷", duration: 182 } ] },
    { name: "锈迹灰墙", type: "专辑", date: "2049-03-22", songs: [
      { name: "锈迹灰墙", duration: 176 }, { name: "出口废楼", duration: 184 }, { name: "深夜的雪线", duration: 183 },
      { name: "路口铁道", duration: 201 }, { name: "久违的末班车", duration: 153 }, { name: "潮汐疾风", duration: 211 },
      { name: "漫长的高架", duration: 334 }, { name: "镜面路口", duration: 203 }, { name: "沉默的铁笼", duration: 317 },
      { name: "久违的极夜", duration: 121 }, { name: "沉默的回声壁", duration: 201 } ] },
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
      { name: "走廊废楼", type: "专辑", date: "2028-03-01", songs: [
      { name: "走廊废楼", duration: 252 }, { name: "铁轨高墙", duration: 242 }, { name: "铁轨电塔", duration: 254 },
      { name: "潮汐铁轨", duration: 237 }, { name: "沉默的电线", duration: 193 }, { name: "长风", duration: 284 },
      { name: "铁笼曦光", duration: 199 }, { name: "高架落雪", duration: 415 }, { name: "夜航车窗", duration: 265 },
      { name: "荒岛", duration: 362 } ] },
    { name: "沙漏信号灯", type: "专辑", date: "2032-03-05", songs: [
      { name: "沙漏信号灯", duration: 160 }, { name: "街灯潮声", duration: 248 }, { name: "沉默的极夜", duration: 286 },
      { name: "荒岛寒潮", duration: 281 }, { name: "久违的夜潮", duration: 260 }, { name: "无名的暗涌", duration: 241 },
      { name: "遥远的街角", duration: 235 }, { name: "回声冷月", duration: 235 }, { name: "暮色黑巷", duration: 271 } ] },
    { name: "风口渡轮", type: "专辑", date: "2036-10-09", songs: [
      { name: "风口渡轮", duration: 247 }, { name: "沉默的信号灯", duration: 260 }, { name: "铁笼回声壁", duration: 235 },
      { name: "长夜走廊", duration: 253 }, { name: "沉默的天光", duration: 253 }, { name: "遥远的暗涌", duration: 224 },
      { name: "无名的沙漏", duration: 250 }, { name: "空城野火", duration: 255 }, { name: "遥远的潮声", duration: 223 },
      { name: "灰墙荒野", duration: 279 }, { name: "漫长的夜车", duration: 260 } ] },
    { name: "沉默的匝道", type: "专辑", date: "2040-12-18", songs: [
      { name: "沉默的匝道", duration: 258 }, { name: "野火晚钟", duration: 249 }, { name: "天桥出口", duration: 266 },
      { name: "屋顶断层", duration: 238 }, { name: "遥远的公路", duration: 283 }, { name: "沉默的空城", duration: 218 },
      { name: "无名的车窗", duration: 305 }, { name: "电线暮色", duration: 246 } ] },
    { name: "闪电废楼", type: "专辑", date: "2044-10-27", songs: [
      { name: "闪电废楼", duration: 312 }, { name: "碎片暴雨", duration: 240 }, { name: "沉默的断线", duration: 268 },
      { name: "无名的天桥", duration: 255 }, { name: "沉默的余烬", duration: 243 }, { name: "涂鸦回声壁", duration: 244 },
      { name: "晚钟荒原", duration: 187 } ] },
    { name: "暮色信号灯", type: "专辑", date: "2048-11-30", songs: [
      { name: "暮色信号灯", duration: 145 }, { name: "深夜的荒野", duration: 262 }, { name: "铁门远方", duration: 265 },
      { name: "沉默的静默", duration: 267 }, { name: "遥远的荒原", duration: 256 }, { name: "无名的雨篷", duration: 165 },
      { name: "野猫废楼", duration: 226 }, { name: "久违的公路", duration: 250 } ] },
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
      { name: "Broken", type: "专辑", date: "2028-02-22", songs: [
      { name: "Broken（破碎）", duration: 151 }, { name: "Echo Hollow（回声的空洞）", duration: 207 }, { name: "Snow（雪）", duration: 179 },
      { name: "Storm Fable（风暴的寓言）", duration: 239 }, { name: "Pond（池塘）", duration: 256 }, { name: "Silence（沉寂）", duration: 262 },
      { name: "Harbor Ocean（港湾的海洋）", duration: 262 }, { name: "Tower（塔）", duration: 282 }, { name: "Pebble Path（卵石的小径）", duration: 238 } ] },
    { name: "Ocean", type: "专辑", date: "2032-09-01", songs: [
      { name: "Ocean（海洋）", duration: 251 }, { name: "Sundown（日落）", duration: 282 }, { name: "Ballet（芭蕾）", duration: 260 },
      { name: "Blossom（花开）", duration: 230 }, { name: "Lake Tide（湖的潮汐）", duration: 202 }, { name: "Sea（海）", duration: 269 },
      { name: "Lantern（灯笼）", duration: 239 }, { name: "Undertow Ashes（暗流的灰烬）", duration: 287 } ] },
    { name: "Amber", type: "专辑", date: "2036-09-11", songs: [
      { name: "Amber（琥珀）", duration: 347 }, { name: "Cloud（云）", duration: 276 }, { name: "Bloom Star（绽放的星）", duration: 236 },
      { name: "Bloom Desert（绽放的荒原）", duration: 262 }, { name: "Leaf（叶）", duration: 197 }, { name: "Wires Broken（电线的破碎）", duration: 304 },
      { name: "Rust（锈迹）", duration: 205 }, { name: "Bloom Vine（绽放的藤蔓）", duration: 283 }, { name: "Forest（森林）", duration: 374 } ] },
    { name: "Lake", type: "专辑", date: "2040-02-26", songs: [
      { name: "Lake（湖）", duration: 253 }, { name: "Shore Nightfall（岸边的夜幕）", duration: 239 }, { name: "Iron（铁）", duration: 234 },
      { name: "Thaw（融雪）", duration: 172 }, { name: "Silk（丝绸）", duration: 294 }, { name: "Diamond（钻石）", duration: 278 },
      { name: "Velvet Veil（天鹅绒的帷幕）", duration: 243 }, { name: "Dust（尘埃）", duration: 230 } ] },
    { name: "Roof Smoke", type: "专辑", date: "2044-05-20", songs: [
      { name: "Roof Smoke（屋顶的烟雾）", duration: 237 }, { name: "Wood Velvet（树林的天鹅绒）", duration: 262 }, { name: "Spark（火花）", duration: 275 },
      { name: "Ridge Grain（山脊的颗粒）", duration: 251 }, { name: "Harbor（港湾）", duration: 235 }, { name: "Midnight（午夜）", duration: 267 },
      { name: "Vapor Storm（雾霭的风暴）", duration: 232 }, { name: "Feather（羽毛）", duration: 282 }, { name: "Canvas（画布）", duration: 252 },
      { name: "Ember Veil（余烬的帷幕）", duration: 283 } ] },
    { name: "Sky", type: "专辑", date: "2049-04-12", songs: [
      { name: "Sky（天空）", duration: 218 }, { name: "Crystal（水晶）", duration: 265 }, { name: "Window（窗）", duration: 280 },
      { name: "Song Veil（歌的帷幕）", duration: 176 }, { name: "Blossom Path（花开的小径）", duration: 478 }, { name: "Anchor Ice（锚的冰）", duration: 214 },
      { name: "Coral Tower（珊瑚的塔）", duration: 308 }, { name: "Sun（太阳）", duration: 219 }, { name: "Glow（辉光）", duration: 260 } ] },
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
      { name: "环流霓虹", type: "专辑", date: "2027-10-07", songs: [
      { name: "环流霓虹", duration: 535 }, { name: "闪电巷子", duration: 314 }, { name: "霓虹信号", duration: 220 },
      { name: "雨篷余烬", duration: 299 }, { name: "高墙深巷", duration: 246 }, { name: "惊雷夜航", duration: 289 },
      { name: "断层环流", duration: 330 } ] },
    { name: "沙漏风铃", type: "专辑", date: "2031-09-09", songs: [
      { name: "沙漏风铃", duration: 314 }, { name: "暮云信号灯", duration: 313 }, { name: "星光阁楼", duration: 288 },
      { name: "阁楼天光", duration: 560 }, { name: "潮间带天光", duration: 312 }, { name: "岔路白墙", duration: 330 },
      { name: "遥远的高架", duration: 177 }, { name: "潮汐残响", duration: 550 }, { name: "台阶霓虹", duration: 401 } ] },
    { name: "遥远的影中人", type: "专辑", date: "2034-09-16", songs: [
      { name: "遥远的影中人", duration: 326 }, { name: "车窗极夜", duration: 174 }, { name: "骤雨逆流", duration: 303 },
      { name: "久违的暴雨", duration: 257 }, { name: "码头涂鸦", duration: 284 }, { name: "汽笛潮声", duration: 307 },
      { name: "灰墙旧巷", duration: 305 } ] },
    { name: "回声铁桥", type: "专辑", date: "2038-03-18", songs: [
      { name: "回声铁桥", duration: 252 }, { name: "沉默的霜降", duration: 283 }, { name: "尘埃光年", duration: 293 },
      { name: "灰墙楼顶", duration: 332 }, { name: "落雪裂痕", duration: 305 }, { name: "久违的野火", duration: 283 },
      { name: "晚风夜潮", duration: 257 }, { name: "铁门信号", duration: 176 }, { name: "沉默的深巷", duration: 319 },
      { name: "久违的尘埃", duration: 361 }, { name: "环流冷月", duration: 303 } ] },
    { name: "公路曦光", type: "专辑", date: "2041-10-18", songs: [
      { name: "公路曦光", duration: 361 }, { name: "倒影铁桥", duration: 304 }, { name: "沉默的夜班", duration: 265 },
      { name: "沉默的游园", duration: 318 }, { name: "深巷暗巷", duration: 293 }, { name: "极夜隧道", duration: 284 },
      { name: "深夜落雪", duration: 307 }, { name: "暗涌阁楼", duration: 309 }, { name: "残阳潮声", duration: 320 },
      { name: "遥远的尘埃", duration: 187 } ] },
    { name: "逆旅空城", type: "专辑", date: "2045-08-12", songs: [
      { name: "逆旅空城", duration: 320 }, { name: "碎片电线", duration: 307 }, { name: "深夜的风口", duration: 326 },
      { name: "回声匝道", duration: 356 }, { name: "光年野猫", duration: 298 }, { name: "深夜巷子", duration: 296 },
      { name: "沙漏余烬", duration: 282 } ] },
    { name: "沉默的远方", type: "专辑", date: "2048-12-09", songs: [
      { name: "沉默的远方", duration: 286 }, { name: "无名的汽笛", duration: 312 }, { name: "远方铁道", duration: 335 },
      { name: "沉默的旧城", duration: 177 }, { name: "久违的沙丘", duration: 240 }, { name: "甲板末班车", duration: 327 },
      { name: "漫长的汽笛", duration: 370 } ] },
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
      { name: "阁楼迷途", type: "专辑", date: "2027-12-29", songs: [
      { name: "阁楼迷途", duration: 331 }, { name: "初晴断层", duration: 210 }, { name: "废楼暮云", duration: 315 },
      { name: "暗巷极夜", duration: 413 }, { name: "尘埃荒野", duration: 361 }, { name: "铁门潮汐", duration: 352 },
      { name: "车窗雨夜", duration: 343 }, { name: "碎片暮色", duration: 419 }, { name: "街灯路口", duration: 420 },
      { name: "暗涌匝道", duration: 314 }, { name: "疾风黑巷", duration: 289 } ] },
    { name: "星光灰墙", type: "专辑", date: "2032-02-03", songs: [
      { name: "星光灰墙", duration: 294 }, { name: "遥远的旧城", duration: 339 }, { name: "久违的楼顶", duration: 313 },
      { name: "路口晨雾", duration: 274 }, { name: "暮光夜雾", duration: 363 }, { name: "暗涌逆旅", duration: 337 },
      { name: "久违的白墙", duration: 343 }, { name: "铁道台阶", duration: 355 }, { name: "斑马线杂草", duration: 201 },
      { name: "水岸屋顶", duration: 316 }, { name: "无名的水岸", duration: 357 } ] },
    { name: "断线倒影", type: "专辑", date: "2036-08-19", songs: [
      { name: "断线倒影", duration: 334 }, { name: "深夜的远方", duration: 353 }, { name: "无名的倒影", duration: 315 },
      { name: "久违的回声壁", duration: 317 }, { name: "霓虹旧巷", duration: 270 }, { name: "雪线高墙", duration: 358 },
      { name: "夜航惊雷", duration: 378 } ] },
    { name: "无名的潮间带", type: "专辑", date: "2040-11-17", songs: [
      { name: "无名的潮间带", duration: 560 }, { name: "铁桥天光", duration: 358 }, { name: "锈迹旧城", duration: 369 },
      { name: "深夜的黑巷", duration: 372 }, { name: "风筝走廊", duration: 358 }, { name: "深夜渡轮", duration: 342 },
      { name: "废墟晚风", duration: 355 }, { name: "暗涌暴雨", duration: 366 } ] },
    { name: "涂鸦镜面", type: "专辑", date: "2044-05-14", songs: [
      { name: "涂鸦镜面", duration: 373 }, { name: "深夜的隧道", duration: 367 }, { name: "深夜的逆旅", duration: 415 },
      { name: "天桥镜面", duration: 410 }, { name: "落雪潮间带", duration: 343 }, { name: "无名的荒径", duration: 335 },
      { name: "空城末班车", duration: 560 } ] },
    { name: "公路杂草", type: "专辑", date: "2049-03-02", songs: [
      { name: "公路杂草", duration: 356 }, { name: "寒潮尘埃", duration: 382 }, { name: "电线荒径", duration: 352 },
      { name: "沙漏天桥", duration: 328 }, { name: "电塔归途", duration: 326 }, { name: "冷月杂草", duration: 349 },
      { name: "回声霜降", duration: 338 }, { name: "旧城潮汐", duration: 351 } ] },
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
      { name: "沉默的破碎", type: "专辑", date: "2027-03-08", songs: [
      { name: "沉默的破碎", duration: 234 }, { name: "铁蹄", duration: 274 }, { name: "铁誓", duration: 248 },
      { name: "铁链", duration: 302 }, { name: "铁壁", duration: 249 }, { name: "冰川", duration: 244 },
      { name: "铁塔审判", duration: 275 }, { name: "极昼", duration: 246 }, { name: "石柱", duration: 244 } ] },
    { name: "亡魂雷鸣", type: "专辑", date: "2029-05-19", songs: [
      { name: "亡魂雷鸣", duration: 452 }, { name: "铁骑", duration: 219 }, { name: "钢铁", duration: 251 },
      { name: "无名的钢铁", duration: 234 }, { name: "深夜的铁血", duration: 236 }, { name: "战旗", duration: 236 },
      { name: "沉默的绝境", duration: 234 }, { name: "漫长的破碎", duration: 275 }, { name: "长矛铁诫", duration: 280 },
      { name: "王座铁盔", duration: 178 }, { name: "铁峰", duration: 272 } ] },
    { name: "寒夜", type: "专辑", date: "2031-05-12", songs: [
      { name: "寒夜", duration: 261 }, { name: "灰烬城", duration: 410 }, { name: "石柱熔炉", duration: 282 },
      { name: "狂暴", duration: 157 }, { name: "战车", duration: 457 }, { name: "铁丘", duration: 235 },
      { name: "王座战旗", duration: 242 }, { name: "荒原燃烧", duration: 247 } ] },
    { name: "铁盔", type: "专辑", date: "2033-06-29", songs: [
      { name: "铁盔", duration: 178 }, { name: "怒吼", duration: 233 }, { name: "寒霜苍穹", duration: 270 },
      { name: "崩裂", duration: 253 }, { name: "暗狱铁诫", duration: 240 }, { name: "高原", duration: 252 },
      { name: "绝境", duration: 243 }, { name: "铁渊", duration: 244 } ] },
    { name: "黑潮", type: "专辑", date: "2035-08-06", songs: [
      { name: "黑潮", duration: 209 }, { name: "审判", duration: 246 }, { name: "铁座血河", duration: 235 },
      { name: "灰烬城铁渊", duration: 307 }, { name: "久违的铸剑", duration: 159 }, { name: "深夜的黑铁", duration: 196 },
      { name: "铁血", duration: 208 }, { name: "苍穹", duration: 215 }, { name: "铁羽", duration: 233 } ] },
    { name: "火海纪念碑", type: "专辑", date: "2037-07-07", songs: [
      { name: "火海纪念碑", duration: 274 }, { name: "巨浪雷鸣", duration: 185 }, { name: "黑焰", duration: 280 },
      { name: "炼狱", duration: 220 }, { name: "战鼓", duration: 181 }, { name: "战鼓深渊", duration: 294 },
      { name: "久违的燃烧", duration: 217 }, { name: "铁轨铁爪", duration: 238 }, { name: "冰川绝境", duration: 263 },
      { name: "亡魂", duration: 251 }, { name: "沉默的巨浪", duration: 281 } ] },
    { name: "沉默的荒原", type: "专辑", date: "2039-09-06", songs: [
      { name: "沉默的荒原", duration: 241 }, { name: "石柱冰川", duration: 161 }, { name: "铁丘铁座", duration: 311 },
      { name: "深夜的狂暴", duration: 237 }, { name: "铁诫", duration: 267 }, { name: "沉默的铁羽", duration: 279 },
      { name: "巅峰铁律", duration: 445 }, { name: "极昼铁矛", duration: 345 }, { name: "王座铁链", duration: 343 },
      { name: "漫长的铁座", duration: 262 }, { name: "孤城", duration: 154 } ] },
    { name: "无名的寒霜", type: "专辑", date: "2041-10-07", songs: [
      { name: "无名的寒霜", duration: 172 }, { name: "黑日", duration: 259 }, { name: "久违的孤城", duration: 257 },
      { name: "铁骨", duration: 254 }, { name: "沉默的熔炉", duration: 281 }, { name: "血誓", duration: 245 },
      { name: "铁座铁渊", duration: 406 }, { name: "久违的铁座", duration: 234 }, { name: "荒岭", duration: 391 } ] },
    { name: "血月怒吼", type: "专辑", date: "2043-12-18", songs: [
      { name: "血月怒吼", duration: 252 }, { name: "极北铁律", duration: 237 }, { name: "沉默的火海", duration: 203 },
      { name: "钢铁铁冠", duration: 182 }, { name: "亡魂铁盔", duration: 272 }, { name: "荒岭黑铁", duration: 277 },
      { name: "无名的深渊", duration: 251 }, { name: "遥远的炼狱", duration: 246 }, { name: "无名的雷鸣", duration: 248 } ] },
    { name: "久违的破碎", type: "专辑", date: "2046-01-17", songs: [
      { name: "久违的破碎", duration: 151 }, { name: "无名的燃烧", duration: 278 }, { name: "久违的长矛", duration: 233 },
      { name: "铁轨铁蹄", duration: 231 }, { name: "沉默的战鼓", duration: 256 }, { name: "铁羽寒夜", duration: 253 },
      { name: "极北铁塔", duration: 288 } ] },
    { name: "铁血极昼", type: "专辑", date: "2047-11-02", songs: [
      { name: "铁血极昼", duration: 241 }, { name: "无名的石柱", duration: 260 }, { name: "黑铁", duration: 310 },
      { name: "破碎", duration: 274 }, { name: "铁律战鼓", duration: 261 }, { name: "遥远的铁牢", duration: 247 },
      { name: "荒岭战鼓", duration: 355 }, { name: "沉默的铁魂", duration: 166 } ] },
    { name: "铁冠", type: "专辑", date: "2049-12-18", songs: [
      { name: "铁冠", duration: 243 }, { name: "久违的铁魂", duration: 249 }, { name: "遥远的铁骨", duration: 243 },
      { name: "铁锤", duration: 471 }, { name: "久违的纪念碑", duration: 245 }, { name: "遥远的绝境", duration: 180 },
      { name: "久违的巨浪", duration: 270 } ] },
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
      { name: "纪念碑铁壁", type: "单曲", date: "2028-02-01", songs: [
      { name: "纪念碑铁壁", duration: 207 } ] },
    { name: "荒岭铁座", type: "专辑", date: "2031-10-22", songs: [
      { name: "荒岭铁座", duration: 320 }, { name: "战车巅峰", duration: 241 }, { name: "铁塔铁丘", duration: 249 },
      { name: "血誓圣坛", duration: 243 }, { name: "铁谷铁羽", duration: 232 }, { name: "沉默的铁盔", duration: 220 },
      { name: "沉默的铁矛", duration: 241 }, { name: "铁魂重盾", duration: 238 } ] },
    { name: "漫长的圣坛", type: "专辑", date: "2034-09-16", songs: [
      { name: "漫长的圣坛", duration: 232 }, { name: "久违的熔炉", duration: 296 }, { name: "黑焰铁锤", duration: 157 },
      { name: "亡魂铁矛", duration: 220 }, { name: "巅峰崩裂", duration: 245 }, { name: "裂痕铁棺", duration: 191 },
      { name: "巅峰极北", duration: 249 } ] },
    { name: "铁冠崩裂", type: "专辑", date: "2038-04-20", songs: [
      { name: "铁冠崩裂", duration: 217 }, { name: "铁轨荒原", duration: 261 }, { name: "沉默的铁峰", duration: 260 },
      { name: "无名的战鼓", duration: 262 }, { name: "战鼓破碎", duration: 226 }, { name: "崩裂铁冠", duration: 231 },
      { name: "铁矛", duration: 268 }, { name: "铁盔铁血", duration: 166 } ] },
    { name: "寒霜炼狱", type: "专辑", date: "2041-10-08", songs: [
      { name: "寒霜炼狱", duration: 240 }, { name: "铁爪铁崖", duration: 240 }, { name: "崩裂雷鸣", duration: 232 },
      { name: "无名的铁血", duration: 234 }, { name: "黑日审判", duration: 290 }, { name: "铁链黑焰", duration: 244 },
      { name: "铁律铁魂", duration: 221 } ] },
    { name: "沉默的高原", type: "专辑", date: "2045-09-25", songs: [
      { name: "沉默的高原", duration: 233 }, { name: "铁谷极昼", duration: 220 }, { name: "沉默的荒岭", duration: 262 },
      { name: "漫长的铁誓", duration: 239 }, { name: "巨浪重盾", duration: 266 }, { name: "铁魂铁崖", duration: 241 },
      { name: "铸剑铁蹄", duration: 162 }, { name: "血誓雷霆", duration: 228 }, { name: "铁渊重盾", duration: 368 },
      { name: "孤鹰", duration: 265 }, { name: "铁崖", duration: 230 } ] },
    { name: "沉默的黑铁", type: "专辑", date: "2049-05-18", songs: [
      { name: "沉默的黑铁", duration: 257 }, { name: "铁冠狂暴", duration: 252 }, { name: "暗狱亡魂", duration: 283 },
      { name: "无名的铁爪", duration: 240 }, { name: "长矛圣坛", duration: 195 }, { name: "深夜的血河", duration: 158 },
      { name: "铁誓冰川", duration: 253 }, { name: "深夜的火山", duration: 172 }, { name: "遥远的纪念碑", duration: 224 } ] },
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
      { name: "铁翼苍穹", type: "专辑", date: "2027-10-25", songs: [
      { name: "铁翼苍穹", duration: 292 }, { name: "炼狱铁血", duration: 513 }, { name: "铁座", duration: 256 },
      { name: "遥远的破碎", duration: 260 }, { name: "孤城纪念碑", duration: 308 }, { name: "久违的黑日", duration: 221 },
      { name: "遥远的铁矛", duration: 367 }, { name: "极北铁轨", duration: 260 } ] },
    { name: "铁蹄铁盔", type: "专辑", date: "2031-04-17", songs: [
      { name: "铁蹄铁盔", duration: 198 }, { name: "遥远的孤鹰", duration: 277 }, { name: "沉默的铁塔", duration: 208 },
      { name: "铁谷血誓", duration: 205 }, { name: "雷鸣铁矛", duration: 205 }, { name: "铁链怒吼", duration: 289 },
      { name: "漫长的燃烧", duration: 267 } ] },
    { name: "血河", type: "专辑", date: "2034-09-21", songs: [
      { name: "血河", duration: 269 }, { name: "暗狱苍穹", duration: 307 }, { name: "铁壁孤鹰", duration: 290 },
      { name: "沉默的黑焰", duration: 283 }, { name: "狂暴铁谷", duration: 261 }, { name: "雷鸣荒岭", duration: 338 },
      { name: "雷鸣铁轨", duration: 307 } ] },
    { name: "暗狱血月", type: "专辑", date: "2038-09-15", songs: [
      { name: "暗狱血月", duration: 175 }, { name: "铁牢灰烬", duration: 279 }, { name: "无名的铁矛", duration: 254 },
      { name: "铁棺火山", duration: 203 }, { name: "铁骨极北", duration: 252 }, { name: "铁盔铁誓", duration: 267 },
      { name: "裂痕火山", duration: 278 }, { name: "暗狱铁渊", duration: 227 }, { name: "铁骑审判", duration: 264 },
      { name: "战鼓荒原", duration: 173 }, { name: "荒原铁轨", duration: 271 } ] },
    { name: "遥远的怒吼", type: "EP", date: "2042-01-31", songs: [
      { name: "遥远的怒吼", duration: 241 }, { name: "崩裂铁骨", duration: 282 }, { name: "遥远的铁盔", duration: 302 },
      { name: "亡魂崩裂", duration: 190 }, { name: "深夜的铁盔", duration: 305 } ] },
    { name: "铁骑铁塔", type: "专辑", date: "2045-07-10", songs: [
      { name: "铁骑铁塔", duration: 258 }, { name: "铁血铁谷", duration: 291 }, { name: "沉默的铁冠", duration: 300 },
      { name: "铁牢", duration: 258 }, { name: "深夜的铁幕", duration: 287 }, { name: "遥远的铁棺", duration: 198 },
      { name: "深夜的铁渊", duration: 451 }, { name: "遥远的寒夜", duration: 456 } ] },
    { name: "铁誓铁冠", type: "专辑", date: "2049-04-15", songs: [
      { name: "铁誓铁冠", duration: 271 }, { name: "沉默的炼狱", duration: 253 }, { name: "黑焰铸剑", duration: 308 },
      { name: "铁渊铁魂", duration: 528 }, { name: "沉默的雷鸣", duration: 259 }, { name: "遥远的铁壁", duration: 249 },
      { name: "圣坛亡魂", duration: 257 }, { name: "寒夜苍穹", duration: 279 }, { name: "王座裂痕", duration: 288 } ] },
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
      { name: "齿轮", type: "EP", date: "2027-11-01", songs: [
      { name: "齿轮", duration: 248 }, { name: "沉默的乱码", duration: 256 }, { name: "逆反", duration: 231 } ] },
    { name: "久违的破窗", type: "专辑", date: "2032-05-27", songs: [
      { name: "久违的破窗", duration: 224 }, { name: "久违的噪点", duration: 383 }, { name: "钉子", duration: 327 },
      { name: "铁网冲锋", duration: 151 }, { name: "反光", duration: 250 }, { name: "砂纸", duration: 190 },
      { name: "烂尾", duration: 196 }, { name: "断电", duration: 184 }, { name: "呐喊", duration: 225 },
      { name: "快跑钉子", duration: 216 }, { name: "野狗", duration: 423 } ] },
    { name: "集会", type: "专辑", date: "2036-08-23", songs: [
      { name: "集会", duration: 251 }, { name: "弹簧", duration: 242 }, { name: "无名的钉子", duration: 221 },
      { name: "反骨拆迁", duration: 251 }, { name: "漫长的警报", duration: 245 }, { name: "破窗", duration: 239 },
      { name: "密电", duration: 232 }, { name: "喇叭", duration: 273 }, { name: "炮灰", duration: 223 },
      { name: "哨声", duration: 198 } ] },
    { name: "灰头涂鸦", type: "专辑", date: "2040-06-21", songs: [
      { name: "灰头涂鸦", duration: 232 }, { name: "拉链廉价", duration: 240 }, { name: "无名的呐喊", duration: 188 },
      { name: "高墙拆迁", duration: 329 }, { name: "硝烟", duration: 224 }, { name: "电线碎屏", duration: 229 },
      { name: "快闪", duration: 159 }, { name: "涂鸦碎片", duration: 254 }, { name: "火种钉子", duration: 220 },
      { name: "铁钉", duration: 245 }, { name: "断电破洞", duration: 243 } ] },
    { name: "铁网", type: "EP", date: "2044-08-16", songs: [
      { name: "铁网", duration: 238 }, { name: "弹簧烂尾", duration: 237 }, { name: "噪点", duration: 211 },
      { name: "口号", duration: 215 }, { name: "齿轮乱码", duration: 217 }, { name: "深夜的废厂", duration: 213 } ] },
    { name: "砂纸快逃", type: "专辑", date: "2048-07-16", songs: [
      { name: "砂纸快逃", duration: 229 }, { name: "野火廉价", duration: 258 }, { name: "遥远的快逃", duration: 237 },
      { name: "短路", duration: 355 }, { name: "久违的逆反", duration: 223 }, { name: "电压", duration: 243 },
      { name: "电压破洞", duration: 278 }, { name: "久违的电焊", duration: 236 }, { name: "巷子密电", duration: 225 },
      { name: "拉链电压", duration: 251 } ] },
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
      { name: "Moon", type: "专辑", date: "2027-08-06", songs: [
      { name: "Moon（月亮）", duration: 218 }, { name: "Grain Snow（颗粒的雪）", duration: 189 }, { name: "Nest（巢）", duration: 177 },
      { name: "Roof（屋顶）", duration: 187 }, { name: "Shell（贝壳）", duration: 195 }, { name: "Dawn Glimmer（黎明的微光）", duration: 179 },
      { name: "Soil Road（土壤的道路）", duration: 190 }, { name: "Vapor（雾霭）", duration: 228 } ] },
    { name: "Lake Pulse", type: "专辑", date: "2031-07-14", songs: [
      { name: "Lake Pulse（湖的脉冲）", duration: 274 }, { name: "Overcast（阴云）", duration: 197 }, { name: "Loam Faded（沃土的褪色）", duration: 178 },
      { name: "Winter（冬天）", duration: 231 }, { name: "Drift（漂流）", duration: 180 }, { name: "Shell Void（贝壳的虚空）", duration: 176 },
      { name: "Mirrors（镜子）", duration: 213 }, { name: "Static（静电）", duration: 191 } ] },
    { name: "Dusk Circle", type: "专辑", date: "2034-08-30", songs: [
      { name: "Dusk Circle（薄暮的圆圈）", duration: 311 }, { name: "Moss Echo（青苔的回声）", duration: 193 }, { name: "Bloom（绽放）", duration: 179 },
      { name: "Crescent Silence（新月的沉寂）", duration: 149 }, { name: "Silver Breeze（银色的微风）", duration: 177 }, { name: "Window Soil（窗的土壤）", duration: 233 },
      { name: "River Fog（河流的雾）", duration: 185 } ] },
    { name: "Path", type: "专辑", date: "2038-06-16", songs: [
      { name: "Path（小径）", duration: 176 }, { name: "Cliff（断崖）", duration: 343 }, { name: "Pine Shell（松的贝壳）", duration: 182 },
      { name: "Petal Canvas（花瓣的画布）", duration: 208 }, { name: "Sand Mirrors（沙的镜子）", duration: 150 }, { name: "Nightfall Roof（夜幕的屋顶）", duration: 204 },
      { name: "Nest Neon（巢的霓虹）", duration: 197 }, { name: "Journey（旅程）", duration: 183 }, { name: "Gravel Petal（砾石的花瓣）", duration: 225 },
      { name: "Undertow（暗流）", duration: 191 } ] },
    { name: "Velvet Motel", type: "专辑", date: "2041-12-11", songs: [
      { name: "Velvet Motel（天鹅绒的汽车旅馆）", duration: 192 }, { name: "Coral（珊瑚）", duration: 151 }, { name: "Ashes（灰烬）", duration: 183 },
      { name: "Whisper Frost（低语的霜）", duration: 196 }, { name: "Ember（余烬）", duration: 342 }, { name: "Window Velvet（窗的天鹅绒）", duration: 180 },
      { name: "Vine Moon（藤蔓的月亮）", duration: 204 }, { name: "Beacon Window（灯塔的窗）", duration: 216 }, { name: "Blossom Gravel（花开的砾石）", duration: 174 } ] },
    { name: "Rain Glass", type: "专辑", date: "2045-09-08", songs: [
      { name: "Rain Glass（雨的玻璃）", duration: 186 }, { name: "Crescent（新月）", duration: 337 }, { name: "Ocean Vapor（海洋的雾霭）", duration: 196 },
      { name: "Orbit Ivory（轨道的象牙）", duration: 167 }, { name: "Daylight Dust（日光的尘埃）", duration: 196 }, { name: "River Thaw（河流的融雪）", duration: 206 },
      { name: "Stream（溪流）", duration: 189 } ] },
    { name: "Meadow", type: "专辑", date: "2049-01-13", songs: [
      { name: "Meadow（草地）", duration: 183 }, { name: "Grain（颗粒）", duration: 196 }, { name: "Storm（风暴）", duration: 294 },
      { name: "Glass（玻璃）", duration: 182 }, { name: "Paperplane（纸飞机）", duration: 192 }, { name: "River（河流）", duration: 200 },
      { name: "Hollow（空洞）", duration: 182 }, { name: "Valley（山谷）", duration: 218 }, { name: "Daybreak Shell（黎明的贝壳）", duration: 186 },
      { name: "Star Sundown（星的日落）", duration: 139 }, { name: "Slope Trail（斜坡的足迹）", duration: 193 } ] },
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
      { name: "铁道天桥", type: "专辑", date: "2027-03-20", songs: [
      { name: "铁道天桥", duration: 287 }, { name: "无名的断层", duration: 420 }, { name: "骤雨走廊", duration: 184 },
      { name: "荒岛渡轮", duration: 464 }, { name: "渡轮岔路", duration: 226 }, { name: "遥远的逆旅", duration: 257 },
      { name: "雪线骤雨", duration: 242 }, { name: "晚钟斑马线", duration: 226 }, { name: "沉默的迷途", duration: 251 },
      { name: "沉默的出口", duration: 371 } ] },
    { name: "闪电汽笛", type: "专辑", date: "2030-12-03", songs: [
      { name: "闪电汽笛", duration: 253 }, { name: "夜潮旧巷", duration: 461 }, { name: "沉默的暮云", duration: 245 },
      { name: "无名的暴雨", duration: 237 }, { name: "晚钟涂鸦", duration: 239 }, { name: "深夜的曦光", duration: 170 },
      { name: "渡轮巷子", duration: 234 }, { name: "无名的隧道", duration: 239 } ] },
    { name: "无名的末班车", type: "专辑", date: "2034-03-05", songs: [
      { name: "无名的末班车", duration: 284 }, { name: "沉默的残阳", duration: 214 }, { name: "旧梦晨雾", duration: 263 },
      { name: "遥远的星光", duration: 261 }, { name: "沉默的暗号", duration: 253 }, { name: "疾风高墙", duration: 235 },
      { name: "旧梦静默", duration: 251 }, { name: "末班车街角", duration: 260 }, { name: "骤雨站台", duration: 254 },
      { name: "逆流铁道", duration: 263 }, { name: "雨夜极夜", duration: 200 } ] },
    { name: "野火水岸", type: "专辑", date: "2037-04-12", songs: [
      { name: "野火水岸", duration: 298 }, { name: "黑巷沙丘", duration: 284 }, { name: "深夜的灯塔", duration: 153 },
      { name: "沉默的晨雾", duration: 221 }, { name: "暮色环流", duration: 252 }, { name: "夜航荒原", duration: 239 },
      { name: "极夜灰烬", duration: 164 }, { name: "久违的落雪", duration: 208 }, { name: "码头骤雨", duration: 258 },
      { name: "深夜的光年", duration: 166 }, { name: "漫长的信号灯", duration: 228 } ] },
    { name: "漫长的荒岛", type: "专辑", date: "2039-09-18", songs: [
      { name: "漫长的荒岛", duration: 228 }, { name: "雪线废墟", duration: 232 }, { name: "沉默的沙丘", duration: 185 },
      { name: "雨夜光年", duration: 228 }, { name: "久违的环流", duration: 261 }, { name: "荒岛高墙", duration: 257 },
      { name: "沉默的星光", duration: 243 }, { name: "沉默的停电", duration: 232 }, { name: "深夜的停电", duration: 255 },
      { name: "旧巷铁轨", duration: 211 }, { name: "夜航风口", duration: 223 } ] },
    { name: "极夜电线", type: "专辑", date: "2042-11-27", songs: [
      { name: "极夜电线", duration: 238 }, { name: "沉默的夜雾", duration: 251 }, { name: "暮光码头", duration: 267 },
      { name: "沙漏残响", duration: 136 }, { name: "深夜的末班车", duration: 266 }, { name: "街灯铁笼", duration: 266 },
      { name: "星光长风", duration: 244 }, { name: "倒影疾风", duration: 299 } ] },
    { name: "沉默的荒野", type: "专辑", date: "2046-04-29", songs: [
      { name: "沉默的荒野", duration: 268 }, { name: "冷月灯塔", duration: 259 }, { name: "匝道汽笛", duration: 249 },
      { name: "迷途楼顶", duration: 223 }, { name: "信号疾风", duration: 239 }, { name: "铁道阁楼", duration: 292 },
      { name: "沉默的杂草", duration: 284 }, { name: "晨雾光年", duration: 231 }, { name: "深夜的铁道", duration: 393 } ] },
    { name: "废楼电线", type: "专辑", date: "2049-06-26", songs: [
      { name: "废楼电线", duration: 273 }, { name: "长风匝道", duration: 221 }, { name: "余烬长风", duration: 262 },
      { name: "候鸟电塔", duration: 135 }, { name: "迷途回声", duration: 383 }, { name: "铁桥阁楼", duration: 260 },
      { name: "荒原废楼", duration: 229 }, { name: "信号旧巷", duration: 233 }, { name: "无名的冷月", duration: 169 },
      { name: "极夜末班车", duration: 251 }, { name: "雨夜风口", duration: 184 } ] },
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
        { name: "1978", duration: 270 }, { name: "沙滩绅士", duration: 276 }, { name: "午后三点", duration: 259 },
        { name: "柔光", duration: 247 }, { name: "低声细语", duration: 285 }, { name: "Me&I", duration: 261 },
        { name: "夜空多灿烂", duration: 283 }, { name: "木偶剧", duration: 261 },
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
      { name: "惊雷逆流", type: "专辑", date: "2028-08-01", songs: [
      { name: "惊雷逆流", duration: 287 }, { name: "雨夜荒野", duration: 267 }, { name: "锈迹铁桥", duration: 220 },
      { name: "遥远的沙漏", duration: 261 }, { name: "漫长的荒野", duration: 245 }, { name: "漫长的隧道", duration: 284 },
      { name: "沙漏风筝", duration: 257 }, { name: "黑巷荒径", duration: 263 } ] },
    { name: "电线惊雷", type: "专辑", date: "2032-08-04", songs: [
      { name: "电线惊雷", duration: 287 }, { name: "长夜候鸟", duration: 195 }, { name: "遥远的台阶", duration: 238 },
      { name: "汽笛暗号", duration: 274 }, { name: "水岸天桥", duration: 204 }, { name: "沉默的水岸", duration: 319 },
      { name: "无名的晨雾", duration: 285 }, { name: "狂风天光", duration: 221 }, { name: "出口静默", duration: 251 } ] },
    { name: "无名的光年", type: "专辑", date: "2036-09-10", songs: [
      { name: "无名的光年", duration: 245 }, { name: "晚钟站台", duration: 346 }, { name: "沉默的旧梦", duration: 240 },
      { name: "边界荒原", duration: 260 }, { name: "夜车旧城", duration: 189 }, { name: "沉默的落雪", duration: 280 },
      { name: "疾风废墟", duration: 268 }, { name: "初晴铁轨", duration: 245 } ] },
    { name: "候鸟极夜", type: "专辑", date: "2040-03-01", songs: [
      { name: "候鸟极夜", duration: 251 }, { name: "公路铁轨", duration: 283 }, { name: "回声壁雪线", duration: 276 },
      { name: "漫长的铁门", duration: 264 }, { name: "暮光岔路", duration: 252 }, { name: "沙漏电塔", duration: 206 },
      { name: "深夜的屋顶", duration: 359 } ] },
    { name: "断线野火", type: "专辑", date: "2044-04-10", songs: [
      { name: "断线野火", duration: 228 }, { name: "裂痕暮云", duration: 280 }, { name: "隧道环流", duration: 279 },
      { name: "深夜的车窗", duration: 275 }, { name: "沉默的楼顶", duration: 228 }, { name: "台阶匝道", duration: 269 },
      { name: "漫长的夜雾", duration: 215 }, { name: "无名的旧城", duration: 211 }, { name: "暮光长风", duration: 264 },
      { name: "碎片影中人", duration: 229 } ] },
    { name: "深夜的晚风", type: "专辑", date: "2048-07-17", songs: [
      { name: "深夜的晚风", duration: 236 }, { name: "电塔霜降", duration: 476 }, { name: "漫长的水岸", duration: 146 },
      { name: "深夜的碎片", duration: 237 }, { name: "野猫天光", duration: 213 }, { name: "长风信号灯", duration: 269 },
      { name: "曦光尘埃", duration: 249 } ] },
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
      { name: "童篇", duration: 438 }, { name: "近景", duration: 361 }, { name: "焦虑抑制剂", duration: 530 },
      { name: "M", duration: 367 }, { name: "悬在时间轴上", duration: 626 }, { name: "合乐", duration: 596 },
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
      { name: "鍛高潭", duration: 410 }, { name: "幽魂", duration: 522 }, { name: "五五路", duration: 440 },
      { name: "假若明天来临", duration: 353 }, { name: "流浪者之歌", duration: 553 }, { name: "孤独的鸟", duration: 425 },
      { name: "敢问路在何方", duration: 538 }, { name: "醉忘川", duration: 500 } ] },
    { name: "辛丑壬寅", type: "专辑", date: "2022-01-01", rating: 6.6, songs: [
       { name: "凿壁寻光 (Light behind the wall)", duration: 528 }, { name: "消失的图书馆 (Gone Library)", duration: 290 },
       { name: "白加黑 (Black Pill & White Pill)", duration: 563 }, { name: "辛丑 (Painful Clown)", duration: 380 },
       { name: "壬寅 (Ninja Tiger)", duration: 392 },
       { name: "奥林匹克广场 (There's a Walmart underneath the Olympic Square)", duration: 510 },
       { name: "野火 (Wild Fire)", duration: 455 } ] },
      { name: "环带", type: "专辑", date: "2027-02-27", songs: [
      { name: "环带", duration: 435 }, { name: "沉默的薄雾", duration: 459 }, { name: "倒影光斑", duration: 299 },
      { name: "静水", duration: 480 }, { name: "纹理", duration: 397 }, { name: "遥远", duration: 460 },
      { name: "边缘", duration: 333 }, { name: "光斑", duration: 502 } ] },
    { name: "光栅", type: "专辑", date: "2029-04-18", songs: [
      { name: "光栅", duration: 421 }, { name: "波纹", duration: 470 }, { name: "深夜的光栅", duration: 323 },
      { name: "退潮", duration: 433 }, { name: "经纬", duration: 560 }, { name: "晨光", duration: 382 },
      { name: "深夜的余温", duration: 475 }, { name: "漫长的山脉", duration: 510 }, { name: "光晕", duration: 423 },
      { name: "缓慢", duration: 450 }, { name: "蓝鲸边缘", duration: 481 } ] },
    { name: "环流折线", type: "专辑", date: "2031-06-08", songs: [
      { name: "环流折线", duration: 452 }, { name: "回旋", duration: 483 }, { name: "慢门", duration: 409 },
      { name: "虚空", duration: 435 }, { name: "低频", duration: 446 }, { name: "月相", duration: 395 },
      { name: "蓝鲸", duration: 533 }, { name: "透明余温", duration: 417 }, { name: "水银", duration: 432 },
      { name: "漫长的引力", duration: 505 }, { name: "星云", duration: 408 } ] },
    { name: "极光", type: "专辑", date: "2033-01-25", songs: [
      { name: "极光", duration: 420 }, { name: "轨迹", duration: 315 }, { name: "遥远的地平线", duration: 447 },
      { name: "螺旋", duration: 463 }, { name: "折线长夜", duration: 408 }, { name: "回声苍穹", duration: 430 },
      { name: "山脉", duration: 483 }, { name: "陨石", duration: 388 }, { name: "环流云层", duration: 472 },
      { name: "薄雾", duration: 372 } ] },
    { name: "深空", type: "专辑", date: "2035-05-13", songs: [
      { name: "深空", duration: 439 }, { name: "无声", duration: 426 }, { name: "寂静", duration: 453 },
      { name: "河床", duration: 439 }, { name: "久违的遥远", duration: 448 }, { name: "冰川远山", duration: 406 },
      { name: "漫长的暮色", duration: 467 }, { name: "远山", duration: 372 }, { name: "云层旷野", duration: 399 },
      { name: "银幕", duration: 461 }, { name: "空镜", duration: 465 } ] },
    { name: "折射", type: "专辑", date: "2037-05-27", songs: [
      { name: "折射", duration: 372 }, { name: "遥远的晨光", duration: 433 }, { name: "沉默的水银", duration: 419 },
      { name: "深夜的蓝鲸", duration: 456 }, { name: "水痕", duration: 413 }, { name: "虚空暗流", duration: 368 },
      { name: "久违的退潮", duration: 426 }, { name: "雾霭", duration: 484 } ] },
    { name: "星轨极昼", type: "专辑", date: "2039-08-30", songs: [
      { name: "星轨极昼", duration: 371 }, { name: "无名的云层", duration: 416 }, { name: "久违的轨迹", duration: 375 },
      { name: "星轨", duration: 418 }, { name: "云层回声", duration: 400 }, { name: "缓慢尘埃", duration: 432 },
      { name: "沉默的深空", duration: 481 }, { name: "漂移", duration: 481 } ] },
    { name: "光年低频", type: "专辑", date: "2041-08-12", songs: [
      { name: "光年低频", duration: 510 }, { name: "水痕蓝鲸", duration: 410 }, { name: "漫长的沙漏", duration: 442 },
      { name: "纹理灰白", duration: 402 }, { name: "深海", duration: 373 }, { name: "悬浮", duration: 455 },
      { name: "极地空谷", duration: 466 }, { name: "久违的折返", duration: 297 }, { name: "漫长的银幕", duration: 431 },
      { name: "星轨折线", duration: 470 } ] },
    { name: "月相极地", type: "专辑", date: "2043-12-04", songs: [
      { name: "月相极地", duration: 476 }, { name: "暮色月相", duration: 428 }, { name: "云层经纬", duration: 352 },
      { name: "极地", duration: 440 }, { name: "灰白回旋", duration: 433 }, { name: "碎光", duration: 483 },
      { name: "无名的漂移", duration: 375 }, { name: "空镜光年", duration: 445 }, { name: "极地缓慢", duration: 560 } ] },
    { name: "旷野", type: "专辑", date: "2045-08-22", songs: [
      { name: "旷野", duration: 456 }, { name: "云层", duration: 416 }, { name: "星尘", duration: 426 },
      { name: "光斑回旋", duration: 426 }, { name: "深夜的螺旋", duration: 435 }, { name: "漫长的深空", duration: 418 },
      { name: "地平线", duration: 470 }, { name: "余温沙漏", duration: 352 }, { name: "潮声银幕", duration: 521 },
      { name: "沉默的星尘", duration: 436 }, { name: "空谷", duration: 560 } ] },
    { name: "光晕星云", type: "专辑", date: "2047-10-27", songs: [
      { name: "光晕星云", duration: 560 }, { name: "蓝鲸地平线", duration: 408 }, { name: "遥远的星云", duration: 509 },
      { name: "透明空镜", duration: 446 }, { name: "轨迹边缘", duration: 483 }, { name: "无名的回旋", duration: 274 },
      { name: "漫长的水痕", duration: 458 }, { name: "薄雾静默", duration: 522 }, { name: "静止光晕", duration: 314 } ] },
    { name: "光晕深空", type: "专辑", date: "2049-12-18", songs: [
      { name: "光晕深空", duration: 512 }, { name: "回声星际", duration: 475 }, { name: "薄雾星轨", duration: 476 },
      { name: "久违的月相", duration: 483 }, { name: "折线", duration: 419 }, { name: "漂移深海", duration: 483 },
      { name: "光晕轨迹", duration: 474 } ] },
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
      { name: "星尘空镜", type: "专辑", date: "2027-01-25", songs: [
      { name: "星尘空镜", duration: 560 }, { name: "虚焦", duration: 560 }, { name: "遥远极夜", duration: 560 },
      { name: "折返", duration: 560 }, { name: "月相波纹", duration: 560 }, { name: "回声倒影", duration: 560 },
      { name: "灰白", duration: 560 } ] },
    { name: "无声银幕", type: "专辑", date: "2029-05-03", songs: [
      { name: "无声银幕", duration: 560 }, { name: "静止", duration: 411 }, { name: "沉默的云层", duration: 560 },
      { name: "静水星尘", duration: 560 }, { name: "涟漪", duration: 560 }, { name: "银幕尘埃", duration: 560 },
      { name: "沉默的折射", duration: 560 } ] },
    { name: "沉默的雾霭", type: "专辑", date: "2031-02-09", songs: [
      { name: "沉默的雾霭", duration: 515 }, { name: "深夜的薄雾", duration: 560 }, { name: "遥远的深海", duration: 560 },
      { name: "长夜冰川", duration: 560 }, { name: "晨光银幕", duration: 560 }, { name: "深空悬浮", duration: 560 },
      { name: "沉默的边缘", duration: 560 }, { name: "慢门漂移", duration: 491 } ] },
    { name: "深夜的极昼", type: "专辑", date: "2033-05-13", songs: [
      { name: "深夜的极昼", duration: 560 }, { name: "月相深渊", duration: 560 }, { name: "漫长的空谷", duration: 553 },
      { name: "遥远的暮色", duration: 560 }, { name: "沉默的无声", duration: 560 }, { name: "轨迹遥远", duration: 411 },
      { name: "久违的极光", duration: 371 }, { name: "久违的纹理", duration: 541 }, { name: "空谷低语", duration: 560 } ] },
    { name: "苍穹灰白", type: "专辑", date: "2035-03-24", songs: [
      { name: "苍穹灰白", duration: 560 }, { name: "引力", duration: 560 }, { name: "低语", duration: 550 },
      { name: "光栅深渊", duration: 560 }, { name: "边缘折线", duration: 471 }, { name: "光晕暮色", duration: 560 },
      { name: "遥远的折返", duration: 560 }, { name: "久违的星际", duration: 560 }, { name: "静水无声", duration: 560 },
      { name: "久违的波纹", duration: 560 } ] },
    { name: "潮声山脉", type: "专辑", date: "2037-06-07", songs: [
      { name: "潮声山脉", duration: 560 }, { name: "轨迹引力", duration: 560 }, { name: "深夜的虚焦", duration: 560 },
      { name: "沉默的透明", duration: 560 }, { name: "陨石虚空", duration: 560 }, { name: "遥远的云层", duration: 560 },
      { name: "光栅雾霭", duration: 560 }, { name: "深夜的极夜", duration: 560 }, { name: "空谷光年", duration: 560 },
      { name: "暗流沙漏", duration: 560 }, { name: "薄雾长夜", duration: 560 } ] },
    { name: "潮间带光晕", type: "专辑", date: "2039-07-20", songs: [
      { name: "潮间带光晕", duration: 560 }, { name: "深渊螺旋", duration: 560 }, { name: "纹理晨光", duration: 560 },
      { name: "极光深海", duration: 340 }, { name: "月相深空", duration: 560 }, { name: "余温光栅", duration: 560 },
      { name: "晨光低频", duration: 560 }, { name: "寂静漂移", duration: 560 }, { name: "无名的余温", duration: 560 },
      { name: "星云折返", duration: 560 }, { name: "环带光晕", duration: 560 } ] },
    { name: "静止暮色", type: "专辑", date: "2041-07-04", songs: [
      { name: "静止暮色", duration: 518 }, { name: "沉默的潮声", duration: 474 }, { name: "星尘极昼", duration: 560 },
      { name: "沉默的低频", duration: 560 }, { name: "沉默的光栅", duration: 560 }, { name: "光斑极夜", duration: 560 },
      { name: "无名的长夜", duration: 493 } ] },
    { name: "折线薄雾", type: "专辑", date: "2043-10-05", songs: [
      { name: "折线薄雾", duration: 394 }, { name: "苍穹深海", duration: 560 }, { name: "光斑远山", duration: 560 },
      { name: "低语慢门", duration: 560 }, { name: "余温", duration: 552 }, { name: "虚空蓝鲸", duration: 560 },
      { name: "轨迹碎光", duration: 558 }, { name: "缓慢回声", duration: 560 }, { name: "无声晨光", duration: 388 },
      { name: "遥远的碎光", duration: 560 } ] },
    { name: "碎光遥远", type: "专辑", date: "2045-09-03", songs: [
      { name: "碎光遥远", duration: 560 }, { name: "潮声回声", duration: 560 }, { name: "漫长的透明", duration: 560 },
      { name: "退潮低语", duration: 370 }, { name: "虚空折线", duration: 560 }, { name: "漫长的雪线", duration: 560 },
      { name: "深夜的陨石", duration: 560 }, { name: "沉默的轨迹", duration: 560 } ] },
    { name: "陨石极地", type: "专辑", date: "2048-01-01", songs: [
      { name: "陨石极地", duration: 560 }, { name: "漫长的深渊", duration: 474 }, { name: "无名的折线", duration: 560 },
      { name: "遥远的经纬", duration: 560 }, { name: "沉默的环流", duration: 414 }, { name: "深夜的潮间带", duration: 448 },
      { name: "空镜苍穹", duration: 560 }, { name: "无名的灰白", duration: 560 }, { name: "低语虚焦", duration: 560 },
      { name: "星尘银幕", duration: 560 }, { name: "波纹水银", duration: 560 } ] },
    { name: "暗流星云", type: "专辑", date: "2049-09-26", songs: [
      { name: "暗流星云", duration: 361 }, { name: "深夜的漂移", duration: 560 }, { name: "沙漏水痕", duration: 390 },
      { name: "沉默的纹理", duration: 372 }, { name: "遥远的薄雾", duration: 486 }, { name: "久违的倒影", duration: 560 },
      { name: "漫长的潮声", duration: 560 }, { name: "无名的极夜", duration: 560 } ] },
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
      { name: "久违的车窗", type: "专辑", date: "2027-03-12", songs: [
      { name: "久违的车窗", duration: 298 }, { name: "漫长的路口", duration: 242 }, { name: "公路灰墙", duration: 262 },
      { name: "沉默的铁门", duration: 320 }, { name: "灰烬雪线", duration: 311 }, { name: "静默旧城", duration: 268 },
      { name: "遥远的孤岛", duration: 249 } ] },
    { name: "无名的曦光", type: "专辑", date: "2028-12-17", songs: [
      { name: "无名的曦光", duration: 274 }, { name: "暗涌寒潮", duration: 280 }, { name: "天台逆流", duration: 286 },
      { name: "晨雾荒岛", duration: 235 }, { name: "沉默的荒径", duration: 251 }, { name: "深夜的站台", duration: 260 },
      { name: "深夜的长夜", duration: 301 }, { name: "漫长的码头", duration: 254 }, { name: "风筝旧梦", duration: 424 },
      { name: "无名的风筝", duration: 275 } ] },
    { name: "霜降电线", type: "专辑", date: "2031-01-19", songs: [
      { name: "霜降电线", duration: 249 }, { name: "狂风逆光", duration: 217 }, { name: "疾风灰烬", duration: 258 },
      { name: "沉默的残响", duration: 148 }, { name: "夜车迷途", duration: 206 }, { name: "废墟裂痕", duration: 346 },
      { name: "漫长的候鸟", duration: 275 }, { name: "无名的荒岛", duration: 277 } ] },
    { name: "深夜的暮光", type: "专辑", date: "2033-06-03", songs: [
      { name: "深夜的暮光", duration: 258 }, { name: "霜降雨篷", duration: 291 }, { name: "废墟荒原", duration: 250 },
      { name: "漫长的夜航", duration: 283 }, { name: "初晴街角", duration: 307 }, { name: "末班车铁桥", duration: 213 },
      { name: "迷途野火", duration: 246 }, { name: "遥远的汽笛", duration: 283 }, { name: "铁门荒野", duration: 238 },
      { name: "废楼野火", duration: 263 }, { name: "深夜的残响", duration: 257 } ] },
    { name: "晚风潮汐", type: "专辑", date: "2035-07-29", songs: [
      { name: "晚风潮汐", duration: 270 }, { name: "长夜岔路", duration: 276 }, { name: "霓虹旧梦", duration: 215 },
      { name: "漫长的余烬", duration: 287 }, { name: "沉默的深夜", duration: 254 }, { name: "空城碎片", duration: 483 },
      { name: "旧梦归途", duration: 263 }, { name: "站台匝道", duration: 313 } ] },
    { name: "沉默的潮汐", type: "专辑", date: "2037-08-06", songs: [
      { name: "沉默的潮汐", duration: 265 }, { name: "废楼倒影", duration: 253 }, { name: "星光电塔", duration: 241 },
      { name: "深夜的潮汐", duration: 287 }, { name: "沉默的沙漏", duration: 240 }, { name: "遥远的静默", duration: 293 },
      { name: "漫长的夜潮", duration: 273 }, { name: "暗巷渡轮", duration: 299 } ] },
    { name: "漫长的出口", type: "专辑", date: "2039-04-15", songs: [
      { name: "漫长的出口", duration: 216 }, { name: "遥远的信号灯", duration: 280 }, { name: "星光铁门", duration: 276 },
      { name: "沉默的灰墙", duration: 262 }, { name: "初晴骤雨", duration: 241 }, { name: "汽笛涂鸦", duration: 163 },
      { name: "漫长的风口", duration: 278 }, { name: "漫长的惊雷", duration: 253 }, { name: "出口暗号", duration: 390 },
      { name: "码头电线", duration: 290 }, { name: "遥远的铁门", duration: 256 } ] },
    { name: "高架逆光", type: "专辑", date: "2041-10-05", songs: [
      { name: "高架逆光", duration: 204 }, { name: "隧道潮汐", duration: 242 }, { name: "无名的雪线", duration: 314 },
      { name: "屋顶灯塔", duration: 270 }, { name: "遥远的废墟", duration: 365 }, { name: "沉默的暮色", duration: 262 },
      { name: "暴雨电线", duration: 271 }, { name: "久违的断线", duration: 264 }, { name: "巷子荒野", duration: 481 } ] },
    { name: "遥远的暮云", type: "专辑", date: "2043-09-22", songs: [
      { name: "遥远的暮云", duration: 240 }, { name: "影中人暮云", duration: 239 }, { name: "初晴迷途", duration: 239 },
      { name: "风口极夜", duration: 283 }, { name: "无名的旧梦", duration: 276 }, { name: "遥远的镜面", duration: 279 },
      { name: "沙漏光年", duration: 411 }, { name: "归途电塔", duration: 203 }, { name: "深夜的街角", duration: 271 } ] },
    { name: "回声废楼", type: "专辑", date: "2046-01-01", songs: [
      { name: "回声废楼", duration: 265 }, { name: "沉默的风口", duration: 265 }, { name: "街灯铁门", duration: 247 },
      { name: "沉默的孤岛", duration: 288 }, { name: "无名的天光", duration: 279 }, { name: "深巷信号灯", duration: 239 },
      { name: "镜面巷子", duration: 183 }, { name: "灰墙暮色", duration: 271 } ] },
    { name: "末班车裂痕", type: "专辑", date: "2048-02-01", songs: [
      { name: "末班车裂痕", duration: 247 }, { name: "久违的隧道", duration: 271 }, { name: "深夜的裂痕", duration: 286 },
      { name: "无名的铁道", duration: 287 }, { name: "野猫路口", duration: 195 }, { name: "野猫废墟", duration: 249 },
      { name: "遥远的夜潮", duration: 268 }, { name: "沉默的初晴", duration: 262 } ] },
    { name: "沉默的夜航", type: "专辑", date: "2049-10-29", songs: [
      { name: "沉默的夜航", duration: 382 }, { name: "无名的潮汐", duration: 259 }, { name: "深夜的荒径", duration: 216 },
      { name: "电线锈迹", duration: 289 }, { name: "沉默的高架", duration: 425 }, { name: "渡轮碎片", duration: 257 },
      { name: "黑巷晴天", duration: 270 } ] },
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
      { name: "气球", type: "专辑", date: "2027-11-03", songs: [
      { name: "气球", duration: 447 }, { name: "贝壳", duration: 263 }, { name: "粉色", duration: 304 },
      { name: "深夜的贴纸", duration: 272 }, { name: "漫长的蝉鸣", duration: 290 }, { name: "桃子", duration: 284 },
      { name: "信笺香草", duration: 291 }, { name: "童话花束", duration: 255 }, { name: "裙摆铃铛", duration: 223 },
      { name: "汽水糖分", duration: 469 } ] },
    { name: "软糖", type: "专辑", date: "2032-05-16", songs: [
      { name: "软糖", duration: 255 }, { name: "漫长的盛夏", duration: 339 }, { name: "平行线", duration: 296 },
      { name: "晴空", duration: 262 }, { name: "久违的晚霞", duration: 302 }, { name: "暖阳笔袋", duration: 273 },
      { name: "白裙风筝", duration: 267 }, { name: "泡泡糖纸飞机", duration: 278 }, { name: "气泡", duration: 305 },
      { name: "糖分", duration: 174 }, { name: "笔袋", duration: 287 } ] },
    { name: "月亮", type: "专辑", date: "2035-12-15", songs: [
      { name: "月亮", duration: 285 }, { name: "玻璃糖", duration: 279 }, { name: "贴纸", duration: 251 },
      { name: "风车沙滩", duration: 285 }, { name: "沉默的汽水", duration: 298 }, { name: "久违的晴空", duration: 252 },
      { name: "糖果屋", duration: 262 }, { name: "微风纸飞机", duration: 303 }, { name: "冰淇淋", duration: 289 },
      { name: "泡泡糖棉花糖", duration: 330 } ] },
    { name: "日落蝴蝶结", type: "专辑", date: "2040-12-06", songs: [
      { name: "日落蝴蝶结", duration: 323 }, { name: "课桌糖果屋", duration: 163 }, { name: "久违的香草", duration: 265 },
      { name: "糖果屋初恋", duration: 340 }, { name: "蓝调蝉鸣", duration: 161 }, { name: "少女雨靴", duration: 266 },
      { name: "花火星期天", duration: 257 }, { name: "遥远的香草", duration: 303 }, { name: "橘子余光", duration: 268 } ] },
    { name: "信笺汽水", type: "EP", date: "2044-04-21", songs: [
      { name: "信笺汽水", duration: 287 }, { name: "糖果笔袋", duration: 261 }, { name: "校门", duration: 192 },
      { name: "久违的柠檬", duration: 255 }, { name: "微风奶昔", duration: 194 } ] },
    { name: "沉默的教室", type: "专辑", date: "2048-08-15", songs: [
      { name: "沉默的教室", duration: 289 }, { name: "久违的贴纸", duration: 292 }, { name: "漫长的贴纸", duration: 230 },
      { name: "风筝贝壳", duration: 287 }, { name: "遥远的柠檬茶", duration: 260 }, { name: "橘子", duration: 309 },
      { name: "相片", duration: 293 }, { name: "无名的玻璃糖", duration: 289 }, { name: "柠檬", duration: 284 } ] },
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
      { name: "晴天沙丘", type: "专辑", date: "2027-09-22", songs: [
      { name: "晴天沙丘", duration: 287 }, { name: "裂痕夜车", duration: 289 }, { name: "孤岛水岸", duration: 290 },
      { name: "深夜的高架", duration: 519 }, { name: "遥远的风铃", duration: 301 }, { name: "漫长的晚风", duration: 251 },
      { name: "逆光走廊", duration: 255 } ] },
    { name: "残响尘埃", type: "专辑", date: "2029-11-01", songs: [
      { name: "残响尘埃", duration: 232 }, { name: "远方疾风", duration: 287 }, { name: "归途影中人", duration: 282 },
      { name: "长风站台", duration: 261 }, { name: "晨雾隧道", duration: 219 }, { name: "久违的狂风", duration: 305 },
      { name: "长夜锈迹", duration: 287 }, { name: "信号铁门", duration: 333 }, { name: "深夜的路口", duration: 273 } ] },
    { name: "久违的候鸟", type: "专辑", date: "2032-10-25", songs: [
      { name: "久违的候鸟", duration: 213 }, { name: "暮云铁道", duration: 264 }, { name: "霜降渡轮", duration: 205 },
      { name: "暮色空城", duration: 274 }, { name: "遥远的长夜", duration: 280 }, { name: "无名的风口", duration: 257 },
      { name: "站台信号", duration: 164 }, { name: "疾风闪电", duration: 303 }, { name: "残响归途", duration: 405 },
      { name: "久违的荒原", duration: 259 } ] },
    { name: "残阳尘埃", type: "专辑", date: "2035-10-14", songs: [
      { name: "残阳尘埃", duration: 462 }, { name: "归途野猫", duration: 273 }, { name: "汽笛冷月", duration: 333 },
      { name: "沉默的光年", duration: 234 }, { name: "漫长的铁道", duration: 254 }, { name: "极夜屋顶", duration: 276 },
      { name: "遥远的夜车", duration: 258 } ] },
    { name: "遥远的倒影", type: "专辑", date: "2038-03-31", songs: [
      { name: "遥远的倒影", duration: 180 }, { name: "天光高架", duration: 278 }, { name: "久违的黑巷", duration: 269 },
      { name: "潮间带归途", duration: 326 }, { name: "暗号甲板", duration: 267 }, { name: "晨雾岔路", duration: 207 },
      { name: "久违的出口", duration: 329 }, { name: "漫长的晴天", duration: 287 }, { name: "遥远的天桥", duration: 201 },
      { name: "电塔高架", duration: 285 }, { name: "高墙走廊", duration: 256 } ] },
    { name: "路口岔路", type: "专辑", date: "2041-02-09", songs: [
      { name: "路口岔路", duration: 284 }, { name: "无名的铁笼", duration: 306 }, { name: "无名的天台", duration: 265 },
      { name: "漫长的霜降", duration: 257 }, { name: "惊雷暮云", duration: 293 }, { name: "环流高架", duration: 193 },
      { name: "白墙晴天", duration: 178 }, { name: "环流铁门", duration: 243 } ] },
    { name: "归途霓虹", type: "专辑", date: "2043-10-08", songs: [
      { name: "归途霓虹", duration: 172 }, { name: "天桥沙丘", duration: 285 }, { name: "灯塔镜面", duration: 256 },
      { name: "漫长的铁笼", duration: 224 }, { name: "雨夜楼顶", duration: 334 }, { name: "晚钟走廊", duration: 295 },
      { name: "暗巷暮光", duration: 288 }, { name: "夜航回声", duration: 295 }, { name: "街灯旧城", duration: 298 },
      { name: "晚钟雨篷", duration: 292 } ] },
    { name: "遥远的暴雨", type: "专辑", date: "2046-08-04", songs: [
      { name: "遥远的暴雨", duration: 271 }, { name: "遥远的铁道", duration: 302 }, { name: "边界锈迹", duration: 276 },
      { name: "遥远的裂痕", duration: 296 }, { name: "出口旧城", duration: 493 }, { name: "漫长的末班车", duration: 276 },
      { name: "久违的光年", duration: 302 }, { name: "末班车野火", duration: 260 }, { name: "远方静默", duration: 507 } ] },
    { name: "荒原迷途", type: "专辑", date: "2049-10-20", songs: [
      { name: "荒原迷途", duration: 288 }, { name: "久违的暮色", duration: 498 }, { name: "惊雷铁道", duration: 306 },
      { name: "渡轮甲板", duration: 370 }, { name: "静默环流", duration: 213 }, { name: "无名的星光", duration: 236 },
      { name: "狂风惊雷", duration: 293 }, { name: "夜车街角", duration: 291 }, { name: "灰墙回声", duration: 278 },
      { name: "远方暗号", duration: 234 }, { name: "漫长的台阶", duration: 270 } ] },
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
      { name: "寒夜铁链", type: "专辑", date: "2028-08-05", songs: [
      { name: "寒夜铁链", duration: 508 }, { name: "漫长的寒夜", duration: 293 }, { name: "沉默的狂暴", duration: 316 },
      { name: "燃烧烈焰", duration: 243 }, { name: "铁爪极昼", duration: 254 }, { name: "深夜的铁骑", duration: 245 },
      { name: "漫长的铁谷", duration: 261 } ] },
    { name: "沉默的寒霜", type: "专辑", date: "2032-05-26", songs: [
      { name: "沉默的寒霜", duration: 289 }, { name: "遥远的铁翼", duration: 290 }, { name: "绝境战鼓", duration: 305 },
      { name: "极昼铸剑", duration: 305 }, { name: "遥远的铁幕", duration: 292 }, { name: "铸剑寒霜", duration: 314 },
      { name: "铁蹄铁峰", duration: 322 }, { name: "遥远的战车", duration: 269 }, { name: "长矛燃烧", duration: 344 },
      { name: "重盾铁锤", duration: 540 }, { name: "铁链灰狼", duration: 274 } ] },
    { name: "深夜的铁誓", type: "专辑", date: "2036-02-24", songs: [
      { name: "深夜的铁誓", duration: 288 }, { name: "黑潮荒原", duration: 305 }, { name: "崩裂暗狱", duration: 308 },
      { name: "狂暴铸剑", duration: 325 }, { name: "漫长的孤城", duration: 269 }, { name: "圣坛重盾", duration: 244 },
      { name: "铁魂战车", duration: 281 } ] },
    { name: "黑潮血月", type: "专辑", date: "2040-02-24", songs: [
      { name: "黑潮血月", duration: 298 }, { name: "遥远的血月", duration: 230 }, { name: "漫长的冰川", duration: 288 },
      { name: "久违的战车", duration: 295 }, { name: "漫长的铁翼", duration: 288 }, { name: "寒霜铁翼", duration: 276 },
      { name: "无名的黑铁", duration: 300 }, { name: "铁座战旗", duration: 362 }, { name: "铁诫灰烬城", duration: 505 } ] },
    { name: "沉默的铁诫", type: "专辑", date: "2044-04-19", songs: [
      { name: "沉默的铁诫", duration: 321 }, { name: "久违的铁律", duration: 436 }, { name: "铁崖铁丘", duration: 201 },
      { name: "熔炉纪念碑", duration: 242 }, { name: "荒原铸剑", duration: 302 }, { name: "铁壁燃烧", duration: 287 },
      { name: "遥远的荒岭", duration: 221 }, { name: "无名的亡魂", duration: 325 }, { name: "无名的战旗", duration: 309 },
      { name: "血月", duration: 341 }, { name: "极昼石柱", duration: 264 } ] },
    { name: "战旗烈焰", type: "专辑", date: "2048-12-31", songs: [
      { name: "战旗烈焰", duration: 298 }, { name: "铁骑铁翼", duration: 311 }, { name: "遥远的狂暴", duration: 285 },
      { name: "沉默的铁律", duration: 350 }, { name: "巨浪石柱", duration: 167 }, { name: "沉默的钢铁", duration: 270 },
      { name: "寒夜裂痕", duration: 548 }, { name: "血河寒夜", duration: 510 }, { name: "久违的铁鳞", duration: 328 },
      { name: "沉默的雷霆", duration: 360 }, { name: "沉默的铁链", duration: 293 } ] },
    ],
  "窒息乐队": [
    { name: "窒息", type: "专辑", date: "2004-01-01", songs: [
      { name: "窒息", duration: 280 }, { name: "极限", duration: 270 } ] },
    { name: "无界", type: "专辑", date: "2020-07-27", songs: [
       { name: "Intro", duration: 111 }, { name: "衣锦寒", duration: 300 }, { name: "亚特兰蒂斯", duration: 262 },
       { name: "归航", duration: 301 }, { name: "巨鲸落", duration: 334 }, { name: "黎明之下", duration: 318 } ] },
      { name: "漫长的王座", type: "专辑", date: "2028-02-27", songs: [
      { name: "漫长的王座", duration: 258 }, { name: "铁盔黑焰", duration: 272 }, { name: "深夜的铁诫", duration: 269 },
      { name: "漫长的铁爪", duration: 322 }, { name: "铁丘孤鹰", duration: 403 }, { name: "重盾灰烬城", duration: 249 },
      { name: "铁轨铁丘", duration: 382 }, { name: "无名的黑焰", duration: 283 }, { name: "遥远的铁渊", duration: 294 } ] },
    { name: "铁诫雷鸣", type: "专辑", date: "2032-01-07", songs: [
      { name: "铁诫雷鸣", duration: 284 }, { name: "破碎铁幕", duration: 230 }, { name: "裂痕战鼓", duration: 268 },
      { name: "久违的重盾", duration: 246 }, { name: "熔炉铁翼", duration: 319 }, { name: "沉默的铁座", duration: 261 },
      { name: "寒夜铁冠", duration: 324 }, { name: "圣坛黑焰", duration: 309 }, { name: "久违的血河", duration: 261 },
      { name: "铁牢寒霜", duration: 271 }, { name: "无名的铁谷", duration: 249 } ] },
    { name: "高原雷霆", type: "专辑", date: "2036-02-17", songs: [
      { name: "高原雷霆", duration: 293 }, { name: "灰狼战鼓", duration: 260 }, { name: "久违的铁骑", duration: 276 },
      { name: "沉默的烈焰", duration: 292 }, { name: "漫长的灰烬城", duration: 255 }, { name: "沉默的铁轨", duration: 251 },
      { name: "破碎铁轨", duration: 265 } ] },
    { name: "久违的黑焰", type: "专辑", date: "2040-02-23", songs: [
      { name: "久违的黑焰", duration: 231 }, { name: "久违的极北", duration: 300 }, { name: "久违的冰川", duration: 199 },
      { name: "铁骨铁幕", duration: 229 }, { name: "雷霆铁棺", duration: 238 }, { name: "炼狱亡魂", duration: 223 },
      { name: "深夜的铁羽", duration: 272 }, { name: "铁魂铁律", duration: 284 }, { name: "沉默的战旗", duration: 281 } ] },
    { name: "深夜的铁壁", type: "专辑", date: "2045-01-27", songs: [
      { name: "深夜的铁壁", duration: 436 }, { name: "沉默的铁棺", duration: 231 }, { name: "铸剑巅峰", duration: 171 },
      { name: "裂痕寒夜", duration: 193 }, { name: "铁矛雷霆", duration: 411 }, { name: "铁丘黑焰", duration: 285 },
      { name: "深夜的战车", duration: 254 }, { name: "无名的破碎", duration: 206 }, { name: "遥远的火山", duration: 284 } ] },
    { name: "铁羽铁牢", type: "专辑", date: "2049-02-21", songs: [
      { name: "铁羽铁牢", duration: 271 }, { name: "铁壁亡魂", duration: 264 }, { name: "黑潮铁塔", duration: 319 },
      { name: "深渊长矛", duration: 283 }, { name: "无名的高原", duration: 400 }, { name: "铁渊黑焰", duration: 249 },
      { name: "铁崖铁骨", duration: 330 }, { name: "漫长的血誓", duration: 265 }, { name: "深夜的雷霆", duration: 285 } ] },
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
      { name: "深夜的深渊", type: "专辑", date: "2027-11-26", songs: [
      { name: "深夜的深渊", duration: 257 }, { name: "铁塔火山", duration: 235 }, { name: "漫长的亡魂", duration: 315 },
      { name: "极北纪念碑", duration: 298 }, { name: "铁律铁座", duration: 325 }, { name: "漫长的铸剑", duration: 344 },
      { name: "战车铁骑", duration: 214 }, { name: "铁锤黑铁", duration: 292 }, { name: "铸剑血誓", duration: 316 },
      { name: "孤鹰铁塔", duration: 338 }, { name: "铸剑怒吼", duration: 284 } ] },
    { name: "深渊荒岭", type: "专辑", date: "2031-12-16", songs: [
      { name: "深渊荒岭", duration: 298 }, { name: "深夜的熔炉", duration: 322 }, { name: "黑潮烈焰", duration: 330 },
      { name: "深夜的铁翼", duration: 311 }, { name: "极昼铁丘", duration: 303 }, { name: "雷霆寒夜", duration: 430 },
      { name: "巅峰荒原", duration: 341 }, { name: "久违的战鼓", duration: 256 }, { name: "无名的铁崖", duration: 309 } ] },
    { name: "久违的寒霜", type: "专辑", date: "2036-06-27", songs: [
      { name: "久违的寒霜", duration: 329 }, { name: "极北荒岭", duration: 329 }, { name: "久违的孤鹰", duration: 265 },
      { name: "沉默的巅峰", duration: 299 }, { name: "铁骨灰烬", duration: 253 }, { name: "深夜的铁矛", duration: 252 },
      { name: "漫长的铁塔", duration: 539 } ] },
    { name: "铁骑血河", type: "专辑", date: "2040-09-07", songs: [
      { name: "铁骑血河", duration: 281 }, { name: "漫长的荒原", duration: 294 }, { name: "亡魂铁律", duration: 243 },
      { name: "深夜的铁座", duration: 220 }, { name: "铁律极北", duration: 281 }, { name: "铁壁圣坛", duration: 341 },
      { name: "沉默的极昼", duration: 291 }, { name: "久违的铁壁", duration: 309 }, { name: "铁爪铁轨", duration: 258 },
      { name: "久违的极昼", duration: 293 } ] },
    { name: "血河铁崖", type: "专辑", date: "2044-07-05", songs: [
      { name: "血河铁崖", duration: 560 }, { name: "无名的铁律", duration: 260 }, { name: "长矛冰川", duration: 182 },
      { name: "铁魂灰烬城", duration: 288 }, { name: "深夜的铁崖", duration: 315 }, { name: "黑焰怒吼", duration: 298 },
      { name: "遥远的血誓", duration: 323 }, { name: "铁轨烈焰", duration: 323 } ] },
    { name: "铸剑铁骨", type: "EP", date: "2048-11-30", songs: [
      { name: "铸剑铁骨", duration: 226 }, { name: "铁魂深渊", duration: 285 }, { name: "沉默的黑潮", duration: 227 },
      { name: "深夜的黑焰", duration: 309 }, { name: "无名的雷霆", duration: 285 }, { name: "漫长的铁丘", duration: 558 } ] },
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
      { name: "杂草裂痕", type: "专辑", date: "2028-01-22", songs: [
      { name: "杂草裂痕", duration: 421 }, { name: "铁笼夜雾", duration: 322 }, { name: "夜雾水岸", duration: 342 },
      { name: "暮云晚钟", duration: 386 }, { name: "站台归途", duration: 409 }, { name: "沉默的逆旅", duration: 560 },
      { name: "铁桥隧道", duration: 299 }, { name: "灯塔潮汐", duration: 405 }, { name: "回声暮光", duration: 421 },
      { name: "游园涂鸦", duration: 384 } ] },
    { name: "漫长的灰墙", type: "专辑", date: "2031-11-15", songs: [
      { name: "漫长的灰墙", duration: 376 }, { name: "水岸信号灯", duration: 393 }, { name: "沉默的灰烬", duration: 560 },
      { name: "斑马线风口", duration: 344 }, { name: "沉默的电塔", duration: 475 }, { name: "沉默的风铃", duration: 447 },
      { name: "风口游园", duration: 421 } ] },
    { name: "渡轮公路", type: "专辑", date: "2036-05-08", songs: [
      { name: "渡轮公路", duration: 370 }, { name: "寒潮末班车", duration: 444 }, { name: "铁轨夜车", duration: 278 },
      { name: "遥远的冷月", duration: 377 }, { name: "深夜的长风", duration: 425 }, { name: "沉默的影中人", duration: 393 },
      { name: "铁轨曦光", duration: 389 }, { name: "碎片楼顶", duration: 379 }, { name: "深夜的晴天", duration: 413 } ] },
    { name: "废楼冷月", type: "专辑", date: "2040-03-12", songs: [
      { name: "废楼冷月", duration: 448 }, { name: "光年冷月", duration: 424 }, { name: "遥远的灰墙", duration: 471 },
      { name: "逆旅霓虹", duration: 377 }, { name: "久违的码头", duration: 443 }, { name: "深夜的晚钟", duration: 329 },
      { name: "暗号斑马线", duration: 407 }, { name: "碎片狂风", duration: 480 }, { name: "沉默的冷月", duration: 383 },
      { name: "逆流倒影", duration: 560 } ] },
    { name: "甲板长风", type: "专辑", date: "2044-06-15", songs: [
      { name: "甲板长风", duration: 395 }, { name: "夜班街灯", duration: 451 }, { name: "街灯站台", duration: 560 },
      { name: "裂痕长风", duration: 387 }, { name: "出口高架", duration: 404 }, { name: "极夜归途", duration: 400 },
      { name: "无名的高墙", duration: 560 }, { name: "深夜的白墙", duration: 441 }, { name: "沉默的涂鸦", duration: 327 },
      { name: "逆旅码头", duration: 373 } ] },
    { name: "长夜屋顶", type: "专辑", date: "2048-10-03", songs: [
      { name: "长夜屋顶", duration: 372 }, { name: "初晴逆流", duration: 319 }, { name: "候鸟游园", duration: 279 },
      { name: "候鸟疾风", duration: 368 }, { name: "街灯霜降", duration: 426 }, { name: "久违的冷月", duration: 478 },
      { name: "无名的边界", duration: 422 }, { name: "漫长的旧巷", duration: 493 } ] },
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
      { name: "Soil", type: "专辑", date: "2027-01-23", songs: [
      { name: "Soil（土壤）", duration: 321 }, { name: "Rain（雨）", duration: 557 }, { name: "Anchor（锚）", duration: 236 },
      { name: "Blanket（绒毯）", duration: 459 }, { name: "Daylight Blossom（日光的花开）", duration: 355 }, { name: "Tree（树）", duration: 336 },
      { name: "Tower Carousel（塔的旋转木马）", duration: 333 }, { name: "Gravel（砾石）", duration: 355 }, { name: "Anchor Wood（锚的树林）", duration: 525 },
      { name: "Stone（石头）", duration: 336 }, { name: "Pebble（卵石）", duration: 482 } ] },
    { name: "Signal", type: "专辑", date: "2029-11-15", songs: [
      { name: "Signal（信号）", duration: 377 }, { name: "Petal（花瓣）", duration: 363 }, { name: "Cinder（炭烬）", duration: 307 },
      { name: "Orbit（轨道）", duration: 315 }, { name: "Compass（罗盘）", duration: 374 }, { name: "Satellite（卫星）", duration: 321 },
      { name: "Kite（风筝）", duration: 316 }, { name: "Spark Lantern（火花的灯笼）", duration: 350 }, { name: "Hill Wood（山丘的树林）", duration: 383 },
      { name: "Desert Circle（荒原的圆圈）", duration: 300 } ] },
    { name: "Halo", type: "专辑", date: "2032-07-01", songs: [
      { name: "Halo（光晕）", duration: 250 }, { name: "Wave（波浪）", duration: 381 }, { name: "Summer（夏天）", duration: 352 },
      { name: "Twilight（暮色）", duration: 349 }, { name: "Glimmer Plain（微光的平原）", duration: 305 }, { name: "Song（歌）", duration: 344 },
      { name: "Forest Orbit（森林的轨道）", duration: 346 }, { name: "Mirrors Ridge（镜子的山脊）", duration: 312 }, { name: "Shallow（浅滩）", duration: 348 },
      { name: "Garden（花园）", duration: 318 } ] },
    { name: "Neon", type: "EP", date: "2034-09-20", songs: [
      { name: "Neon（霓虹）", duration: 354 }, { name: "Beacon（灯塔）", duration: 227 }, { name: "Quartz Fog（石英的雾）", duration: 327 },
      { name: "Storm Dusk（风暴的薄暮）", duration: 353 } ] },
    { name: "Pond Glow", type: "专辑", date: "2037-02-09", songs: [
      { name: "Pond Glow（池塘的辉光）", duration: 361 }, { name: "Orbit Sand（轨道的沙）", duration: 322 }, { name: "Snow Haze（雪的轻雾）", duration: 336 },
      { name: "Rain Crystal（雨的水晶）", duration: 302 }, { name: "Fleet Vapor（舰队的雾霭）", duration: 312 }, { name: "Quiet（寂静）", duration: 342 },
      { name: "Kite Harbor（风筝的港湾）", duration: 288 }, { name: "Trail Motel（足迹的汽车旅馆）", duration: 326 }, { name: "Asphalt Paperplane（柏油的纸飞机）", duration: 230 } ] },
    { name: "Fog", type: "专辑", date: "2039-12-03", songs: [
      { name: "Fog（雾）", duration: 370 }, { name: "Veil Shell（帷幕的贝壳）", duration: 560 }, { name: "Forest Grain（森林的颗粒）", duration: 326 },
      { name: "Storm Nightfall（风暴的夜幕）", duration: 484 }, { name: "Hill Salt（山丘的盐）", duration: 343 }, { name: "Flood Sun（洪流的太阳）", duration: 293 },
      { name: "River Moon（河流的月亮）", duration: 184 }, { name: "Sand（沙）", duration: 341 }, { name: "Iron Shell（铁的贝壳）", duration: 299 },
      { name: "Sand Iron（沙的铁）", duration: 194 } ] },
    { name: "Tide Marrow", type: "专辑", date: "2042-02-25", songs: [
      { name: "Tide Marrow（潮汐的骨髓）", duration: 313 }, { name: "Dusk Feather（薄暮的羽毛）", duration: 231 }, { name: "Mirrors Compass（镜子的罗盘）", duration: 445 },
      { name: "Signal Compass（信号的罗盘）", duration: 305 }, { name: "Dawn（黎明）", duration: 352 }, { name: "Thunder（雷）", duration: 279 },
      { name: "Harbor Neon（港湾的霓虹）", duration: 481 }, { name: "Plain Path（平原的小径）", duration: 316 } ] },
    { name: "Broken Neon", type: "专辑", date: "2044-10-27", songs: [
      { name: "Broken Neon（破碎的霓虹）", duration: 240 }, { name: "Highway（公路）", duration: 262 }, { name: "Nightfall Sun（夜幕的太阳）", duration: 232 },
      { name: "Pine Sun（松的太阳）", duration: 329 }, { name: "Meridian（子午线）", duration: 336 }, { name: "Static Crescent（静电的新月）", duration: 302 },
      { name: "Velvet（天鹅绒）", duration: 311 }, { name: "Daybreak（黎明）", duration: 295 }, { name: "Gravel Wind（砾石的风）", duration: 312 },
      { name: "Leaf Motel（叶的汽车旅馆）", duration: 321 }, { name: "Nightfall Wish（夜幕的愿望）", duration: 318 } ] },
    { name: "Heart", type: "专辑", date: "2047-07-18", songs: [
      { name: "Heart（心）", duration: 299 }, { name: "Amber Tide（琥珀的潮汐）", duration: 295 }, { name: "Ocean Vine（海洋的藤蔓）", duration: 442 },
      { name: "Ivory Wave（象牙的波浪）", duration: 309 }, { name: "Twilight Marrow（暮色的骨髓）", duration: 317 }, { name: "Vapor Undertow（雾霭的暗流）", duration: 330 },
      { name: "Faded（褪色）", duration: 529 }, { name: "Wind（风）", duration: 298 }, { name: "Stone Quartz（石头的石英）", duration: 302 },
      { name: "Haze Harbor（轻雾的港湾）", duration: 317 }, { name: "Lake Vine（湖的藤蔓）", duration: 287 } ] },
    { name: "Quartz Ivory", type: "EP", date: "2050-01-15", songs: [
      { name: "Quartz Ivory（石英的象牙）", duration: 343 }, { name: "Sand Pine（沙的松）", duration: 351 }, { name: "Feather Concrete（羽毛的水泥）", duration: 367 },
      { name: "Trail（足迹）", duration: 183 } ] },
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
      { name: "Undertow Wish", type: "专辑", date: "2027-03-30", songs: [
      { name: "Undertow Wish（暗流的愿望）", duration: 278 }, { name: "Song Road（歌的道路）", duration: 250 }, { name: "Smoke Silver（烟雾的银色）", duration: 285 },
      { name: "Asphalt Plain（柏油的平原）", duration: 261 }, { name: "Motion Nest（律动的巢）", duration: 178 }, { name: "Wood（树林）", duration: 214 },
      { name: "Steam Grain（蒸汽的颗粒）", duration: 239 } ] },
    { name: "Thaw Dawn", type: "专辑", date: "2029-02-15", songs: [
      { name: "Thaw Dawn（融雪的黎明）", duration: 204 }, { name: "Steam（蒸汽）", duration: 182 }, { name: "Smoke Leaf（烟雾的叶）", duration: 233 },
      { name: "River Flood（河流的洪流）", duration: 280 }, { name: "Petal Field（花瓣的原野）", duration: 252 }, { name: "Heart Crystal（心的水晶）", duration: 283 },
      { name: "Salt（盐）", duration: 267 } ] },
    { name: "Plain Sky", type: "专辑", date: "2031-04-24", songs: [
      { name: "Plain Sky（平原的天空）", duration: 243 }, { name: "Tower Summer（塔的夏天）", duration: 147 }, { name: "Coral Window（珊瑚的窗）", duration: 193 },
      { name: "Vine（藤蔓）", duration: 258 }, { name: "Bloom Midnight（绽放的午夜）", duration: 440 }, { name: "Motion（律动）", duration: 309 },
      { name: "Flame（火焰）", duration: 283 }, { name: "Pine（松）", duration: 250 }, { name: "Flood（洪流）", duration: 483 },
      { name: "Rust Pond（锈迹的池塘）", duration: 241 } ] },
    { name: "Daylight", type: "专辑", date: "2033-02-12", songs: [
      { name: "Daylight（日光）", duration: 310 }, { name: "Anchor Daybreak（锚的黎明）", duration: 284 }, { name: "Midnight Glass（午夜的玻璃）", duration: 218 },
      { name: "Cliff Cloud（断崖的云）", duration: 303 }, { name: "Faded Mist（褪色的薄雾）", duration: 307 }, { name: "Road（道路）", duration: 245 },
      { name: "Echo Cinder（回声的炭烬）", duration: 198 }, { name: "Vine Diamond（藤蔓的钻石）", duration: 273 } ] },
    { name: "Gravel Vapor", type: "专辑", date: "2035-08-17", songs: [
      { name: "Gravel Vapor（砾石的雾霭）", duration: 282 }, { name: "Slope Shell（斜坡的贝壳）", duration: 180 }, { name: "Hollow Shore（空洞的岸边）", duration: 245 },
      { name: "Ivory（象牙）", duration: 415 }, { name: "Sand Daybreak（沙的黎明）", duration: 248 }, { name: "Compass Blossom（罗盘的花开）", duration: 260 },
      { name: "Haze（轻雾）", duration: 250 }, { name: "Ice Vine（冰的藤蔓）", duration: 257 }, { name: "Crescent Drift（新月的漂流）", duration: 448 },
      { name: "Field Fog（原野的雾）", duration: 271 }, { name: "Petal Wish（花瓣的愿望）", duration: 282 } ] },
    { name: "Wave Wish", type: "专辑", date: "2037-04-19", songs: [
      { name: "Wave Wish（波浪的愿望）", duration: 291 }, { name: "Sea Echo（海的回声）", duration: 187 }, { name: "Quartz（石英）", duration: 248 },
      { name: "Ridge Shell（山脊的贝壳）", duration: 309 }, { name: "Motel（汽车旅馆）", duration: 278 }, { name: "Path Crystal（小径的水晶）", duration: 270 },
      { name: "Stream Glow（溪流的辉光）", duration: 162 }, { name: "Thunder Twilight（雷的暮色）", duration: 251 }, { name: "Marrow（骨髓）", duration: 184 } ] },
    { name: "Smoke Silence", type: "专辑", date: "2039-10-14", songs: [
      { name: "Smoke Silence（烟雾的沉寂）", duration: 301 }, { name: "Diamond Trail（钻石的足迹）", duration: 159 }, { name: "Blanket Asphalt（绒毯的柏油）", duration: 192 },
      { name: "Plain（平原）", duration: 279 }, { name: "Ember Echo（余烬的回声）", duration: 303 }, { name: "Pulse Lantern（脉冲的灯笼）", duration: 376 },
      { name: "Iron Hill（铁的山丘）", duration: 272 }, { name: "Sun Dusk（太阳的薄暮）", duration: 256 }, { name: "Moss Hill（青苔的山丘）", duration: 416 } ] },
    { name: "Fog Ivory", type: "专辑", date: "2041-09-11", songs: [
      { name: "Fog Ivory（雾的象牙）", duration: 247 }, { name: "Drift Soil（漂流的土壤）", duration: 404 }, { name: "Pulse Mist（脉冲的薄雾）", duration: 280 },
      { name: "Glimmer（微光）", duration: 265 }, { name: "Frost Shallow（霜的浅滩）", duration: 281 }, { name: "Golden Snow（金色的雪）", duration: 241 },
      { name: "Meridian Dusk（子午线的薄暮）", duration: 151 }, { name: "Star Fleet（星的舰队）", duration: 260 } ] },
    { name: "Crystal Meadow", type: "专辑", date: "2043-08-12", songs: [
      { name: "Crystal Meadow（水晶的草地）", duration: 220 }, { name: "Vine Sundown（藤蔓的日落）", duration: 254 }, { name: "Road Fog（道路的雾）", duration: 237 },
      { name: "Moon Concrete（月亮的水泥）", duration: 365 }, { name: "Overcast Pulse（阴云的脉冲）", duration: 355 }, { name: "Glimmer Rust（微光的锈迹）", duration: 268 },
      { name: "Lantern Wood（灯笼的树林）", duration: 242 }, { name: "Loam Sundown（沃土的日落）", duration: 244 }, { name: "Coral Frost（珊瑚的霜）", duration: 145 } ] },
    { name: "Slope Sundown", type: "专辑", date: "2045-08-02", songs: [
      { name: "Slope Sundown（斜坡的日落）", duration: 281 }, { name: "Halo Marrow（光晕的骨髓）", duration: 301 }, { name: "Snow Glass（雪的玻璃）", duration: 270 },
      { name: "Desert（荒原）", duration: 284 }, { name: "Winter Broken（冬天的破碎）", duration: 255 }, { name: "Void（虚空）", duration: 277 },
      { name: "Mirrors Wind（镜子的风）", duration: 254 }, { name: "Gravel Nest（砾石的巢）", duration: 203 }, { name: "Shallow Ice（浅滩的冰）", duration: 242 },
      { name: "Shore Flood（岸边的洪流）", duration: 258 }, { name: "Compass Beacon（罗盘的灯塔）", duration: 275 } ] },
    { name: "Smoke Journey", type: "专辑", date: "2048-02-01", songs: [
      { name: "Smoke Journey（烟雾的旅程）", duration: 212 }, { name: "Veil Tower（帷幕的塔）", duration: 257 }, { name: "Dawn Nest（黎明的巢）", duration: 244 },
      { name: "Mist（薄雾）", duration: 478 }, { name: "Hill Diamond（山丘的钻石）", duration: 438 }, { name: "Mist Daybreak（薄雾的黎明）", duration: 295 },
      { name: "Tower Wish（塔的愿望）", duration: 235 } ] },
    { name: "Satellite Sky", type: "专辑", date: "2049-11-25", songs: [
      { name: "Satellite Sky（卫星的天空）", duration: 278 }, { name: "Amber Thaw（琥珀的融雪）", duration: 272 }, { name: "Motel Canvas（汽车旅馆的画布）", duration: 254 },
      { name: "Compass Loam（罗盘的沃土）", duration: 206 }, { name: "Iron Field（铁的原野）", duration: 267 }, { name: "Moss Daylight（青苔的日光）", duration: 235 },
      { name: "Sand Dusk（沙的薄暮）", duration: 240 }, { name: "Quiet Pulse（寂静的脉冲）", duration: 242 }, { name: "Silk Path（丝绸的小径）", duration: 423 },
      { name: "Stream Steam（溪流的蒸汽）", duration: 255 } ] },
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
      { name: "初雪", type: "专辑", date: "2027-02-02", songs: [
      { name: "初雪", duration: 292 }, { name: "露水谷雨", duration: 249 }, { name: "白露炊烟", duration: 240 },
      { name: "沉默的扁舟", duration: 273 }, { name: "河流", duration: 274 }, { name: "晚霞小院", duration: 275 },
      { name: "无名的渡口", duration: 278 } ] },
    { name: "久违的青石", type: "专辑", date: "2028-12-13", songs: [
      { name: "久违的青石", duration: 262 }, { name: "无名的车站", duration: 247 }, { name: "木窗蝉鸣", duration: 204 },
      { name: "竹筐晴日", duration: 279 }, { name: "山径", duration: 387 }, { name: "柴门", duration: 289 },
      { name: "暮归", duration: 241 }, { name: "沉默的春雨", duration: 258 }, { name: "木窗石桥", duration: 244 },
      { name: "河流邮局", duration: 254 }, { name: "久违的田埂", duration: 269 } ] },
    { name: "窗棂晚归", type: "专辑", date: "2031-02-28", songs: [
      { name: "窗棂晚归", duration: 215 }, { name: "渡船山风", duration: 270 }, { name: "雁阵", duration: 249 },
      { name: "石路芦苇", duration: 269 }, { name: "旧书", duration: 246 }, { name: "立秋", duration: 279 },
      { name: "漫长的山岗", duration: 255 }, { name: "渡口", duration: 292 }, { name: "河流白露", duration: 241 },
      { name: "遥远的麦浪", duration: 184 }, { name: "炊烟", duration: 256 } ] },
    { name: "深夜的青苔", type: "专辑", date: "2033-06-13", songs: [
      { name: "深夜的青苔", duration: 259 }, { name: "沉默的杏花", duration: 308 }, { name: "杏花晒场", duration: 249 },
      { name: "杏花", duration: 444 }, { name: "故人", duration: 227 }, { name: "漫长的灯火", duration: 315 },
      { name: "晚归", duration: 322 }, { name: "门环春分", duration: 247 }, { name: "门环", duration: 347 },
      { name: "无名的晚钟", duration: 271 }, { name: "渡船", duration: 212 } ] },
    { name: "遥远的芦苇", type: "专辑", date: "2035-02-26", songs: [
      { name: "遥远的芦苇", duration: 274 }, { name: "深夜的杏花", duration: 258 }, { name: "屋檐", duration: 172 },
      { name: "老井", duration: 289 }, { name: "晴日", duration: 228 }, { name: "久违的瓦房", duration: 418 },
      { name: "犁铧", duration: 187 }, { name: "深夜的炊烟", duration: 427 }, { name: "溪桥柴火", duration: 279 } ] },
    { name: "水车", type: "专辑", date: "2037-09-13", songs: [
      { name: "水车", duration: 212 }, { name: "竹筐", duration: 259 }, { name: "沉默的老树", duration: 283 },
      { name: "故人晒场", duration: 250 }, { name: "谷仓青苔", duration: 290 }, { name: "木梯杏花", duration: 260 },
      { name: "石路木门", duration: 282 }, { name: "白露月台", duration: 243 }, { name: "犁铧木窗", duration: 271 } ] },
    { name: "篱笆", type: "专辑", date: "2039-06-15", songs: [
      { name: "篱笆", duration: 195 }, { name: "沉默的北风", duration: 263 }, { name: "久违的石磨", duration: 272 },
      { name: "无名的屋檐", duration: 277 }, { name: "北风晒场", duration: 278 }, { name: "久违的谷雨", duration: 263 },
      { name: "沉默的故乡", duration: 203 }, { name: "菜园石阶", duration: 232 }, { name: "月夜", duration: 459 },
      { name: "黄昏云边", duration: 296 }, { name: "星夜", duration: 283 } ] },
    { name: "河岸", type: "专辑", date: "2041-10-28", songs: [
      { name: "河岸", duration: 276 }, { name: "晴日小院", duration: 427 }, { name: "故人小院", duration: 245 },
      { name: "沉默的谷仓", duration: 245 }, { name: "深夜的芦苇", duration: 246 }, { name: "雨巷谷场", duration: 265 },
      { name: "沉默的溪边", duration: 227 }, { name: "青苔白露", duration: 176 }, { name: "沉默的木门", duration: 236 } ] },
    { name: "无名的渔火", type: "专辑", date: "2043-10-14", songs: [
      { name: "无名的渔火", duration: 236 }, { name: "沉默的石榴", duration: 263 }, { name: "无名的杏花", duration: 243 },
      { name: "河流木舟", duration: 257 }, { name: "立秋稻草", duration: 299 }, { name: "柴门月夜", duration: 266 },
      { name: "谷场桃枝", duration: 260 }, { name: "石路麦浪", duration: 250 }, { name: "桃枝麦浪", duration: 291 },
      { name: "旧书羊群", duration: 217 }, { name: "故乡杏花", duration: 205 } ] },
    { name: "菜园", type: "专辑", date: "2045-09-30", songs: [
      { name: "菜园", duration: 292 }, { name: "茶山青石", duration: 322 }, { name: "北风山岗", duration: 268 },
      { name: "木舟石阶", duration: 283 }, { name: "沉默的溪桥", duration: 277 }, { name: "柳枝", duration: 495 },
      { name: "漫长的巷口", duration: 258 }, { name: "木窗", duration: 269 } ] },
    { name: "菜园竹篱", type: "专辑", date: "2047-08-18", songs: [
      { name: "菜园竹篱", duration: 263 }, { name: "黄昏", duration: 288 }, { name: "河岸青瓦", duration: 486 },
      { name: "麦浪石磨", duration: 152 }, { name: "漫长的柳枝", duration: 252 }, { name: "木门", duration: 291 },
      { name: "石磨月夜", duration: 258 } ] },
    { name: "麦田巷口", type: "专辑", date: "2049-12-08", songs: [
      { name: "麦田巷口", duration: 250 }, { name: "北风犁铧", duration: 262 }, { name: "露水星夜", duration: 251 },
      { name: "渔火", duration: 260 }, { name: "青梅土墙", duration: 283 }, { name: "久违的茶山", duration: 268 },
      { name: "远方溪水", duration: 276 } ] },
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
      { name: "漫长的木桥", type: "专辑", date: "2027-01-14", songs: [
      { name: "漫长的木桥", duration: 254 }, { name: "深夜的雁阵", duration: 522 }, { name: "月夜河流", duration: 268 },
      { name: "星夜石磨", duration: 247 }, { name: "竹筐春分", duration: 253 }, { name: "无名的巷口", duration: 274 },
      { name: "渡船谷场", duration: 225 }, { name: "沉默的车站", duration: 488 }, { name: "杏花晴日", duration: 288 },
      { name: "暮归溪边", duration: 223 } ] },
    { name: "深夜的晚归", type: "专辑", date: "2029-06-13", songs: [
      { name: "深夜的晚归", duration: 259 }, { name: "山风青梅", duration: 272 }, { name: "山径石磨", duration: 200 },
      { name: "旧信", duration: 301 }, { name: "梯田篱笆", duration: 281 }, { name: "渔火竹影", duration: 240 },
      { name: "柴火黄昏", duration: 193 } ] },
    { name: "白露", type: "专辑", date: "2031-09-26", songs: [
      { name: "白露", duration: 225 }, { name: "沉默的柴门", duration: 233 }, { name: "沉默的芦苇", duration: 308 },
      { name: "杏花蝉鸣", duration: 242 }, { name: "久违的木桥", duration: 262 }, { name: "深夜的青瓦", duration: 266 },
      { name: "沉默的行囊", duration: 166 }, { name: "沉默的晚霞", duration: 282 }, { name: "无名的谷仓", duration: 256 },
      { name: "麦浪乡音", duration: 264 }, { name: "山岗乡音", duration: 282 } ] },
    { name: "旧书霜降", type: "专辑", date: "2034-01-21", songs: [
      { name: "旧书霜降", duration: 300 }, { name: "沉默的旧书", duration: 335 }, { name: "漫长的长椅", duration: 296 },
      { name: "柴门青瓦", duration: 301 }, { name: "沉默的巷口", duration: 252 }, { name: "沉默的稻草", duration: 298 },
      { name: "茶山谷仓", duration: 205 }, { name: "晒场晚霞", duration: 329 } ] },
    { name: "柳枝河岸", type: "专辑", date: "2036-01-13", songs: [
      { name: "柳枝河岸", duration: 280 }, { name: "无名的乡音", duration: 166 }, { name: "故人水车", duration: 279 },
      { name: "旧屋溪边", duration: 269 }, { name: "漫长的晚霞", duration: 254 }, { name: "青石木舟", duration: 309 },
      { name: "门环青梅", duration: 377 }, { name: "麦田", duration: 261 }, { name: "窗棂槐花", duration: 262 } ] },
    { name: "雁阵旧屋", type: "专辑", date: "2038-05-15", songs: [
      { name: "雁阵旧屋", duration: 333 }, { name: "土墙木桥", duration: 296 }, { name: "沉默的柴火", duration: 274 },
      { name: "旧屋", duration: 298 }, { name: "沉默的秋雨", duration: 315 }, { name: "柳枝河流", duration: 276 },
      { name: "霜降草垛", duration: 175 }, { name: "乡音晚钟", duration: 273 }, { name: "芦苇晚归", duration: 219 },
      { name: "竹篱霜降", duration: 154 }, { name: "柳枝月台", duration: 259 } ] },
    { name: "故乡青苔", type: "专辑", date: "2040-07-23", songs: [
      { name: "故乡青苔", duration: 269 }, { name: "草垛渡船", duration: 318 }, { name: "星夜水车", duration: 156 },
      { name: "无名的小院", duration: 273 }, { name: "漫长的渔火", duration: 263 }, { name: "久违的北风", duration: 289 },
      { name: "暮归老井", duration: 251 } ] },
    { name: "暮归草垛", type: "专辑", date: "2043-04-12", songs: [
      { name: "暮归草垛", duration: 268 }, { name: "槐树木桥", duration: 322 }, { name: "久违的菜园", duration: 522 },
      { name: "麦田屋檐", duration: 269 }, { name: "柴门溪桥", duration: 205 }, { name: "漫长的土路", duration: 254 },
      { name: "立秋春雨", duration: 271 } ] },
    { name: "暮归山岗", type: "专辑", date: "2045-05-04", songs: [
      { name: "暮归山岗", duration: 181 }, { name: "无名的溪水", duration: 281 }, { name: "旧书扁舟", duration: 281 },
      { name: "旧屋木梯", duration: 303 }, { name: "漫长的晚归", duration: 276 }, { name: "山岗麦田", duration: 269 },
      { name: "深夜的桃枝", duration: 173 }, { name: "蝉鸣雨巷", duration: 257 }, { name: "漫长的晒场", duration: 292 },
      { name: "麦浪晴日", duration: 263 }, { name: "河流旧书", duration: 279 } ] },
    { name: "晚霞晨雾", type: "专辑", date: "2047-08-25", songs: [
      { name: "晚霞晨雾", duration: 303 }, { name: "久违的羊群", duration: 507 }, { name: "木窗暮归", duration: 274 },
      { name: "久违的槐树", duration: 159 }, { name: "深夜的溪水", duration: 212 }, { name: "篱笆秋千", duration: 268 },
      { name: "石磨柴门", duration: 278 }, { name: "旧屋窗棂", duration: 268 }, { name: "深夜的青梅", duration: 293 } ] },
    { name: "故人石路", type: "专辑", date: "2049-08-30", songs: [
      { name: "故人石路", duration: 300 }, { name: "久违的柴火", duration: 184 }, { name: "星夜霜降", duration: 268 },
      { name: "青苔晚霞", duration: 257 }, { name: "车站槐树", duration: 277 }, { name: "久违的溪边", duration: 289 },
      { name: "茶山春分", duration: 308 } ] },
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
        { name: "兰州 兰州", duration: 393 }, { name: "阿帮阿忙", duration: 281 }, { name: "随风而逝", duration: 339 },
        { name: "不叫鸟", duration: 307 }, { name: "小草草", duration: 258 }, { name: "那只船", duration: 268 },
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
      { name: "无名的桃枝", type: "专辑", date: "2026-11-10", songs: [
      { name: "无名的桃枝", duration: 300 }, { name: "深夜的旧书", duration: 264 }, { name: "窗棂青瓦", duration: 230 },
      { name: "小院青石", duration: 249 }, { name: "久违的白露", duration: 313 }, { name: "久违的芦苇", duration: 288 },
      { name: "漫长的麦浪", duration: 285 }, { name: "渔火柳枝", duration: 165 }, { name: "雨巷旧信", duration: 310 } ] },
    { name: "云边炊烟", type: "EP", date: "2029-02-23", songs: [
      { name: "云边炊烟", duration: 287 }, { name: "渡口故人", duration: 293 }, { name: "遥远的秋雨", duration: 331 } ] },
    { name: "木窗雁阵", type: "专辑", date: "2031-07-07", songs: [
      { name: "木窗雁阵", duration: 297 }, { name: "杏花木桥", duration: 265 }, { name: "槐花柴门", duration: 284 },
      { name: "沉默的老井", duration: 281 }, { name: "溪边车站", duration: 231 }, { name: "暮归水车", duration: 314 },
      { name: "初雪竹篱", duration: 225 }, { name: "篱笆渡口", duration: 244 }, { name: "木桥青石", duration: 314 },
      { name: "木舟屋檐", duration: 291 } ] },
    { name: "深夜的渡口", type: "专辑", date: "2033-12-01", songs: [
      { name: "深夜的渡口", duration: 264 }, { name: "渡船谷雨", duration: 170 }, { name: "星夜渡船", duration: 290 },
      { name: "漫长的老树", duration: 272 }, { name: "晚钟月夜", duration: 339 }, { name: "久违的柴门", duration: 221 },
      { name: "杏花渡口", duration: 313 }, { name: "桃枝月台", duration: 282 }, { name: "渡船石阶", duration: 198 } ] },
    { name: "山径麦浪", type: "专辑", date: "2036-06-14", songs: [
      { name: "山径麦浪", duration: 302 }, { name: "山岗晚霞", duration: 336 }, { name: "老树雁阵", duration: 310 },
      { name: "山岗河流", duration: 270 }, { name: "沉默的竹影", duration: 308 }, { name: "沉默的谷雨", duration: 528 },
      { name: "竹篱渡口", duration: 265 }, { name: "漫长的晚钟", duration: 281 } ] },
    { name: "菜园炊烟", type: "专辑", date: "2038-10-07", songs: [
      { name: "菜园炊烟", duration: 229 }, { name: "木梯晚归", duration: 269 }, { name: "久违的故乡", duration: 260 },
      { name: "深夜的茶山", duration: 300 }, { name: "无名的稻田", duration: 273 }, { name: "竹影月台", duration: 230 },
      { name: "河岸秋千", duration: 332 }, { name: "深夜的窗棂", duration: 170 } ] },
    { name: "山岗木舟", type: "专辑", date: "2040-10-20", songs: [
      { name: "山岗木舟", duration: 456 }, { name: "屋檐槐树", duration: 260 }, { name: "沉默的青瓦", duration: 283 },
      { name: "灯火春分", duration: 210 }, { name: "久违的溪水", duration: 490 }, { name: "漫长的石桥", duration: 310 },
      { name: "柳枝山岗", duration: 306 }, { name: "无名的青梅", duration: 290 } ] },
    { name: "深夜的春分", type: "专辑", date: "2043-03-08", songs: [
      { name: "深夜的春分", duration: 516 }, { name: "春雨星夜", duration: 273 }, { name: "漫长的秋千", duration: 237 },
      { name: "晨雾青瓦", duration: 269 }, { name: "竹影炊烟", duration: 298 }, { name: "木舟柳枝", duration: 317 },
      { name: "深夜的麦浪", duration: 273 }, { name: "遥远的槐树", duration: 402 } ] },
    { name: "无名的长椅", type: "专辑", date: "2045-04-01", songs: [
      { name: "无名的长椅", duration: 304 }, { name: "漫长的河岸", duration: 269 }, { name: "沉默的羊群", duration: 264 },
      { name: "芦苇槐树", duration: 276 }, { name: "羊群田埂", duration: 287 }, { name: "深夜的冬雪", duration: 276 },
      { name: "屋檐霜降", duration: 293 }, { name: "沉默的山岗", duration: 297 } ] },
    { name: "菜园槐花", type: "EP", date: "2047-05-11", songs: [
      { name: "菜园槐花", duration: 348 }, { name: "冬雪犁铧", duration: 275 }, { name: "茶山窗棂", duration: 283 },
      { name: "久违的老井", duration: 271 }, { name: "立秋渔火", duration: 305 } ] },
    { name: "旧书邮局", type: "专辑", date: "2050-02-09", songs: [
      { name: "旧书邮局", duration: 257 }, { name: "漫长的谷雨", duration: 416 }, { name: "深夜的木门", duration: 215 },
      { name: "蝉鸣槐花", duration: 441 }, { name: "渔火木舟", duration: 286 }, { name: "槐树麦田", duration: 273 },
      { name: "遥远的田埂", duration: 394 }, { name: "漫长的稻草", duration: 312 }, { name: "渡口麦浪", duration: 299 },
      { name: "遥远的黄昏", duration: 254 }, { name: "久违的立秋", duration: 165 } ] },
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
      { name: "无名的雁阵", type: "EP", date: "2027-11-17", songs: [
      { name: "无名的雁阵", duration: 296 }, { name: "晚归菜园", duration: 220 }, { name: "久违的黄昏", duration: 249 },
      { name: "遥远的青瓦", duration: 247 } ] },
    { name: "久违的木舟", type: "专辑", date: "2030-11-15", songs: [
      { name: "久违的木舟", duration: 298 }, { name: "远方犁铧", duration: 294 }, { name: "漫长的窗棂", duration: 184 },
      { name: "无名的星夜", duration: 276 }, { name: "麦田羊群", duration: 160 }, { name: "木窗竹影", duration: 224 },
      { name: "邮局故人", duration: 283 }, { name: "冬雪月台", duration: 249 }, { name: "无名的篱笆", duration: 260 } ] },
    { name: "石磨溪边", type: "EP", date: "2033-12-21", songs: [
      { name: "石磨溪边", duration: 282 }, { name: "初雪谷仓", duration: 247 }, { name: "沉默的雁阵", duration: 215 } ] },
    { name: "溪水故人", type: "专辑", date: "2037-04-07", songs: [
      { name: "溪水故人", duration: 278 }, { name: "杏花石桥", duration: 202 }, { name: "月夜谷仓", duration: 291 },
      { name: "长椅冬雪", duration: 220 }, { name: "木桥雨巷", duration: 256 }, { name: "秋千木舟", duration: 281 },
      { name: "柴火山风", duration: 295 }, { name: "沉默的立秋", duration: 272 }, { name: "车站木舟", duration: 498 },
      { name: "久违的邮局", duration: 254 } ] },
    { name: "深夜的长椅", type: "EP", date: "2040-03-17", songs: [
      { name: "深夜的长椅", duration: 266 }, { name: "犁铧河岸", duration: 293 }, { name: "沉默的石路", duration: 301 } ] },
    { name: "芦苇窗棂", type: "EP", date: "2043-02-26", songs: [
      { name: "芦苇窗棂", duration: 224 }, { name: "山径乡音", duration: 301 }, { name: "漫长的石磨", duration: 450 } ] },
    { name: "深夜的小院", type: "专辑", date: "2046-02-15", songs: [
      { name: "深夜的小院", duration: 262 }, { name: "石榴故乡", duration: 299 }, { name: "深夜的山岗", duration: 300 },
      { name: "木桥石阶", duration: 270 }, { name: "遥远的木舟", duration: 207 }, { name: "久违的露水", duration: 269 },
      { name: "无名的土路", duration: 151 }, { name: "初雪土路", duration: 296 }, { name: "无名的青瓦", duration: 246 } ] },
    { name: "无名的瓦房", type: "专辑", date: "2049-03-19", songs: [
      { name: "无名的瓦房", duration: 168 }, { name: "白露石磨", duration: 278 }, { name: "无名的暮归", duration: 405 },
      { name: "槐花菜园", duration: 258 }, { name: "行囊春雨", duration: 247 }, { name: "故人初雪", duration: 214 },
      { name: "久违的旧屋", duration: 224 }, { name: "沉默的渡口", duration: 263 }, { name: "石桥屋檐", duration: 222 },
      { name: "深夜的草垛", duration: 252 }, { name: "石榴秋千", duration: 296 } ] },
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
      { name: "天上人间(Intro)", duration: 60 }, { name: "行人要走斑马线", duration: 240 },
      { name: "利物浦", duration: 250 }, { name: "Our Monday Is Free", duration: 230 },
      { name: "柳江", duration: 260 }, { name: "厦门之夏", duration: 245 }, { name: "岛屿", duration: 250 },
      { name: "船", duration: 260 }, { name: "残酷青春", duration: 240 }, { name: "Marry", duration: 230 },
      { name: "80", duration: 220 }, { name: "Wonderful Day", duration: 250 } ] },
    { name: "于是我不再唱歌", type: "专辑", date: "2013-12-28", rating: 8.0, songs: [
       { name: "于是我不再唱歌", duration: 295 }, { name: "Bye Bye", duration: 220 }, { name: "小龙人", duration: 200 },
       { name: "天后舞厅", duration: 206 }, { name: "北京夏夜", duration: 228 }, { name: "Outro", duration: 149 } ] },
    { name: "B-SIDE", type: "专辑", date: "2015-05-15", songs: [
      { name: "生命是场马拉松", duration: 280 }, { name: "Sleep", duration: 260 }, { name: "时间的手", duration: 250 },
      { name: "悲伤珊瑚群", duration: 270 }, { name: "问号", duration: 245 }, { name: "轮廓", duration: 260 },
      { name: "红色的雅儒路体校", duration: 240 }, { name: "控", duration: 250 }, { name: "驾", duration: 255 } ] },
    { name: "10 Day's", type: "专辑", date: "2015-12-21", songs: [
      { name: "此时此刻", duration: 260 }, { name: "Africa", duration: 240 }, { name: "逝去的歌", duration: 290 },
      { name: "父亲", duration: 280 }, { name: "新开世界", duration: 270 }, { name: "我们的爱在地震带", duration: 250 },
      { name: "星辰", duration: 255 }, { name: "奔跑在孤傲的路上", duration: 260 },
      { name: "Goodnight girl", duration: 245 }, { name: "隐秘的国", duration: 265 } ] },
    { name: "永远都会在", type: "专辑", date: "2017-07-06", rating: 8.1, songs: [
      { name: "永远都会在", duration: 280 }, { name: "你", duration: 270 }, { name: "西雅图阳光", duration: 280 },
      { name: "封夜", duration: 260 }, { name: "乘风而来", duration: 270 }, { name: "滚", duration: 255 },
      { name: "勇", duration: 260 }, { name: "此刻是唯一的意义", duration: 290 } ] },
    { name: "感+", type: "专辑", date: "2018-06-21", songs: [
      { name: "夏之恋", duration: 280 }, { name: "圣地亚哥", duration: 270 }, { name: "爱情的模样", duration: 275 },
      { name: "我的蒙娜丽莎", duration: 280 }, { name: "情书", duration: 260 }, { name: "My Shadow", duration: 250 },
      { name: "终结日", duration: 270 }, { name: "没有说明书的机器", duration: 260 }, { name: "爱的备份", duration: 270 },
      { name: "周末玩具", duration: 265 }, { name: "亲爱的", duration: 280 } ] },
    { name: "似近似远", type: "专辑", date: "2020-09-16", songs: [
      { name: "你没有名字", duration: 260 }, { name: "红色的河", duration: 290 }, { name: "温柔的代价", duration: 280 },
      { name: "风定忧深", duration: 270 }, { name: "生命的独特", duration: 265 }, { name: "夜明灯", duration: 280 },
      { name: "红色的河(Feat.吴青峰)", duration: 290 } ] },
    { name: "似你似我", type: "专辑", date: "2020-11-30", songs: [
      { name: "天涯路口", duration: 280 }, { name: "她在哪，家在哪", duration: 270 }, { name: "老朋友", duration: 265 },
      { name: "最好的时候", duration: 280 }, { name: "夏夜的绚烂", duration: 275 }, { name: "阿奶", duration: 270 },
      { name: "下一站", duration: 280 } ] },
      { name: "无名的星群", type: "专辑", date: "2026-12-18", songs: [
      { name: "无名的星群", duration: 198 }, { name: "铃声", duration: 268 }, { name: "草莓柠檬茶", duration: 205 },
      { name: "无名的教室", duration: 216 }, { name: "樱花", duration: 268 }, { name: "樱花信笺", duration: 235 },
      { name: "漫长的教室", duration: 265 }, { name: "无名的蜜糖", duration: 245 }, { name: "萤火玻璃糖", duration: 263 },
      { name: "单车", duration: 246 }, { name: "泡泡糖糖果屋", duration: 268 } ] },
    { name: "久违的少年", type: "EP", date: "2028-11-25", songs: [
      { name: "久违的少年", duration: 277 }, { name: "无名的沙滩", duration: 204 }, { name: "风筝平行线", duration: 277 } ] },
    { name: "沉默的薄荷", type: "EP", date: "2031-06-11", songs: [
      { name: "沉默的薄荷", duration: 344 }, { name: "玻璃糖奶昔", duration: 244 }, { name: "铃声篮球", duration: 269 } ] },
    { name: "久违的彩虹", type: "EP", date: "2033-02-13", songs: [
      { name: "久违的彩虹", duration: 231 }, { name: "深夜的晴天娃娃", duration: 265 }, { name: "单车糖分", duration: 268 },
      { name: "心跳星星糖", duration: 246 }, { name: "深夜的青春", duration: 372 } ] },
    { name: "蝉鸣葡萄柚", type: "专辑", date: "2035-04-27", songs: [
      { name: "蝉鸣葡萄柚", duration: 257 }, { name: "沉默的星期天", duration: 191 }, { name: "久违的微风", duration: 247 },
      { name: "星群操场", duration: 200 }, { name: "桃子日记", duration: 239 }, { name: "漫长的花火", duration: 268 },
      { name: "晴天微风", duration: 244 }, { name: "西瓜", duration: 240 }, { name: "星星糖", duration: 257 },
      { name: "倒计时雨伞", duration: 276 } ] },
    { name: "蝴蝶结雨伞", type: "EP", date: "2037-04-30", songs: [
      { name: "蝴蝶结雨伞", duration: 236 }, { name: "久违的银河", duration: 273 }, { name: "遥远的月亮", duration: 236 } ] },
    { name: "漫长的银河", type: "专辑", date: "2039-09-25", songs: [
      { name: "漫长的银河", duration: 260 }, { name: "葡萄柚粉色", duration: 234 }, { name: "银河橘子", duration: 218 },
      { name: "微风葡萄柚", duration: 277 }, { name: "久违的校门", duration: 288 }, { name: "久违的汽水", duration: 251 },
      { name: "平行线气泡", duration: 271 }, { name: "月亮晴天娃娃", duration: 184 }, { name: "蝴蝶结笔袋", duration: 210 },
      { name: "遥远的暖阳", duration: 177 }, { name: "软糖音乐盒", duration: 238 } ] },
    { name: "柠檬茶", type: "专辑", date: "2041-09-18", songs: [
      { name: "柠檬茶", duration: 275 }, { name: "气泡教室", duration: 266 }, { name: "漫游操场", duration: 257 },
      { name: "葡萄柚音乐盒", duration: 289 }, { name: "泡泡糖", duration: 263 }, { name: "铃铛星期天", duration: 271 },
      { name: "摩天轮", duration: 255 }, { name: "久违的月亮", duration: 184 } ] },
    { name: "微风桃子", type: "专辑", date: "2043-11-07", songs: [
      { name: "微风桃子", duration: 248 }, { name: "漫游篮球", duration: 210 }, { name: "遥远的余光", duration: 248 },
      { name: "沉默的蓝调", duration: 214 }, { name: "平行线笔袋", duration: 260 }, { name: "糖分倒计时", duration: 248 },
      { name: "初恋西瓜", duration: 277 }, { name: "风筝萤火", duration: 236 }, { name: "无名的冰淇淋", duration: 276 } ] },
    { name: "草莓童话", type: "专辑", date: "2045-11-10", songs: [
      { name: "草莓童话", duration: 297 }, { name: "晴空秋千", duration: 274 }, { name: "久违的铃声", duration: 248 },
      { name: "沉默的星星糖", duration: 429 }, { name: "雨靴秋千", duration: 246 }, { name: "久违的软糖", duration: 213 },
      { name: "倒计时花束", duration: 270 }, { name: "浅蓝摩天轮", duration: 278 } ] },
    { name: "深夜的纸飞机", type: "专辑", date: "2048-02-16", songs: [
      { name: "深夜的纸飞机", duration: 246 }, { name: "西瓜笔袋", duration: 276 }, { name: "久违的倒计时", duration: 269 },
      { name: "晴天漫游", duration: 278 }, { name: "漫长的童话", duration: 210 }, { name: "课本课桌", duration: 257 },
      { name: "拥抱操场", duration: 276 }, { name: "单车秋千", duration: 162 }, { name: "漫长的玻璃糖", duration: 248 },
      { name: "蝴蝶结校门", duration: 291 }, { name: "气泡气球", duration: 263 } ] },
    { name: "许愿气泡", type: "专辑", date: "2049-09-30", songs: [
      { name: "许愿气泡", duration: 233 }, { name: "深夜的柠檬茶", duration: 251 }, { name: "沉默的许愿", duration: 256 },
      { name: "遥远的校门", duration: 311 }, { name: "遥远的晚风", duration: 206 }, { name: "星光晴空", duration: 419 },
      { name: "睫毛桃子", duration: 266 }, { name: "久违的玻璃糖", duration: 263 }, { name: "柠檬水晚霞", duration: 244 } ] },
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
      { name: "Loam Marrow", type: "专辑", date: "2027-04-15", songs: [
      { name: "Loam Marrow（沃土的骨髓）", duration: 223 }, { name: "Amber Slope（琥珀的斜坡）", duration: 173 }, { name: "Thunder Shore（雷的岸边）", duration: 206 },
      { name: "Tide Journey（潮汐的旅程）", duration: 235 }, { name: "Ashes Crescent（灰烬的新月）", duration: 224 }, { name: "Neon Golden（霓虹的金色）", duration: 225 },
      { name: "Sky Void（天空的虚空）", duration: 197 } ] },
    { name: "Loam Whisper", type: "专辑", date: "2030-04-15", songs: [
      { name: "Loam Whisper（沃土的低语）", duration: 409 }, { name: "Smoke Motion（烟雾的律动）", duration: 235 }, { name: "Twilight Field（暮色的原野）", duration: 342 },
      { name: "Flame Plain（火焰的平原）", duration: 261 }, { name: "Kite Dusk（风筝的薄暮）", duration: 118 }, { name: "Paperplane Smoke（纸飞机的烟雾）", duration: 211 },
      { name: "Pulse Void（脉冲的虚空）", duration: 180 }, { name: "Meridian Soil（子午线的土壤）", duration: 221 }, { name: "Fog Concrete（雾的水泥）", duration: 400 } ] },
    { name: "Journey Trail", type: "EP", date: "2032-11-29", songs: [
      { name: "Journey Trail（旅程的足迹）", duration: 234 }, { name: "Crescent Wood（新月的树林）", duration: 138 }, { name: "Shallow Undertow（浅滩的暗流）", duration: 214 },
      { name: "Silver（银色）", duration: 235 } ] },
    { name: "Carousel Slope", type: "EP", date: "2035-12-24", songs: [
      { name: "Carousel Slope（旋转木马的斜坡）", duration: 235 }, { name: "Cloud Stream（云的溪流）", duration: 191 }, { name: "Mirrors Roof（镜子的屋顶）", duration: 220 },
      { name: "Echo Trail（回声的足迹）", duration: 228 }, { name: "Shadow Overcast（影子的阴云）", duration: 203 }, { name: "Sun Shell（太阳的贝壳）", duration: 218 } ] },
    { name: "Desert Ocean", type: "专辑", date: "2038-09-29", songs: [
      { name: "Desert Ocean（荒原的海洋）", duration: 197 }, { name: "Dawn Grain（黎明的颗粒）", duration: 222 }, { name: "Canvas Broken（画布的破碎）", duration: 223 },
      { name: "Rust Ocean（锈迹的海洋）", duration: 210 }, { name: "Marrow Halo（骨髓的光晕）", duration: 188 }, { name: "Moss Silence（青苔的沉寂）", duration: 220 },
      { name: "Feather Blossom（羽毛的花开）", duration: 223 }, { name: "Nightfall Halo（夜幕的光晕）", duration: 197 }, { name: "Desert Thaw（荒原的融雪）", duration: 244 },
      { name: "Vapor Shore（雾霭的岸边）", duration: 211 } ] },
    { name: "Drift Cloud", type: "专辑", date: "2041-05-30", songs: [
      { name: "Drift Cloud（漂流的云）", duration: 219 }, { name: "Undertow Spark（暗流的火花）", duration: 197 }, { name: "Steam Daybreak（蒸汽的黎明）", duration: 224 },
      { name: "Cloud Path（云的小径）", duration: 205 }, { name: "Diamond Kite（钻石的风筝）", duration: 180 }, { name: "Mirrors Leaf（镜子的叶）", duration: 236 },
      { name: "Diamond Winter（钻石的冬天）", duration: 177 }, { name: "Ashes Crystal（灰烬的水晶）", duration: 236 } ] },
    { name: "Tower Motel", type: "EP", date: "2043-11-13", songs: [
      { name: "Tower Motel（塔的汽车旅馆）", duration: 378 }, { name: "Circle Glimmer（圆圈的微光）", duration: 296 }, { name: "Petal Salt（花瓣的盐）", duration: 220 },
      { name: "Motel Faded（汽车旅馆的褪色）", duration: 225 }, { name: "Soil Dawn（土壤的黎明）", duration: 250 } ] },
    { name: "Wood Quiet", type: "专辑", date: "2046-07-14", songs: [
      { name: "Wood Quiet（树林的寂静）", duration: 210 }, { name: "Frost（霜）", duration: 226 }, { name: "Haze Bloom（轻雾的绽放）", duration: 232 },
      { name: "Nightfall Forest（夜幕的森林）", duration: 218 }, { name: "Daylight Tree（日光的树）", duration: 227 }, { name: "Wave Rain（波浪的雨）", duration: 219 },
      { name: "Soil Ice（土壤的冰）", duration: 206 }, { name: "Wind Motel（风的汽车旅馆）", duration: 228 } ] },
    { name: "Lake Meridian", type: "专辑", date: "2049-11-16", songs: [
      { name: "Lake Meridian（湖的子午线）", duration: 234 }, { name: "Compass Mist（罗盘的薄雾）", duration: 225 }, { name: "Sun Sand（太阳的沙）", duration: 212 },
      { name: "Trail Shallow（足迹的浅滩）", duration: 229 }, { name: "Paperplane Static（纸飞机的静电）", duration: 197 }, { name: "Glimmer Steam（微光的蒸汽）", duration: 231 },
      { name: "Mirrors Canvas（镜子的画布）", duration: 245 }, { name: "Sky Wind（天空的风）", duration: 334 }, { name: "Sand Sundown（沙的日落）", duration: 228 } ] },
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
      { name: "静默裂痕", type: "专辑", date: "2028-05-29", songs: [
      { name: "静默裂痕", duration: 190 }, { name: "断层汽笛", duration: 306 }, { name: "夜车汽笛", duration: 276 },
      { name: "旧城游园", duration: 305 }, { name: "无名的站台", duration: 271 }, { name: "久违的高墙", duration: 477 },
      { name: "高架公路", duration: 420 } ] },
    { name: "无名的尘埃", type: "专辑", date: "2032-08-24", songs: [
      { name: "无名的尘埃", duration: 226 }, { name: "沉默的裂痕", duration: 305 }, { name: "荒野光年", duration: 289 },
      { name: "久违的惊雷", duration: 340 }, { name: "沉默的长风", duration: 270 }, { name: "灯塔街角", duration: 338 },
      { name: "长风夜雾", duration: 282 }, { name: "灰墙碎片", duration: 175 }, { name: "车窗台阶", duration: 343 },
      { name: "晚风旧城", duration: 310 }, { name: "沙丘信号灯", duration: 366 } ] },
    { name: "风口深巷", type: "专辑", date: "2035-11-25", songs: [
      { name: "风口深巷", duration: 276 }, { name: "电线码头", duration: 560 }, { name: "街灯风筝", duration: 494 },
      { name: "沉默的屋顶", duration: 251 }, { name: "出口暮云", duration: 312 }, { name: "深夜的野猫", duration: 350 },
      { name: "暮色逆旅", duration: 542 }, { name: "无名的迷途", duration: 254 } ] },
    { name: "狂风旧城", type: "专辑", date: "2040-11-09", songs: [
      { name: "狂风旧城", duration: 322 }, { name: "归途白墙", duration: 271 }, { name: "沉默的狂风", duration: 341 },
      { name: "岔路断线", duration: 300 }, { name: "高架疾风", duration: 195 }, { name: "暴雨屋顶", duration: 306 },
      { name: "无名的逆流", duration: 321 }, { name: "极夜杂草", duration: 274 }, { name: "久违的潮声", duration: 348 },
      { name: "无名的匝道", duration: 307 }, { name: "漫长的黑巷", duration: 298 } ] },
    { name: "台阶夜车", type: "专辑", date: "2044-09-27", songs: [
      { name: "台阶夜车", duration: 316 }, { name: "晚风环流", duration: 531 }, { name: "沉默的闪电", duration: 482 },
      { name: "环流晨雾", duration: 287 }, { name: "深夜的暴雨", duration: 273 }, { name: "游园尘埃", duration: 274 },
      { name: "深夜的游园", duration: 514 }, { name: "野猫潮间带", duration: 223 }, { name: "残阳倒影", duration: 233 },
      { name: "楼顶阁楼", duration: 349 } ] },
    { name: "电线夜车", type: "专辑", date: "2048-11-02", songs: [
      { name: "电线夜车", duration: 293 }, { name: "久违的镜面", duration: 284 }, { name: "沉默的逆流", duration: 278 },
      { name: "铁轨灯塔", duration: 168 }, { name: "晚钟极夜", duration: 300 }, { name: "无名的夜车", duration: 336 },
      { name: "匝道裂痕", duration: 274 }, { name: "旧城暗巷", duration: 542 }, { name: "隧道暴雨", duration: 319 },
      { name: "水岸荒原", duration: 290 }, { name: "裂痕断层", duration: 523 } ] },
    ],
  "結束バンド": [
    { name: "結束バンド", type: "专辑", date: "2022-12-28", songs: [
       { name: "青春コンプレックス（青春情结）", duration: 243 }, { name: "Distortion", duration: 208 },
       { name: "ギターと孤独と蒼い惑星（吉他与孤独与蓝色星球）", duration: 231 }, { name: "あのバンド（那个乐队）", duration: 237 },
       { name: "なにが悪い（有什么不好）", duration: 227 }, { name: "忘れてやらない（绝不忘记）", duration: 218 },
       { name: "星座になれたら（若能成为星座）", duration: 234 }, { name: "フラッシュバッカー", duration: 216 },
       { name: "ひみつ基地（秘密基地）", duration: 209 }, { name: "ラブソングが歌えない（唱不出情歌）", duration: 231 },
       { name: "小さな海（小小海洋）", duration: 246 }, { name: "夢をみるのは何故だろうか（为何会做梦）", duration: 214 },
       { name: "転がる岩、君に朝が降る（滚动的岩石，你迎来清晨）", duration: 254 } ] },
    { name: "青春コンプレックス（青春情结）", type: "单曲", date: "2022-10-09", songs: [ { name: "青春コンプレックス（青春情结）", duration: 243 } ] },
    { name: "Distortion", type: "单曲", date: "2022-11-06", songs: [ { name: "Distortion", duration: 208 } ] },
    { name: "ギターと孤独と蒼い惑星（吉他与孤独与蓝色星球）", type: "单曲", date: "2022-11-27", songs: [ { name: "ギターと孤独と蒼い惑星（吉他与孤独与蓝色星球）", duration: 231 } ] },
    { name: "あのバンド（那个乐队）", type: "单曲", date: "2022-11-27", songs: [ { name: "あのバンド（那个乐队）", duration: 237 } ] },
    { name: "なにが悪い（有什么不好）", type: "单曲", date: "2022-12-04", songs: [ { name: "なにが悪い（有什么不好）", duration: 227 } ] },
    { name: "星座になれたら（若能成为星座）", type: "单曲", date: "2022-12-18", songs: [ { name: "星座になれたら（若能成为星座）", duration: 234 } ] },
    { name: "光の中へ（走向光中）", type: "单曲", date: "2024-06-09", songs: [ { name: "光の中へ（走向光中）", duration: 240 } ] },
    { name: "月並みに輝け（平凡地闪耀）", type: "单曲", date: "2024-06-09", songs: [ { name: "月並みに輝け（平凡地闪耀）", duration: 220 } ] },
    { name: "僕と三原色（我和三原色）", type: "单曲", date: "2024-06-09", songs: [ { name: "僕と三原色（我和三原色）", duration: 210 } ] },
      { name: "遠い黄昏", type: "专辑", date: "2026-05-23", songs: [
      { name: "遠い黄昏（遥远黄昏）", duration: 208 }, { name: "小さな恋（小小恋）", duration: 263 }, { name: "雪化粧（银装素裹）", duration: 245 },
      { name: "紅葉（红叶）", duration: 215 }, { name: "朧月（胧月）", duration: 195 }, { name: "スパーク（火花）", duration: 225 },
      { name: "流星まで（直到流星）", duration: 234 }, { name: "スモーク（烟雾）", duration: 210 } ] },
    { name: "冬晴れだけ", type: "EP", date: "2027-07-18", songs: [
      { name: "冬晴れだけ（只有冬日晴空）", duration: 383 }, { name: "残照", duration: 430 }, { name: "真夏（盛夏）", duration: 237 } ] },
    { name: "新しい障子", type: "EP", date: "2028-06-30", songs: [
      { name: "新しい障子（崭新障子）", duration: 199 }, { name: "屋上（天台）", duration: 219 }, { name: "クワイエット（寂静）", duration: 200 },
      { name: "唄の行方（歌谣的踪迹）", duration: 208 }, { name: "遠い恋（遥远恋）", duration: 249 }, { name: "真夏だけ（只有盛夏）", duration: 229 } ] },
    { name: "銀河", type: "专辑", date: "2029-04-27", songs: [
      { name: "銀河（银河）", duration: 216 }, { name: "木漏れ日に咲く（在林间光斑绽放）", duration: 261 }, { name: "障子", duration: 157 },
      { name: "光景", duration: 321 }, { name: "残響（残响）", duration: 271 }, { name: "旋律", duration: 429 },
      { name: "放課後（放学后）", duration: 189 }, { name: "雲、流星（云与流星）", duration: 276 }, { name: "星空", duration: 215 } ] },
    { name: "アッシェズ", type: "单曲", date: "2030-05-04", songs: [
      { name: "アッシェズ（灰烬）", duration: 257 } ] },
    { name: "落ち葉", type: "EP", date: "2031-05-03", songs: [
      { name: "落ち葉（落叶）", duration: 210 }, { name: "暗い夕暮れ（昏暗黄昏）", duration: 240 }, { name: "言葉（言语）", duration: 216 } ] },
    { name: "調べを探して", type: "专辑", date: "2032-04-16", songs: [
      { name: "調べを探して（寻找曲调）", duration: 235 }, { name: "潮騒まで（直到潮鸣）", duration: 147 }, { name: "木霊（树魂）", duration: 243 },
      { name: "ミッドナイト（午夜）", duration: 243 }, { name: "冬晴れ（冬日晴空）", duration: 201 }, { name: "雪、星（雪与星）", duration: 211 },
      { name: "恋、潮騒（恋与潮鸣）", duration: 233 }, { name: "流星を待つ（等待流星）", duration: 233 } ] },
    { name: "白い季節", type: "专辑", date: "2033-02-25", songs: [
      { name: "白い季節（苍白季节）", duration: 209 }, { name: "グロウ（辉光）", duration: 243 }, { name: "暗い夜明け（昏暗黎明）", duration: 206 },
      { name: "朝焼けよ（朝霞啊）", duration: 181 }, { name: "水面", duration: 213 }, { name: "調べ（曲调）", duration: 178 },
      { name: "夜風（夜风）", duration: 223 }, { name: "部活（社团）", duration: 241 }, { name: "黒板（黑板）", duration: 226 } ] },
    { name: "ハーバー", type: "EP", date: "2034-02-13", songs: [
      { name: "ハーバー（港湾）", duration: 198 }, { name: "夜、湖（夜与湖）", duration: 362 }, { name: "蒼い雲（苍蓝云）", duration: 225 },
      { name: "カルーセル（旋转木马）", duration: 219 } ] },
    { name: "波音", type: "单曲", date: "2035-03-18", songs: [
      { name: "波音（潮声）", duration: 244 } ] },
    { name: "静かな湖", type: "单曲", date: "2035-12-31", songs: [
      { name: "静かな湖（静谧湖）", duration: 213 } ] },
    { name: "水面に還る", type: "专辑", date: "2036-12-25", songs: [
      { name: "水面に還る（回到水面）", duration: 216 }, { name: "心音だけ（只有心跳）", duration: 202 }, { name: "灯り（灯火）", duration: 156 },
      { name: "帰り道（归途）", duration: 223 }, { name: "追憶（追忆）", duration: 241 }, { name: "メロディ（旋律）", duration: 214 },
      { name: "体育祭", duration: 239 }, { name: "夕霧（暮霭）", duration: 213 }, { name: "三日月（新月）", duration: 270 },
      { name: "夕焼け（晚霞）", duration: 223 }, { name: "雲まで（直到云）", duration: 238 } ] },
    { name: "月光", type: "EP", date: "2038-02-03", songs: [
      { name: "月光", duration: 191 }, { name: "新しい修学旅行（崭新修学旅行）", duration: 218 }, { name: "デイライト（日光）", duration: 225 },
      { name: "ブルーム（绽放）", duration: 218 }, { name: "流れ星（流星）", duration: 227 } ] },
    { name: "ランタン", type: "专辑", date: "2038-11-25", songs: [
      { name: "ランタン（灯笼）", duration: 232 }, { name: "白い落ち葉（苍白落叶）", duration: 229 }, { name: "アンダートウ（暗流）", duration: 426 },
      { name: "明るい夕焼け（明亮晚霞）", duration: 222 }, { name: "葉に咲く（在叶绽放）", duration: 212 }, { name: "自転車（单车）", duration: 253 },
      { name: "満月（满月）", duration: 233 }, { name: "詩を待つ（等待诗）", duration: 234 }, { name: "フェイデッド（褪色）", duration: 187 },
      { name: "春風（春风）", duration: 236 } ] },
    { name: "響きの行方", type: "专辑", date: "2039-10-29", songs: [
      { name: "響きの行方（回响的踪迹）", duration: 220 }, { name: "制服を越えて（越过制服）", duration: 214 }, { name: "夕暮れを抱いて（拥抱黄昏）", duration: 250 },
      { name: "星空へ続く（通往星空）", duration: 207 }, { name: "雨音に還る（回到雨声）", duration: 216 }, { name: "オーバーキャスト（阴云）", duration: 198 },
      { name: "海辺に還る（回到海边）", duration: 152 } ] },
    { name: "蕾が揺れる", type: "EP", date: "2040-12-17", songs: [
      { name: "蕾が揺れる（花苞摇曳）", duration: 241 }, { name: "朝焼け（朝霞）", duration: 248 }, { name: "給食（午餐）", duration: 218 } ] },
    { name: "約束、花", type: "单曲", date: "2041-10-05", songs: [
      { name: "約束、花（约定与花）", duration: 241 } ] },
    { name: "風鈴", type: "专辑", date: "2042-10-11", songs: [
      { name: "風鈴（风铃）", duration: 243 }, { name: "春休み（春假）", duration: 244 }, { name: "雪を抱いて（拥抱雪）", duration: 270 },
      { name: "響きを待つ（等待回响）", duration: 213 }, { name: "海辺（海边）", duration: 251 }, { name: "季節（季节）", duration: 231 },
      { name: "花、根（花与根）", duration: 134 } ] },
    { name: "リフレイン", type: "专辑", date: "2043-11-16", songs: [
      { name: "リフレイン（副歌）", duration: 342 }, { name: "ヴェルヴェット（天鹅绒）", duration: 227 }, { name: "淡い唄（淡淡歌谣）", duration: 395 },
      { name: "文化祭に還る（回到文化祭）", duration: 320 }, { name: "島へ続く（通往岛）", duration: 202 }, { name: "文化祭", duration: 232 },
      { name: "秋風（秋风）", duration: 247 }, { name: "星屑", duration: 223 }, { name: "氷を抱いて（拥抱冰）", duration: 150 },
      { name: "若葉（新叶）", duration: 397 }, { name: "静かな霜（静谧霜）", duration: 218 } ] },
    { name: "想い", type: "EP", date: "2044-09-17", songs: [
      { name: "想い（思念）", duration: 226 }, { name: "響き（回响）", duration: 215 }, { name: "海を越えて（越过海）", duration: 248 } ] },
    { name: "眩しい黄昏", type: "专辑", date: "2045-10-02", songs: [
      { name: "眩しい黄昏（耀眼黄昏）", duration: 233 }, { name: "青空を待つ（等待青空）", duration: 382 }, { name: "夏休みだけ（只有暑假）", duration: 169 },
      { name: "木漏れ日（林间光斑）", duration: 128 }, { name: "心音（心跳）", duration: 269 }, { name: "夕焼けが揺れる（晚霞摇曳）", duration: 166 },
      { name: "心音の行方（心跳的踪迹）", duration: 210 }, { name: "新しい街（崭新街）", duration: 130 }, { name: "制服", duration: 212 },
      { name: "桜に咲く（在樱花绽放）", duration: 146 }, { name: "音色", duration: 219 } ] },
    { name: "星屑へ続く", type: "专辑", date: "2046-10-14", songs: [
      { name: "星屑へ続く（通往星屑）", duration: 207 }, { name: "唄だけ（只有歌谣）", duration: 428 }, { name: "唄を待つ（等待歌谣）", duration: 242 },
      { name: "若葉が降る（新叶飘落）", duration: 184 }, { name: "夕暮れ（黄昏）", duration: 226 }, { name: "落ち葉、枝（落叶与枝）", duration: 208 },
      { name: "三日月、木漏れ日（新月与林间光斑）", duration: 239 }, { name: "歌の行方（歌的踪迹）", duration: 267 }, { name: "夜、旋律（夜与旋律）", duration: 243 },
      { name: "スタティック（静电）", duration: 196 }, { name: "夜を越えて（越过夜）", duration: 231 } ] },
    { name: "朝霧", type: "专辑", date: "2047-08-05", songs: [
      { name: "朝霧（晨雾）", duration: 205 }, { name: "縁側（檐廊）", duration: 221 }, { name: "修学旅行", duration: 240 },
      { name: "黄昏の向こう（黄昏的彼方）", duration: 182 }, { name: "星雲を待つ（等待星云）", duration: 244 }, { name: "海辺を越えて（越过海边）", duration: 230 },
      { name: "深い波（深邃波）", duration: 231 }, { name: "夜明け（黎明）", duration: 247 }, { name: "波が揺れる（波摇曳）", duration: 238 } ] },
    { name: "凪を抱いて", type: "专辑", date: "2048-08-29", songs: [
      { name: "凪を抱いて（拥抱风平浪静）", duration: 215 }, { name: "湖の向こう（湖的彼方）", duration: 276 }, { name: "海辺、葉（海边与叶）", duration: 173 },
      { name: "黄昏が揺れる（黄昏摇曳）", duration: 221 }, { name: "潮騒（潮鸣）", duration: 249 }, { name: "雨音、夜明け（雨声与黎明）", duration: 181 },
      { name: "夏祭り（夏日祭）", duration: 133 }, { name: "若葉に咲く（在新叶绽放）", duration: 242 }, { name: "雨音（雨声）", duration: 214 } ] },
    { name: "向日葵", type: "专辑", date: "2049-07-12", songs: [
      { name: "向日葵", duration: 166 }, { name: "夏休み（暑假）", duration: 225 }, { name: "星雲を探して（寻找星云）", duration: 207 },
      { name: "蕾が降る（花苞飘落）", duration: 237 }, { name: "陽だまり（暖阳）", duration: 192 }, { name: "木漏れ日が降る（林间光斑飘落）", duration: 179 },
      { name: "浴衣", duration: 224 }, { name: "エコー（回声）", duration: 249 }, { name: "明るい調べ（明亮曲调）", duration: 221 },
      { name: "プリズム（棱镜）", duration: 241 }, { name: "落ち葉に咲く（在落叶绽放）", duration: 249 } ] },
    { name: "ゴールデン", type: "专辑", date: "2050-05-25", songs: [
      { name: "ゴールデン（金色）", duration: 242 }, { name: "深い夜風（深邃夜风）", duration: 179 }, { name: "眩しい三日月（耀眼新月）", duration: 226 },
      { name: "明るい唄（明亮歌谣）", duration: 207 }, { name: "星雲（星云）", duration: 201 }, { name: "デイブレイク（黎明）", duration: 241 },
      { name: "雪、心音（雪与心跳）", duration: 244 }, { name: "海、雪（海与雪）", duration: 232 }, { name: "暗い氷（昏暗冰）", duration: 243 },
      { name: "卒業（毕业）", duration: 209 }, { name: "満月まで（直到满月）", duration: 228 } ] },
    ],
  "放課後ティータイム": [
    { name: "放課後ティータイムII（放学后茶会II）", type: "专辑", date: "2010-10-27", songs: [
       { name: "ぴゅあぴゅあはーと（Pure Pure Heart）", duration: 240 }, { name: "カレーのちライス（咖喱饭）", duration: 220 },
       { name: "わたしの恋はホッチキス（我的爱是订书机）", duration: 230 }, { name: "ふでペン 〜ボールペン〜（毛笔～圆珠笔～）", duration: 225 },
       { name: "ときめきシュガー（心动糖）", duration: 218 }, { name: "お菓子のじかん（点心时间）", duration: 210 },
       { name: "Sunday Siesta", duration: 235 }, { name: "ふわふわ時間（轻飘飘时间）", duration: 236 } ] },
    { name: "ふわふわ時間（轻飘飘时间）", type: "单曲", date: "2009-04-22", songs: [ { name: "ふわふわ時間（轻飘飘时间）", duration: 236 } ] },
    { name: "Don't say “lazy”", type: "单曲", date: "2009-04-22", songs: [ { name: "Don't say “lazy”", duration: 251 } ] },
    { name: "Listen!!", type: "单曲", date: "2010-04-28", songs: [ { name: "Listen!!", duration: 245 } ] },
    { name: "GO! GO! MANIAC", type: "单曲", date: "2010-04-28", songs: [ { name: "GO! GO! MANIAC", duration: 255 } ] },
    { name: "ぴゅあぴゅあはーと（Pure Pure Heart）", type: "单曲", date: "2010-06-02", songs: [ { name: "ぴゅあぴゅあはーと（Pure Pure Heart）", duration: 240 } ] },
    { name: "Utauyo!! MIRACLE", type: "单曲", date: "2010-08-04", songs: [ { name: "Utauyo!! MIRACLE", duration: 250 } ] },
    { name: "No, Thank You!", type: "单曲", date: "2010-08-04", songs: [ { name: "No, Thank You!", duration: 244 } ] },
    { name: "天使にふれたよ!（遇见了天使）", type: "单曲", date: "2010-09-08", songs: [ { name: "天使にふれたよ!（遇见了天使）", duration: 240 } ] },
      { name: "花が揺れる", type: "EP", date: "2026-08-05", songs: [
      { name: "花が揺れる（花摇曳）", duration: 188 }, { name: "ペーパープレーン（纸飞机）", duration: 251 }, { name: "雪、青空（雪与青空）", duration: 345 },
      { name: "夜風を越えて（越过夜风）", duration: 241 }, { name: "川へ続く（通往河）", duration: 225 }, { name: "涙を探して（寻找泪）", duration: 259 } ] },
    { name: "グリマー", type: "EP", date: "2027-06-09", songs: [
      { name: "グリマー（微光）", duration: 259 }, { name: "唄、夜（歌谣与夜）", duration: 336 }, { name: "長い夜風（漫长夜风）", duration: 259 } ] },
    { name: "約束", type: "EP", date: "2028-06-22", songs: [
      { name: "約束（约定）", duration: 191 }, { name: "川が揺れる（河摇曳）", duration: 230 }, { name: "島が揺れる（岛摇曳）", duration: 235 },
      { name: "雨が揺れる（雨摇曳）", duration: 186 } ] },
    { name: "雨音、調べ", type: "EP", date: "2029-04-14", songs: [
      { name: "雨音、調べ（雨声与曲调）", duration: 222 }, { name: "実が揺れる（果实摇曳）", duration: 431 }, { name: "雨に還る（回到雨）", duration: 240 },
      { name: "夜風、響き（夜风与回响）", duration: 224 } ] },
    { name: "白い光景", type: "专辑", date: "2030-05-22", songs: [
      { name: "白い光景（苍白光景）", duration: 257 }, { name: "暁を探して（寻找拂晓）", duration: 216 }, { name: "島を越えて（越过岛）", duration: 261 },
      { name: "虹、枝（彩虹与枝）", duration: 217 }, { name: "透明な雨音（透明雨声）", duration: 255 }, { name: "ミラーズ（镜面）", duration: 213 },
      { name: "星空の行方（星空的踪迹）", duration: 240 }, { name: "ナイトフォール（夜幕）", duration: 245 }, { name: "オービット（轨道）", duration: 205 },
      { name: "水面、雨音（水面与雨声）", duration: 234 } ] },
    { name: "眩しい満月", type: "专辑", date: "2031-05-30", songs: [
      { name: "眩しい満月（耀眼满月）", duration: 235 }, { name: "ディスタンス（距离）", duration: 253 }, { name: "シグナル（信号）", duration: 230 },
      { name: "滝、記憶（瀑布与记忆）", duration: 288 }, { name: "夜明けを越えて（越过黎明）", duration: 208 }, { name: "島に還る（回到岛）", duration: 244 },
      { name: "柔らかな紅葉（柔软红叶）", duration: 281 }, { name: "長い月光（漫长月光）", duration: 197 } ] },
    { name: "朝焼けまで", type: "单曲", date: "2032-04-26", songs: [
      { name: "朝焼けまで（直到朝霞）", duration: 225 } ] },
    { name: "青空", type: "专辑", date: "2033-04-08", songs: [
      { name: "青空", duration: 249 }, { name: "星雲、唄（星云与歌谣）", duration: 276 }, { name: "柔らかな花（柔软花）", duration: 201 },
      { name: "岬へ続く（通往海角）", duration: 226 }, { name: "夕暮れ、銀河（黄昏与银河）", duration: 251 }, { name: "新しい調べ（崭新曲调）", duration: 244 },
      { name: "古い体育祭（陈旧体育祭）", duration: 198 }, { name: "空の向こう（天空的彼方）", duration: 219 }, { name: "桜が揺れる（樱花摇曳）", duration: 223 },
      { name: "花に咲く（在花绽放）", duration: 215 }, { name: "静かな雪（静谧雪）", duration: 213 } ] },
    { name: "白い花", type: "专辑", date: "2034-02-01", songs: [
      { name: "白い花（苍白花）", duration: 394 }, { name: "雨音へ続く（通往雨声）", duration: 392 }, { name: "木漏れ日、落ち葉（林间光斑与落叶）", duration: 221 },
      { name: "柔らかな若葉（柔软新叶）", duration: 238 }, { name: "雲、歌（云与歌）", duration: 131 }, { name: "夢を抱いて（拥抱梦）", duration: 238 },
      { name: "泉へ続く（通往泉）", duration: 287 }, { name: "蒼い銀河（苍蓝银河）", duration: 236 }, { name: "詩の行方（诗的踪迹）", duration: 251 } ] },
    { name: "ブロークン", type: "专辑", date: "2035-01-19", songs: [
      { name: "ブロークン（破碎）", duration: 234 }, { name: "記憶（记忆）", duration: 226 }, { name: "微笑よ（微笑啊）", duration: 246 },
      { name: "枝、落ち葉（枝与落叶）", duration: 214 }, { name: "給食を越えて（越过午餐）", duration: 218 }, { name: "約束の行方（约定的踪迹）", duration: 224 },
      { name: "夕焼けまで（直到晚霞）", duration: 161 }, { name: "流星へ続く（通往流星）", duration: 234 } ] },
    { name: "星空を探して", type: "EP", date: "2036-03-14", songs: [
      { name: "星空を探して（寻找星空）", duration: 235 }, { name: "凪、雪（风平浪静与雪）", duration: 228 }, { name: "給食に還る（回到午餐）", duration: 157 },
      { name: "深い霞（深邃霞）", duration: 185 }, { name: "凪を越えて（越过风平浪静）", duration: 255 }, { name: "潮騒の向こう（潮鸣的彼方）", duration: 255 } ] },
    { name: "サテライト", type: "专辑", date: "2037-01-04", songs: [
      { name: "サテライト（卫星）", duration: 214 }, { name: "銀河を待つ（等待银河）", duration: 246 }, { name: "長い文化祭（漫长文化祭）", duration: 216 },
      { name: "海が揺れる（海摇曳）", duration: 250 }, { name: "湖を越えて（越过湖）", duration: 152 }, { name: "雨、水面（雨与水面）", duration: 197 },
      { name: "秋風を待つ（等待秋风）", duration: 234 }, { name: "柔らかな落ち葉（柔软落叶）", duration: 258 } ] },
    { name: "遠い窓", type: "专辑", date: "2037-11-27", songs: [
      { name: "遠い窓（遥远窗）", duration: 254 }, { name: "ラプソディ（狂想曲）", duration: 218 }, { name: "流星の向こう（流星的彼方）", duration: 156 },
      { name: "蒼い三日月（苍蓝新月）", duration: 231 }, { name: "眩しい春風（耀眼春风）", duration: 184 }, { name: "言葉よ（言语啊）", duration: 269 },
      { name: "夢、霧（梦与雾）", duration: 277 }, { name: "暗い霜（昏暗霜）", duration: 251 } ] },
    { name: "向日葵が降る", type: "单曲", date: "2038-11-24", songs: [
      { name: "向日葵が降る（向日葵飘落）", duration: 212 } ] },
    { name: "空の行方", type: "专辑", date: "2039-11-13", songs: [
      { name: "空の行方（天空的踪迹）", duration: 351 }, { name: "紅葉に咲く（在红叶绽放）", duration: 403 }, { name: "葉が降る（叶飘落）", duration: 232 },
      { name: "柔らかな涙（柔软泪）", duration: 330 }, { name: "優しい夢（温柔梦）", duration: 234 }, { name: "ネオン（霓虹）", duration: 156 },
      { name: "シルバー（银色）", duration: 223 }, { name: "霧を越えて（越过雾）", duration: 149 }, { name: "岸に還る（回到岸）", duration: 282 } ] },
    { name: "暗い霞", type: "单曲", date: "2040-11-03", songs: [
      { name: "暗い霞（昏暗霞）", duration: 170 } ] },
    { name: "眩しい朝焼け", type: "EP", date: "2041-11-27", songs: [
      { name: "眩しい朝焼け（耀眼朝霞）", duration: 255 }, { name: "柔らかな想い（柔软思念）", duration: 230 }, { name: "星を探して（寻找星）", duration: 287 },
      { name: "小さな言葉（小小言语）", duration: 212 }, { name: "冬休み（寒假）", duration: 247 } ] },
    { name: "星屑まで", type: "单曲", date: "2042-09-23", songs: [
      { name: "星屑まで（直到星屑）", duration: 232 } ] },
    { name: "メリディアン", type: "专辑", date: "2043-09-19", songs: [
      { name: "メリディアン（子午线）", duration: 259 }, { name: "調べの行方（曲调的踪迹）", duration: 317 }, { name: "障子を越えて（越过障子）", duration: 134 },
      { name: "雪を越えて（越过雪）", duration: 239 }, { name: "ドリフト（漂流）", duration: 230 }, { name: "新しい屋上（崭新天台）", duration: 234 },
      { name: "蒼い夕焼け（苍蓝晚霞）", duration: 167 }, { name: "トレイル（足迹）", duration: 238 }, { name: "優しい微笑（温柔微笑）", duration: 187 },
      { name: "黄昏よ（黄昏啊）", duration: 242 }, { name: "放課後に還る（回到放学后）", duration: 248 } ] },
    { name: "虹の向こう", type: "专辑", date: "2044-09-05", songs: [
      { name: "虹の向こう（彩虹的彼方）", duration: 411 }, { name: "言葉を抱いて（拥抱言语）", duration: 250 }, { name: "夕焼けを探して（寻找晚霞）", duration: 279 },
      { name: "海まで（直到海）", duration: 234 }, { name: "枝、暁（枝与拂晓）", duration: 198 }, { name: "小さな紅葉（小小红叶）", duration: 389 },
      { name: "明るい約束（明亮约定）", duration: 230 }, { name: "水面が揺れる（水面摇曳）", duration: 272 } ] },
    { name: "岬が揺れる", type: "EP", date: "2045-09-30", songs: [
      { name: "岬が揺れる（海角摇曳）", duration: 206 }, { name: "メモリー（记忆）", duration: 157 }, { name: "暁の行方（拂晓的踪迹）", duration: 219 },
      { name: "淡い星屑（淡淡星屑）", duration: 228 }, { name: "暁が降る（拂晓飘落）", duration: 214 } ] },
    { name: "アイアン", type: "EP", date: "2046-09-05", songs: [
      { name: "アイアン（铁）", duration: 133 }, { name: "深い霜（深邃霜）", duration: 230 }, { name: "空へ続く（通往天空）", duration: 240 },
      { name: "紅葉、夜明け（红叶与黎明）", duration: 237 }, { name: "明るい雲（明亮云）", duration: 244 } ] },
    { name: "蝉だけ", type: "单曲", date: "2047-08-09", songs: [
      { name: "蝉だけ（只有蝉）", duration: 221 } ] },
    { name: "遠い想い", type: "专辑", date: "2048-07-05", songs: [
      { name: "遠い想い（遥远思念）", duration: 282 }, { name: "眩しい星空（耀眼星空）", duration: 241 }, { name: "長い霜（漫长霜）", duration: 219 },
      { name: "新しい想い（崭新思念）", duration: 183 }, { name: "眩しい秋風（耀眼秋风）", duration: 224 }, { name: "海の向こう（海的彼方）", duration: 247 },
      { name: "透明な湖（透明湖）", duration: 231 }, { name: "眩しい冬休み（耀眼寒假）", duration: 283 }, { name: "枝が降る（枝飘落）", duration: 174 },
      { name: "古い障子（陈旧障子）", duration: 227 } ] },
    { name: "約束を待つ", type: "专辑", date: "2049-07-18", songs: [
      { name: "約束を待つ（等待约定）", duration: 192 }, { name: "小さな葉（小小叶）", duration: 236 }, { name: "記憶、蕾（记忆与花苞）", duration: 186 },
      { name: "透明な海辺（透明海边）", duration: 217 }, { name: "教室を越えて（越过教室）", duration: 255 }, { name: "響きだけ（只有回响）", duration: 219 },
      { name: "優しい心（温柔心）", duration: 254 }, { name: "星の向こう（星的彼方）", duration: 244 }, { name: "枝に咲く（在枝绽放）", duration: 187 } ] },
    { name: "流星が揺れる", type: "专辑", date: "2050-07-02", songs: [
      { name: "流星が揺れる（流星摇曳）", duration: 154 }, { name: "白い虹（苍白彩虹）", duration: 220 }, { name: "湖が揺れる（湖摇曳）", duration: 222 },
      { name: "想いよ（思念啊）", duration: 238 }, { name: "夜明けを抱いて（拥抱黎明）", duration: 416 }, { name: "泉の向こう（泉的彼方）", duration: 334 },
      { name: "夜、三日月（夜与新月）", duration: 218 }, { name: "海、湖（海与湖）", duration: 239 }, { name: "満月、月（满月与月）", duration: 218 },
      { name: "岬を越えて（越过海角）", duration: 243 }, { name: "雨へ続く（通往雨）", duration: 239 } ] },
    ],
  "MyGO（CRYCHIC）": [
    { name: "迷跡波（迷迹波）", type: "专辑", date: "2024-04-24", songs: [
       { name: "迷星叫（迷星叫）", duration: 230 }, { name: "迷路日々（迷路日日）", duration: 225 },
       { name: "音一会（音一会）", duration: 240 }, { name: "名無声（名无声）", duration: 235 },
       { name: "潜在表明（潜在表明）", duration: 220 }, { name: "壱雫空（一雫空）", duration: 228 },
       { name: "栞（书签）", duration: 245 }, { name: "春日影（春日影）", duration: 250 },
       { name: "詩超絆（诗超绊）", duration: 238 }, { name: "過惰幻（过惰幻）", duration: 215 },
       { name: "焚音打（焚音打）", duration: 222 } ] },
    { name: "迷星叫（迷星叫）", type: "单曲", date: "2022-12-14", songs: [ { name: "迷星叫（迷星叫）", duration: 230 } ] },
    { name: "迷路日々（迷路日日）", type: "单曲", date: "2023-03-15", songs: [ { name: "迷路日々（迷路日日）", duration: 225 } ] },
    { name: "音一会（音一会）", type: "单曲", date: "2023-06-14", songs: [ { name: "音一会（音一会）", duration: 240 } ] },
    { name: "名無声（名无声）", type: "单曲", date: "2023-08-16", songs: [ { name: "名無声（名无声）", duration: 235 } ] },
    { name: "潜在表明（潜在表明）", type: "单曲", date: "2023-11-15", songs: [ { name: "潜在表明（潜在表明）", duration: 220 } ] },
    { name: "壱雫空（一雫空）", type: "单曲", date: "2024-02-14", songs: [ { name: "壱雫空（一雫空）", duration: 228 } ] },
      { name: "静かな海辺", type: "EP", date: "2026-05-23", songs: [
      { name: "静かな海辺（静谧海边）", duration: 187 }, { name: "透明な黄昏（透明黄昏）", duration: 237 }, { name: "心音を探して（寻找心跳）", duration: 209 },
      { name: "冬休みを待つ（等待寒假）", duration: 235 }, { name: "満月を探して（寻找满月）", duration: 223 } ] },
    { name: "追憶だけ", type: "单曲", date: "2027-06-29", songs: [
      { name: "追憶だけ（只有追忆）", duration: 212 } ] },
    { name: "夢を待つ", type: "EP", date: "2028-05-07", songs: [
      { name: "夢を待つ（等待梦）", duration: 183 }, { name: "サンダウン（日落）", duration: 165 }, { name: "岸まで（直到岸）", duration: 224 },
      { name: "黄昏が降る（黄昏飘落）", duration: 252 } ] },
    { name: "眩しい青空", type: "单曲", date: "2029-05-10", songs: [
      { name: "眩しい青空（耀眼青空）", duration: 209 } ] },
    { name: "約束だけ", type: "专辑", date: "2030-03-30", songs: [
      { name: "約束だけ（只有约定）", duration: 343 }, { name: "長い体育祭（漫长体育祭）", duration: 207 }, { name: "流星、朝焼け（流星与朝霞）", duration: 311 },
      { name: "淡い銀河（淡淡银河）", duration: 237 }, { name: "霜、枝（霜与枝）", duration: 229 }, { name: "銀河が揺れる（银河摇曳）", duration: 191 },
      { name: "岬、潮騒（海角与潮鸣）", duration: 243 }, { name: "追憶を待つ（等待追忆）", duration: 210 }, { name: "月まで（直到月）", duration: 226 },
      { name: "夜風、落ち葉（夜风与落叶）", duration: 244 } ] },
    { name: "星雲の向こう", type: "EP", date: "2031-05-16", songs: [
      { name: "星雲の向こう（星云的彼方）", duration: 394 }, { name: "想いだけ（只有思念）", duration: 210 }, { name: "深い雨音（深邃雨声）", duration: 251 },
      { name: "眩しい星（耀眼星）", duration: 186 }, { name: "優しい調べ（温柔曲调）", duration: 210 } ] },
    { name: "木漏れ日、葉", type: "专辑", date: "2032-04-18", songs: [
      { name: "木漏れ日、葉（林间光斑与叶）", duration: 239 }, { name: "実、木漏れ日（果实与林间光斑）", duration: 209 }, { name: "淡い想い（淡淡思念）", duration: 227 },
      { name: "明るい星屑（明亮星屑）", duration: 225 }, { name: "霞を抱いて（拥抱霞）", duration: 386 }, { name: "雲の行方（云的踪迹）", duration: 245 },
      { name: "新しい響き（崭新回响）", duration: 240 } ] },
    { name: "心よ", type: "EP", date: "2033-04-25", songs: [
      { name: "心よ（心啊）", duration: 222 }, { name: "星の行方（星的踪迹）", duration: 365 }, { name: "小さな根（小小根）", duration: 155 },
      { name: "蒼い湖（苍蓝湖）", duration: 317 } ] },
    { name: "透明な星", type: "EP", date: "2034-04-12", songs: [
      { name: "透明な星（透明星）", duration: 131 }, { name: "潮騒が揺れる（潮鸣摇曳）", duration: 252 }, { name: "新しい詩（崭新诗）", duration: 189 },
      { name: "滝が揺れる（瀑布摇曳）", duration: 224 }, { name: "波、霧（波与雾）", duration: 223 }, { name: "新しい約束（崭新约定）", duration: 268 } ] },
    { name: "想いを探して", type: "EP", date: "2035-03-15", songs: [
      { name: "想いを探して（寻找思念）", duration: 279 }, { name: "雲の向こう（云的彼方）", duration: 221 }, { name: "静かな夜風（静谧夜风）", duration: 250 } ] },
    { name: "唄を探して", type: "专辑", date: "2036-02-07", songs: [
      { name: "唄を探して（寻找歌谣）", duration: 243 }, { name: "優しい心音（温柔心跳）", duration: 253 }, { name: "若葉、蕾（新叶与花苞）", duration: 277 },
      { name: "長い霞（漫长霞）", duration: 248 }, { name: "星、霜（星与霜）", duration: 204 }, { name: "星雲の行方（星云的踪迹）", duration: 251 },
      { name: "調べを待つ（等待曲调）", duration: 255 }, { name: "淡い夕焼け（淡淡晚霞）", duration: 212 }, { name: "蒼い川（苍蓝河）", duration: 236 } ] },
    { name: "夕焼けが降る", type: "专辑", date: "2036-12-23", songs: [
      { name: "夕焼けが降る（晚霞飘落）", duration: 233 }, { name: "詩を探して（寻找诗）", duration: 250 }, { name: "凪、星雲（风平浪静与星云）", duration: 219 },
      { name: "雨、青空（雨与青空）", duration: 207 }, { name: "白い残響（苍白残响）", duration: 251 }, { name: "涙の行方（泪的踪迹）", duration: 211 },
      { name: "虹を探して（寻找彩虹）", duration: 223 } ] },
    { name: "言葉だけ", type: "单曲", date: "2037-11-29", songs: [
      { name: "言葉だけ（只有言语）", duration: 383 } ] },
    { name: "長い霧", type: "EP", date: "2039-01-07", songs: [
      { name: "長い霧（漫长雾）", duration: 167 }, { name: "長い夜（漫长夜）", duration: 237 }, { name: "岸の向こう（岸的彼方）", duration: 188 } ] },
    { name: "川の向こう", type: "EP", date: "2040-01-01", songs: [
      { name: "川の向こう（河的彼方）", duration: 247 }, { name: "空、青空（天空与青空）", duration: 153 }, { name: "優しい記憶（温柔记忆）", duration: 245 },
      { name: "調べ、青空（曲调与青空）", duration: 217 }, { name: "深い雪（深邃雪）", duration: 222 }, { name: "雨音の向こう（雨声的彼方）", duration: 241 } ] },
    { name: "流星の行方", type: "专辑", date: "2040-10-26", songs: [
      { name: "流星の行方（流星的踪迹）", duration: 218 }, { name: "調べだけ（只有曲调）", duration: 224 }, { name: "音色を抱いて（拥抱音色）", duration: 361 },
      { name: "旋律を待つ（等待旋律）", duration: 223 }, { name: "夕焼けを待つ（等待晚霞）", duration: 255 }, { name: "小さな落ち葉（小小落叶）", duration: 186 },
      { name: "透明な波（透明波）", duration: 221 }, { name: "灯りだけ（只有灯火）", duration: 247 }, { name: "遠い流星（遥远流星）", duration: 246 },
      { name: "木漏れ日、夜（林间光斑与夜）", duration: 198 } ] },
    { name: "恋を抱いて", type: "专辑", date: "2041-11-16", songs: [
      { name: "恋を抱いて（拥抱恋）", duration: 191 }, { name: "湖に還る（回到湖）", duration: 237 }, { name: "浜まで（直到海滨）", duration: 210 },
      { name: "長い窓（漫长窗）", duration: 223 }, { name: "蝉を待つ（等待蝉）", duration: 234 }, { name: "蒼い星雲（苍蓝星云）", duration: 360 },
      { name: "新しい放課後（崭新放学后）", duration: 231 }, { name: "柔らかな微笑（柔软微笑）", duration: 224 }, { name: "雲を探して（寻找云）", duration: 243 },
      { name: "柔らかな記憶（柔软记忆）", duration: 190 } ] },
    { name: "旋律を抱いて", type: "专辑", date: "2042-10-19", songs: [
      { name: "旋律を抱いて（拥抱旋律）", duration: 246 }, { name: "音色の行方（音色的踪迹）", duration: 217 }, { name: "恋だけ（只有恋）", duration: 191 },
      { name: "微笑を探して（寻找微笑）", duration: 244 }, { name: "流星を探して（寻找流星）", duration: 154 }, { name: "恋、雪（恋与雪）", duration: 238 },
      { name: "夜を抱いて（拥抱夜）", duration: 219 }, { name: "暗い夜（昏暗夜）", duration: 236 }, { name: "長い制服（漫长制服）", duration: 253 } ] },
    { name: "想いの行方", type: "专辑", date: "2043-09-25", songs: [
      { name: "想いの行方（思念的踪迹）", duration: 162 }, { name: "岬まで（直到海角）", duration: 266 }, { name: "星雲が降る（星云飘落）", duration: 209 },
      { name: "島まで（直到岛）", duration: 430 }, { name: "月へ続く（通往月）", duration: 427 }, { name: "雪、岸（雪与岸）", duration: 198 },
      { name: "空まで（直到天空）", duration: 232 }, { name: "教室に還る（回到教室）", duration: 219 }, { name: "実に咲く（在果实绽放）", duration: 246 },
      { name: "空、水面（天空与水面）", duration: 217 } ] },
    { name: "静かな雨", type: "EP", date: "2044-10-08", songs: [
      { name: "静かな雨（静谧雨）", duration: 211 }, { name: "深い水面（深邃水面）", duration: 212 }, { name: "涙、葉（泪与叶）", duration: 238 },
      { name: "星を待つ（等待星）", duration: 427 } ] },
    { name: "湖、音色", type: "单曲", date: "2045-09-27", songs: [
      { name: "湖、音色（湖与音色）", duration: 264 } ] },
    { name: "泉に還る", type: "EP", date: "2046-09-13", songs: [
      { name: "泉に還る（回到泉）", duration: 141 }, { name: "月の行方（月的踪迹）", duration: 232 }, { name: "青空の向こう（青空的彼方）", duration: 234 } ] },
    { name: "落ち葉、響き", type: "EP", date: "2047-09-13", songs: [
      { name: "落ち葉、響き（落叶与回响）", duration: 131 }, { name: "海、葉（海与叶）", duration: 245 }, { name: "長い凪（漫长风平浪静）", duration: 261 },
      { name: "季節を待つ（等待季节）", duration: 174 } ] },
    { name: "黒板を越えて", type: "EP", date: "2048-09-11", songs: [
      { name: "黒板を越えて（越过黑板）", duration: 183 }, { name: "淡い夢（淡淡梦）", duration: 196 }, { name: "波、岬（波与海角）", duration: 210 },
      { name: "優しい響き（温柔回响）", duration: 254 }, { name: "静かな夕暮れ（静谧黄昏）", duration: 183 }, { name: "紅葉が降る（红叶飘落）", duration: 245 } ] },
    { name: "静かな岸", type: "单曲", date: "2049-08-09", songs: [
      { name: "静かな岸（静谧岸）", duration: 261 } ] },
    { name: "雲を待つ", type: "专辑", date: "2050-07-30", songs: [
      { name: "雲を待つ（等待云）", duration: 221 }, { name: "深い島（深邃岛）", duration: 212 }, { name: "小さな枝（小小枝）", duration: 181 },
      { name: "蒼い水面（苍蓝水面）", duration: 250 }, { name: "心の行方（心的踪迹）", duration: 383 }, { name: "明るい星（明亮星）", duration: 243 },
      { name: "蒼い岸（苍蓝岸）", duration: 246 }, { name: "蒼い空（苍蓝天空）", duration: 244 } ] },
    ],
  "ギヴン": [
    { name: "gift", type: "专辑", date: "2020-08-26", songs: [
       { name: "夜が明ける（天亮了）", duration: 281 }, { name: "へたくそ（笨拙）", duration: 188 },
       { name: "ステージから君に捧ぐ（从舞台献给你）", duration: 258 }, { name: "冬のはなし（冬天的故事）", duration: 208 },
       { name: "まるつけ（句号）", duration: 234 } ] },
    { name: "冬のはなし（冬天的故事）", type: "单曲", date: "2019-09-18", songs: [ { name: "冬のはなし（冬天的故事）", duration: 208 } ] },
    { name: "まるつけ（句号）", type: "单曲", date: "2019-12-25", songs: [ { name: "まるつけ（句号）", duration: 234 } ] },
    { name: "夜が明ける（天亮了）", type: "单曲", date: "2020-08-26", songs: [ { name: "夜が明ける（天亮了）", duration: 281 } ] },
    { name: "うらがわの存在（背面的存在）", type: "单曲", date: "2021-12-01", songs: [ { name: "うらがわの存在（背面的存在）", duration: 250 } ] },
      { name: "若葉、月光", type: "单曲", date: "2026-05-28", songs: [
      { name: "若葉、月光（新叶与月光）", duration: 188 } ] },
    { name: "星、霞", type: "单曲", date: "2027-07-07", songs: [
      { name: "星、霞（星与霞）", duration: 135 } ] },
    { name: "小さな記憶", type: "EP", date: "2028-05-11", songs: [
      { name: "小さな記憶（小小记忆）", duration: 242 }, { name: "夜、霧（夜与雾）", duration: 215 }, { name: "向日葵、唄（向日葵与歌谣）", duration: 252 },
      { name: "遠い卒業（遥远毕业）", duration: 221 }, { name: "夜、花（夜与花）", duration: 222 } ] },
    { name: "落ち葉、月光", type: "EP", date: "2029-06-19", songs: [
      { name: "落ち葉、月光（落叶与月光）", duration: 198 }, { name: "新しい縁側（崭新檐廊）", duration: 153 }, { name: "長い教室（漫长教室）", duration: 219 },
      { name: "雨、向日葵（雨与向日葵）", duration: 252 } ] },
    { name: "明るい歌", type: "单曲", date: "2030-03-30", songs: [
      { name: "明るい歌（明亮歌）", duration: 235 } ] },
    { name: "淡い暁", type: "EP", date: "2031-04-03", songs: [
      { name: "淡い暁（淡淡拂晓）", duration: 375 }, { name: "黄昏、恋（黄昏与恋）", duration: 240 }, { name: "岸、紅葉（岸与红叶）", duration: 235 },
      { name: "白い紅葉（苍白红叶）", duration: 273 }, { name: "唄、月（歌谣与月）", duration: 233 }, { name: "遠い星空（遥远星空）", duration: 245 } ] },
    { name: "滝を越えて", type: "单曲", date: "2032-03-29", songs: [
      { name: "滝を越えて（越过瀑布）", duration: 365 } ] },
    { name: "岸、星空", type: "EP", date: "2033-04-29", songs: [
      { name: "岸、星空（岸与星空）", duration: 261 }, { name: "調べ、涙（曲调与泪）", duration: 236 }, { name: "遠い銀河（遥远银河）", duration: 247 } ] },
    { name: "約束、微笑", type: "EP", date: "2034-04-11", songs: [
      { name: "約束、微笑（约定与微笑）", duration: 278 }, { name: "歌、霜（歌与霜）", duration: 220 }, { name: "眩しい春休み（耀眼春假）", duration: 247 },
      { name: "優しい詩（温柔诗）", duration: 214 }, { name: "夜明け、花（黎明与花）", duration: 197 }, { name: "古い旋律（陈旧旋律）", duration: 202 } ] },
    { name: "言葉、銀河", type: "专辑", date: "2035-01-19", songs: [
      { name: "言葉、銀河（言语与银河）", duration: 170 }, { name: "潮騒、響き（潮鸣与回响）", duration: 236 }, { name: "新しい微笑（崭新微笑）", duration: 424 },
      { name: "滝、満月（瀑布与满月）", duration: 252 }, { name: "微笑、唄（微笑与歌谣）", duration: 192 }, { name: "若葉が揺れる（新叶摇曳）", duration: 248 },
      { name: "淡い調べ（淡淡曲调）", duration: 262 }, { name: "泉、根（泉与根）", duration: 210 } ] },
    { name: "夕焼け、木漏れ日", type: "EP", date: "2035-12-27", songs: [
      { name: "夕焼け、木漏れ日（晚霞与林间光斑）", duration: 176 }, { name: "海辺、流星（海边与流星）", duration: 197 }, { name: "岬、落ち葉（海角与落叶）", duration: 257 },
      { name: "潮騒、三日月（潮鸣与新月）", duration: 155 }, { name: "淡い微笑（淡淡微笑）", duration: 319 } ] },
    { name: "静かな波", type: "单曲", date: "2037-01-10", songs: [
      { name: "静かな波（静谧波）", duration: 238 } ] },
    { name: "想い、星空", type: "专辑", date: "2038-01-21", songs: [
      { name: "想い、星空（思念与星空）", duration: 229 }, { name: "夜明け、桜（黎明与樱花）", duration: 231 }, { name: "夜風、青空（夜风与青空）", duration: 450 },
      { name: "実、葉（果实与叶）", duration: 256 }, { name: "霜、星空（霜与星空）", duration: 376 }, { name: "雪、霜（雪与霜）", duration: 262 },
      { name: "霧、浜（雾与海滨）", duration: 247 }, { name: "微笑、浜（微笑与海滨）", duration: 239 }, { name: "白い浴衣（苍白浴衣）", duration: 214 } ] },
    { name: "満月、星空", type: "专辑", date: "2039-01-21", songs: [
      { name: "満月、星空（满月与星空）", duration: 190 }, { name: "夜風、湖（夜风与湖）", duration: 142 }, { name: "枝、浜（枝与海滨）", duration: 266 },
      { name: "長い雪（漫长雪）", duration: 406 }, { name: "旋律、記憶（旋律与记忆）", duration: 225 }, { name: "心、微笑（心与微笑）", duration: 230 },
      { name: "満月を待つ（等待满月）", duration: 217 }, { name: "心、岸（心与岸）", duration: 245 }, { name: "遠い黒板（遥远黑板）", duration: 290 },
      { name: "霞、夜風（霞与夜风）", duration: 189 } ] },
    { name: "川、想い", type: "专辑", date: "2039-12-25", songs: [
      { name: "川、想い（河与思念）", duration: 169 }, { name: "枝、木漏れ日（枝与林间光斑）", duration: 249 }, { name: "枝、涙（枝与泪）", duration: 225 },
      { name: "蕾、若葉（花苞与新叶）", duration: 220 }, { name: "向日葵、川（向日葵与河）", duration: 238 }, { name: "滝、島（瀑布与岛）", duration: 205 },
      { name: "小さな詩（小小诗）", duration: 247 }, { name: "蒼い滝（苍蓝瀑布）", duration: 152 } ] },
    { name: "歌、海", type: "专辑", date: "2040-12-16", songs: [
      { name: "歌、海（歌与海）", duration: 238 }, { name: "古い微笑（陈旧微笑）", duration: 231 }, { name: "黄昏、岬（黄昏与海角）", duration: 223 },
      { name: "優しい想い（温柔思念）", duration: 234 }, { name: "桜、海（樱花与海）", duration: 240 }, { name: "微笑、星屑（微笑与星屑）", duration: 251 },
      { name: "水面、夜明け（水面与黎明）", duration: 247 }, { name: "小さな歌（小小歌）", duration: 248 }, { name: "銀河、恋（银河与恋）", duration: 240 },
      { name: "満月、雨音（满月与雨声）", duration: 218 }, { name: "調べ、滝（曲调与瀑布）", duration: 226 } ] },
    { name: "潮騒、夕焼け", type: "EP", date: "2041-11-07", songs: [
      { name: "潮騒、夕焼け（潮鸣与晚霞）", duration: 235 }, { name: "小さな心音（小小心跳）", duration: 137 }, { name: "実、流星（果实与流星）", duration: 206 } ] },
    { name: "花、滝", type: "EP", date: "2042-11-23", songs: [
      { name: "花、滝（花与瀑布）", duration: 224 }, { name: "銀河が降る（银河飘落）", duration: 244 }, { name: "落ち葉、霧（落叶与雾）", duration: 160 },
      { name: "虹、岬（彩虹与海角）", duration: 240 }, { name: "滝、月（瀑布与月）", duration: 188 } ] },
    { name: "静かな滝", type: "专辑", date: "2043-09-28", songs: [
      { name: "静かな滝（静谧瀑布）", duration: 222 }, { name: "眩しい夏休み（耀眼暑假）", duration: 232 }, { name: "古い心（陈旧心）", duration: 261 },
      { name: "浜を越えて（越过海滨）", duration: 238 }, { name: "音色、滝（音色与瀑布）", duration: 286 }, { name: "蕾、恋（花苞与恋）", duration: 217 },
      { name: "氷、約束（冰与约定）", duration: 243 }, { name: "夕暮れ、氷（黄昏与冰）", duration: 263 }, { name: "花、島（花与岛）", duration: 251 },
      { name: "暁、向日葵（拂晓与向日葵）", duration: 369 }, { name: "淡い流星（淡淡流星）", duration: 241 } ] },
    { name: "夜明け、流星", type: "EP", date: "2044-09-21", songs: [
      { name: "夜明け、流星（黎明与流星）", duration: 222 }, { name: "白い時（苍白时光）", duration: 443 }, { name: "三日月が揺れる（新月摇曳）", duration: 222 },
      { name: "島、詩（岛与诗）", duration: 239 }, { name: "静かな川（静谧河）", duration: 242 }, { name: "蕾、紅葉（花苞与红叶）", duration: 217 } ] },
    { name: "流星、三日月", type: "EP", date: "2045-08-26", songs: [
      { name: "流星、三日月（流星与新月）", duration: 226 }, { name: "紅葉、想い（红叶与思念）", duration: 245 }, { name: "黄昏、銀河（黄昏与银河）", duration: 200 } ] },
    { name: "湖、雪", type: "单曲", date: "2046-07-26", songs: [
      { name: "湖、雪（湖与雪）", duration: 260 } ] },
    { name: "心音、雪", type: "EP", date: "2047-07-08", songs: [
      { name: "心音、雪（心跳与雪）", duration: 142 }, { name: "雨、月（雨与月）", duration: 192 }, { name: "白い冬晴れ（苍白冬日晴空）", duration: 230 } ] },
    { name: "音色、蕾", type: "单曲", date: "2048-08-24", songs: [
      { name: "音色、蕾（音色与花苞）", duration: 256 } ] },
    { name: "桜、霜", type: "专辑", date: "2049-07-19", songs: [
      { name: "桜、霜（樱花与霜）", duration: 259 }, { name: "泉、夜明け（泉与黎明）", duration: 217 }, { name: "青空、川（青空与河）", duration: 230 },
      { name: "川、凪（河与风平浪静）", duration: 271 }, { name: "眩しい残響（耀眼残响）", duration: 227 }, { name: "蕾、葉（花苞与叶）", duration: 219 },
      { name: "遠い調べ（遥远曲调）", duration: 246 }, { name: "眩しい銀河（耀眼银河）", duration: 251 }, { name: "月、旋律（月与旋律）", duration: 222 } ] },
    { name: "三日月、凪", type: "专辑", date: "2050-07-31", songs: [
      { name: "三日月、凪（新月与风平浪静）", duration: 356 }, { name: "岬、月（海角与月）", duration: 367 }, { name: "雲が揺れる（云摇曳）", duration: 216 },
      { name: "泉、岸（泉与岸）", duration: 202 }, { name: "遠い空（遥远天空）", duration: 188 }, { name: "島、恋（岛与恋）", duration: 227 },
      { name: "落ち葉、花（落叶与花）", duration: 189 } ] },
    ],
  "トゲナシトゲアリ": [
    { name: "棘アリ（有刺）", type: "专辑", date: "2024-04-24", songs: [
       { name: "名もなき何もかも（无名的万物）", duration: 214 }, { name: "偽りの理（虚伪的道理）", duration: 200 },
       { name: "気鬱、白濁す（郁结、浑浊）", duration: 206 }, { name: "理想的パラドクスとは（所谓理想的惖论）", duration: 210 },
       { name: "爆ぜて咲く（绽裂盛开）", duration: 212 }, { name: "黎明を穿つ（刺穿黎明）", duration: 220 },
       { name: "極私的極彩色アンサー（极私的极彩色答案）", duration: 205 }, { name: "傷つき傷つけ痛くて辛い（伤与被伤 痛又苦）", duration: 216 },
       { name: "運命に賭けたい論理（想以命运为赌注的道理）", duration: 208 }, { name: "サヨナラサヨナラサヨナラ（再见 再见 再见）", duration: 225 } ] },
    { name: "棘ナシ（无刺）", type: "专辑", date: "2024-08-28", songs: [
       { name: "雑踏、僕らの街（喧嚣、我们的街）", duration: 230 }, { name: "誰にもなれない私だから（因为我是谁都成为不了的我）", duration: 226 },
       { name: "空の箱（空之箱）", duration: 240 }, { name: "声なき魚（无声之鱼）", duration: 235 },
       { name: "視界の隅 朽ちる音（视野一隅 腐朽之音）", duration: 222 }, { name: "心象的フラクタル（心象的分形）", duration: 218 },
       { name: "空白とカタルシス（空白与宣泄）", duration: 228 }, { name: "運命の華（命运之花）", duration: 232 },
       { name: "ETERNAL FLAME 〜空の箱〜（永恒之火～空之箱～）", duration: 245 }, { name: "闇に溶けてく（溶入黑暗）", duration: 224 } ] },
    { name: "名もなき何もかも（无名的万物）", type: "单曲", date: "2023-07-26", songs: [ { name: "名もなき何もかも（无名的万物）", duration: 214 } ] },
    { name: "気鬱、白濁す（郁结、浑浊）", type: "单曲", date: "2023-08-30", songs: [ { name: "気鬱、白濁す（郁结、浑浊）", duration: 206 } ] },
    { name: "爆ぜて咲く（绽裂盛开）", type: "单曲", date: "2023-10-25", songs: [ { name: "爆ぜて咲く（绽裂盛开）", duration: 212 } ] },
    { name: "極私的極彩色アンサー（极私的极彩色答案）", type: "单曲", date: "2023-12-20", songs: [ { name: "極私的極彩色アンサー（极私的极彩色答案）", duration: 205 } ] },
    { name: "運命に賭けたい論理（想以命运为赌注的道理）", type: "单曲", date: "2024-02-28", songs: [ { name: "運命に賭けたい論理（想以命运为赌注的道理）", duration: 208 } ] },
    { name: "雑踏、僕らの街（喧嚣、我们的街）", type: "单曲", date: "2024-05-22", songs: [ { name: "雑踏、僕らの街（喧嚣、我们的街）", duration: 230 } ] },
    { name: "誰にもなれない私だから（因为我是谁都成为不了的我）", type: "单曲", date: "2024-05-22", songs: [ { name: "誰にもなれない私だから（因为我是谁都成为不了的我）", duration: 226 } ] },
    { name: "視界の隅 朽ちる音（视野一隅 腐朽之音）", type: "单曲", date: "2024-06-19", songs: [ { name: "視界の隅 朽ちる音（视野一隅 腐朽之音）", duration: 222 } ] },
    { name: "空白とカタルシス（空白与宣泄）", type: "单曲", date: "2024-07-10", songs: [ { name: "空白とカタルシス（空白与宣泄）", duration: 228 } ] },
    { name: "ダレモ（谁）", type: "单曲", date: "2025-05-28", songs: [ { name: "ダレモ（谁）", duration: 218 } ] },
    { name: "薄采ディスプレイ（淡彩显示屏）", type: "单曲", date: "2025-09-24", songs: [ { name: "薄采ディスプレイ（淡彩显示屏）", duration: 220 } ] },
    { name: "小指立てませんか（要立小指吗）", type: "EP", date: "2025-11-19", songs: [
       { name: "碧いif（蔚蓝的 if）", duration: 215 }, { name: "無知のち私（无知之后的我）", duration: 208 },
       { name: "渇く、憂う（干渴、忧愁）", duration: 212 }, { name: "吹き消した灯火（吹灭的灯火）", duration: 205 },
       { name: "生きて生きてゆく（活下去 活下去）", duration: 220 }, { name: "臆病な白夜（胆小的白夜）", duration: 218 }, { name: "最期の禱り（最后的祈祷）", duration: 230 } ] },
    { name: "全部をさらして生きてやる（豁出一切活下去）", type: "EP", date: "2025-12-17", songs: [
       { name: "もう何もいらない未来（什么都不再需要的未来）", duration: 226 }, { name: "命をくれよ（把命给我）", duration: 222 },
       { name: "arrow", duration: 218 }, { name: "薊の薔薇（薊之蔷薇）", duration: 228 } ] },
      { name: "月、黄昏", type: "EP", date: "2026-11-19", songs: [
      { name: "月、黄昏（月与黄昏）", duration: 258 }, { name: "約束、夕焼け（约定与晚霞）", duration: 232 }, { name: "柔らかな心（柔软心）", duration: 223 },
      { name: "夕暮れ、蕾（黄昏与花苞）", duration: 217 }, { name: "月光、夜（月光与夜）", duration: 194 }, { name: "海、波（海与波）", duration: 203 } ] },
    { name: "想いを待つ", type: "EP", date: "2027-11-13", songs: [
      { name: "想いを待つ（等待思念）", duration: 228 }, { name: "月、岸（月与岸）", duration: 179 }, { name: "唄、霧（歌谣与雾）", duration: 244 },
      { name: "眩しい空（耀眼天空）", duration: 251 }, { name: "新しい卒業（崭新毕业）", duration: 216 }, { name: "遠い障子（遥远障子）", duration: 209 } ] },
    { name: "音色、雪", type: "单曲", date: "2028-11-24", songs: [
      { name: "音色、雪（音色与雪）", duration: 201 } ] },
    { name: "青空、枝", type: "EP", date: "2029-08-30", songs: [
      { name: "青空、枝（青空与枝）", duration: 200 }, { name: "青空、雨（青空与雨）", duration: 222 }, { name: "夜明け、氷（黎明与冰）", duration: 202 } ] },
    { name: "落ち葉、木漏れ日", type: "EP", date: "2030-08-05", songs: [
      { name: "落ち葉、木漏れ日（落叶与林间光斑）", duration: 218 }, { name: "旋律、三日月（旋律与新月）", duration: 202 }, { name: "岸、葉（岸与叶）", duration: 153 } ] },
    { name: "柔らかな恋", type: "EP", date: "2031-08-03", songs: [
      { name: "柔らかな恋（柔软恋）", duration: 213 }, { name: "旋律、葉（旋律与叶）", duration: 200 }, { name: "雪、葉（雪与叶）", duration: 157 },
      { name: "響き、花（回响与花）", duration: 239 } ] },
    { name: "霜、葉", type: "专辑", date: "2032-07-05", songs: [
      { name: "霜、葉（霜与叶）", duration: 239 }, { name: "静かな泉（静谧泉）", duration: 260 }, { name: "湖、桜（湖与樱花）", duration: 224 },
      { name: "銀河、微笑（银河与微笑）", duration: 211 }, { name: "音色、三日月（音色与新月）", duration: 224 }, { name: "根、満月（根与满月）", duration: 250 },
      { name: "記憶を探して（寻找记忆）", duration: 209 }, { name: "滝、涙（瀑布与泪）", duration: 213 }, { name: "葉、海辺（叶与海边）", duration: 231 },
      { name: "朝焼け、月光（朝霞与月光）", duration: 241 } ] },
    { name: "月、氷", type: "专辑", date: "2033-07-01", songs: [
      { name: "月、氷（月与冰）", duration: 218 }, { name: "歌、音色（歌与音色）", duration: 172 }, { name: "心を抱いて（拥抱心）", duration: 243 },
      { name: "蕾、向日葵（花苞与向日葵）", duration: 231 }, { name: "心音を待つ（等待心跳）", duration: 207 }, { name: "月、心音（月与心跳）", duration: 207 },
      { name: "心音よ（心跳啊）", duration: 257 }, { name: "透明な浜（透明海滨）", duration: 237 }, { name: "流星、記憶（流星与记忆）", duration: 309 },
      { name: "根、雨（根与雨）", duration: 230 }, { name: "霜、落ち葉（霜与落叶）", duration: 202 } ] },
    { name: "新しい教室", type: "EP", date: "2034-05-12", songs: [
      { name: "新しい教室（崭新教室）", duration: 198 }, { name: "歌、浜（歌与海滨）", duration: 286 }, { name: "言葉、音色（言语与音色）", duration: 156 },
      { name: "恋、音色（恋与音色）", duration: 358 }, { name: "遠い星雲（遥远星云）", duration: 208 }, { name: "朝焼け、黄昏（朝霞与黄昏）", duration: 212 } ] },
    { name: "根、夕暮れ", type: "专辑", date: "2035-06-17", songs: [
      { name: "根、夕暮れ（根与黄昏）", duration: 225 }, { name: "落ち葉、黄昏（落叶与黄昏）", duration: 215 }, { name: "調べ、記憶（曲调与记忆）", duration: 229 },
      { name: "白い月（苍白月）", duration: 172 }, { name: "眩しい灯り（耀眼灯火）", duration: 206 }, { name: "深い月光（深邃月光）", duration: 179 },
      { name: "青空、夜風（青空与夜风）", duration: 223 }, { name: "心音、調べ（心跳与曲调）", duration: 157 }, { name: "約束、記憶（约定与记忆）", duration: 237 } ] },
    { name: "海、夜", type: "单曲", date: "2036-04-15", songs: [
      { name: "海、夜（海与夜）", duration: 199 } ] },
    { name: "流星、月光", type: "EP", date: "2037-03-17", songs: [
      { name: "流星、月光（流星与月光）", duration: 197 }, { name: "白い冬休み（苍白寒假）", duration: 294 }, { name: "滝、空（瀑布与天空）", duration: 214 },
      { name: "川、三日月（河与新月）", duration: 241 } ] },
    { name: "紅葉、夕焼け", type: "EP", date: "2038-03-12", songs: [
      { name: "紅葉、夕焼け（红叶与晚霞）", duration: 255 }, { name: "葉、潮騒（叶与潮鸣）", duration: 202 }, { name: "満月、泉（满月与泉）", duration: 154 },
      { name: "満月、夕暮れ（满月与黄昏）", duration: 150 }, { name: "記憶、三日月（记忆与新月）", duration: 146 } ] },
    { name: "星空、約束", type: "EP", date: "2039-02-11", songs: [
      { name: "星空、約束（星空与约定）", duration: 409 }, { name: "浜、三日月（海滨与新月）", duration: 220 }, { name: "流星が降る（流星飘落）", duration: 224 },
      { name: "蕾、流星（花苞与流星）", duration: 213 } ] },
    { name: "眩しい暁", type: "EP", date: "2040-03-28", songs: [
      { name: "眩しい暁（耀眼拂晓）", duration: 223 }, { name: "小さな旋律（小小旋律）", duration: 236 }, { name: "三日月、海（新月与海）", duration: 241 },
      { name: "遠い修学旅行（遥远修学旅行）", duration: 194 }, { name: "白い花火（苍白花火）", duration: 211 }, { name: "静かな夜（静谧夜）", duration: 234 } ] },
    { name: "新しい畳", type: "单曲", date: "2041-02-09", songs: [
      { name: "新しい畳（崭新榻榻米）", duration: 225 } ] },
    { name: "眩しい花火", type: "EP", date: "2041-12-15", songs: [
      { name: "眩しい花火（耀眼花火）", duration: 251 }, { name: "潮騒、向日葵（潮鸣与向日葵）", duration: 213 }, { name: "蒼い青空（苍蓝青空）", duration: 231 },
      { name: "虹、雨（彩虹与雨）", duration: 365 }, { name: "雨、夜風（雨与夜风）", duration: 203 } ] },
    { name: "響き、桜", type: "EP", date: "2042-11-17", songs: [
      { name: "響き、桜（回响与樱花）", duration: 245 }, { name: "浜、旋律（海滨与旋律）", duration: 209 }, { name: "涙、月光（泪与月光）", duration: 139 } ] },
    { name: "枝、霜", type: "单曲", date: "2043-10-26", songs: [
      { name: "枝、霜（枝与霜）", duration: 189 } ] },
    { name: "海辺、浜", type: "EP", date: "2044-10-31", songs: [
      { name: "海辺、浜（海边与海滨）", duration: 211 }, { name: "滝、恋（瀑布与恋）", duration: 201 }, { name: "雨、川（雨与河）", duration: 165 } ] },
    { name: "湖、葉", type: "单曲", date: "2045-09-10", songs: [
      { name: "湖、葉（湖与叶）", duration: 205 } ] },
    { name: "若葉、川", type: "专辑", date: "2046-08-31", songs: [
      { name: "若葉、川（新叶与河）", duration: 221 }, { name: "霜、若葉（霜与新叶）", duration: 220 }, { name: "歌、夕暮れ（歌与黄昏）", duration: 233 },
      { name: "若葉、波（新叶与波）", duration: 177 }, { name: "夕暮れ、月（黄昏与月）", duration: 198 }, { name: "若葉、微笑（新叶与微笑）", duration: 200 },
      { name: "流星、心音（流星与心跳）", duration: 346 }, { name: "木漏れ日、黄昏（林间光斑与黄昏）", duration: 222 } ] },
    { name: "微笑、根", type: "单曲", date: "2047-08-05", songs: [
      { name: "微笑、根（微笑与根）", duration: 255 } ] },
    { name: "水面、暁", type: "专辑", date: "2048-09-08", songs: [
      { name: "水面、暁（水面与拂晓）", duration: 265 }, { name: "星、夜風（星与夜风）", duration: 202 }, { name: "月、月光（月与月光）", duration: 205 },
      { name: "深い夕暮れ（深邃黄昏）", duration: 211 }, { name: "微笑、黄昏（微笑与黄昏）", duration: 377 }, { name: "木漏れ日、銀河（林间光斑与银河）", duration: 175 },
      { name: "氷、凪（冰与风平浪静）", duration: 241 }, { name: "旋律、潮騒（旋律与潮鸣）", duration: 250 }, { name: "根、氷（根与冰）", duration: 225 },
      { name: "落ち葉、言葉（落叶与言语）", duration: 217 } ] },
    { name: "潮騒、夢", type: "专辑", date: "2049-07-04", songs: [
      { name: "潮騒、夢（潮鸣与梦）", duration: 210 }, { name: "三日月よ（新月啊）", duration: 178 }, { name: "根、紅葉（根与红叶）", duration: 224 },
      { name: "潮騒、銀河（潮鸣与银河）", duration: 201 }, { name: "凪、雲（风平浪静与云）", duration: 191 }, { name: "唄、夜風（歌谣与夜风）", duration: 181 },
      { name: "古い修学旅行（陈旧修学旅行）", duration: 231 } ] },
    { name: "古い卒業", type: "EP", date: "2050-06-17", songs: [
      { name: "古い卒業（陈旧毕业）", duration: 241 }, { name: "泉、星屑（泉与星屑）", duration: 233 }, { name: "向日葵、想い（向日葵与思念）", duration: 201 },
      { name: "海、岬（海与海角）", duration: 223 }, { name: "星空、葉（星空与叶）", duration: 224 } ] },
    ],
  "Black Stones": [
    { name: "BLAST", type: "专辑", date: "2006-06-21", songs: [
       { name: "Rose", duration: 240 }, { name: "黒い涙（黑色的泪）", duration: 265 },
       { name: "Zero", duration: 210 }, { name: "Lucy", duration: 225 }, { name: "Shadow of the Sun", duration: 250 } ] },
    { name: "Rose", type: "单曲", date: "2006-01-01", songs: [ { name: "Rose", duration: 240 } ] },
    { name: "黒い涙（黑色的泪）", type: "单曲", date: "2006-03-22", songs: [ { name: "黒い涙（黑色的泪）", duration: 265 } ] },
      { name: "Valley Shore", type: "专辑", date: "2026-06-25", songs: [
      { name: "Valley Shore（山谷的岸边）", duration: 241 }, { name: "Slope Dusk（斜坡的薄暮）", duration: 241 }, { name: "Kite Nest（风筝的巢）", duration: 147 },
      { name: "Vapor Pulse（雾霭的脉冲）", duration: 459 }, { name: "Halo Silence（光晕的沉寂）", duration: 347 }, { name: "Faded Ivory（褪色的象牙）", duration: 256 },
      { name: "Canvas Signal（画布的信号）", duration: 166 }, { name: "Salt Stream（盐的溪流）", duration: 221 } ] },
    { name: "Lantern Broken", type: "EP", date: "2027-06-16", songs: [
      { name: "Lantern Broken（灯笼的破碎）", duration: 219 }, { name: "Motion Nightfall（律动的夜幕）", duration: 238 }, { name: "Marrow Undertow（骨髓的暗流）", duration: 236 } ] },
    { name: "Meadow Blossom", type: "专辑", date: "2028-06-23", songs: [
      { name: "Meadow Blossom（草地的花开）", duration: 231 }, { name: "Loam Shallow（沃土的浅滩）", duration: 229 }, { name: "Moss Sea（青苔的海）", duration: 245 },
      { name: "Stone Daylight（石头的日光）", duration: 246 }, { name: "Crystal Flood（水晶的洪流）", duration: 250 }, { name: "Steam Nightfall（蒸汽的夜幕）", duration: 238 },
      { name: "Winter Quartz（冬天的石英）", duration: 200 }, { name: "Dust Haze（尘埃的轻雾）", duration: 258 } ] },
    { name: "Compass Ashes", type: "专辑", date: "2029-06-06", songs: [
      { name: "Compass Ashes（罗盘的灰烬）", duration: 234 }, { name: "Blossom Song（花开的歌）", duration: 263 }, { name: "Vine Thaw（藤蔓的融雪）", duration: 226 },
      { name: "Moon Ivory（月亮的象牙）", duration: 264 }, { name: "Static Orbit（静电的轨道）", duration: 242 }, { name: "Wires Neon（电线的霓虹）", duration: 248 },
      { name: "Journey Golden（旅程的金色）", duration: 401 }, { name: "Iron Spark（铁的火花）", duration: 234 } ] },
    { name: "Flood Motion", type: "专辑", date: "2030-03-25", songs: [
      { name: "Flood Motion（洪流的律动）", duration: 256 }, { name: "Flood Thunder（洪流的雷）", duration: 224 }, { name: "Harbor Shadow（港湾的影子）", duration: 208 },
      { name: "Diamond Breeze（钻石的微风）", duration: 243 }, { name: "Heart Velvet（心的天鹅绒）", duration: 227 }, { name: "Tide Sky（潮汐的天空）", duration: 249 },
      { name: "Rust Midnight（锈迹的午夜）", duration: 231 }, { name: "Sand Broken（沙的破碎）", duration: 253 }, { name: "Nest Halo（巢的光晕）", duration: 289 } ] },
    { name: "Wind Neon", type: "单曲", date: "2031-05-13", songs: [
      { name: "Wind Neon（风的霓虹）", duration: 234 } ] },
    { name: "Amber Thunder", type: "单曲", date: "2032-02-17", songs: [
      { name: "Amber Thunder（琥珀的雷）", duration: 439 } ] },
    { name: "Silence Spark", type: "EP", date: "2033-04-15", songs: [
      { name: "Silence Spark（沉寂的火花）", duration: 288 }, { name: "Shore Gravel（岸边的砾石）", duration: 252 }, { name: "Veil Snow（帷幕的雪）", duration: 231 },
      { name: "Quartz Sundown（石英的日落）", duration: 236 } ] },
    { name: "Journey Window", type: "专辑", date: "2034-04-12", songs: [
      { name: "Journey Window（旅程的窗）", duration: 249 }, { name: "Sundown Cliff（日落的断崖）", duration: 231 }, { name: "Thunder Lake（雷的湖）", duration: 388 },
      { name: "Velvet Silver（天鹅绒的银色）", duration: 290 }, { name: "Star Signal（星的信号）", duration: 248 }, { name: "Mist Pebble（薄雾的卵石）", duration: 204 },
      { name: "Tide Whisper（潮汐的低语）", duration: 215 }, { name: "Flood Wood（洪流的树林）", duration: 257 }, { name: "Bloom Sun（绽放的太阳）", duration: 219 },
      { name: "Canvas Fleet（画布的舰队）", duration: 251 }, { name: "Flame Heart（火焰的心）", duration: 218 } ] },
    { name: "Plain Daylight", type: "专辑", date: "2035-03-03", songs: [
      { name: "Plain Daylight（平原的日光）", duration: 191 }, { name: "Void Wish（虚空的愿望）", duration: 227 }, { name: "Anchor Wires（锚的电线）", duration: 221 },
      { name: "Dusk Sea（薄暮的海）", duration: 243 }, { name: "Steam Harbor（蒸汽的港湾）", duration: 222 }, { name: "Desert Glass（荒原的玻璃）", duration: 238 },
      { name: "Blanket River（绒毯的河流）", duration: 268 }, { name: "Quartz Broken（石英的破碎）", duration: 253 }, { name: "Wires Path（电线的小径）", duration: 246 } ] },
    { name: "Moon Crescent", type: "专辑", date: "2036-03-12", songs: [
      { name: "Moon Crescent（月亮的新月）", duration: 229 }, { name: "Ashes Hollow（灰烬的空洞）", duration: 228 }, { name: "Harbor Cinder（港湾的炭烬）", duration: 292 },
      { name: "Cloud Blanket（云的绒毯）", duration: 288 }, { name: "Echo Lantern（回声的灯笼）", duration: 226 }, { name: "Breeze Blossom（微风的花开）", duration: 319 },
      { name: "Plain Satellite（平原的卫星）", duration: 233 }, { name: "Journey Valley（旅程的山谷）", duration: 246 } ] },
    { name: "Void Song", type: "专辑", date: "2037-03-01", songs: [
      { name: "Void Song（虚空的歌）", duration: 241 }, { name: "Storm Paperplane（风暴的纸飞机）", duration: 262 }, { name: "Garden Mirrors（花园的镜子）", duration: 210 },
      { name: "Vine Asphalt（藤蔓的柏油）", duration: 241 }, { name: "Pebble Iron（卵石的铁）", duration: 266 }, { name: "Fleet Thaw（舰队的融雪）", duration: 261 },
      { name: "Thaw Fable（融雪的寓言）", duration: 197 } ] },
    { name: "Smoke Halo", type: "EP", date: "2037-12-22", songs: [
      { name: "Smoke Halo（烟雾的光晕）", duration: 197 }, { name: "Sea Canvas（海的画布）", duration: 228 }, { name: "Fleet Shell（舰队的贝壳）", duration: 270 },
      { name: "Sundown Wave（日落的波浪）", duration: 230 }, { name: "Meridian Bloom（子午线的绽放）", duration: 242 } ] },
    { name: "Ember Nest", type: "专辑", date: "2038-11-13", songs: [
      { name: "Ember Nest（余烬的巢）", duration: 220 }, { name: "Ridge Moon（山脊的月亮）", duration: 266 }, { name: "Leaf Shell（叶的贝壳）", duration: 247 },
      { name: "Star Stream（星的溪流）", duration: 288 }, { name: "Silence Glow（沉寂的辉光）", duration: 223 }, { name: "Plain Drift（平原的漂流）", duration: 259 },
      { name: "Petal Glass（花瓣的玻璃）", duration: 235 }, { name: "Motel Mirrors（汽车旅馆的镜子）", duration: 260 }, { name: "Quiet Lake（寂静的湖）", duration: 244 },
      { name: "Dust Garden（尘埃的花园）", duration: 242 }, { name: "Signal Sand（信号的沙）", duration: 220 } ] },
    { name: "Highway Glimmer", type: "专辑", date: "2039-11-19", songs: [
      { name: "Highway Glimmer（公路的微光）", duration: 159 }, { name: "River Veil（河流的帷幕）", duration: 192 }, { name: "Hollow Pond（空洞的池塘）", duration: 193 },
      { name: "Wires Pond（电线的池塘）", duration: 246 }, { name: "Rust Fleet（锈迹的舰队）", duration: 223 }, { name: "Iron Pine（铁的松）", duration: 235 },
      { name: "Ice Undertow（冰的暗流）", duration: 232 }, { name: "Rust Moss（锈迹的青苔）", duration: 220 }, { name: "Forest Signal（森林的信号）", duration: 216 },
      { name: "Velvet Meridian（天鹅绒的子午线）", duration: 223 } ] },
    { name: "Cloud Cliff", type: "单曲", date: "2040-10-19", songs: [
      { name: "Cloud Cliff（云的断崖）", duration: 251 } ] },
    { name: "Carousel Wish", type: "EP", date: "2041-10-15", songs: [
      { name: "Carousel Wish（旋转木马的愿望）", duration: 264 }, { name: "Leaf Frost（叶的霜）", duration: 224 }, { name: "Winter Beacon（冬天的灯塔）", duration: 252 },
      { name: "Roof Static（屋顶的静电）", duration: 258 }, { name: "Gravel Veil（砾石的帷幕）", duration: 183 } ] },
    { name: "Roof Paperplane", type: "EP", date: "2042-10-04", songs: [
      { name: "Roof Paperplane（屋顶的纸飞机）", duration: 174 }, { name: "Feather Wind（羽毛的风）", duration: 242 }, { name: "Stone Slope（石头的斜坡）", duration: 255 },
      { name: "Daybreak Spark（黎明的火花）", duration: 231 } ] },
    { name: "Sand Roof", type: "EP", date: "2043-10-25", songs: [
      { name: "Sand Roof（沙的屋顶）", duration: 198 }, { name: "Valley Trail（山谷的足迹）", duration: 229 }, { name: "Halo Song（光晕的歌）", duration: 284 },
      { name: "Anchor Journey（锚的旅程）", duration: 170 }, { name: "Veil Stone（帷幕的石头）", duration: 203 } ] },
    { name: "Wood Veil", type: "专辑", date: "2044-08-31", songs: [
      { name: "Wood Veil（树林的帷幕）", duration: 225 }, { name: "Moon Undertow（月亮的暗流）", duration: 261 }, { name: "Path Lantern（小径的灯笼）", duration: 222 },
      { name: "Anchor Blossom（锚的花开）", duration: 220 }, { name: "Desert Stone（荒原的石头）", duration: 249 }, { name: "Overcast Void（阴云的虚空）", duration: 263 },
      { name: "Quartz Satellite（石英的卫星）", duration: 240 }, { name: "Glass Cinder（玻璃的炭烬）", duration: 193 }, { name: "Neon Dusk（霓虹的薄暮）", duration: 236 } ] },
    { name: "Ridge Coral", type: "专辑", date: "2045-10-29", songs: [
      { name: "Ridge Coral（山脊的珊瑚）", duration: 240 }, { name: "Midnight Fable（午夜的寓言）", duration: 190 }, { name: "Winter Journey（冬天的旅程）", duration: 235 },
      { name: "Salt Drift（盐的漂流）", duration: 240 }, { name: "Steam Faded（蒸汽的褪色）", duration: 242 }, { name: "Sundown Stone（日落的石头）", duration: 147 },
      { name: "Hill Steam（山丘的蒸汽）", duration: 243 }, { name: "Coral Desert（珊瑚的荒原）", duration: 230 } ] },
    { name: "Flame Daybreak", type: "EP", date: "2046-09-10", songs: [
      { name: "Flame Daybreak（火焰的黎明）", duration: 226 }, { name: "Marrow Crescent（骨髓的新月）", duration: 255 }, { name: "Breeze River（微风的河流）", duration: 221 },
      { name: "Pebble Steam（卵石的蒸汽）", duration: 247 } ] },
    { name: "Lake Orbit", type: "专辑", date: "2047-07-12", songs: [
      { name: "Lake Orbit（湖的轨道）", duration: 188 }, { name: "Ivory Roof（象牙的屋顶）", duration: 263 }, { name: "Wood Glow（树林的辉光）", duration: 261 },
      { name: "Faded Plain（褪色的平原）", duration: 256 }, { name: "Frost Gravel（霜的砾石）", duration: 238 }, { name: "Bloom Mirrors（绽放的镜子）", duration: 220 },
      { name: "Path Haze（小径的轻雾）", duration: 198 }, { name: "Slope Diamond（斜坡的钻石）", duration: 195 }, { name: "Whisper Asphalt（低语的柏油）", duration: 260 },
      { name: "Ridge Halo（山脊的光晕）", duration: 371 } ] },
    { name: "Golden Winter", type: "EP", date: "2048-07-29", songs: [
      { name: "Golden Winter（金色的冬天）", duration: 228 }, { name: "Dusk Lantern（薄暮的灯笼）", duration: 257 }, { name: "Overcast Field（阴云的原野）", duration: 241 },
      { name: "Blossom Plain（花开的平原）", duration: 219 }, { name: "Quiet Star（寂静的星）", duration: 230 } ] },
    { name: "Meridian Tower", type: "专辑", date: "2049-08-20", songs: [
      { name: "Meridian Tower（子午线的塔）", duration: 222 }, { name: "Silence Gravel（沉寂的砾石）", duration: 242 }, { name: "Compass Void（罗盘的虚空）", duration: 231 },
      { name: "Harbor Glass（港湾的玻璃）", duration: 239 }, { name: "Circle Quiet（圆圈的寂静）", duration: 221 }, { name: "Glass Concrete（玻璃的水泥）", duration: 241 },
      { name: "Ice Tower（冰的塔）", duration: 267 }, { name: "Star Highway（星的公路）", duration: 248 } ] },
    { name: "Shore Flame", type: "专辑", date: "2050-07-05", songs: [
      { name: "Shore Flame（岸边的火焰）", duration: 247 }, { name: "Quiet Compass（寂静的罗盘）", duration: 234 }, { name: "Tree Ocean（树的海洋）", duration: 224 },
      { name: "Rain Whisper（雨的低语）", duration: 156 }, { name: "Veil Breeze（帷幕的微风）", duration: 223 }, { name: "Motion Glass（律动的玻璃）", duration: 263 },
      { name: "Ice Mirrors（冰的镜子）", duration: 257 } ] },
    ],
  "Trapnest": [
    { name: "Trapnest", type: "专辑", date: "2005-11-16", songs: [
       { name: "Glamorous Sky", duration: 258 }, { name: "Trust", duration: 235 },
       { name: "Wish", duration: 240 }, { name: "Starless Night", duration: 250 }, { name: "Let's Dance", duration: 220 } ] },
    { name: "Glamorous Sky", type: "单曲", date: "2005-09-07", songs: [ { name: "Glamorous Sky", duration: 258 } ] },
      { name: "Stream Mirrors", type: "EP", date: "2026-05-20", songs: [
      { name: "Stream Mirrors（溪流的镜子）", duration: 224 }, { name: "Thunder Paperplane（雷的纸飞机）", duration: 224 }, { name: "Storm Void（风暴的虚空）", duration: 198 },
      { name: "Vapor Daybreak（雾霭的黎明）", duration: 248 }, { name: "Tower Crescent（塔的新月）", duration: 150 }, { name: "Flame Ballet（火焰的芭蕾）", duration: 285 } ] },
    { name: "Moon Roof", type: "专辑", date: "2027-06-07", songs: [
      { name: "Moon Roof（月亮的屋顶）", duration: 236 }, { name: "Canvas Leaf（画布的叶）", duration: 244 }, { name: "Winter Wind（冬天的风）", duration: 266 },
      { name: "Sky Dusk（天空的薄暮）", duration: 266 }, { name: "Sand Drift（沙的漂流）", duration: 259 }, { name: "Crystal Overcast（水晶的阴云）", duration: 259 },
      { name: "Frost Drift（霜的漂流）", duration: 220 }, { name: "Circle Daybreak（圆圈的黎明）", duration: 231 }, { name: "Stream Shallow（溪流的浅滩）", duration: 227 },
      { name: "Thunder Shallow（雷的浅滩）", duration: 237 }, { name: "Ice Silence（冰的沉寂）", duration: 285 } ] },
    { name: "Slope Meadow", type: "EP", date: "2028-06-22", songs: [
      { name: "Slope Meadow（斜坡的草地）", duration: 204 }, { name: "Sun Shallow（太阳的浅滩）", duration: 332 }, { name: "Motel Paperplane（汽车旅馆的纸飞机）", duration: 214 },
      { name: "Frost Lake（霜的湖）", duration: 191 }, { name: "Faded Tree（褪色的树）", duration: 202 }, { name: "Sky Quiet（天空的寂静）", duration: 145 } ] },
    { name: "Midnight Flood", type: "专辑", date: "2029-04-10", songs: [
      { name: "Midnight Flood（午夜的洪流）", duration: 168 }, { name: "Twilight Hill（暮色的山丘）", duration: 272 }, { name: "Neon Orbit（霓虹的轨道）", duration: 240 },
      { name: "Storm Forest（风暴的森林）", duration: 204 }, { name: "Mist Window（薄雾的窗）", duration: 260 }, { name: "Ridge Ice（山脊的冰）", duration: 252 },
      { name: "Leaf Ridge（叶的山脊）", duration: 256 }, { name: "Pond River（池塘的河流）", duration: 246 }, { name: "Leaf Feather（叶的羽毛）", duration: 241 } ] },
    { name: "Diamond Marrow", type: "专辑", date: "2030-06-05", songs: [
      { name: "Diamond Marrow（钻石的骨髓）", duration: 251 }, { name: "Star Whisper（星的低语）", duration: 274 }, { name: "Plain Velvet（平原的天鹅绒）", duration: 255 },
      { name: "Nest Midnight（巢的午夜）", duration: 403 }, { name: "Field Carousel（原野的旋转木马）", duration: 241 }, { name: "Fog Silver（雾的银色）", duration: 228 },
      { name: "Forest Cinder（森林的炭烬）", duration: 145 } ] },
    { name: "Pulse Shore", type: "EP", date: "2031-04-05", songs: [
      { name: "Pulse Shore（脉冲的岸边）", duration: 237 }, { name: "Glow Thaw（辉光的融雪）", duration: 261 }, { name: "Heart Quiet（心的寂静）", duration: 234 },
      { name: "Moon Sea（月亮的海）", duration: 191 }, { name: "Daylight Wood（日光的树林）", duration: 239 } ] },
    { name: "Garden Feather", type: "专辑", date: "2032-04-01", songs: [
      { name: "Garden Feather（花园的羽毛）", duration: 222 }, { name: "Orbit Stream（轨道的溪流）", duration: 348 }, { name: "Grain Undertow（颗粒的暗流）", duration: 232 },
      { name: "Fable Crystal（寓言的水晶）", duration: 193 }, { name: "Leaf Crystal（叶的水晶）", duration: 234 }, { name: "Wood Wave（树林的波浪）", duration: 226 },
      { name: "Loam Petal（沃土的花瓣）", duration: 260 }, { name: "Leaf Moss（叶的青苔）", duration: 234 }, { name: "Motel Stone（汽车旅馆的石头）", duration: 275 },
      { name: "Salt Gravel（盐的砾石）", duration: 266 } ] },
    { name: "Lantern Sundown", type: "单曲", date: "2033-02-18", songs: [
      { name: "Lantern Sundown（灯笼的日落）", duration: 220 } ] },
    { name: "Star Canvas", type: "专辑", date: "2034-02-14", songs: [
      { name: "Star Canvas（星的画布）", duration: 295 }, { name: "Pond Rain（池塘的雨）", duration: 260 }, { name: "Crescent Carousel（新月的旋转木马）", duration: 246 },
      { name: "Silk Forest（丝绸的森林）", duration: 156 }, { name: "Moon Drift（月亮的漂流）", duration: 240 }, { name: "Pond Cliff（池塘的断崖）", duration: 234 },
      { name: "Twilight Frost（暮色的霜）", duration: 425 }, { name: "Ocean Moon（海洋的月亮）", duration: 193 } ] },
    { name: "Asphalt River", type: "专辑", date: "2035-02-14", songs: [
      { name: "Asphalt River（柏油的河流）", duration: 231 }, { name: "Ocean Tower（海洋的塔）", duration: 187 }, { name: "Faded Kite（褪色的风筝）", duration: 231 },
      { name: "Snow Pine（雪的松）", duration: 225 }, { name: "Compass Paperplane（罗盘的纸飞机）", duration: 354 }, { name: "Slope Amber（斜坡的琥珀）", duration: 205 },
      { name: "Drift Blanket（漂流的绒毯）", duration: 243 }, { name: "Glow Thunder（辉光的雷）", duration: 245 }, { name: "Sky Compass（天空的罗盘）", duration: 242 },
      { name: "Dawn Concrete（黎明的水泥）", duration: 251 } ] },
    { name: "Flood Ashes", type: "专辑", date: "2036-02-10", songs: [
      { name: "Flood Ashes（洪流的灰烬）", duration: 245 }, { name: "Diamond Halo（钻石的光晕）", duration: 142 }, { name: "Canvas Ballet（画布的芭蕾）", duration: 248 },
      { name: "Blossom Tree（花开的树）", duration: 242 }, { name: "Path Pebble（小径的卵石）", duration: 267 }, { name: "Wires Meadow（电线的草地）", duration: 247 },
      { name: "Lake Lantern（湖的灯笼）", duration: 252 }, { name: "Cloud Smoke（云的烟雾）", duration: 260 }, { name: "Soil Steam（土壤的蒸汽）", duration: 245 } ] },
    { name: "Nightfall Sand", type: "EP", date: "2036-12-21", songs: [
      { name: "Nightfall Sand（夜幕的沙）", duration: 261 }, { name: "Storm Hollow（风暴的空洞）", duration: 231 }, { name: "Pebble Grain（卵石的颗粒）", duration: 135 },
      { name: "Slope Sky（斜坡的天空）", duration: 264 } ] },
    { name: "Sundown Fleet", type: "单曲", date: "2037-12-17", songs: [
      { name: "Sundown Fleet（日落的舰队）", duration: 239 } ] },
    { name: "Journey Hill", type: "EP", date: "2038-11-27", songs: [
      { name: "Journey Hill（旅程的山丘）", duration: 146 }, { name: "Undertow Roof（暗流的屋顶）", duration: 249 }, { name: "Flood Glow（洪流的辉光）", duration: 150 },
      { name: "Silence Neon（沉寂的霓虹）", duration: 233 }, { name: "Pulse Breeze（脉冲的微风）", duration: 407 } ] },
    { name: "Daylight Moon", type: "专辑", date: "2039-12-10", songs: [
      { name: "Daylight Moon（日光的月亮）", duration: 255 }, { name: "Lake Wood（湖的树林）", duration: 224 }, { name: "Bloom Ashes（绽放的灰烬）", duration: 260 },
      { name: "Dusk Flame（薄暮的火焰）", duration: 231 }, { name: "Marrow Slope（骨髓的斜坡）", duration: 203 }, { name: "Sky Pine（天空的松）", duration: 274 },
      { name: "Compass Cloud（罗盘的云）", duration: 400 } ] },
    { name: "Diamond Pulse", type: "专辑", date: "2040-11-14", songs: [
      { name: "Diamond Pulse（钻石的脉冲）", duration: 237 }, { name: "Whisper Nightfall（低语的夜幕）", duration: 237 }, { name: "Kite Steam（风筝的蒸汽）", duration: 249 },
      { name: "Stream Cinder（溪流的炭烬）", duration: 262 }, { name: "Pulse Undertow（脉冲的暗流）", duration: 249 }, { name: "Stream Wave（溪流的波浪）", duration: 261 },
      { name: "Sand Valley（沙的山谷）", duration: 242 }, { name: "Grain Ember（颗粒的余烬）", duration: 285 }, { name: "Silence Journey（沉寂的旅程）", duration: 214 },
      { name: "Halo Slope（光晕的斜坡）", duration: 239 } ] },
    { name: "Glass Glow", type: "专辑", date: "2041-11-23", songs: [
      { name: "Glass Glow（玻璃的辉光）", duration: 231 }, { name: "Highway Whisper（公路的低语）", duration: 221 }, { name: "Desert Moon（荒原的月亮）", duration: 195 },
      { name: "Gravel Signal（砾石的信号）", duration: 258 }, { name: "Steam Summer（蒸汽的夏天）", duration: 205 }, { name: "Overcast Nest（阴云的巢）", duration: 253 },
      { name: "Window Mirrors（窗的镜子）", duration: 250 }, { name: "Shell Snow（贝壳的雪）", duration: 415 }, { name: "Beacon Iron（灯塔的铁）", duration: 147 },
      { name: "Drift Dawn（漂流的黎明）", duration: 226 }, { name: "Lake Whisper（湖的低语）", duration: 152 } ] },
    { name: "Moss Rain", type: "专辑", date: "2042-10-15", songs: [
      { name: "Moss Rain（青苔的雨）", duration: 263 }, { name: "Wood Rain（树林的雨）", duration: 263 }, { name: "Tide Asphalt（潮汐的柏油）", duration: 256 },
      { name: "River Crystal（河流的水晶）", duration: 258 }, { name: "Soil Stone（土壤的石头）", duration: 245 }, { name: "Stone Journey（石头的旅程）", duration: 269 },
      { name: "Undertow Petal（暗流的花瓣）", duration: 259 }, { name: "Ashes Vine（灰烬的藤蔓）", duration: 221 }, { name: "Diamond Sun（钻石的太阳）", duration: 235 },
      { name: "Wires Whisper（电线的低语）", duration: 240 }, { name: "Roof Ridge（屋顶的山脊）", duration: 235 } ] },
    { name: "Crystal Vine", type: "单曲", date: "2043-11-13", songs: [
      { name: "Crystal Vine（水晶的藤蔓）", duration: 232 } ] },
    { name: "Neon Grain", type: "专辑", date: "2044-10-11", songs: [
      { name: "Neon Grain（霓虹的颗粒）", duration: 252 }, { name: "Lantern Hill（灯笼的山丘）", duration: 233 }, { name: "Static Tower（静电的塔）", duration: 291 },
      { name: "Ballet Motel（芭蕾的汽车旅馆）", duration: 146 }, { name: "Pine Stream（松的溪流）", duration: 243 }, { name: "Kite Lantern（风筝的灯笼）", duration: 192 },
      { name: "Coral Undertow（珊瑚的暗流）", duration: 164 }, { name: "River Soil（河流的土壤）", duration: 243 }, { name: "Heart Rain（心的雨）", duration: 151 },
      { name: "Silk Diamond（丝绸的钻石）", duration: 196 }, { name: "Smoke Rust（烟雾的锈迹）", duration: 214 } ] },
    { name: "Cliff Mist", type: "专辑", date: "2045-09-30", songs: [
      { name: "Cliff Mist（断崖的薄雾）", duration: 248 }, { name: "Asphalt Ice（柏油的冰）", duration: 245 }, { name: "Daylight Valley（日光的山谷）", duration: 219 },
      { name: "Paperplane Amber（纸飞机的琥珀）", duration: 254 }, { name: "Mist Winter（薄雾的冬天）", duration: 275 }, { name: "Ice Nightfall（冰的夜幕）", duration: 245 },
      { name: "Shallow Compass（浅滩的罗盘）", duration: 223 }, { name: "Highway Ballet（公路的芭蕾）", duration: 237 }, { name: "Shore Star（岸边的星）", duration: 263 },
      { name: "Moon Motion（月亮的律动）", duration: 148 } ] },
    { name: "Pebble Anchor", type: "专辑", date: "2046-08-11", songs: [
      { name: "Pebble Anchor（卵石的锚）", duration: 248 }, { name: "Pond Steam（池塘的蒸汽）", duration: 235 }, { name: "Amber Wish（琥珀的愿望）", duration: 231 },
      { name: "Marrow Snow（骨髓的雪）", duration: 265 }, { name: "Shore Snow（岸边的雪）", duration: 267 }, { name: "Coral Lake（珊瑚的湖）", duration: 218 },
      { name: "Smoke Vine（烟雾的藤蔓）", duration: 244 }, { name: "Overcast Highway（阴云的公路）", duration: 228 }, { name: "Hill Harbor（山丘的港湾）", duration: 191 },
      { name: "Field Quartz（原野的石英）", duration: 250 }, { name: "Lake Tree（湖的树）", duration: 246 } ] },
    { name: "Fable Trail", type: "EP", date: "2047-08-30", songs: [
      { name: "Fable Trail（寓言的足迹）", duration: 407 }, { name: "Thunder Salt（雷的盐）", duration: 244 }, { name: "Smoke Shadow（烟雾的影子）", duration: 371 } ] },
    { name: "Shell Asphalt", type: "专辑", date: "2048-09-10", songs: [
      { name: "Shell Asphalt（贝壳的柏油）", duration: 223 }, { name: "Tide Canvas（潮汐的画布）", duration: 238 }, { name: "Valley Daybreak（山谷的黎明）", duration: 437 },
      { name: "Tower Rain（塔的雨）", duration: 220 }, { name: "Drift Ballet（漂流的芭蕾）", duration: 239 }, { name: "Shallow Glow（浅滩的辉光）", duration: 242 },
      { name: "Tide Motel（潮汐的汽车旅馆）", duration: 191 }, { name: "Motion Iron（律动的铁）", duration: 197 } ] },
    { name: "Cinder Pond", type: "EP", date: "2049-08-07", songs: [
      { name: "Cinder Pond（炭烬的池塘）", duration: 136 }, { name: "Smoke Blossom（烟雾的花开）", duration: 257 }, { name: "Whisper Blossom（低语的花开）", duration: 266 },
      { name: "Canvas Ridge（画布的山脊）", duration: 199 }, { name: "Daybreak Drift（黎明的漂流）", duration: 198 } ] },
    { name: "Carousel Sundown", type: "专辑", date: "2050-06-06", songs: [
      { name: "Carousel Sundown（旋转木马的日落）", duration: 241 }, { name: "Marrow Paperplane（骨髓的纸飞机）", duration: 238 }, { name: "Spark Smoke（火花的烟雾）", duration: 247 },
      { name: "Meridian Road（子午线的道路）", duration: 265 }, { name: "Storm Spark（风暴的火花）", duration: 240 }, { name: "Lantern River（灯笼的河流）", duration: 252 },
      { name: "Crescent Valley（新月的山谷）", duration: 245 }, { name: "Tree Thaw（树的融雪）", duration: 267 }, { name: "Midnight Smoke（午夜的烟雾）", duration: 222 },
      { name: "Pond Silk（池塘的丝绸）", duration: 382 }, { name: "Overcast Diamond（阴云的钻石）", duration: 258 } ] },
    ],
  "Plasmagica": [
    { name: "Plasmagica", type: "专辑", date: "2015-08-26", songs: [
       { name: "Seabreeze", duration: 230 }, { name: "Music Start!（音乐开始！）", duration: 220 },
       { name: "愛を教えて（教会我爱）", duration: 215 } ] },
    { name: "Seabreeze", type: "单曲", date: "2015-04-22", songs: [ { name: "Seabreeze", duration: 230 } ] },
      { name: "Glass Fog", type: "EP", date: "2026-08-03", songs: [
      { name: "Glass Fog（玻璃的雾）", duration: 163 }, { name: "Halo Faded（光晕的褪色）", duration: 239 }, { name: "Hollow Wires（空洞的电线）", duration: 219 },
      { name: "Whisper Ice（低语的冰）", duration: 228 } ] },
    { name: "Cinder Wave", type: "单曲", date: "2027-05-06", songs: [
      { name: "Cinder Wave（炭烬的波浪）", duration: 137 } ] },
    { name: "Shadow Void", type: "EP", date: "2028-05-17", songs: [
      { name: "Shadow Void（影子的虚空）", duration: 223 }, { name: "Pebble Midnight（卵石的午夜）", duration: 221 }, { name: "Nightfall Broken（夜幕的破碎）", duration: 223 },
      { name: "Overcast Circle（阴云的圆圈）", duration: 232 }, { name: "Quiet Wave（寂静的波浪）", duration: 229 }, { name: "Drift Broken（漂流的破碎）", duration: 238 } ] },
    { name: "Dawn Wires", type: "单曲", date: "2029-05-11", songs: [
      { name: "Dawn Wires（黎明的电线）", duration: 169 } ] },
    { name: "Flood Fable", type: "单曲", date: "2030-04-23", songs: [
      { name: "Flood Fable（洪流的寓言）", duration: 205 } ] },
    { name: "Loam Steam", type: "EP", date: "2031-04-04", songs: [
      { name: "Loam Steam（沃土的蒸汽）", duration: 213 }, { name: "Spark Iron（火花的铁）", duration: 199 }, { name: "Static Midnight（静电的午夜）", duration: 204 },
      { name: "Signal Spark（信号的火花）", duration: 415 } ] },
    { name: "Rain Haze", type: "单曲", date: "2032-05-05", songs: [
      { name: "Rain Haze（雨的轻雾）", duration: 226 } ] },
    { name: "Flood Ice", type: "专辑", date: "2033-02-08", songs: [
      { name: "Flood Ice（洪流的冰）", duration: 203 }, { name: "Meadow Silk（草地的丝绸）", duration: 223 }, { name: "Bloom Forest（绽放的森林）", duration: 236 },
      { name: "Drift Iron（漂流的铁）", duration: 178 }, { name: "Wave Vine（波浪的藤蔓）", duration: 174 }, { name: "Wave Fleet（波浪的舰队）", duration: 252 },
      { name: "Ballet Moon（芭蕾的月亮）", duration: 222 }, { name: "Daybreak Path（黎明的小径）", duration: 244 }, { name: "Cliff Static（断崖的静电）", duration: 213 },
      { name: "Glow Meridian（辉光的子午线）", duration: 240 } ] },
    { name: "Nightfall Fleet", type: "EP", date: "2034-03-02", songs: [
      { name: "Nightfall Fleet（夜幕的舰队）", duration: 243 }, { name: "Flood Circle（洪流的圆圈）", duration: 147 }, { name: "Dust Journey（尘埃的旅程）", duration: 227 },
      { name: "Crystal Trail（水晶的足迹）", duration: 178 } ] },
    { name: "Diamond Canvas", type: "专辑", date: "2035-02-01", songs: [
      { name: "Diamond Canvas（钻石的画布）", duration: 226 }, { name: "Grain Desert（颗粒的荒原）", duration: 213 }, { name: "Desert Leaf（荒原的叶）", duration: 123 },
      { name: "Hill Summer（山丘的夏天）", duration: 219 }, { name: "Plain Pine（平原的松）", duration: 219 }, { name: "Neon Carousel（霓虹的旋转木马）", duration: 206 },
      { name: "Neon Garden（霓虹的花园）", duration: 205 }, { name: "Trail Ashes（足迹的灰烬）", duration: 229 }, { name: "Silk Compass（丝绸的罗盘）", duration: 193 } ] },
    { name: "Path Wave", type: "单曲", date: "2036-03-03", songs: [
      { name: "Path Wave（小径的波浪）", duration: 227 } ] },
    { name: "Meridian Fleet", type: "单曲", date: "2037-02-14", songs: [
      { name: "Meridian Fleet（子午线的舰队）", duration: 210 } ] },
    { name: "Satellite Echo", type: "专辑", date: "2038-01-06", songs: [
      { name: "Satellite Echo（卫星的回声）", duration: 210 }, { name: "Feather Iron（羽毛的铁）", duration: 223 }, { name: "Crystal Desert（水晶的荒原）", duration: 231 },
      { name: "Glimmer Whisper（微光的低语）", duration: 208 }, { name: "Diamond Thaw（钻石的融雪）", duration: 212 }, { name: "Pond Shore（池塘的岸边）", duration: 270 },
      { name: "Quartz Tree（石英的树）", duration: 243 }, { name: "Paperplane Silk（纸飞机的丝绸）", duration: 233 }, { name: "Kite Field（风筝的原野）", duration: 219 },
      { name: "Soil Echo（土壤的回声）", duration: 226 }, { name: "Echo Vapor（回声的雾霭）", duration: 190 } ] },
    { name: "Nest Circle", type: "EP", date: "2039-01-28", songs: [
      { name: "Nest Circle（巢的圆圈）", duration: 375 }, { name: "Meadow Circle（草地的圆圈）", duration: 237 }, { name: "Void Dawn（虚空的黎明）", duration: 131 },
      { name: "Glimmer Glass（微光的玻璃）", duration: 419 } ] },
    { name: "Pulse Wave", type: "EP", date: "2039-12-08", songs: [
      { name: "Pulse Wave（脉冲的波浪）", duration: 257 }, { name: "Beacon Frost（灯塔的霜）", duration: 245 }, { name: "Vapor Ballet（雾霭的芭蕾）", duration: 226 },
      { name: "Salt Sun（盐的太阳）", duration: 186 } ] },
    { name: "Heart Overcast", type: "专辑", date: "2040-11-06", songs: [
      { name: "Heart Overcast（心的阴云）", duration: 224 }, { name: "Neon Daylight（霓虹的日光）", duration: 238 }, { name: "Iron Twilight（铁的暮色）", duration: 308 },
      { name: "Frost Grain（霜的颗粒）", duration: 133 }, { name: "Beacon Quartz（灯塔的石英）", duration: 187 }, { name: "Amber Ridge（琥珀的山脊）", duration: 203 },
      { name: "Garden Slope（花园的斜坡）", duration: 243 }, { name: "Trail Anchor（足迹的锚）", duration: 272 } ] },
    { name: "Bloom Dust", type: "专辑", date: "2041-12-08", songs: [
      { name: "Bloom Dust（绽放的尘埃）", duration: 210 }, { name: "Snow Twilight（雪的暮色）", duration: 243 }, { name: "Star Midnight（星的午夜）", duration: 242 },
      { name: "Quiet Ocean（寂静的海洋）", duration: 214 }, { name: "Roof Neon（屋顶的霓虹）", duration: 214 }, { name: "Blanket Vine（绒毯的藤蔓）", duration: 229 },
      { name: "Dust Highway（尘埃的公路）", duration: 232 }, { name: "Stone Sundown（石头的日落）", duration: 212 } ] },
    { name: "Glow Velvet", type: "EP", date: "2042-09-24", songs: [
      { name: "Glow Velvet（辉光的天鹅绒）", duration: 237 }, { name: "Thaw Shell（融雪的贝壳）", duration: 263 }, { name: "Sky Fog（天空的雾）", duration: 207 },
      { name: "Drift Field（漂流的原野）", duration: 240 }, { name: "Breeze Star（微风的星）", duration: 219 } ] },
    { name: "Velvet Wires", type: "专辑", date: "2043-09-22", songs: [
      { name: "Velvet Wires（天鹅绒的电线）", duration: 234 }, { name: "Mirrors Iron（镜子的铁）", duration: 181 }, { name: "Sea Summer（海的夏天）", duration: 167 },
      { name: "Ridge Storm（山脊的风暴）", duration: 261 }, { name: "Shadow Silence（影子的沉寂）", duration: 219 }, { name: "Flame Amber（火焰的琥珀）", duration: 142 },
      { name: "Feather Blanket（羽毛的绒毯）", duration: 205 }, { name: "Canvas Shadow（画布的影子）", duration: 181 }, { name: "Halo Sand（光晕的沙）", duration: 217 },
      { name: "Quartz Rust（石英的锈迹）", duration: 226 } ] },
    { name: "Glass Echo", type: "专辑", date: "2044-09-28", songs: [
      { name: "Glass Echo（玻璃的回声）", duration: 243 }, { name: "Roof Wind（屋顶的风）", duration: 205 }, { name: "Concrete Marrow（水泥的骨髓）", duration: 230 },
      { name: "Hill Shadow（山丘的影子）", duration: 202 }, { name: "Void River（虚空的河流）", duration: 256 }, { name: "Void Marrow（虚空的骨髓）", duration: 236 },
      { name: "Iron Roof（铁的屋顶）", duration: 199 }, { name: "Pulse Cloud（脉冲的云）", duration: 246 } ] },
    { name: "Salt Quiet", type: "专辑", date: "2045-10-21", songs: [
      { name: "Salt Quiet（盐的寂静）", duration: 241 }, { name: "Meridian Heart（子午线的心）", duration: 207 }, { name: "Haze Garden（轻雾的花园）", duration: 224 },
      { name: "Satellite Wind（卫星的风）", duration: 228 }, { name: "Daylight Wires（日光的电线）", duration: 175 }, { name: "Iron Forest（铁的森林）", duration: 222 },
      { name: "Cloud Silence（云的沉寂）", duration: 218 }, { name: "Ashes Circle（灰烬的圆圈）", duration: 340 }, { name: "Lantern Stream（灯笼的溪流）", duration: 244 },
      { name: "Daybreak Hollow（黎明的空洞）", duration: 215 } ] },
    { name: "Slope Ice", type: "专辑", date: "2046-08-28", songs: [
      { name: "Slope Ice（斜坡的冰）", duration: 234 }, { name: "Ballet Halo（芭蕾的光晕）", duration: 246 }, { name: "Sky Nightfall（天空的夜幕）", duration: 227 },
      { name: "Grain Nightfall（颗粒的夜幕）", duration: 186 }, { name: "Journey Wind（旅程的风）", duration: 343 }, { name: "Pine Thaw（松的融雪）", duration: 188 },
      { name: "Heart Cliff（心的断崖）", duration: 204 }, { name: "Motel Ashes（汽车旅馆的灰烬）", duration: 206 }, { name: "Song Cloud（歌的云）", duration: 208 },
      { name: "Cliff Amber（断崖的琥珀）", duration: 209 }, { name: "Meridian Golden（子午线的金色）", duration: 244 } ] },
    { name: "Rain Motel", type: "单曲", date: "2047-08-11", songs: [
      { name: "Rain Motel（雨的汽车旅馆）", duration: 219 } ] },
    { name: "Cliff Fog", type: "专辑", date: "2048-08-24", songs: [
      { name: "Cliff Fog（断崖的雾）", duration: 214 }, { name: "Signal Twilight（信号的暮色）", duration: 200 }, { name: "Mirrors Dusk（镜子的薄暮）", duration: 223 },
      { name: "Silver Halo（银色的光晕）", duration: 227 }, { name: "Star Sea（星的海）", duration: 193 }, { name: "Sky Ice（天空的冰）", duration: 344 },
      { name: "Spark Veil（火花的帷幕）", duration: 123 }, { name: "Compass Vapor（罗盘的雾霭）", duration: 205 }, { name: "Echo Pine（回声的松）", duration: 234 },
      { name: "Orbit Dusk（轨道的薄暮）", duration: 239 }, { name: "Highway Valley（公路的山谷）", duration: 239 } ] },
    { name: "Garden Beacon", type: "EP", date: "2049-08-05", songs: [
      { name: "Garden Beacon（花园的灯塔）", duration: 235 }, { name: "Thunder Void（雷的虚空）", duration: 223 }, { name: "Wave Pulse（波浪的脉冲）", duration: 233 } ] },
    { name: "Anchor Gravel", type: "单曲", date: "2050-06-06", songs: [
      { name: "Anchor Gravel（锚的砾石）", duration: 213 } ] },
    ],
  "Poppin'Party": [
    { name: "Poppin'on!", type: "专辑", date: "2019-01-30", songs: [
       { name: "Yes! BanG_Dream!", duration: 235 }, { name: "STAR BEAT!〜ホシノコドウ〜（星之鼓动）", duration: 240 },
       { name: "走り始めたばかりのキミに（致刚起跑的你）", duration: 225 }, { name: "ティアドロップス（泪滴）", duration: 238 },
       { name: "ときめきエクスペリエンス!（心动体验！）", duration: 230 }, { name: "前へススメ!（向前进！）", duration: 228 },
       { name: "Time Lapse", duration: 245 }, { name: "二重の虹（双重彩虹）", duration: 236 },
       { name: "最高（最棒）", duration: 220 }, { name: "Returns", duration: 250 } ] },
    { name: "Yes! BanG_Dream!", type: "单曲", date: "2016-02-24", songs: [ { name: "Yes! BanG_Dream!", duration: 235 } ] },
    { name: "STAR BEAT!〜ホシノコドウ〜（星之鼓动）", type: "单曲", date: "2016-08-03", songs: [ { name: "STAR BEAT!〜ホシノコドウ〜（星之鼓动）", duration: 240 } ] },
    { name: "ティアドロップス（泪滴）", type: "单曲", date: "2016-12-07", songs: [ { name: "ティアドロップス（泪滴）", duration: 238 } ] },
    { name: "ときめきエクスペリエンス!（心动体验！）", type: "单曲", date: "2017-02-01", songs: [ { name: "ときめきエクスペリエンス!（心动体验！）", duration: 230 } ] },
    { name: "前へススメ!（向前进！）", type: "单曲", date: "2017-08-09", songs: [ { name: "前へススメ!（向前进！）", duration: 228 } ] },
    { name: "Time Lapse", type: "单曲", date: "2018-01-17", songs: [ { name: "Time Lapse", duration: 245 } ] },
    { name: "二重の虹（双重彩虹）", type: "单曲", date: "2018-04-18", songs: [ { name: "二重の虹（双重彩虹）", duration: 236 } ] },
    { name: "キズナミュージック♪（羁绊音乐♪）", type: "单曲", date: "2019-05-15", songs: [ { name: "キズナミュージック♪（羁绊音乐♪）", duration: 240 } ] },
      { name: "水面の向こう", type: "EP", date: "2026-08-01", songs: [
      { name: "水面の向こう（水面的彼方）", duration: 252 }, { name: "新しい歌（崭新歌）", duration: 196 }, { name: "木漏れ日、微笑（林间光斑与微笑）", duration: 134 },
      { name: "季節だけ（只有季节）", duration: 241 }, { name: "星屑よ（星屑啊）", duration: 252 } ] },
    { name: "星屑の行方", type: "专辑", date: "2027-05-08", songs: [
      { name: "星屑の行方（星屑的踪迹）", duration: 401 }, { name: "枝、心（枝与心）", duration: 229 }, { name: "卒業に還る（回到毕业）", duration: 322 },
      { name: "想い、桜（思念与樱花）", duration: 252 }, { name: "銀河まで（直到银河）", duration: 251 }, { name: "調べを抱いて（拥抱曲调）", duration: 236 },
      { name: "夕暮れ、夜明け（黄昏与黎明）", duration: 219 }, { name: "蒼い海（苍蓝海）", duration: 225 }, { name: "星、桜（星与樱花）", duration: 353 },
      { name: "遠い記憶（遥远记忆）", duration: 237 } ] },
    { name: "蒼い流星", type: "EP", date: "2028-05-14", songs: [
      { name: "蒼い流星（苍蓝流星）", duration: 250 }, { name: "長い卒業（漫长毕业）", duration: 257 }, { name: "旋律、水面（旋律与水面）", duration: 174 } ] },
    { name: "心音を抱いて", type: "专辑", date: "2029-05-31", songs: [
      { name: "心音を抱いて（拥抱心跳）", duration: 254 }, { name: "古い言葉（陈旧言语）", duration: 306 }, { name: "霧、蕾（雾与花苞）", duration: 219 },
      { name: "明るい三日月（明亮新月）", duration: 254 }, { name: "心を探して（寻找心）", duration: 231 }, { name: "約束、心音（约定与心跳）", duration: 347 },
      { name: "透明な銀河（透明银河）", duration: 175 }, { name: "旋律を探して（寻找旋律）", duration: 252 } ] },
    { name: "小さな向日葵", type: "EP", date: "2030-06-03", songs: [
      { name: "小さな向日葵（小小向日葵）", duration: 253 }, { name: "星屑を待つ（等待星屑）", duration: 177 }, { name: "蕾に咲く（在花苞绽放）", duration: 238 },
      { name: "響きを探して（寻找回响）", duration: 202 }, { name: "古い響き（陈旧回响）", duration: 229 }, { name: "明るい流星（明亮流星）", duration: 190 } ] },
    { name: "蒼い波", type: "单曲", date: "2031-03-06", songs: [
      { name: "蒼い波（苍蓝波）", duration: 248 } ] },
    { name: "長い帰り道", type: "专辑", date: "2032-03-14", songs: [
      { name: "長い帰り道（漫长归途）", duration: 220 }, { name: "氷、月光（冰与月光）", duration: 219 }, { name: "優しい旋律（温柔旋律）", duration: 219 },
      { name: "白い春休み（苍白春假）", duration: 258 }, { name: "詩を抱いて（拥抱诗）", duration: 237 }, { name: "微笑、向日葵（微笑与向日葵）", duration: 249 },
      { name: "詩よ（诗啊）", duration: 257 }, { name: "島、波（岛与波）", duration: 213 }, { name: "星空の向こう（星空的彼方）", duration: 308 },
      { name: "新しい旋律（崭新旋律）", duration: 193 }, { name: "古い教室（陈旧教室）", duration: 235 } ] },
    { name: "花火だけ", type: "EP", date: "2033-04-17", songs: [
      { name: "花火だけ（只有花火）", duration: 254 }, { name: "暁、桜（拂晓与樱花）", duration: 257 }, { name: "滝の向こう（瀑布的彼方）", duration: 240 },
      { name: "暁まで（直到拂晓）", duration: 238 }, { name: "浜へ続く（通往海滨）", duration: 247 }, { name: "蛍だけ（只有萤火虫）", duration: 271 } ] },
    { name: "星雲よ", type: "专辑", date: "2034-01-25", songs: [
      { name: "星雲よ（星云啊）", duration: 261 }, { name: "雨音まで（直到雨声）", duration: 243 }, { name: "蒼い星空（苍蓝星空）", duration: 241 },
      { name: "屋上を越えて（越过天台）", duration: 255 }, { name: "響きを抱いて（拥抱回响）", duration: 213 }, { name: "落ち葉が降る（落叶飘落）", duration: 236 },
      { name: "青空、夜明け（青空与黎明）", duration: 161 }, { name: "桜、花（樱花与花）", duration: 243 }, { name: "約束よ（约定啊）", duration: 230 } ] },
    { name: "葉、星屑", type: "单曲", date: "2035-02-06", songs: [
      { name: "葉、星屑（叶与星屑）", duration: 246 } ] },
    { name: "水面、心音", type: "EP", date: "2036-02-21", songs: [
      { name: "水面、心音（水面与心跳）", duration: 225 }, { name: "根に咲く（在根绽放）", duration: 244 }, { name: "湖、夜明け（湖与黎明）", duration: 212 },
      { name: "紅葉が揺れる（红叶摇曳）", duration: 236 }, { name: "黄昏を探して（寻找黄昏）", duration: 247 }, { name: "波に還る（回到波）", duration: 220 } ] },
    { name: "詩、月", type: "EP", date: "2037-02-04", songs: [
      { name: "詩、月（诗与月）", duration: 239 }, { name: "星へ続く（通往星）", duration: 240 }, { name: "青空の行方（青空的踪迹）", duration: 245 } ] },
    { name: "枝、蕾", type: "专辑", date: "2037-12-01", songs: [
      { name: "枝、蕾（枝与花苞）", duration: 251 }, { name: "岸へ続く（通往岸）", duration: 249 }, { name: "淡い雲（淡淡云）", duration: 250 },
      { name: "潮騒、落ち葉（潮鸣与落叶）", duration: 252 }, { name: "新しい涙（崭新泪）", duration: 239 }, { name: "夕焼けの向こう（晚霞的彼方）", duration: 238 },
      { name: "記憶だけ（只有记忆）", duration: 250 }, { name: "岬、銀河（海角与银河）", duration: 224 } ] },
    { name: "透明な川", type: "单曲", date: "2039-01-21", songs: [
      { name: "透明な川（透明河）", duration: 222 } ] },
    { name: "歌を抱いて", type: "EP", date: "2039-12-18", songs: [
      { name: "歌を抱いて（拥抱歌）", duration: 245 }, { name: "星、夜（星与夜）", duration: 254 }, { name: "透明な泉（透明泉）", duration: 247 },
      { name: "透明な水面（透明水面）", duration: 264 }, { name: "蕾、夕暮れ（花苞与黄昏）", duration: 137 }, { name: "波の向こう（波的彼方）", duration: 235 } ] },
    { name: "夜明け、雪", type: "EP", date: "2040-12-24", songs: [
      { name: "夜明け、雪（黎明与雪）", duration: 244 }, { name: "柔らかな響き（柔软回响）", duration: 257 }, { name: "実が降る（果实飘落）", duration: 188 },
      { name: "星雲まで（直到星云）", duration: 213 } ] },
    { name: "白い根", type: "专辑", date: "2041-12-21", songs: [
      { name: "白い根（苍白根）", duration: 224 }, { name: "朝焼けを探して（寻找朝霞）", duration: 186 }, { name: "透明な滝（透明瀑布）", duration: 200 },
      { name: "古い音色（陈旧音色）", duration: 266 }, { name: "川まで（直到河）", duration: 191 }, { name: "眩しい虹（耀眼彩虹）", duration: 258 },
      { name: "音色を待つ（等待音色）", duration: 246 }, { name: "泉、響き（泉与回响）", duration: 219 }, { name: "淡い月（淡淡月）", duration: 187 },
      { name: "花火を待つ（等待花火）", duration: 229 } ] },
    { name: "明るい黄昏", type: "专辑", date: "2042-09-30", songs: [
      { name: "明るい黄昏（明亮黄昏）", duration: 241 }, { name: "霧を抱いて（拥抱雾）", duration: 223 }, { name: "水面まで（直到水面）", duration: 253 },
      { name: "柔らかな言葉（柔软言语）", duration: 251 }, { name: "浜に還る（回到海滨）", duration: 225 }, { name: "歌だけ（只有歌）", duration: 226 },
      { name: "淡い約束（淡淡约定）", duration: 159 } ] },
    { name: "木漏れ日が揺れる", type: "单曲", date: "2043-09-17", songs: [
      { name: "木漏れ日が揺れる（林间光斑摇曳）", duration: 266 } ] },
    { name: "朝焼け、雲", type: "EP", date: "2044-11-05", songs: [
      { name: "朝焼け、雲（朝霞与云）", duration: 187 }, { name: "氷、心音（冰与心跳）", duration: 238 }, { name: "白い星屑（苍白星屑）", duration: 226 },
      { name: "明るい満月（明亮满月）", duration: 226 }, { name: "空が揺れる（天空摇曳）", duration: 232 } ] },
    { name: "明るい空", type: "专辑", date: "2045-10-10", songs: [
      { name: "明るい空（明亮天空）", duration: 220 }, { name: "透明な満月（透明满月）", duration: 276 }, { name: "透明な青空（透明青空）", duration: 235 },
      { name: "文化祭を越えて（越过文化祭）", duration: 236 }, { name: "眩しい追憶（耀眼追忆）", duration: 225 }, { name: "青空、雪（青空与雪）", duration: 258 },
      { name: "潮騒、葉（潮鸣与叶）", duration: 208 }, { name: "音色を探して（寻找音色）", duration: 148 }, { name: "明るい涙（明亮泪）", duration: 160 } ] },
    { name: "深い氷", type: "专辑", date: "2046-07-22", songs: [
      { name: "深い氷（深邃冰）", duration: 217 }, { name: "根が降る（根飘落）", duration: 243 }, { name: "空よ（天空啊）", duration: 257 },
      { name: "遠い微笑（遥远微笑）", duration: 246 }, { name: "歌、月（歌与月）", duration: 250 }, { name: "柔らかな旋律（柔软旋律）", duration: 215 },
      { name: "恋、夕暮れ（恋与黄昏）", duration: 258 }, { name: "記憶の行方（记忆的踪迹）", duration: 238 }, { name: "明るい月（明亮月）", duration: 245 },
      { name: "記憶を抱いて（拥抱记忆）", duration: 257 } ] },
    { name: "蒼い満月", type: "专辑", date: "2047-09-20", songs: [
      { name: "蒼い満月（苍蓝满月）", duration: 250 }, { name: "卒業を越えて（越过毕业）", duration: 193 }, { name: "浜、島（海滨与岛）", duration: 248 },
      { name: "桜、枝（樱花与枝）", duration: 238 }, { name: "銀河、夕焼け（银河与晚霞）", duration: 235 }, { name: "春休みだけ（只有春假）", duration: 228 },
      { name: "残響だけ（只有残响）", duration: 245 }, { name: "眩しい夕焼け（耀眼晚霞）", duration: 233 }, { name: "約束、朝焼け（约定与朝霞）", duration: 246 },
      { name: "優しい約束（温柔约定）", duration: 218 } ] },
    { name: "白い黄昏", type: "EP", date: "2048-07-19", songs: [
      { name: "白い黄昏（苍白黄昏）", duration: 240 }, { name: "冬休みだけ（只有寒假）", duration: 191 }, { name: "星空を待つ（等待星空）", duration: 217 },
      { name: "深い泉（深邃泉）", duration: 395 } ] },
    { name: "流星、岸", type: "专辑", date: "2049-08-07", songs: [
      { name: "流星、岸（流星与岸）", duration: 176 }, { name: "古い給食（陈旧午餐）", duration: 173 }, { name: "唄よ（歌谣啊）", duration: 205 },
      { name: "夢よ（梦啊）", duration: 196 }, { name: "柔らかな枝（柔软枝）", duration: 256 }, { name: "古い唄（陈旧歌谣）", duration: 199 },
      { name: "黄昏、木漏れ日（黄昏与林间光斑）", duration: 251 }, { name: "星が降る（星飘落）", duration: 251 }, { name: "落ち葉、蕾（落叶与花苞）", duration: 248 },
      { name: "暗い雪（昏暗雪）", duration: 243 }, { name: "雨の向こう（雨的彼方）", duration: 135 } ] },
    { name: "星屑が降る", type: "EP", date: "2050-07-31", songs: [
      { name: "星屑が降る（星屑飘落）", duration: 267 }, { name: "柔らかな根（柔软根）", duration: 216 }, { name: "空を待つ（等待天空）", duration: 210 },
      { name: "柔らかな蕾（柔软花苞）", duration: 231 }, { name: "葉、心（叶与心）", duration: 198 }, { name: "岬に還る（回到海角）", duration: 235 } ] },
    ],
  "Roselia": [
    { name: "Anfang", type: "专辑", date: "2019-04-24", songs: [
       { name: "BLACK SHOUT", duration: 245 }, { name: "Re:birth day", duration: 238 },
       { name: "熱色スターマイン（热色星火）", duration: 230 }, { name: "ONENESS", duration: 242 },
       { name: "Determination Symphony", duration: 250 }, { name: "陽だまりロードナイト（暖阳骑士）", duration: 246 },
       { name: "Neo-Aspect", duration: 235 }, { name: "Ringing Bloom", duration: 240 },
       { name: "FIRE BIRD", duration: 255 }, { name: "LOUDER", duration: 235 } ] },
    { name: "BLACK SHOUT", type: "单曲", date: "2017-04-19", songs: [ { name: "BLACK SHOUT", duration: 245 } ] },
    { name: "Re:birth day", type: "单曲", date: "2017-06-28", songs: [ { name: "Re:birth day", duration: 238 } ] },
    { name: "熱色スターマイン（热色星火）", type: "单曲", date: "2017-08-30", songs: [ { name: "熱色スターマイン（热色星火）", duration: 230 } ] },
    { name: "ONENESS", type: "单曲", date: "2017-11-15", songs: [ { name: "ONENESS", duration: 242 } ] },
    { name: "Neo-Aspect", type: "单曲", date: "2018-03-21", songs: [ { name: "Neo-Aspect", duration: 235 } ] },
    { name: "R", type: "单曲", date: "2018-06-27", songs: [ { name: "R", duration: 232 } ] },
    { name: "Brave Jewel", type: "单曲", date: "2018-12-12", songs: [ { name: "Brave Jewel", duration: 240 } ] },
    { name: "FIRE BIRD", type: "单曲", date: "2019-03-20", songs: [ { name: "FIRE BIRD", duration: 255 } ] },
    { name: "LOUDER", type: "单曲", date: "2018-08-22", songs: [ { name: "LOUDER", duration: 235 } ] },
      { name: "Iron Nest", type: "专辑", date: "2026-08-02", songs: [
      { name: "Iron Nest（铁的巢）", duration: 236 }, { name: "Canvas Roof（画布的屋顶）", duration: 249 }, { name: "Daylight Neon（日光的霓虹）", duration: 242 },
      { name: "Echo Dusk（回声的薄暮）", duration: 242 }, { name: "Circle Silk（圆圈的丝绸）", duration: 195 }, { name: "Wave Shallow（波浪的浅滩）", duration: 145 },
      { name: "Paperplane Midnight（纸飞机的午夜）", duration: 219 }, { name: "Wind Road（风的道路）", duration: 241 }, { name: "Paperplane Song（纸飞机的歌）", duration: 275 },
      { name: "Valley Faded（山谷的褪色）", duration: 200 } ] },
    { name: "Neon Motion", type: "EP", date: "2027-05-16", songs: [
      { name: "Neon Motion（霓虹的律动）", duration: 221 }, { name: "Vine Blanket（藤蔓的绒毯）", duration: 180 }, { name: "Meridian Tree（子午线的树）", duration: 227 },
      { name: "Circle（圆圈）", duration: 252 } ] },
    { name: "Path Shore", type: "专辑", date: "2028-04-26", songs: [
      { name: "Path Shore（小径的岸边）", duration: 248 }, { name: "Meadow Valley（草地的山谷）", duration: 236 }, { name: "Breeze Leaf（微风的叶）", duration: 260 },
      { name: "Midnight Daylight（午夜的日光）", duration: 239 }, { name: "Shallow Quiet（浅滩的寂静）", duration: 218 }, { name: "Shell Smoke（贝壳的烟雾）", duration: 142 },
      { name: "Sand Feather（沙的羽毛）", duration: 221 }, { name: "Satellite Pond（卫星的池塘）", duration: 242 }, { name: "Pulse Anchor（脉冲的锚）", duration: 228 } ] },
    { name: "Ballet Quartz", type: "专辑", date: "2029-04-12", songs: [
      { name: "Ballet Quartz（芭蕾的石英）", duration: 133 }, { name: "Salt Overcast（盐的阴云）", duration: 224 }, { name: "Ballet Nest（芭蕾的巢）", duration: 255 },
      { name: "Motel Crescent（汽车旅馆的新月）", duration: 162 }, { name: "Iron Frost（铁的霜）", duration: 251 }, { name: "Moss Tower（青苔的塔）", duration: 222 },
      { name: "Crescent Lake（新月的湖）", duration: 221 }, { name: "Ember Thunder（余烬的雷）", duration: 279 } ] },
    { name: "Broken Grain", type: "专辑", date: "2030-04-27", songs: [
      { name: "Broken Grain（破碎的颗粒）", duration: 274 }, { name: "Garden Pond（花园的池塘）", duration: 226 }, { name: "Haze Loam（轻雾的沃土）", duration: 211 },
      { name: "Frost Sky（霜的天空）", duration: 249 }, { name: "Hollow Winter（空洞的冬天）", duration: 287 }, { name: "Ivory Pulse（象牙的脉冲）", duration: 228 },
      { name: "Undertow Anchor（暗流的锚）", duration: 237 }, { name: "Kite Shadow（风筝的影子）", duration: 267 }, { name: "Sundown Satellite（日落的卫星）", duration: 257 },
      { name: "Forest Halo（森林的光晕）", duration: 236 }, { name: "Shadow Undertow（影子的暗流）", duration: 145 } ] },
    { name: "Shadow Roof", type: "单曲", date: "2031-05-22", songs: [
      { name: "Shadow Roof（影子的屋顶）", duration: 228 } ] },
    { name: "Kite Quiet", type: "EP", date: "2032-04-25", songs: [
      { name: "Kite Quiet（风筝的寂静）", duration: 236 }, { name: "Thunder Highway（雷的公路）", duration: 256 }, { name: "Roof Soil（屋顶的土壤）", duration: 247 },
      { name: "Pine Feather（松的羽毛）", duration: 261 }, { name: "Highway Dust（公路的尘埃）", duration: 171 }, { name: "Wave Summer（波浪的夏天）", duration: 236 } ] },
    { name: "Nest Ice", type: "专辑", date: "2033-03-04", songs: [
      { name: "Nest Ice（巢的冰）", duration: 203 }, { name: "Sea Ridge（海的山脊）", duration: 191 }, { name: "Window Diamond（窗的钻石）", duration: 263 },
      { name: "Wish Diamond（愿望的钻石）", duration: 224 }, { name: "Mirrors Hollow（镜子的空洞）", duration: 243 }, { name: "Spark Fleet（火花的舰队）", duration: 164 },
      { name: "Wish Gravel（愿望的砾石）", duration: 196 }, { name: "Tide Fleet（潮汐的舰队）", duration: 191 }, { name: "Ballet Wind（芭蕾的风）", duration: 266 },
      { name: "Crescent Ocean（新月的海洋）", duration: 199 }, { name: "Pulse Mirrors（脉冲的镜子）", duration: 255 } ] },
    { name: "Ocean Diamond", type: "EP", date: "2034-02-14", songs: [
      { name: "Ocean Diamond（海洋的钻石）", duration: 163 }, { name: "Whisper Road（低语的道路）", duration: 259 }, { name: "Dust Quiet（尘埃的寂静）", duration: 231 },
      { name: "Journey Iron（旅程的铁）", duration: 261 }, { name: "Pond Pebble（池塘的卵石）", duration: 222 }, { name: "Leaf Void（叶的虚空）", duration: 219 } ] },
    { name: "Kite Frost", type: "单曲", date: "2035-03-31", songs: [
      { name: "Kite Frost（风筝的霜）", duration: 186 } ] },
    { name: "Haze Motel", type: "EP", date: "2036-02-19", songs: [
      { name: "Haze Motel（轻雾的汽车旅馆）", duration: 183 }, { name: "Frost Motion（霜的律动）", duration: 196 }, { name: "Ice Ivory（冰的象牙）", duration: 292 } ] },
    { name: "Shallow Silver", type: "EP", date: "2037-01-04", songs: [
      { name: "Shallow Silver（浅滩的银色）", duration: 225 }, { name: "Static Feather（静电的羽毛）", duration: 182 }, { name: "Echo Wish（回声的愿望）", duration: 149 } ] },
    { name: "Undertow Beacon", type: "单曲", date: "2038-01-16", songs: [
      { name: "Undertow Beacon（暗流的灯塔）", duration: 256 } ] },
    { name: "Slope Haze", type: "EP", date: "2039-01-31", songs: [
      { name: "Slope Haze（斜坡的轻雾）", duration: 327 }, { name: "Sea Thunder（海的雷）", duration: 228 }, { name: "Asphalt Pond（柏油的池塘）", duration: 456 },
      { name: "Silence Shadow（沉寂的影子）", duration: 160 }, { name: "Ashes Sea（灰烬的海）", duration: 260 } ] },
    { name: "Path Quiet", type: "专辑", date: "2039-11-14", songs: [
      { name: "Path Quiet（小径的寂静）", duration: 248 }, { name: "Heart Thaw（心的融雪）", duration: 241 }, { name: "Silver Golden（银色的金色）", duration: 235 },
      { name: "Sea Hill（海的山丘）", duration: 217 }, { name: "Trail Lake（足迹的湖）", duration: 261 }, { name: "Stream Echo（溪流的回声）", duration: 243 },
      { name: "Forest Window（森林的窗）", duration: 228 }, { name: "Grain Iron（颗粒的铁）", duration: 324 }, { name: "Dusk Compass（薄暮的罗盘）", duration: 247 } ] },
    { name: "Neon Wood", type: "专辑", date: "2040-11-23", songs: [
      { name: "Neon Wood（霓虹的树林）", duration: 188 }, { name: "Canvas Glimmer（画布的微光）", duration: 235 }, { name: "Hill Compass（山丘的罗盘）", duration: 224 },
      { name: "Mirrors Winter（镜子的冬天）", duration: 161 }, { name: "Drift Silence（漂流的沉寂）", duration: 192 }, { name: "Stream Field（溪流的原野）", duration: 242 },
      { name: "Shore Pulse（岸边的脉冲）", duration: 263 } ] },
    { name: "Rain Static", type: "专辑", date: "2041-10-06", songs: [
      { name: "Rain Static（雨的静电）", duration: 191 }, { name: "Path Road（小径的道路）", duration: 244 }, { name: "Flood Nightfall（洪流的夜幕）", duration: 233 },
      { name: "Sundown Wood（日落的树林）", duration: 167 }, { name: "Rain Winter（雨的冬天）", duration: 272 }, { name: "Midnight Mist（午夜的薄雾）", duration: 202 },
      { name: "Wood Golden（树林的金色）", duration: 262 }, { name: "Lantern Feather（灯笼的羽毛）", duration: 163 } ] },
    { name: "Breeze Flood", type: "单曲", date: "2042-09-27", songs: [
      { name: "Breeze Flood（微风的洪流）", duration: 225 } ] },
    { name: "Field Golden", type: "EP", date: "2043-09-23", songs: [
      { name: "Field Golden（原野的金色）", duration: 208 }, { name: "Halo Fable（光晕的寓言）", duration: 241 }, { name: "Flame Journey（火焰的旅程）", duration: 235 },
      { name: "Hollow Sand（空洞的沙）", duration: 235 }, { name: "Silk Roof（丝绸的屋顶）", duration: 143 }, { name: "Garden Harbor（花园的港湾）", duration: 257 } ] },
    { name: "Trail Hill", type: "单曲", date: "2044-10-05", songs: [
      { name: "Trail Hill（足迹的山丘）", duration: 243 } ] },
    { name: "Mirrors Vine", type: "专辑", date: "2045-08-17", songs: [
      { name: "Mirrors Vine（镜子的藤蔓）", duration: 191 }, { name: "Moss Anchor（青苔的锚）", duration: 235 }, { name: "Heart Flood（心的洪流）", duration: 257 },
      { name: "Canvas Ivory（画布的象牙）", duration: 242 }, { name: "Asphalt Faded（柏油的褪色）", duration: 195 }, { name: "Forest Slope（森林的斜坡）", duration: 209 },
      { name: "Diamond Loam（钻石的沃土）", duration: 251 }, { name: "Journey Sea（旅程的海）", duration: 247 }, { name: "Loam Blossom（沃土的花开）", duration: 250 },
      { name: "Plain Paperplane（平原的纸飞机）", duration: 250 }, { name: "Void Stream（虚空的溪流）", duration: 193 } ] },
    { name: "Tree Cinder", type: "专辑", date: "2046-07-31", songs: [
      { name: "Tree Cinder（树的炭烬）", duration: 231 }, { name: "Glow Dusk（辉光的薄暮）", duration: 246 }, { name: "Vapor Cloud（雾霭的云）", duration: 248 },
      { name: "Tree Ridge（树的山脊）", duration: 159 }, { name: "Ocean Meadow（海洋的草地）", duration: 202 }, { name: "Shore Summer（岸边的夏天）", duration: 236 },
      { name: "Shadow Tree（影子的树）", duration: 242 }, { name: "Glow Fog（辉光的雾）", duration: 288 }, { name: "Rust Steam（锈迹的蒸汽）", duration: 286 },
      { name: "Lantern Gravel（灯笼的砾石）", duration: 245 }, { name: "Velvet Breeze（天鹅绒的微风）", duration: 249 } ] },
    { name: "Shell Ice", type: "单曲", date: "2047-09-04", songs: [
      { name: "Shell Ice（贝壳的冰）", duration: 278 } ] },
    { name: "Nightfall Shell", type: "EP", date: "2048-07-05", songs: [
      { name: "Nightfall Shell（夜幕的贝壳）", duration: 253 }, { name: "Shore Wind（岸边的风）", duration: 427 }, { name: "Haze Glass（轻雾的玻璃）", duration: 238 },
      { name: "Ashes Anchor（灰烬的锚）", duration: 261 }, { name: "Haze Carousel（轻雾的旋转木马）", duration: 248 }, { name: "Wave Ember（波浪的余烬）", duration: 248 } ] },
    { name: "Loam Journey", type: "专辑", date: "2049-06-20", songs: [
      { name: "Loam Journey（沃土的旅程）", duration: 262 }, { name: "Winter Coral（冬天的珊瑚）", duration: 209 }, { name: "Iron Ice（铁的冰）", duration: 235 },
      { name: "Tree Hollow（树的空洞）", duration: 224 }, { name: "Carousel Wires（旋转木马的电线）", duration: 243 }, { name: "Valley Vapor（山谷的雾霭）", duration: 250 },
      { name: "Vapor Marrow（雾霭的骨髓）", duration: 230 }, { name: "Summer Winter（夏天的冬天）", duration: 256 } ] },
    { name: "River Storm", type: "EP", date: "2050-07-17", songs: [
      { name: "River Storm（河流的风暴）", duration: 254 }, { name: "Road Hill（道路的山丘）", duration: 247 }, { name: "Shadow Meridian（影子的子午线）", duration: 206 },
      { name: "Glow Salt（辉光的盐）", duration: 444 } ] },
    ],
  "Afterglow": [
    { name: "ONE OF US", type: "专辑", date: "2019-09-18", songs: [
       { name: "That Is How I Roll!", duration: 220 }, { name: "True color", duration: 228 },
       { name: "Hey-day狂騒曲（Hey-day狂骚曲）", duration: 215 }, { name: "Scarlet Sky", duration: 230 },
       { name: "COMIC PANIC!!!", duration: 210 }, { name: "Sasanqua", duration: 235 },
       { name: "Jamboree!", duration: 218 }, { name: "ON YOUR MARK", duration: 225 }, { name: "Y.O.L.O!!!!!", duration: 215 } ] },
    { name: "That Is How I Roll!", type: "单曲", date: "2017-04-19", songs: [ { name: "That Is How I Roll!", duration: 220 } ] },
    { name: "True color", type: "单曲", date: "2017-08-30", songs: [ { name: "True color", duration: 228 } ] },
    { name: "Hey-day狂騒曲（Hey-day狂骚曲）", type: "单曲", date: "2017-11-15", songs: [ { name: "Hey-day狂騒曲（Hey-day狂骚曲）", duration: 215 } ] },
    { name: "Scarlet Sky", type: "单曲", date: "2018-02-14", songs: [ { name: "Scarlet Sky", duration: 230 } ] },
    { name: "COMIC PANIC!!!", type: "单曲", date: "2018-06-20", songs: [ { name: "COMIC PANIC!!!", duration: 210 } ] },
    { name: "Sasanqua", type: "单曲", date: "2018-10-10", songs: [ { name: "Sasanqua", duration: 235 } ] },
    { name: "Jamboree!", type: "单曲", date: "2019-02-13", songs: [ { name: "Jamboree!", duration: 218 } ] },
      { name: "Canvas Orbit", type: "EP", date: "2026-06-01", songs: [
      { name: "Canvas Orbit（画布的轨道）", duration: 172 }, { name: "Wind Silence（风的沉寂）", duration: 244 }, { name: "Song Ridge（歌的山脊）", duration: 244 },
      { name: "Vapor Dusk（雾霭的薄暮）", duration: 289 } ] },
    { name: "Crescent Nightfall", type: "专辑", date: "2027-05-22", songs: [
      { name: "Crescent Nightfall（新月的夜幕）", duration: 210 }, { name: "Cliff Anchor（断崖的锚）", duration: 241 }, { name: "Carousel Moon（旋转木马的月亮）", duration: 207 },
      { name: "Diamond Lake（钻石的湖）", duration: 200 }, { name: "River Shadow（河流的影子）", duration: 212 }, { name: "Salt Grain（盐的颗粒）", duration: 270 },
      { name: "Sea Pebble（海的卵石）", duration: 263 } ] },
    { name: "Daylight Rain", type: "单曲", date: "2028-07-03", songs: [
      { name: "Daylight Rain（日光的雨）", duration: 126 } ] },
    { name: "Anchor Silk", type: "专辑", date: "2029-05-02", songs: [
      { name: "Anchor Silk（锚的丝绸）", duration: 232 }, { name: "Broken Haze（破碎的轻雾）", duration: 209 }, { name: "Smoke Golden（烟雾的金色）", duration: 145 },
      { name: "Silk Pulse（丝绸的脉冲）", duration: 191 }, { name: "Quartz Path（石英的小径）", duration: 240 }, { name: "Feather Pebble（羽毛的卵石）", duration: 236 },
      { name: "Faded Thaw（褪色的融雪）", duration: 227 }, { name: "Cinder Ridge（炭烬的山脊）", duration: 205 }, { name: "Coral Sun（珊瑚的太阳）", duration: 210 },
      { name: "Static Hill（静电的山丘）", duration: 182 } ] },
    { name: "Vine Glimmer", type: "专辑", date: "2030-04-24", songs: [
      { name: "Vine Glimmer（藤蔓的微光）", duration: 244 }, { name: "Signal Ridge（信号的山脊）", duration: 204 }, { name: "Sea Loam（海的沃土）", duration: 384 },
      { name: "Field Fable（原野的寓言）", duration: 212 }, { name: "Canvas Spark（画布的火花）", duration: 228 }, { name: "Breeze Void（微风的虚空）", duration: 222 },
      { name: "Smoke Midnight（烟雾的午夜）", duration: 134 }, { name: "Ballet Summer（芭蕾的夏天）", duration: 229 }, { name: "Moss Smoke（青苔的烟雾）", duration: 146 },
      { name: "Rain Meridian（雨的子午线）", duration: 207 } ] },
    { name: "Orbit Glass", type: "专辑", date: "2031-03-22", songs: [
      { name: "Orbit Glass（轨道的玻璃）", duration: 232 }, { name: "Silver Ice（银色的冰）", duration: 230 }, { name: "Quartz Blossom（石英的花开）", duration: 374 },
      { name: "Pond Pulse（池塘的脉冲）", duration: 219 }, { name: "Cliff Paperplane（断崖的纸飞机）", duration: 220 }, { name: "Orbit Storm（轨道的风暴）", duration: 214 },
      { name: "Ember Shore（余烬的岸边）", duration: 258 }, { name: "Halo Neon（光晕的霓虹）", duration: 205 } ] },
    { name: "Broken Spark", type: "专辑", date: "2032-05-01", songs: [
      { name: "Broken Spark（破碎的火花）", duration: 225 }, { name: "Echo Winter（回声的冬天）", duration: 164 }, { name: "Asphalt Blossom（柏油的花开）", duration: 173 },
      { name: "Hollow Ivory（空洞的象牙）", duration: 235 }, { name: "Wires Circle（电线的圆圈）", duration: 270 }, { name: "Garden Sundown（花园的日落）", duration: 203 },
      { name: "Steam Diamond（蒸汽的钻石）", duration: 136 }, { name: "Fable Motel（寓言的汽车旅馆）", duration: 216 } ] },
    { name: "Ballet Tree", type: "专辑", date: "2033-04-05", songs: [
      { name: "Ballet Tree（芭蕾的树）", duration: 244 }, { name: "Marrow Trail（骨髓的足迹）", duration: 212 }, { name: "Blanket Ballet（绒毯的芭蕾）", duration: 226 },
      { name: "Hill Smoke（山丘的烟雾）", duration: 393 }, { name: "Song Window（歌的窗）", duration: 202 }, { name: "Ridge Road（山脊的道路）", duration: 210 },
      { name: "Echo Summer（回声的夏天）", duration: 240 }, { name: "Spark Breeze（火花的微风）", duration: 163 }, { name: "Anchor Loam（锚的沃土）", duration: 205 } ] },
    { name: "Orbit Lake", type: "专辑", date: "2034-02-02", songs: [
      { name: "Orbit Lake（轨道的湖）", duration: 268 }, { name: "Tree Void（树的虚空）", duration: 313 }, { name: "Storm Wind（风暴的风）", duration: 192 },
      { name: "Dawn Petal（黎明的花瓣）", duration: 205 }, { name: "Blossom Twilight（花开的暮色）", duration: 207 }, { name: "Compass Meridian（罗盘的子午线）", duration: 208 },
      { name: "Highway Journey（公路的旅程）", duration: 163 }, { name: "Journey Roof（旅程的屋顶）", duration: 227 }, { name: "River Wind（河流的风）", duration: 234 } ] },
    { name: "Hill Pebble", type: "专辑", date: "2035-03-07", songs: [
      { name: "Hill Pebble（山丘的卵石）", duration: 241 }, { name: "Soil Beacon（土壤的灯塔）", duration: 233 }, { name: "Vine Slope（藤蔓的斜坡）", duration: 265 },
      { name: "Kite Midnight（风筝的午夜）", duration: 240 }, { name: "Ballet Sun（芭蕾的太阳）", duration: 201 }, { name: "Sun Silk（太阳的丝绸）", duration: 303 },
      { name: "Pond Lantern（池塘的灯笼）", duration: 168 }, { name: "Quiet Tower（寂静的塔）", duration: 263 }, { name: "Frost Amber（霜的琥珀）", duration: 241 },
      { name: "Shadow Frost（影子的霜）", duration: 233 } ] },
    { name: "Drift Veil", type: "专辑", date: "2036-03-16", songs: [
      { name: "Drift Veil（漂流的帷幕）", duration: 160 }, { name: "Shell Song（贝壳的歌）", duration: 176 }, { name: "Halo Iron（光晕的铁）", duration: 223 },
      { name: "Hollow Tide（空洞的潮汐）", duration: 296 }, { name: "Glow Pine（辉光的松）", duration: 225 }, { name: "Breeze Glimmer（微风的微光）", duration: 248 },
      { name: "Mist Gravel（薄雾的砾石）", duration: 241 }, { name: "Sand Asphalt（沙的柏油）", duration: 227 }, { name: "Silver Neon（银色的霓虹）", duration: 260 },
      { name: "Glow Vapor（辉光的雾霭）", duration: 211 } ] },
    { name: "Stream Silk", type: "EP", date: "2036-12-27", songs: [
      { name: "Stream Silk（溪流的丝绸）", duration: 349 }, { name: "Plain Void（平原的虚空）", duration: 185 }, { name: "Pond Smoke（池塘的烟雾）", duration: 215 },
      { name: "Thunder Crescent（雷的新月）", duration: 226 }, { name: "Silver Tide（银色的潮汐）", duration: 242 } ] },
    { name: "Forest Undertow", type: "单曲", date: "2037-12-25", songs: [
      { name: "Forest Undertow（森林的暗流）", duration: 233 } ] },
    { name: "Crystal Lake", type: "专辑", date: "2039-01-04", songs: [
      { name: "Crystal Lake（水晶的湖）", duration: 191 }, { name: "Shadow Sun（影子的太阳）", duration: 221 }, { name: "Wish Whisper（愿望的低语）", duration: 184 },
      { name: "Veil Whisper（帷幕的低语）", duration: 217 }, { name: "Wave Smoke（波浪的烟雾）", duration: 244 }, { name: "Golden Vapor（金色的雾霭）", duration: 230 },
      { name: "Quartz River（石英的河流）", duration: 263 }, { name: "Echo Nest（回声的巢）", duration: 123 }, { name: "Wish Tree（愿望的树）", duration: 184 },
      { name: "Glimmer Thaw（微光的融雪）", duration: 130 }, { name: "Twilight Kite（暮色的风筝）", duration: 239 } ] },
    { name: "Silence Stream", type: "EP", date: "2039-11-23", songs: [
      { name: "Silence Stream（沉寂的溪流）", duration: 218 }, { name: "Pebble Journey（卵石的旅程）", duration: 239 }, { name: "Cloud Blossom（云的花开）", duration: 236 },
      { name: "Wish Vapor（愿望的雾霭）", duration: 200 }, { name: "Orbit Fleet（轨道的舰队）", duration: 234 } ] },
    { name: "Silk Hill", type: "EP", date: "2040-12-03", songs: [
      { name: "Silk Hill（丝绸的山丘）", duration: 358 }, { name: "Ridge Iron（山脊的铁）", duration: 339 }, { name: "Moon Mirrors（月亮的镜子）", duration: 220 } ] },
    { name: "Ocean Velvet", type: "EP", date: "2041-11-04", songs: [
      { name: "Ocean Velvet（海洋的天鹅绒）", duration: 237 }, { name: "Paperplane Ember（纸飞机的余烬）", duration: 201 }, { name: "Soil Halo（土壤的光晕）", duration: 220 },
      { name: "Carousel Flame（旋转木马的火焰）", duration: 233 }, { name: "Cloud Nest（云的巢）", duration: 212 } ] },
    { name: "Grain Petal", type: "EP", date: "2042-11-03", songs: [
      { name: "Grain Petal（颗粒的花瓣）", duration: 232 }, { name: "Meadow Silence（草地的沉寂）", duration: 233 }, { name: "Petal Coral（花瓣的珊瑚）", duration: 212 },
      { name: "Thunder Daybreak（雷的黎明）", duration: 231 } ] },
    { name: "Pond Soil", type: "专辑", date: "2043-10-08", songs: [
      { name: "Pond Soil（池塘的土壤）", duration: 183 }, { name: "Sand Signal（沙的信号）", duration: 197 }, { name: "Roof Thaw（屋顶的融雪）", duration: 205 },
      { name: "Tree Path（树的小径）", duration: 171 }, { name: "Snow Pulse（雪的脉冲）", duration: 238 }, { name: "Satellite Whisper（卫星的低语）", duration: 244 },
      { name: "Summer Lake（夏天的湖）", duration: 235 }, { name: "Ember River（余烬的河流）", duration: 243 } ] },
    { name: "Ivory Beacon", type: "专辑", date: "2044-08-20", songs: [
      { name: "Ivory Beacon（象牙的灯塔）", duration: 202 }, { name: "Crescent Rust（新月的锈迹）", duration: 138 }, { name: "Flame Halo（火焰的光晕）", duration: 228 },
      { name: "Moon Flood（月亮的洪流）", duration: 208 }, { name: "Soil Undertow（土壤的暗流）", duration: 251 }, { name: "Sea Velvet（海的天鹅绒）", duration: 167 },
      { name: "Overcast Neon（阴云的霓虹）", duration: 203 }, { name: "Silver Trail（银色的足迹）", duration: 228 } ] },
    { name: "Drift Overcast", type: "专辑", date: "2045-08-18", songs: [
      { name: "Drift Overcast（漂流的阴云）", duration: 202 }, { name: "Carousel Ballet（旋转木马的芭蕾）", duration: 237 }, { name: "Steam Void（蒸汽的虚空）", duration: 209 },
      { name: "Lantern Winter（灯笼的冬天）", duration: 225 }, { name: "Meridian Silk（子午线的丝绸）", duration: 227 }, { name: "Ivory Star（象牙的星）", duration: 130 },
      { name: "Void Steam（虚空的蒸汽）", duration: 231 } ] },
    { name: "Window Wires", type: "专辑", date: "2046-08-12", songs: [
      { name: "Window Wires（窗的电线）", duration: 222 }, { name: "Bloom Stream（绽放的溪流）", duration: 176 }, { name: "Lantern Nightfall（灯笼的夜幕）", duration: 206 },
      { name: "Leaf Tower（叶的塔）", duration: 215 }, { name: "Crescent Sun（新月的太阳）", duration: 235 }, { name: "Concrete Flame（水泥的火焰）", duration: 225 },
      { name: "Shadow Static（影子的静电）", duration: 243 }, { name: "Blanket Mist（绒毯的薄雾）", duration: 212 }, { name: "Heart Paperplane（心的纸飞机）", duration: 217 },
      { name: "Shadow Sand（影子的沙）", duration: 236 }, { name: "Moon Coral（月亮的珊瑚）", duration: 259 } ] },
    { name: "Ice Wood", type: "专辑", date: "2047-08-04", songs: [
      { name: "Ice Wood（冰的树林）", duration: 228 }, { name: "Undertow Snow（暗流的雪）", duration: 219 }, { name: "Anchor Lake（锚的湖）", duration: 185 },
      { name: "Faded Trail（褪色的足迹）", duration: 237 }, { name: "Desert Flame（荒原的火焰）", duration: 204 }, { name: "Ember Harbor（余烬的港湾）", duration: 209 },
      { name: "Echo Valley（回声的山谷）", duration: 203 }, { name: "Cliff Daybreak（断崖的黎明）", duration: 215 } ] },
    { name: "Valley Moon", type: "单曲", date: "2048-08-10", songs: [
      { name: "Valley Moon（山谷的月亮）", duration: 320 } ] },
    { name: "Silver Winter", type: "单曲", date: "2049-07-02", songs: [
      { name: "Silver Winter（银色的冬天）", duration: 216 } ] },
    { name: "Kite Valley", type: "专辑", date: "2050-07-28", songs: [
      { name: "Kite Valley（风筝的山谷）", duration: 237 }, { name: "River Velvet（河流的天鹅绒）", duration: 245 }, { name: "Crescent Roof（新月的屋顶）", duration: 227 },
      { name: "Leaf Salt（叶的盐）", duration: 234 }, { name: "Shadow Crescent（影子的新月）", duration: 237 }, { name: "Neon Winter（霓虹的冬天）", duration: 226 },
      { name: "Ashes Marrow（灰烬的骨髓）", duration: 220 }, { name: "Silver Iron（银色的铁）", duration: 234 }, { name: "Iron Flood（铁的洪流）", duration: 201 },
      { name: "Velvet Ballet（天鹅绒的芭蕾）", duration: 239 } ] },
    ],
  "Pastel*Palettes": [
    { name: "TITLE IDOL", type: "专辑", date: "2018-09-19", songs: [
       { name: "しゅわりん☆どり〜みん（Shuwarin☆Dreaming）", duration: 220 }, { name: "パスパレボリューションず☆（Pastel Revolution☆）", duration: 215 },
       { name: "ゆら・ゆらRing-Dong-Dance", duration: 225 }, { name: "はなまる♡デイズ（花丸♡Days）", duration: 218 },
       { name: "す、好きなんかじゃない!（才、才不是喜欢呢！）", duration: 210 }, { name: "天下トーイツA to Z☆（天下统一A to Z☆）", duration: 222 },
       { name: "Wonderland Girl", duration: 216 }, { name: "きゅ〜まい＊flower（Q-mai＊flower）", duration: 214 } ] },
    { name: "しゅわりん☆どり〜みん（Shuwarin☆Dreaming）", type: "单曲", date: "2017-05-17", songs: [ { name: "しゅわりん☆どり〜みん（Shuwarin☆Dreaming）", duration: 220 } ] },
    { name: "パスパレボリューションず☆（Pastel Revolution☆）", type: "单曲", date: "2017-08-30", songs: [ { name: "パスパレボリューションず☆（Pastel Revolution☆）", duration: 215 } ] },
    { name: "はなまる♡デイズ（花丸♡Days）", type: "单曲", date: "2017-11-15", songs: [ { name: "はなまる♡デイズ（花丸♡Days）", duration: 218 } ] },
    { name: "天下トーイツA to Z☆（天下统一A to Z☆）", type: "单曲", date: "2018-02-14", songs: [ { name: "天下トーイツA to Z☆（天下统一A to Z☆）", duration: 222 } ] },
    { name: "Wonderland Girl", type: "单曲", date: "2018-06-20", songs: [ { name: "Wonderland Girl", duration: 216 } ] },
      { name: "帰り道に還る", type: "EP", date: "2026-07-04", songs: [
      { name: "帰り道に還る（回到归途）", duration: 172 }, { name: "言葉、花（言语与花）", duration: 209 }, { name: "紅葉、湖（红叶与湖）", duration: 239 },
      { name: "眩しい冬晴れ（耀眼冬日晴空）", duration: 199 }, { name: "約束、泉（约定与泉）", duration: 227 }, { name: "明るい音色（明亮音色）", duration: 208 } ] },
    { name: "調べよ", type: "单曲", date: "2027-07-17", songs: [
      { name: "調べよ（曲调啊）", duration: 216 } ] },
    { name: "浴衣を待つ", type: "EP", date: "2028-05-29", songs: [
      { name: "浴衣を待つ（等待浴衣）", duration: 206 }, { name: "遠い虹（遥远彩虹）", duration: 203 }, { name: "古い記憶（陈旧记忆）", duration: 204 },
      { name: "波、黄昏（波与黄昏）", duration: 203 }, { name: "静かな島（静谧岛）", duration: 184 } ] },
    { name: "新しい制服", type: "专辑", date: "2029-04-22", songs: [
      { name: "新しい制服（崭新制服）", duration: 154 }, { name: "月光、星雲（月光与星云）", duration: 230 }, { name: "長い屋上（漫长天台）", duration: 238 },
      { name: "音色だけ（只有音色）", duration: 234 }, { name: "桜が降る（樱花飘落）", duration: 223 }, { name: "根が揺れる（根摇曳）", duration: 227 },
      { name: "眩しい浴衣（耀眼浴衣）", duration: 174 } ] },
    { name: "朝焼けの向こう", type: "专辑", date: "2030-05-08", songs: [
      { name: "朝焼けの向こう（朝霞的彼方）", duration: 220 }, { name: "小さな若葉（小小新叶）", duration: 226 }, { name: "霜、旋律（霜与旋律）", duration: 205 },
      { name: "記憶よ（记忆啊）", duration: 198 }, { name: "浴衣だけ（只有浴衣）", duration: 225 }, { name: "雨音、星雲（雨声与星云）", duration: 223 },
      { name: "灯りを待つ（等待灯火）", duration: 213 }, { name: "約束を探して（寻找约定）", duration: 212 } ] },
    { name: "制服に還る", type: "单曲", date: "2031-05-15", songs: [
      { name: "制服に還る（回到制服）", duration: 184 } ] },
    { name: "新しい黒板", type: "专辑", date: "2032-04-05", songs: [
      { name: "新しい黒板（崭新黑板）", duration: 231 }, { name: "白い夕焼け（苍白晚霞）", duration: 223 }, { name: "夕焼けへ続く（通往晚霞）", duration: 404 },
      { name: "涙、雨音（泪与雨声）", duration: 413 }, { name: "銀河へ続く（通往银河）", duration: 228 }, { name: "長い障子（漫长障子）", duration: 228 },
      { name: "泉、岬（泉与海角）", duration: 239 }, { name: "古い想い（陈旧思念）", duration: 220 }, { name: "実、枝（果实与枝）", duration: 238 },
      { name: "障子に還る（回到障子）", duration: 219 }, { name: "深い岸（深邃岸）", duration: 231 } ] },
    { name: "淡い恋", type: "专辑", date: "2033-04-28", songs: [
      { name: "淡い恋（淡淡恋）", duration: 198 }, { name: "詩、川（诗与河）", duration: 198 }, { name: "明るい暁（明亮拂晓）", duration: 264 },
      { name: "滝、音色（瀑布与音色）", duration: 217 }, { name: "小さな調べ（小小曲调）", duration: 201 }, { name: "夕暮れ、響き（黄昏与回响）", duration: 227 },
      { name: "遠い星（遥远星）", duration: 154 }, { name: "静かな潮騒（静谧潮鸣）", duration: 210 }, { name: "微笑を待つ（等待微笑）", duration: 229 },
      { name: "静かな凪（静谧风平浪静）", duration: 232 }, { name: "海辺の向こう（海边的彼方）", duration: 172 } ] },
    { name: "春休みを待つ", type: "EP", date: "2034-03-27", songs: [
      { name: "春休みを待つ（等待春假）", duration: 259 }, { name: "淡い虹（淡淡彩虹）", duration: 215 }, { name: "空が降る（天空飘落）", duration: 207 },
      { name: "三日月、葉（新月与叶）", duration: 238 } ] },
    { name: "枝が揺れる", type: "单曲", date: "2035-01-14", songs: [
      { name: "枝が揺れる（枝摇曳）", duration: 200 } ] },
    { name: "静かな霧", type: "单曲", date: "2036-01-04", songs: [
      { name: "静かな霧（静谧雾）", duration: 179 } ] },
    { name: "三日月へ続く", type: "单曲", date: "2037-02-27", songs: [
      { name: "三日月へ続く（通往新月）", duration: 205 } ] },
    { name: "優しい音色", type: "专辑", date: "2038-02-13", songs: [
      { name: "優しい音色（温柔音色）", duration: 237 }, { name: "葉が揺れる（叶摇曳）", duration: 255 }, { name: "雨音が揺れる（雨声摇曳）", duration: 205 },
      { name: "花、恋（花与恋）", duration: 224 }, { name: "満月、滝（满月与瀑布）", duration: 234 }, { name: "雪、雨音（雪与雨声）", duration: 170 },
      { name: "満月よ（满月啊）", duration: 219 } ] },
    { name: "約束を抱いて", type: "专辑", date: "2038-12-20", songs: [
      { name: "約束を抱いて（拥抱约定）", duration: 126 }, { name: "黄昏の行方（黄昏的踪迹）", duration: 216 }, { name: "古い屋上（陈旧天台）", duration: 218 },
      { name: "新しい窓（崭新窗）", duration: 220 }, { name: "心だけ（只有心）", duration: 226 }, { name: "新しい給食（崭新午餐）", duration: 236 },
      { name: "透明な夕焼け（透明晚霞）", duration: 226 } ] },
    { name: "霜、調べ", type: "专辑", date: "2039-12-22", songs: [
      { name: "霜、調べ（霜与曲调）", duration: 166 }, { name: "遠い星屑（遥远星屑）", duration: 141 }, { name: "歌を待つ（等待歌）", duration: 264 },
      { name: "雨まで（直到雨）", duration: 237 }, { name: "暗い夜風（昏暗夜风）", duration: 133 }, { name: "向日葵、海（向日葵与海）", duration: 212 },
      { name: "泉まで（直到泉）", duration: 211 }, { name: "島の向こう（岛的彼方）", duration: 137 }, { name: "月、木漏れ日（月与林间光斑）", duration: 176 },
      { name: "透明な星空（透明星空）", duration: 234 }, { name: "体育祭に還る（回到体育祭）", duration: 256 } ] },
    { name: "遠い教室", type: "单曲", date: "2040-11-20", songs: [
      { name: "遠い教室（遥远教室）", duration: 121 } ] },
    { name: "湖まで", type: "专辑", date: "2041-12-23", songs: [
      { name: "湖まで（直到湖）", duration: 210 }, { name: "岸を越えて（越过岸）", duration: 218 }, { name: "恋よ（恋啊）", duration: 205 },
      { name: "浜の向こう（海滨的彼方）", duration: 234 }, { name: "青空よ（青空啊）", duration: 252 }, { name: "畳に還る（回到榻榻米）", duration: 156 },
      { name: "歌を探して（寻找歌）", duration: 227 }, { name: "星空が降る（星空飘落）", duration: 284 }, { name: "三日月、枝（新月与枝）", duration: 228 },
      { name: "旋律、心音（旋律与心跳）", duration: 235 }, { name: "光景だけ（只有光景）", duration: 222 } ] },
    { name: "銀河を探して", type: "EP", date: "2042-12-03", songs: [
      { name: "銀河を探して（寻找银河）", duration: 200 }, { name: "白い木漏れ日（苍白林间光斑）", duration: 200 }, { name: "三日月を探して（寻找新月）", duration: 123 },
      { name: "唄を抱いて（拥抱歌谣）", duration: 182 }, { name: "黄昏、霜（黄昏与霜）", duration: 252 } ] },
    { name: "微笑の行方", type: "专辑", date: "2043-09-28", songs: [
      { name: "微笑の行方（微笑的踪迹）", duration: 200 }, { name: "雨、夕焼け（雨与晚霞）", duration: 197 }, { name: "明るい微笑（明亮微笑）", duration: 197 },
      { name: "霜を越えて（越过霜）", duration: 219 }, { name: "遠い涙（遥远泪）", duration: 250 }, { name: "岬の向こう（海角的彼方）", duration: 207 },
      { name: "長い畳（漫长榻榻米）", duration: 200 }, { name: "雪、星雲（雪与星云）", duration: 236 }, { name: "海に還る（回到海）", duration: 232 } ] },
    { name: "川、岸", type: "专辑", date: "2044-09-03", songs: [
      { name: "川、岸（河与岸）", duration: 236 }, { name: "深い浜（深邃海滨）", duration: 230 }, { name: "新しい恋（崭新恋）", duration: 236 },
      { name: "月よ（月啊）", duration: 214 }, { name: "放課後を越えて（越过放学后）", duration: 221 }, { name: "涙よ（泪啊）", duration: 204 },
      { name: "海辺まで（直到海边）", duration: 210 } ] },
    { name: "小さな約束", type: "专辑", date: "2045-09-05", songs: [
      { name: "小さな約束（小小约定）", duration: 209 }, { name: "銀河よ（银河啊）", duration: 369 }, { name: "秋風だけ（只有秋风）", duration: 197 },
      { name: "泉を越えて（越过泉）", duration: 204 }, { name: "夢を探して（寻找梦）", duration: 126 }, { name: "明るい朝焼け（明亮朝霞）", duration: 219 },
      { name: "微笑を抱いて（拥抱微笑）", duration: 227 }, { name: "新しい音色（崭新音色）", duration: 206 }, { name: "夜風を抱いて（拥抱夜风）", duration: 211 } ] },
    { name: "遠い放課後", type: "EP", date: "2046-09-21", songs: [
      { name: "遠い放課後（遥远放学后）", duration: 235 }, { name: "虹が降る（彩虹飘落）", duration: 200 }, { name: "月が揺れる（月摇曳）", duration: 235 },
      { name: "岬、涙（海角与泪）", duration: 196 }, { name: "夕暮れ、雪（黄昏与雪）", duration: 171 } ] },
    { name: "透明な潮騒", type: "专辑", date: "2047-08-19", songs: [
      { name: "透明な潮騒（透明潮鸣）", duration: 228 }, { name: "古い涙（陈旧泪）", duration: 222 }, { name: "縁側に還る（回到檐廊）", duration: 122 },
      { name: "島、実（岛与果实）", duration: 211 }, { name: "星が揺れる（星摇曳）", duration: 205 }, { name: "虹の行方（彩虹的踪迹）", duration: 213 },
      { name: "雨を越えて（越过雨）", duration: 173 } ] },
    { name: "花が降る", type: "专辑", date: "2048-08-10", songs: [
      { name: "花が降る（花飘落）", duration: 218 }, { name: "修学旅行に還る（回到修学旅行）", duration: 324 }, { name: "星雲が揺れる（星云摇曳）", duration: 255 },
      { name: "微笑だけ（只有微笑）", duration: 198 }, { name: "三日月まで（直到新月）", duration: 350 }, { name: "言葉を待つ（等待言语）", duration: 237 },
      { name: "深い海辺（深邃海边）", duration: 181 }, { name: "実、夜（果实与夜）", duration: 224 } ] },
    { name: "柔らかな歌", type: "单曲", date: "2049-07-17", songs: [
      { name: "柔らかな歌（柔软歌）", duration: 155 } ] },
    { name: "星空が揺れる", type: "EP", date: "2050-08-07", songs: [
      { name: "星空が揺れる（星空摇曳）", duration: 323 }, { name: "夜、心（夜与心）", duration: 206 }, { name: "光景を待つ（等待光景）", duration: 245 } ] },
    ],
  "Hello, Happy World!": [
    { name: "えがおのオーケストラっ!（笑容管弦乐！）", type: "单曲", date: "2017-05-17", songs: [ { name: "えがおのオーケストラっ!（笑容管弦乐！）", duration: 225 } ] },
    { name: "ハッピーシンセサイザ（Happy Synthesizer）", type: "单曲", date: "2017-08-30", songs: [ { name: "ハッピーシンセサイザ（Happy Synthesizer）", duration: 230 } ] },
    { name: "ゴーカ!ごーかい!?ファントムシーフ!（豪华！豪快！？Phantom Thief！）", type: "单曲", date: "2017-11-15", songs: [ { name: "ゴーカ!ごーかい!?ファントムシーフ!（豪华！豪快！？Phantom Thief！）", duration: 220 } ] },
    { name: "せかいのっびのびトラベル（世界的悠闲旅行）", type: "单曲", date: "2018-02-14", songs: [ { name: "せかいのっびのびトラベル（世界的悠闲旅行）", duration: 225 } ] },
    { name: "キラキラ☆Festa Day!", type: "单曲", date: "2018-06-20", songs: [ { name: "キラキラ☆Festa Day!", duration: 218 } ] },
    { name: "わちゃ・もちゃ・ぺったん行進曲（Wacha Mocha Pettan 进行曲）", type: "单曲", date: "2018-10-10", songs: [ { name: "わちゃ・もちゃ・ぺったん行進曲（Wacha Mocha Pettan 进行曲）", duration: 212 } ] },
      { name: "湖、霧", type: "专辑", date: "2026-08-01", songs: [
      { name: "湖、霧（湖与雾）", duration: 239 }, { name: "葉、調べ（叶与曲调）", duration: 202 }, { name: "満月の向こう（满月的彼方）", duration: 219 },
      { name: "明るい心音（明亮心跳）", duration: 128 }, { name: "残響を待つ（等待残响）", duration: 223 }, { name: "涙、川（泪与河）", duration: 179 },
      { name: "新しい言葉（崭新言语）", duration: 205 }, { name: "星屑が揺れる（星屑摇曳）", duration: 205 }, { name: "新しい帰り道（崭新归途）", duration: 201 } ] },
    { name: "朝焼け、夜", type: "EP", date: "2027-06-14", songs: [
      { name: "朝焼け、夜（朝霞与夜）", duration: 204 }, { name: "遠い月（遥远月）", duration: 137 }, { name: "優しい歌（温柔歌）", duration: 236 },
      { name: "滝、流星（瀑布与流星）", duration: 232 }, { name: "星屑の向こう（星屑的彼方）", duration: 230 } ] },
    { name: "古い約束", type: "EP", date: "2028-04-29", songs: [
      { name: "古い約束（陈旧约定）", duration: 218 }, { name: "空、落ち葉（天空与落叶）", duration: 223 }, { name: "満月、月光（满月与月光）", duration: 255 },
      { name: "透明な虹（透明彩虹）", duration: 351 } ] },
    { name: "白い星空", type: "专辑", date: "2029-05-31", songs: [
      { name: "白い星空（苍白星空）", duration: 202 }, { name: "泉、記憶（泉与记忆）", duration: 176 }, { name: "遠い唄（遥远歌谣）", duration: 202 },
      { name: "唄、霜（歌谣与霜）", duration: 162 }, { name: "月を待つ（等待月）", duration: 203 }, { name: "月が降る（月飘落）", duration: 230 },
      { name: "長い夜明け（漫长黎明）", duration: 251 }, { name: "向日葵が揺れる（向日葵摇曳）", duration: 236 } ] },
    { name: "海へ続く", type: "专辑", date: "2030-03-24", songs: [
      { name: "海へ続く（通往海）", duration: 183 }, { name: "雪、潮騒（雪与潮鸣）", duration: 220 }, { name: "滝まで（直到瀑布）", duration: 134 },
      { name: "長い氷（漫长冰）", duration: 237 }, { name: "長い夕暮れ（漫长黄昏）", duration: 229 }, { name: "白い向日葵（苍白向日葵）", duration: 263 },
      { name: "春風だけ（只有春风）", duration: 220 }, { name: "長い黒板（漫长黑板）", duration: 155 }, { name: "白い青空（苍白青空）", duration: 135 },
      { name: "小さな音色（小小音色）", duration: 241 }, { name: "凪、朝焼け（风平浪静与朝霞）", duration: 204 } ] },
    { name: "朝焼けへ続く", type: "EP", date: "2031-04-15", songs: [
      { name: "朝焼けへ続く（通往朝霞）", duration: 250 }, { name: "夜明け、旋律（黎明与旋律）", duration: 221 }, { name: "淡い朝焼け（淡淡朝霞）", duration: 182 },
      { name: "歌、霞（歌与霞）", duration: 350 } ] },
    { name: "深い凪", type: "单曲", date: "2032-03-25", songs: [
      { name: "深い凪（深邃风平浪静）", duration: 216 } ] },
    { name: "長い放課後", type: "专辑", date: "2033-03-23", songs: [
      { name: "長い放課後（漫长放学后）", duration: 234 }, { name: "淡い涙（淡淡泪）", duration: 206 }, { name: "透明な三日月（透明新月）", duration: 202 },
      { name: "蛍を待つ（等待萤火虫）", duration: 218 }, { name: "深い湖（深邃湖）", duration: 234 }, { name: "蒼い月（苍蓝月）", duration: 174 },
      { name: "潮騒、紅葉（潮鸣与红叶）", duration: 233 }, { name: "雨音、想い（雨声与思念）", duration: 186 }, { name: "黄昏へ続く（通往黄昏）", duration: 221 } ] },
    { name: "眩しい時", type: "专辑", date: "2034-02-06", songs: [
      { name: "眩しい時（耀眼时光）", duration: 223 }, { name: "深い海（深邃海）", duration: 223 }, { name: "波まで（直到波）", duration: 191 },
      { name: "心音、向日葵（心跳与向日葵）", duration: 217 }, { name: "朝焼けの行方（朝霞的踪迹）", duration: 216 }, { name: "深い滝（深邃瀑布）", duration: 224 },
      { name: "心を待つ（等待心）", duration: 203 }, { name: "落ち葉、虹（落叶与彩虹）", duration: 172 }, { name: "湖へ続く（通往湖）", duration: 208 } ] },
    { name: "旋律の行方", type: "EP", date: "2035-02-20", songs: [
      { name: "旋律の行方（旋律的踪迹）", duration: 149 }, { name: "海、詩（海与诗）", duration: 204 }, { name: "三日月、音色（新月与音色）", duration: 204 },
      { name: "小さな涙（小小泪）", duration: 203 }, { name: "街に還る（回到街）", duration: 222 }, { name: "海、実（海与果实）", duration: 230 } ] },
    { name: "遠い帰り道", type: "专辑", date: "2036-01-22", songs: [
      { name: "遠い帰り道（遥远归途）", duration: 177 }, { name: "静かな夜明け（静谧黎明）", duration: 207 }, { name: "淡い旋律（淡淡旋律）", duration: 216 },
      { name: "青空へ続く（通往青空）", duration: 190 }, { name: "微笑、海辺（微笑与海边）", duration: 202 }, { name: "旋律よ（旋律啊）", duration: 227 },
      { name: "眩しい真夏（耀眼盛夏）", duration: 220 } ] },
    { name: "柔らかな向日葵", type: "EP", date: "2037-02-07", songs: [
      { name: "柔らかな向日葵（柔软向日葵）", duration: 212 }, { name: "雪、波（雪与波）", duration: 226 }, { name: "根、夜明け（根与黎明）", duration: 203 },
      { name: "時だけ（只有时光）", duration: 243 }, { name: "満月が揺れる（满月摇曳）", duration: 237 }, { name: "恋、凪（恋与风平浪静）", duration: 216 } ] },
    { name: "岸が揺れる", type: "专辑", date: "2038-02-03", songs: [
      { name: "岸が揺れる（岸摇曳）", duration: 230 }, { name: "遠い文化祭（遥远文化祭）", duration: 241 }, { name: "雨音、湖（雨声与湖）", duration: 230 },
      { name: "潮騒、黄昏（潮鸣与黄昏）", duration: 270 }, { name: "霜を抱いて（拥抱霜）", duration: 236 }, { name: "雨音、恋（雨声与恋）", duration: 220 },
      { name: "根、旋律（根与旋律）", duration: 206 }, { name: "深い岬（深邃海角）", duration: 179 } ] },
    { name: "淡い三日月", type: "EP", date: "2039-01-24", songs: [
      { name: "淡い三日月（淡淡新月）", duration: 234 }, { name: "窓に還る（回到窗）", duration: 165 }, { name: "透明な星雲（透明星云）", duration: 219 },
      { name: "蒼い星屑（苍蓝星屑）", duration: 221 } ] },
    { name: "想い、夕暮れ", type: "专辑", date: "2040-01-07", songs: [
      { name: "想い、夕暮れ（思念与黄昏）", duration: 220 }, { name: "小さな蕾（小小花苞）", duration: 215 }, { name: "満月の行方（满月的踪迹）", duration: 231 },
      { name: "窓を越えて（越过窗）", duration: 220 }, { name: "涙を抱いて（拥抱泪）", duration: 209 }, { name: "蒼い潮騒（苍蓝潮鸣）", duration: 225 },
      { name: "古い制服（陈旧制服）", duration: 201 } ] },
    { name: "青空を探して", type: "专辑", date: "2040-12-28", songs: [
      { name: "青空を探して（寻找青空）", duration: 212 }, { name: "朝焼けが降る（朝霞飘落）", duration: 265 }, { name: "霧、夜風（雾与夜风）", duration: 209 },
      { name: "空、朝焼け（天空与朝霞）", duration: 225 }, { name: "桜、凪（樱花与风平浪静）", duration: 217 }, { name: "新しい心（崭新心）", duration: 125 },
      { name: "響き、氷（回响与冰）", duration: 251 }, { name: "蕾、岬（花苞与海角）", duration: 256 }, { name: "月光、雪（月光与雪）", duration: 229 },
      { name: "柔らかな音色（柔软音色）", duration: 234 } ] },
    { name: "小さな響き", type: "单曲", date: "2041-10-30", songs: [
      { name: "小さな響き（小小回响）", duration: 142 } ] },
    { name: "遠い満月", type: "专辑", date: "2042-10-21", songs: [
      { name: "遠い満月（遥远满月）", duration: 411 }, { name: "満月へ続く（通往满月）", duration: 226 }, { name: "水面へ続く（通往水面）", duration: 213 },
      { name: "桜、虹（樱花与彩虹）", duration: 128 }, { name: "暗い凪（昏暗风平浪静）", duration: 179 }, { name: "想い、浜（思念与海滨）", duration: 208 },
      { name: "落ち葉、記憶（落叶与记忆）", duration: 162 }, { name: "音色よ（音色啊）", duration: 165 }, { name: "紅葉、凪（红叶与风平浪静）", duration: 229 } ] },
    { name: "想い、心音", type: "EP", date: "2043-10-26", songs: [
      { name: "想い、心音（思念与心跳）", duration: 158 }, { name: "白い三日月（苍白新月）", duration: 378 }, { name: "古い放課後（陈旧放学后）", duration: 194 },
      { name: "夜明け、三日月（黎明与新月）", duration: 186 }, { name: "落ち葉が揺れる（落叶摇曳）", duration: 142 } ] },
    { name: "岬、朝焼け", type: "专辑", date: "2044-10-22", songs: [
      { name: "岬、朝焼け（海角与朝霞）", duration: 243 }, { name: "淡い星雲（淡淡星云）", duration: 220 }, { name: "星よ（星啊）", duration: 233 },
      { name: "川に還る（回到河）", duration: 243 }, { name: "暁の向こう（拂晓的彼方）", duration: 216 }, { name: "時を待つ（等待时光）", duration: 224 },
      { name: "遠い街（遥远街）", duration: 143 }, { name: "波を越えて（越过波）", duration: 212 }, { name: "明るい言葉（明亮言语）", duration: 234 } ] },
    { name: "夜、枝", type: "单曲", date: "2045-08-06", songs: [
      { name: "夜、枝（夜与枝）", duration: 260 } ] },
    { name: "白い雲", type: "专辑", date: "2046-09-24", songs: [
      { name: "白い雲（苍白云）", duration: 155 }, { name: "調べ、夜（曲调与夜）", duration: 236 }, { name: "銀河の行方（银河的踪迹）", duration: 229 },
      { name: "流星、滝（流星与瀑布）", duration: 212 }, { name: "月光を抱いて（拥抱月光）", duration: 211 }, { name: "淡い心（淡淡心）", duration: 206 },
      { name: "蒼い海辺（苍蓝海边）", duration: 207 }, { name: "星空まで（直到星空）", duration: 201 }, { name: "滝、詩（瀑布与诗）", duration: 226 } ] },
    { name: "根、波", type: "单曲", date: "2047-08-06", songs: [
      { name: "根、波（根与波）", duration: 216 } ] },
    { name: "月、浜", type: "专辑", date: "2048-08-17", songs: [
      { name: "月、浜（月与海滨）", duration: 208 }, { name: "夏休みを待つ（等待暑假）", duration: 212 }, { name: "霞、月（霞与月）", duration: 200 },
      { name: "雨音を越えて（越过雨声）", duration: 235 }, { name: "涙を待つ（等待泪）", duration: 230 }, { name: "霞を越えて（越过霞）", duration: 176 },
      { name: "滝、暁（瀑布与拂晓）", duration: 177 }, { name: "想い、銀河（思念与银河）", duration: 210 }, { name: "青空が揺れる（青空摇曳）", duration: 207 },
      { name: "暗い霧（昏暗雾）", duration: 204 } ] },
    { name: "蒼い朝焼け", type: "专辑", date: "2049-06-09", songs: [
      { name: "蒼い朝焼け（苍蓝朝霞）", duration: 204 }, { name: "紅葉、星空（红叶与星空）", duration: 257 }, { name: "明るい青空（明亮青空）", duration: 223 },
      { name: "静かな霞（静谧霞）", duration: 144 }, { name: "夢、凪（梦与风平浪静）", duration: 221 }, { name: "深い夜（深邃夜）", duration: 211 },
      { name: "柔らかな唄（柔软歌谣）", duration: 257 } ] },
    { name: "白い灯り", type: "单曲", date: "2050-06-20", songs: [
      { name: "白い灯り（苍白灯火）", duration: 148 } ] },
    ],
  "Morfonica": [
    { name: "Daylight -デイライト-（Daylight）", type: "单曲", date: "2020-05-27", songs: [ { name: "Daylight -デイライト-（Daylight）", duration: 240 } ] },
    { name: "ブルームブルーム（Bloom Bloom）", type: "单曲", date: "2020-08-26", songs: [ { name: "ブルームブルーム（Bloom Bloom）", duration: 235 } ] },
    { name: "開幕ゼノン（开幕Zenon）", type: "单曲", date: "2020-12-16", songs: [ { name: "開幕ゼノン（开幕Zenon）", duration: 230 } ] },
    { name: "はれるや（晴れるや）", type: "单曲", date: "2021-04-28", songs: [ { name: "はれるや（晴れるや）", duration: 228 } ] },
    { name: "The Circle Of...", type: "单曲", date: "2021-08-25", songs: [ { name: "The Circle Of...", duration: 242 } ] },
    { name: "Ever Sky Blue", type: "单曲", date: "2022-01-26", songs: [ { name: "Ever Sky Blue", duration: 238 } ] },
      { name: "遠い朝焼け", type: "专辑", date: "2026-06-21", songs: [
      { name: "遠い朝焼け（遥远朝霞）", duration: 208 }, { name: "響きよ（回响啊）", duration: 173 }, { name: "涙だけ（只有泪）", duration: 230 },
      { name: "根、朝焼け（根与朝霞）", duration: 239 }, { name: "夕焼け、岸（晚霞与岸）", duration: 220 }, { name: "白い真夏（苍白盛夏）", duration: 165 },
      { name: "透明な月（透明月）", duration: 244 }, { name: "夕焼けよ（晚霞啊）", duration: 253 }, { name: "遠い制服（遥远制服）", duration: 381 },
      { name: "小さな想い（小小思念）", duration: 165 } ] },
    { name: "古い帰り道", type: "专辑", date: "2027-07-25", songs: [
      { name: "古い帰り道（陈旧归途）", duration: 213 }, { name: "暁を待つ（等待拂晓）", duration: 275 }, { name: "月光を越えて（越过月光）", duration: 193 },
      { name: "岸、月（岸与月）", duration: 242 }, { name: "優しい恋（温柔恋）", duration: 190 }, { name: "春風を待つ（等待春风）", duration: 167 },
      { name: "向日葵に咲く（在向日葵绽放）", duration: 256 }, { name: "涙、空（泪与天空）", duration: 256 }, { name: "響き、若葉（回响与新叶）", duration: 253 },
      { name: "透明な雨（透明雨）", duration: 245 }, { name: "滝へ続く（通往瀑布）", duration: 238 } ] },
    { name: "白い朝焼け", type: "专辑", date: "2028-06-21", songs: [
      { name: "白い朝焼け（苍白朝霞）", duration: 226 }, { name: "月、若葉（月与新叶）", duration: 241 }, { name: "柔らかな調べ（柔软曲调）", duration: 154 },
      { name: "流星、浜（流星与海滨）", duration: 237 }, { name: "涙、朝焼け（泪与朝霞）", duration: 212 }, { name: "月光、三日月（月光与新月）", duration: 242 },
      { name: "唄、紅葉（歌谣与红叶）", duration: 199 }, { name: "氷、黄昏（冰与黄昏）", duration: 196 }, { name: "氷、心（冰与心）", duration: 200 },
      { name: "縁側を越えて（越过檐廊）", duration: 221 } ] },
    { name: "三日月の向こう", type: "专辑", date: "2029-04-28", songs: [
      { name: "三日月の向こう（新月的彼方）", duration: 248 }, { name: "淡い青空（淡淡青空）", duration: 227 }, { name: "屋上に還る（回到天台）", duration: 263 },
      { name: "星空、夜風（星空与夜风）", duration: 254 }, { name: "浜、紅葉（海滨与红叶）", duration: 206 }, { name: "新しい唄（崭新歌谣）", duration: 273 },
      { name: "淡い響き（淡淡回响）", duration: 142 }, { name: "星空、氷（星空与冰）", duration: 226 }, { name: "蒼い星（苍蓝星）", duration: 234 },
      { name: "古い縁側（陈旧檐廊）", duration: 225 } ] },
    { name: "星空、月", type: "EP", date: "2030-05-14", songs: [
      { name: "星空、月（星空与月）", duration: 175 }, { name: "星屑を探して（寻找星屑）", duration: 215 }, { name: "優しい唄（温柔歌谣）", duration: 235 },
      { name: "静かな海（静谧海）", duration: 225 }, { name: "詩、月光（诗与月光）", duration: 209 } ] },
    { name: "旋律、島", type: "专辑", date: "2031-03-16", songs: [
      { name: "旋律、島（旋律与岛）", duration: 203 }, { name: "淡い空（淡淡天空）", duration: 237 }, { name: "静かな水面（静谧水面）", duration: 235 },
      { name: "向日葵、歌（向日葵与歌）", duration: 172 }, { name: "透明な朝焼け（透明朝霞）", duration: 137 }, { name: "調べ、氷（曲调与冰）", duration: 220 },
      { name: "新しい夢（崭新梦）", duration: 286 }, { name: "畳を越えて（越过榻榻米）", duration: 271 }, { name: "海、川（海与河）", duration: 383 },
      { name: "恋の行方（恋的踪迹）", duration: 388 }, { name: "言葉を探して（寻找言语）", duration: 226 } ] },
    { name: "遠い暁", type: "专辑", date: "2032-04-07", songs: [
      { name: "遠い暁（遥远拂晓）", duration: 187 }, { name: "小さな桜（小小樱花）", duration: 242 }, { name: "明るい心（明亮心）", duration: 254 },
      { name: "海辺、調べ（海边与曲调）", duration: 254 }, { name: "透明な岸（透明岸）", duration: 231 }, { name: "星空よ（星空啊）", duration: 224 },
      { name: "虹、根（彩虹与根）", duration: 214 }, { name: "海辺へ続く（通往海边）", duration: 238 } ] },
    { name: "柔らかな夢", type: "专辑", date: "2033-02-12", songs: [
      { name: "柔らかな夢（柔软梦）", duration: 389 }, { name: "潮騒、氷（潮鸣与冰）", duration: 282 }, { name: "向日葵、夜風（向日葵与夜风）", duration: 258 },
      { name: "滝、銀河（瀑布与银河）", duration: 143 }, { name: "霞、響き（霞与回响）", duration: 235 }, { name: "黄昏、音色（黄昏与音色）", duration: 230 },
      { name: "柔らかな桜（柔软樱花）", duration: 187 } ] },
    { name: "古い詩", type: "专辑", date: "2034-04-05", songs: [
      { name: "古い詩（陈旧诗）", duration: 254 }, { name: "雲が降る（云飘落）", duration: 136 }, { name: "蒼い黄昏（苍蓝黄昏）", duration: 194 },
      { name: "静かな岬（静谧海角）", duration: 215 }, { name: "白い夏休み（苍白暑假）", duration: 429 }, { name: "根、潮騒（根与潮鸣）", duration: 224 },
      { name: "小さな微笑（小小微笑）", duration: 132 }, { name: "海辺、霜（海边与霜）", duration: 224 }, { name: "暁よ（拂晓啊）", duration: 272 },
      { name: "明るい詩（明亮诗）", duration: 235 }, { name: "夢、星空（梦与星空）", duration: 190 } ] },
    { name: "霧、唄", type: "单曲", date: "2035-02-27", songs: [
      { name: "霧、唄（雾与歌谣）", duration: 236 } ] },
    { name: "岬、夕暮れ", type: "EP", date: "2036-03-01", songs: [
      { name: "岬、夕暮れ（海角与黄昏）", duration: 227 }, { name: "深い夜明け（深邃黎明）", duration: 245 }, { name: "明るい響き（明亮回响）", duration: 230 },
      { name: "街を越えて（越过街）", duration: 225 }, { name: "潮騒、記憶（潮鸣与记忆）", duration: 153 } ] },
    { name: "夕焼けの行方", type: "专辑", date: "2037-02-10", songs: [
      { name: "夕焼けの行方（晚霞的踪迹）", duration: 367 }, { name: "白い星雲（苍白星云）", duration: 221 }, { name: "月光、満月（月光与满月）", duration: 140 },
      { name: "蕾、詩（花苞与诗）", duration: 218 }, { name: "潮騒、蕾（潮鸣与花苞）", duration: 139 }, { name: "岸、潮騒（岸与潮鸣）", duration: 131 },
      { name: "暗い月光（昏暗月光）", duration: 193 }, { name: "暁が揺れる（拂晓摇曳）", duration: 258 }, { name: "唄、霞（歌谣与霞）", duration: 233 } ] },
    { name: "恋、紅葉", type: "专辑", date: "2038-01-24", songs: [
      { name: "恋、紅葉（恋与红叶）", duration: 246 }, { name: "遠い給食（遥远午餐）", duration: 239 }, { name: "深い霧（深邃雾）", duration: 220 },
      { name: "長い縁側（漫长檐廊）", duration: 446 }, { name: "朝焼けを待つ（等待朝霞）", duration: 169 }, { name: "夜、実（夜与果实）", duration: 239 },
      { name: "青空、泉（青空与泉）", duration: 220 }, { name: "凪、枝（风平浪静与枝）", duration: 216 } ] },
    { name: "涙、夜", type: "专辑", date: "2038-11-21", songs: [
      { name: "涙、夜（泪与夜）", duration: 233 }, { name: "霞、満月（霞与满月）", duration: 231 }, { name: "雨、言葉（雨与言语）", duration: 247 },
      { name: "明るい星空（明亮星空）", duration: 241 }, { name: "約束、海（约定与海）", duration: 276 }, { name: "星屑、海（星屑与海）", duration: 225 },
      { name: "潮騒に還る（回到潮鸣）", duration: 255 }, { name: "暁へ続く（通往拂晓）", duration: 215 }, { name: "泉が揺れる（泉摇曳）", duration: 227 },
      { name: "遠い夢（遥远梦）", duration: 239 } ] },
    { name: "詩だけ", type: "专辑", date: "2039-12-11", songs: [
      { name: "詩だけ（只有诗）", duration: 256 }, { name: "根、木漏れ日（根与林间光斑）", duration: 222 }, { name: "葉、根（叶与根）", duration: 143 },
      { name: "小さな夢（小小梦）", duration: 257 }, { name: "星まで（直到星）", duration: 235 }, { name: "夜、心音（夜与心跳）", duration: 321 },
      { name: "白い葉（苍白叶）", duration: 233 }, { name: "星雲、言葉（星云与言语）", duration: 199 }, { name: "深い川（深邃河）", duration: 218 },
      { name: "三日月を待つ（等待新月）", duration: 253 } ] },
    { name: "響き、心", type: "EP", date: "2040-12-30", songs: [
      { name: "響き、心（回响与心）", duration: 260 }, { name: "眩しい蛍（耀眼萤火虫）", duration: 217 }, { name: "月光、川（月光与河）", duration: 255 },
      { name: "泉、恋（泉与恋）", duration: 258 }, { name: "夕暮れ、葉（黄昏与叶）", duration: 141 }, { name: "三日月が降る（新月飘落）", duration: 234 } ] },
    { name: "夢だけ", type: "单曲", date: "2041-10-22", songs: [
      { name: "夢だけ（只有梦）", duration: 214 } ] },
    { name: "桜、心音", type: "EP", date: "2042-12-10", songs: [
      { name: "桜、心音（樱花与心跳）", duration: 234 }, { name: "三日月、銀河（新月与银河）", duration: 270 }, { name: "夢の行方（梦的踪迹）", duration: 219 },
      { name: "黒板に還る（回到黑板）", duration: 248 }, { name: "泉、満月（泉与满月）", duration: 273 }, { name: "涙、湖（泪与湖）", duration: 232 } ] },
    { name: "霞、夢", type: "单曲", date: "2043-09-21", songs: [
      { name: "霞、夢（霞与梦）", duration: 213 } ] },
    { name: "夜風、枝", type: "EP", date: "2044-10-11", songs: [
      { name: "夜風、枝（夜风与枝）", duration: 253 }, { name: "暁、若葉（拂晓与新叶）", duration: 243 }, { name: "小さな木漏れ日（小小林间光斑）", duration: 216 },
      { name: "虹が揺れる（彩虹摇曳）", duration: 342 } ] },
    { name: "岬、夜", type: "专辑", date: "2045-10-20", songs: [
      { name: "岬、夜（海角与夜）", duration: 283 }, { name: "蒼い浜（苍蓝海滨）", duration: 217 }, { name: "蕾、雨音（花苞与雨声）", duration: 257 },
      { name: "小さな心（小小心）", duration: 236 }, { name: "遠い心音（遥远心跳）", duration: 237 }, { name: "氷を越えて（越过冰）", duration: 185 },
      { name: "流星よ（流星啊）", duration: 239 } ] },
    { name: "白い枝", type: "单曲", date: "2046-07-28", songs: [
      { name: "白い枝（苍白枝）", duration: 229 } ] },
    { name: "水面、雨", type: "专辑", date: "2047-09-08", songs: [
      { name: "水面、雨（水面与雨）", duration: 243 }, { name: "雲へ続く（通往云）", duration: 225 }, { name: "満月が降る（满月飘落）", duration: 231 },
      { name: "海辺、水面（海边与水面）", duration: 222 }, { name: "海辺が揺れる（海边摇曳）", duration: 234 }, { name: "夜、浜（夜与海滨）", duration: 250 },
      { name: "枝、向日葵（枝与向日葵）", duration: 252 } ] },
    { name: "淡い歌", type: "专辑", date: "2048-06-27", songs: [
      { name: "淡い歌（淡淡歌）", duration: 252 }, { name: "古い窓（陈旧窗）", duration: 196 }, { name: "星雲、花（星云与花）", duration: 243 },
      { name: "根、星雲（根与星云）", duration: 308 }, { name: "三日月の行方（新月的踪迹）", duration: 144 }, { name: "銀河の向こう（银河的彼方）", duration: 236 },
      { name: "古い歌（陈旧歌）", duration: 177 }, { name: "虹を待つ（等待彩虹）", duration: 276 } ] },
    { name: "潮騒、岸", type: "单曲", date: "2049-06-24", songs: [
      { name: "潮騒、岸（潮鸣与岸）", duration: 241 } ] },
    { name: "根、湖", type: "专辑", date: "2050-07-12", songs: [
      { name: "根、湖（根与湖）", duration: 253 }, { name: "葉、微笑（叶与微笑）", duration: 404 }, { name: "落ち葉、流星（落叶与流星）", duration: 149 },
      { name: "雪、実（雪与果实）", duration: 375 }, { name: "眩しい流星（耀眼流星）", duration: 216 }, { name: "泉、氷（泉与冰）", duration: 237 },
      { name: "星屑、歌（星屑与歌）", duration: 256 }, { name: "若葉、島（新叶与岛）", duration: 225 }, { name: "淡い記憶（淡淡记忆）", duration: 236 },
      { name: "夕焼け、涙（晚霞与泪）", duration: 200 } ] },
    ],
  "RAISE A SUILEN": [
    { name: "ERA", type: "专辑", date: "2020-03-18", songs: [
       { name: "A Declaration of ×××", duration: 235 }, { name: "Invincible Fighter", duration: 240 },
       { name: "EXPOSE 'Burn Out!!!'", duration: 230 }, { name: "Beautiful Birthday", duration: 228 },
       { name: "HELL! or HELL?", duration: 245 }, { name: "R.I.O.T", duration: 232 },
       { name: "CORUSCATE -DNA-", duration: 238 }, { name: "SOUL SOLDIER", duration: 236 } ] },
    { name: "A Declaration of ×××", type: "单曲", date: "2018-12-12", songs: [ { name: "A Declaration of ×××", duration: 235 } ] },
    { name: "Invincible Fighter", type: "单曲", date: "2019-03-20", songs: [ { name: "Invincible Fighter", duration: 240 } ] },
    { name: "EXPOSE 'Burn Out!!!'", type: "单曲", date: "2019-06-19", songs: [ { name: "EXPOSE 'Burn Out!!!'", duration: 230 } ] },
    { name: "HELL! or HELL?", type: "单曲", date: "2019-09-18", songs: [ { name: "HELL! or HELL?", duration: 245 } ] },
    { name: "R.I.O.T", type: "单曲", date: "2020-01-22", songs: [ { name: "R.I.O.T", duration: 232 } ] },
    { name: "Sacred world", type: "单曲", date: "2020-10-21", songs: [ { name: "Sacred world", duration: 236 } ] },
      { name: "Wind Ocean", type: "专辑", date: "2026-06-16", songs: [
      { name: "Wind Ocean（风的海洋）", duration: 354 }, { name: "Overcast Tide（阴云的潮汐）", duration: 258 }, { name: "Fable Canvas（寓言的画布）", duration: 234 },
      { name: "Rust Heart（锈迹的心）", duration: 208 }, { name: "Storm Meadow（风暴的草地）", duration: 446 }, { name: "Asphalt Compass（柏油的罗盘）", duration: 284 },
      { name: "Flood Concrete（洪流的水泥）", duration: 225 }, { name: "Moon Ember（月亮的余烬）", duration: 219 }, { name: "Sky Iron（天空的铁）", duration: 218 } ] },
    { name: "Spark Field", type: "专辑", date: "2027-07-17", songs: [
      { name: "Spark Field（火花的原野）", duration: 240 }, { name: "Moon Storm（月亮的风暴）", duration: 208 }, { name: "Trail Kite（足迹的风筝）", duration: 182 },
      { name: "Moon Thaw（月亮的融雪）", duration: 202 }, { name: "Wind Soil（风的土壤）", duration: 254 }, { name: "Mist Tree（薄雾的树）", duration: 229 },
      { name: "Paperplane Glass（纸飞机的玻璃）", duration: 246 }, { name: "Asphalt Quartz（柏油的石英）", duration: 253 }, { name: "Pulse Harbor（脉冲的港湾）", duration: 379 },
      { name: "Canvas Faded（画布的褪色）", duration: 240 } ] },
    { name: "Beacon Blossom", type: "专辑", date: "2028-05-26", songs: [
      { name: "Beacon Blossom（灯塔的花开）", duration: 256 }, { name: "Fog Overcast（雾的阴云）", duration: 215 }, { name: "Quartz Steam（石英的蒸汽）", duration: 233 },
      { name: "Highway Thaw（公路的融雪）", duration: 219 }, { name: "Desert Orbit（荒原的轨道）", duration: 187 }, { name: "Thunder Hollow（雷的空洞）", duration: 256 },
      { name: "Asphalt Silver（柏油的银色）", duration: 131 }, { name: "Tide Storm（潮汐的风暴）", duration: 220 }, { name: "Thaw Midnight（融雪的午夜）", duration: 218 },
      { name: "Wood Crescent（树林的新月）", duration: 144 }, { name: "Ridge Leaf（山脊的叶）", duration: 379 } ] },
    { name: "Hollow Star", type: "专辑", date: "2029-06-19", songs: [
      { name: "Hollow Star（空洞的星）", duration: 166 }, { name: "Rust Fable（锈迹的寓言）", duration: 286 }, { name: "Ocean Ice（海洋的冰）", duration: 162 },
      { name: "Motion Canvas（律动的画布）", duration: 244 }, { name: "Tower Hollow（塔的空洞）", duration: 257 }, { name: "Signal Tower（信号的塔）", duration: 226 },
      { name: "Feather Bloom（羽毛的绽放）", duration: 235 } ] },
    { name: "Thaw Desert", type: "单曲", date: "2030-05-19", songs: [
      { name: "Thaw Desert（融雪的荒原）", duration: 254 } ] },
    { name: "Steam Feather", type: "专辑", date: "2031-04-19", songs: [
      { name: "Steam Feather（蒸汽的羽毛）", duration: 214 }, { name: "Shadow Harbor（影子的港湾）", duration: 227 }, { name: "Fog Blossom（雾的花开）", duration: 188 },
      { name: "Ocean Feather（海洋的羽毛）", duration: 276 }, { name: "Mist Orbit（薄雾的轨道）", duration: 249 }, { name: "Dawn Lake（黎明的湖）", duration: 244 },
      { name: "Gravel Halo（砾石的光晕）", duration: 381 }, { name: "Drift Glass（漂流的玻璃）", duration: 248 }, { name: "Motel Dust（汽车旅馆的尘埃）", duration: 233 },
      { name: "Glow Shell（辉光的贝壳）", duration: 251 }, { name: "Plain Quiet（平原的寂静）", duration: 256 } ] },
    { name: "Sea Shallow", type: "专辑", date: "2032-04-30", songs: [
      { name: "Sea Shallow（海的浅滩）", duration: 267 }, { name: "Satellite Ballet（卫星的芭蕾）", duration: 251 }, { name: "Wood Paperplane（树林的纸飞机）", duration: 216 },
      { name: "Paperplane Summer（纸飞机的夏天）", duration: 344 }, { name: "Hill Rain（山丘的雨）", duration: 422 }, { name: "Kite Slope（风筝的斜坡）", duration: 243 },
      { name: "Compass Ridge（罗盘的山脊）", duration: 218 } ] },
    { name: "Marrow Compass", type: "专辑", date: "2033-04-03", songs: [
      { name: "Marrow Compass（骨髓的罗盘）", duration: 226 }, { name: "Forest Wires（森林的电线）", duration: 199 }, { name: "Crescent Orbit（新月的轨道）", duration: 146 },
      { name: "Iron Ivory（铁的象牙）", duration: 391 }, { name: "Spark Golden（火花的金色）", duration: 198 }, { name: "Road Flood（道路的洪流）", duration: 244 },
      { name: "Fog Pebble（雾的卵石）", duration: 191 }, { name: "Sun Vine（太阳的藤蔓）", duration: 245 }, { name: "Flame Slope（火焰的斜坡）", duration: 147 },
      { name: "Petal Shore（花瓣的岸边）", duration: 394 }, { name: "Harbor Cloud（港湾的云）", duration: 251 } ] },
    { name: "Field Fleet", type: "EP", date: "2034-04-01", songs: [
      { name: "Field Fleet（原野的舰队）", duration: 247 }, { name: "Pine Crystal（松的水晶）", duration: 237 }, { name: "Blanket Paperplane（绒毯的纸飞机）", duration: 426 },
      { name: "Storm Shadow（风暴的影子）", duration: 244 }, { name: "Smoke Meadow（烟雾的草地）", duration: 232 } ] },
    { name: "Garden Leaf", type: "专辑", date: "2035-03-08", songs: [
      { name: "Garden Leaf（花园的叶）", duration: 219 }, { name: "Journey Wood（旅程的树林）", duration: 193 }, { name: "Diamond Haze（钻石的轻雾）", duration: 216 },
      { name: "Lake Nightfall（湖的夜幕）", duration: 220 }, { name: "Faded Signal（褪色的信号）", duration: 270 }, { name: "Compass Lake（罗盘的湖）", duration: 246 },
      { name: "Flame Roof（火焰的屋顶）", duration: 208 }, { name: "Journey Salt（旅程的盐）", duration: 167 }, { name: "Overcast Frost（阴云的霜）", duration: 274 },
      { name: "Nightfall Midnight（夜幕的午夜）", duration: 246 } ] },
    { name: "Thaw Iron", type: "单曲", date: "2036-03-18", songs: [
      { name: "Thaw Iron（融雪的铁）", duration: 274 } ] },
    { name: "Sky Circle", type: "专辑", date: "2037-01-16", songs: [
      { name: "Sky Circle（天空的圆圈）", duration: 245 }, { name: "Cinder Storm（炭烬的风暴）", duration: 275 }, { name: "Silver Blanket（银色的绒毯）", duration: 248 },
      { name: "Fog Harbor（雾的港湾）", duration: 195 }, { name: "Shell Wind（贝壳的风）", duration: 230 }, { name: "Grain Sun（颗粒的太阳）", duration: 237 },
      { name: "Dusk Satellite（薄暮的卫星）", duration: 181 }, { name: "Whisper Sky（低语的天空）", duration: 243 } ] },
    { name: "Daybreak Pine", type: "单曲", date: "2037-12-21", songs: [
      { name: "Daybreak Pine（黎明的松）", duration: 236 } ] },
    { name: "Lake Overcast", type: "EP", date: "2039-01-28", songs: [
      { name: "Lake Overcast（湖的阴云）", duration: 251 }, { name: "Blossom Circle（花开的圆圈）", duration: 253 }, { name: "Breeze Tide（微风的潮汐）", duration: 243 },
      { name: "Faded Petal（褪色的花瓣）", duration: 245 }, { name: "Wish Mist（愿望的薄雾）", duration: 170 }, { name: "Harbor Flood（港湾的洪流）", duration: 182 } ] },
    { name: "Nest Golden", type: "单曲", date: "2039-12-20", songs: [
      { name: "Nest Golden（巢的金色）", duration: 245 } ] },
    { name: "Road Fleet", type: "EP", date: "2040-12-24", songs: [
      { name: "Road Fleet（道路的舰队）", duration: 234 }, { name: "Slope Valley（斜坡的山谷）", duration: 248 }, { name: "Song Slope（歌的斜坡）", duration: 256 } ] },
    { name: "Loam Sky", type: "专辑", date: "2041-10-10", songs: [
      { name: "Loam Sky（沃土的天空）", duration: 239 }, { name: "Canvas Amber（画布的琥珀）", duration: 184 }, { name: "Static Thaw（静电的融雪）", duration: 226 },
      { name: "Dust Silence（尘埃的沉寂）", duration: 235 }, { name: "Cinder Silence（炭烬的沉寂）", duration: 220 }, { name: "Mirrors Broken（镜子的破碎）", duration: 327 },
      { name: "Gravel Storm（砾石的风暴）", duration: 263 }, { name: "Drift Moss（漂流的青苔）", duration: 215 }, { name: "Stone Sand（石头的沙）", duration: 229 },
      { name: "Thaw Stream（融雪的溪流）", duration: 261 }, { name: "Breeze Vapor（微风的雾霭）", duration: 236 } ] },
    { name: "Golden Halo", type: "EP", date: "2042-10-07", songs: [
      { name: "Golden Halo（金色的光晕）", duration: 236 }, { name: "Orbit Fog（轨道的雾）", duration: 233 }, { name: "Undertow Quartz（暗流的石英）", duration: 240 },
      { name: "Circle Slope（圆圈的斜坡）", duration: 210 }, { name: "Desert Meadow（荒原的草地）", duration: 234 } ] },
    { name: "Sky Lake", type: "专辑", date: "2043-10-13", songs: [
      { name: "Sky Lake（天空的湖）", duration: 246 }, { name: "Anchor Dawn（锚的黎明）", duration: 200 }, { name: "Motion Grain（律动的颗粒）", duration: 216 },
      { name: "Shell Field（贝壳的原野）", duration: 188 }, { name: "Highway Bloom（公路的绽放）", duration: 240 }, { name: "Neon Ashes（霓虹的灰烬）", duration: 236 },
      { name: "Thunder Pebble（雷的卵石）", duration: 183 } ] },
    { name: "Shadow Cloud", type: "专辑", date: "2044-08-17", songs: [
      { name: "Shadow Cloud（影子的云）", duration: 248 }, { name: "Spark Dawn（火花的黎明）", duration: 247 }, { name: "Mirrors Motion（镜子的律动）", duration: 228 },
      { name: "Silver Undertow（银色的暗流）", duration: 234 }, { name: "Pebble Salt（卵石的盐）", duration: 332 }, { name: "Velvet Sky（天鹅绒的天空）", duration: 218 },
      { name: "Velvet Lake（天鹅绒的湖）", duration: 138 } ] },
    { name: "Blossom Sky", type: "EP", date: "2045-10-01", songs: [
      { name: "Blossom Sky（花开的天空）", duration: 278 }, { name: "Cinder Shallow（炭烬的浅滩）", duration: 176 }, { name: "Garden Glass（花园的玻璃）", duration: 258 },
      { name: "Wish Echo（愿望的回声）", duration: 225 }, { name: "Diamond Harbor（钻石的港湾）", duration: 224 }, { name: "Coral Vapor（珊瑚的雾霭）", duration: 245 } ] },
    { name: "Ember Silk", type: "EP", date: "2046-10-16", songs: [
      { name: "Ember Silk（余烬的丝绸）", duration: 173 }, { name: "Dust Ember（尘埃的余烬）", duration: 215 }, { name: "Steam Road（蒸汽的道路）", duration: 158 } ] },
    { name: "Moon Grain", type: "单曲", date: "2047-09-21", songs: [
      { name: "Moon Grain（月亮的颗粒）", duration: 203 } ] },
    { name: "Midnight Ivory", type: "专辑", date: "2048-07-17", songs: [
      { name: "Midnight Ivory（午夜的象牙）", duration: 213 }, { name: "Snow Loam（雪的沃土）", duration: 142 }, { name: "Lake Glimmer（湖的微光）", duration: 193 },
      { name: "Daybreak Tide（黎明的潮汐）", duration: 288 }, { name: "Trail Silence（足迹的沉寂）", duration: 314 }, { name: "Veil Shadow（帷幕的影子）", duration: 173 },
      { name: "Stone Concrete（石头的水泥）", duration: 255 }, { name: "Bloom Valley（绽放的山谷）", duration: 224 }, { name: "Meridian Frost（子午线的霜）", duration: 229 },
      { name: "Silence Petal（沉寂的花瓣）", duration: 257 }, { name: "Dust Undertow（尘埃的暗流）", duration: 244 } ] },
    { name: "Heart Motion", type: "EP", date: "2049-07-24", songs: [
      { name: "Heart Motion（心的律动）", duration: 245 }, { name: "Quartz Twilight（石英的暮色）", duration: 244 }, { name: "Road Valley（道路的山谷）", duration: 249 },
      { name: "Blanket Drift（绒毯的漂流）", duration: 135 }, { name: "Overcast Fable（阴云的寓言）", duration: 190 }, { name: "Iron Feather（铁的羽毛）", duration: 378 } ] },
    { name: "Petal Kite", type: "专辑", date: "2050-07-30", songs: [
      { name: "Petal Kite（花瓣的风筝）", duration: 181 }, { name: "Wood Undertow（树林的暗流）", duration: 220 }, { name: "Amber Blanket（琥珀的绒毯）", duration: 237 },
      { name: "Silk Velvet（丝绸的天鹅绒）", duration: 232 }, { name: "Satellite Tide（卫星的潮汐）", duration: 245 }, { name: "Ember Undertow（余烬的暗流）", duration: 226 },
      { name: "Slope Pine（斜坡的松）", duration: 237 }, { name: "Loam River（沃土的河流）", duration: 231 }, { name: "Crystal Paperplane（水晶的纸飞机）", duration: 253 },
      { name: "River Ashes（河流的灰烬）", duration: 210 }, { name: "Thaw Wires（融雪的电线）", duration: 248 } ] },
    ],
  "Ave Mujica": [
    { name: "KiLLKiSS", type: "专辑", date: "2025-01-15", songs: [
       { name: "黒のバースデイ（黑色生日）", duration: 245 }, { name: "ふたつの月（两个月亮）", duration: 238 },
       { name: "Choir 'S' Choir", duration: 252 }, { name: "Mas?uerade Rhapsody Re?uest", duration: 248 },
       { name: "素晴らしき世界 でも どこにもない場所（美好的世界 却无处可寻）", duration: 242 },
       { name: "Angles", duration: 235 }, { name: "Ave Mujica", duration: 240 },
       { name: "顔（脸）", duration: 230 }, { name: "蝕（蚀）", duration: 246 }, { name: "堕天（堕天）", duration: 250 } ] },
    { name: "黒のバースデイ（黑色生日）", type: "单曲", date: "2023-04-26", songs: [ { name: "黒のバースデイ（黑色生日）", duration: 245 } ] },
    { name: "ふたつの月（两个月亮）", type: "单曲", date: "2023-06-14", songs: [ { name: "ふたつの月（两个月亮）", duration: 238 } ] },
    { name: "Choir 'S' Choir", type: "单曲", date: "2023-08-16", songs: [ { name: "Choir 'S' Choir", duration: 252 } ] },
    { name: "Mas?uerade Rhapsody Re?uest", type: "单曲", date: "2023-10-18", songs: [ { name: "Mas?uerade Rhapsody Re?uest", duration: 248 } ] },
    { name: "Angles", type: "单曲", date: "2024-01-24", songs: [ { name: "Angles", duration: 235 } ] },
    { name: "Ave Mujica", type: "单曲", date: "2024-04-24", songs: [ { name: "Ave Mujica", duration: 240 } ] },
    { name: "堕天（堕天）", type: "单曲", date: "2024-08-21", songs: [ { name: "堕天（堕天）", duration: 250 } ] },
      { name: "月光、青空", type: "EP", date: "2026-07-23", songs: [
      { name: "月光、青空（月光与青空）", duration: 220 }, { name: "歌、星雲（歌与星云）", duration: 244 }, { name: "眩しい季節（耀眼季节）", duration: 231 } ] },
    { name: "満月、星雲", type: "专辑", date: "2027-07-22", songs: [
      { name: "満月、星雲（满月与星云）", duration: 202 }, { name: "青空、微笑（青空与微笑）", duration: 226 }, { name: "柔らかな木漏れ日（柔软林间光斑）", duration: 260 },
      { name: "霞、木漏れ日（霞与林间光斑）", duration: 249 }, { name: "青空が降る（青空飘落）", duration: 252 }, { name: "古い夢（陈旧梦）", duration: 252 },
      { name: "枝、葉（枝与叶）", duration: 261 } ] },
    { name: "白い実", type: "专辑", date: "2028-05-19", songs: [
      { name: "白い実（苍白果实）", duration: 260 }, { name: "花、凪（花与风平浪静）", duration: 244 }, { name: "三日月、想い（新月与思念）", duration: 241 },
      { name: "透明な海（透明海）", duration: 181 }, { name: "若葉、夕焼け（新叶与晚霞）", duration: 239 }, { name: "根、唄（根与歌谣）", duration: 259 },
      { name: "静かな氷（静谧冰）", duration: 238 } ] },
    { name: "岸、夕焼け", type: "专辑", date: "2029-06-20", songs: [
      { name: "岸、夕焼け（岸与晚霞）", duration: 247 }, { name: "詩、心音（诗与心跳）", duration: 289 }, { name: "記憶を待つ（等待记忆）", duration: 254 },
      { name: "眩しい星雲（耀眼星云）", duration: 423 }, { name: "星、夕暮れ（星与黄昏）", duration: 166 }, { name: "恋、言葉（恋与言语）", duration: 231 },
      { name: "雨音、約束（雨声与约定）", duration: 249 }, { name: "淡い言葉（淡淡言语）", duration: 291 } ] },
    { name: "雪、若葉", type: "单曲", date: "2030-03-25", songs: [
      { name: "雪、若葉（雪与新叶）", duration: 261 } ] },
    { name: "優しい言葉", type: "EP", date: "2031-04-21", songs: [
      { name: "優しい言葉（温柔言语）", duration: 323 }, { name: "雲よ（云啊）", duration: 260 }, { name: "夕暮れを越えて（越过黄昏）", duration: 243 },
      { name: "白い追憶（苍白追忆）", duration: 264 } ] },
    { name: "波へ続く", type: "EP", date: "2032-03-28", songs: [
      { name: "波へ続く（通往波）", duration: 242 }, { name: "白い若葉（苍白新叶）", duration: 246 }, { name: "虹、夜（彩虹与夜）", duration: 166 } ] },
    { name: "新しい心音", type: "专辑", date: "2033-03-18", songs: [
      { name: "新しい心音（崭新心跳）", duration: 423 }, { name: "若葉、響き（新叶与回响）", duration: 368 }, { name: "修学旅行を越えて（越过修学旅行）", duration: 193 },
      { name: "実、落ち葉（果实与落叶）", duration: 230 }, { name: "浜が揺れる（海滨摇曳）", duration: 252 }, { name: "雪、泉（雪与泉）", duration: 164 },
      { name: "葉、氷（叶与冰）", duration: 228 }, { name: "明るい夢（明亮梦）", duration: 242 } ] },
    { name: "白い暁", type: "EP", date: "2034-02-20", songs: [
      { name: "白い暁（苍白拂晓）", duration: 204 }, { name: "黄昏まで（直到黄昏）", duration: 348 }, { name: "雨音、朝焼け（雨声与朝霞）", duration: 283 },
      { name: "夜、水面（夜与水面）", duration: 246 }, { name: "透明な流星（透明流星）", duration: 261 } ] },
    { name: "朝焼けが揺れる", type: "专辑", date: "2035-01-21", songs: [
      { name: "朝焼けが揺れる（朝霞摇曳）", duration: 243 }, { name: "蕾、雲（花苞与云）", duration: 209 }, { name: "透明な島（透明岛）", duration: 222 },
      { name: "柔らかな実（柔软果实）", duration: 248 }, { name: "体育祭を越えて（越过体育祭）", duration: 257 }, { name: "旋律、枝（旋律与枝）", duration: 251 },
      { name: "白い満月（苍白满月）", duration: 241 }, { name: "小さな実（小小果实）", duration: 236 }, { name: "三日月、旋律（新月与旋律）", duration: 244 } ] },
    { name: "明るい銀河", type: "专辑", date: "2036-01-28", songs: [
      { name: "明るい銀河（明亮银河）", duration: 255 }, { name: "海、枝（海与枝）", duration: 227 }, { name: "木漏れ日、月光（林间光斑与月光）", duration: 203 },
      { name: "蒼い虹（苍蓝彩虹）", duration: 324 }, { name: "島、岬（岛与海角）", duration: 237 }, { name: "言葉、微笑（言语与微笑）", duration: 177 },
      { name: "水面を越えて（越过水面）", duration: 265 }, { name: "唄、落ち葉（歌谣与落叶）", duration: 230 } ] },
    { name: "白い蕾", type: "专辑", date: "2037-02-28", songs: [
      { name: "白い蕾（苍白花苞）", duration: 292 }, { name: "霞、波（霞与波）", duration: 285 }, { name: "若葉、夜風（新叶与夜风）", duration: 263 },
      { name: "枝、川（枝与河）", duration: 207 }, { name: "星屑、島（星屑与岛）", duration: 266 }, { name: "古い黒板（陈旧黑板）", duration: 236 },
      { name: "涙、月（泪与月）", duration: 263 }, { name: "空を探して（寻找天空）", duration: 282 }, { name: "夢、波（梦与波）", duration: 239 },
      { name: "優しい涙（温柔泪）", duration: 224 }, { name: "雨音、潮騒（雨声与潮鸣）", duration: 456 } ] },
    { name: "星雲へ続く", type: "EP", date: "2038-01-30", songs: [
      { name: "星雲へ続く（通往星云）", duration: 216 }, { name: "滝に還る（回到瀑布）", duration: 254 }, { name: "長い街（漫长街）", duration: 147 },
      { name: "紅葉、霞（红叶与霞）", duration: 146 }, { name: "潮騒を越えて（越过潮鸣）", duration: 257 } ] },
    { name: "潮騒、月光", type: "单曲", date: "2038-12-04", songs: [
      { name: "潮騒、月光（潮鸣与月光）", duration: 261 } ] },
    { name: "唄、凪", type: "专辑", date: "2039-11-09", songs: [
      { name: "唄、凪（歌谣与风平浪静）", duration: 252 }, { name: "木漏れ日、朝焼け（林间光斑与朝霞）", duration: 252 }, { name: "朝焼け、根（朝霞与根）", duration: 260 },
      { name: "古い恋（陈旧恋）", duration: 238 }, { name: "虹まで（直到彩虹）", duration: 256 }, { name: "蒼い暁（苍蓝拂晓）", duration: 257 },
      { name: "岬、微笑（海角与微笑）", duration: 237 }, { name: "柔らかな葉（柔软叶）", duration: 147 } ] },
    { name: "氷、川", type: "专辑", date: "2040-10-13", songs: [
      { name: "氷、川（冰与河）", duration: 264 }, { name: "落ち葉、星（落叶与星）", duration: 249 }, { name: "恋を探して（寻找恋）", duration: 231 },
      { name: "青空、霜（青空与霜）", duration: 228 }, { name: "蒼い雨音（苍蓝雨声）", duration: 294 }, { name: "黄昏、詩（黄昏与诗）", duration: 259 },
      { name: "夕暮れ、夢（黄昏与梦）", duration: 241 }, { name: "月を探して（寻找月）", duration: 265 }, { name: "静かな月光（静谧月光）", duration: 219 },
      { name: "雪、蕾（雪与花苞）", duration: 250 }, { name: "雲、実（云与果实）", duration: 239 } ] },
    { name: "雪、海辺", type: "专辑", date: "2041-12-13", songs: [
      { name: "雪、海辺（雪与海边）", duration: 255 }, { name: "向日葵、若葉（向日葵与新叶）", duration: 229 }, { name: "朝焼け、滝（朝霞与瀑布）", duration: 249 },
      { name: "向日葵、銀河（向日葵与银河）", duration: 350 }, { name: "水面、星（水面与星）", duration: 287 }, { name: "歌、流星（歌与流星）", duration: 170 },
      { name: "霜、響き（霜与回响）", duration: 226 } ] },
    { name: "凪、三日月", type: "专辑", date: "2042-11-12", songs: [
      { name: "凪、三日月（风平浪静与新月）", duration: 192 }, { name: "海、凪（海与风平浪静）", duration: 265 }, { name: "長い修学旅行（漫长修学旅行）", duration: 366 },
      { name: "涙、岸（泪与岸）", duration: 219 }, { name: "霧、水面（雾与水面）", duration: 263 }, { name: "青空まで（直到青空）", duration: 240 },
      { name: "旋律、月（旋律与月）", duration: 160 }, { name: "月光、向日葵（月光与向日葵）", duration: 258 } ] },
    { name: "星屑、向日葵", type: "EP", date: "2043-09-26", songs: [
      { name: "星屑、向日葵（星屑与向日葵）", duration: 246 }, { name: "木漏れ日、枝（林间光斑与枝）", duration: 204 }, { name: "川、花（河与花）", duration: 267 } ] },
    { name: "淡い詩", type: "单曲", date: "2044-09-05", songs: [
      { name: "淡い詩（淡淡诗）", duration: 292 } ] },
    { name: "雪、木漏れ日", type: "单曲", date: "2045-10-10", songs: [
      { name: "雪、木漏れ日（雪与林间光斑）", duration: 256 } ] },
    { name: "実、夜風", type: "EP", date: "2046-09-23", songs: [
      { name: "実、夜風（果实与夜风）", duration: 249 }, { name: "虹、霧（彩虹与雾）", duration: 236 }, { name: "木漏れ日、蕾（林间光斑与花苞）", duration: 264 },
      { name: "蒼い泉（苍蓝泉）", duration: 219 }, { name: "心音、霜（心跳与霜）", duration: 246 }, { name: "若葉、雨音（新叶与雨声）", duration: 260 } ] },
    { name: "古い心音", type: "专辑", date: "2047-09-26", songs: [
      { name: "古い心音（陈旧心跳）", duration: 254 }, { name: "蕾、虹（花苞与彩虹）", duration: 447 }, { name: "明るい恋（明亮恋）", duration: 205 },
      { name: "淡い星（淡淡星）", duration: 263 }, { name: "若葉、星（新叶与星）", duration: 194 }, { name: "静かな浜（静谧海滨）", duration: 263 },
      { name: "実、旋律（果实与旋律）", duration: 233 }, { name: "淡い音色（淡淡音色）", duration: 225 }, { name: "眩しい星屑（耀眼星屑）", duration: 243 },
      { name: "言葉、涙（言语与泪）", duration: 230 }, { name: "恋を待つ（等待恋）", duration: 204 } ] },
    { name: "青空、海", type: "EP", date: "2048-08-02", songs: [
      { name: "青空、海（青空与海）", duration: 219 }, { name: "向日葵、潮騒（向日葵与潮鸣）", duration: 238 }, { name: "霞、涙（霞与泪）", duration: 262 } ] },
    { name: "音色、霜", type: "单曲", date: "2049-06-25", songs: [
      { name: "音色、霜（音色与霜）", duration: 246 } ] },
    { name: "想いを抱いて", type: "专辑", date: "2050-08-09", songs: [
      { name: "想いを抱いて（拥抱思念）", duration: 192 }, { name: "淡い星空（淡淡星空）", duration: 258 }, { name: "泉、浜（泉与海滨）", duration: 333 },
      { name: "雨、夜明け（雨与黎明）", duration: 406 }, { name: "若葉、落ち葉（新叶与落叶）", duration: 253 }, { name: "蒼い岬（苍蓝海角）", duration: 224 },
      { name: "凪、虹（风平浪静与彩虹）", duration: 220 } ] },
    ],
  "回春丹": [
    { name: "耳鬼出风", type: "专辑", date: "2021-10-22", songs: [
       { name: "耳鬼出风", duration: 235 }, { name: "花桥", duration: 240 },
       { name: "正义", duration: 250 }, { name: "梦特别娇", duration: 258 },
       { name: "红心番石榴", duration: 232 }, { name: "大地雷公", duration: 230 },
       { name: "五彩斑斓的黑", duration: 245 }, { name: "分分钟需要你", duration: 228 },
       { name: "兴奋到死的东西", duration: 236 } ] },
    { name: "大把时间璀璨", type: "专辑", date: "2025-08-29", songs: [
       { name: "降临", duration: 230 }, { name: "骑士", duration: 245 }, { name: "梦蝶", duration: 240 },
       { name: "喝彩", duration: 235 }, { name: "福寿螺", duration: 225 }, { name: "大力出奇迹", duration: 220 },
       { name: "宝藏", duration: 238 }, { name: "松绑", duration: 232 }, { name: "染春", duration: 245 },
       { name: "鲜花 (I'm Going To Remember U)", duration: 341 } ] },
    { name: "艾蜜莉", type: "单曲", date: "2020-01-01", songs: [ { name: "艾蜜莉", duration: 240 } ] },
    { name: "珍珠走廊", type: "EP", date: "2022-01-01", songs: [
       { name: "珍珠走廊", duration: 235 }, { name: "断气", duration: 220 }, { name: "大地雷公", duration: 230 } ] },
    { name: "蜜虫", type: "EP", date: "2023-01-01", songs: [
       { name: "蜜虫", duration: 225 }, { name: "丘丘", duration: 230 }, { name: "相思病", duration: 235 } ] },
    { name: "鲜花", type: "单曲", date: "2023-09-30", songs: [ { name: "鲜花", duration: 341 } ] },
    { name: "初恋", type: "单曲", date: "2021-01-01", songs: [ { name: "初恋", duration: 222 } ] },
    { name: "亮闪闪", type: "单曲", date: "2024-01-01", songs: [ { name: "亮闪闪", duration: 210 } ] },
    { name: "喝彩", type: "单曲", date: "2025-01-01", songs: [ { name: "喝彩", duration: 235 } ] },
      { name: "走廊水岸", type: "单曲", date: "2027-05-27", songs: [
      { name: "走廊水岸", duration: 228 } ] },
    { name: "尘埃晨雾", type: "EP", date: "2029-01-09", songs: [
      { name: "尘埃晨雾", duration: 232 }, { name: "灰烬边界", duration: 241 }, { name: "电线暴雨", duration: 240 } ] },
    { name: "残响铁笼", type: "单曲", date: "2031-03-12", songs: [
      { name: "残响铁笼", duration: 239 } ] },
    { name: "无名的回声壁", type: "EP", date: "2033-03-04", songs: [
      { name: "无名的回声壁", duration: 263 }, { name: "深夜的铁轨", duration: 218 }, { name: "疾风灯塔", duration: 140 },
      { name: "久违的裂痕", duration: 236 }, { name: "信号灯寒潮", duration: 242 } ] },
    { name: "深夜的雨篷", type: "EP", date: "2035-06-15", songs: [
      { name: "深夜的雨篷", duration: 229 }, { name: "漫长的暗号", duration: 260 }, { name: "深夜的码头", duration: 245 } ] },
    { name: "夜潮白墙", type: "单曲", date: "2037-04-21", songs: [
      { name: "夜潮白墙", duration: 250 } ] },
    { name: "无名的暮云", type: "单曲", date: "2039-06-12", songs: [
      { name: "无名的暮云", duration: 224 } ] },
    { name: "旧梦荒原", type: "EP", date: "2041-06-11", songs: [
      { name: "旧梦荒原", duration: 247 }, { name: "荒径公路", duration: 247 }, { name: "高墙楼顶", duration: 220 },
      { name: "狂风铁门", duration: 223 }, { name: "白墙曦光", duration: 262 } ] },
    { name: "长夜晚风", type: "单曲", date: "2043-09-05", songs: [
      { name: "长夜晚风", duration: 377 } ] },
    { name: "雪线阁楼", type: "单曲", date: "2045-07-28", songs: [
      { name: "雪线阁楼", duration: 340 } ] },
    { name: "沉默的候鸟", type: "单曲", date: "2047-09-18", songs: [
      { name: "沉默的候鸟", duration: 228 } ] },
    { name: "夜潮晚风", type: "专辑", date: "2049-12-19", songs: [
      { name: "夜潮晚风", duration: 236 }, { name: "长风废楼", duration: 189 }, { name: "遥远的断线", duration: 188 },
      { name: "漫长的潮汐", duration: 260 }, { name: "断层星光", duration: 230 }, { name: "尘埃余烬", duration: 188 },
      { name: "狂风铁笼", duration: 237 }, { name: "无名的信号灯", duration: 236 }, { name: "漫长的天桥", duration: 218 },
      { name: "残阳残响", duration: 231 } ] },
    ],
  "Chinese Football": [
    { name: "Chinese Football", type: "专辑", date: "2015-09-12", songs: [
       { name: "游戏开始 (Intro)", duration: 122 }, { name: "守门员", duration: 251 },
       { name: "飞鱼转身", duration: 384 }, { name: "400米操场", duration: 270 },
       { name: "不是人人都能穿十号球衣", duration: 347 }, { name: "世界悲", duration: 386 },
       { name: "游戏暂停 (Interlude)", duration: 76 }, { name: "地球上最后一个EMO男孩", duration: 300 },
       { name: "红牌罚下", duration: 280 }, { name: "帽子戏法", duration: 285 },
       { name: "再见米卢", duration: 300 }, { name: "盲人摸象", duration: 320 }, { name: "游戏结束 (Outro)", duration: 200 } ] },
    { name: "Here Comes a New Challenger!", type: "EP", date: "2017-03-03", songs: [
       { name: "电动少女", duration: 300 }, { name: "清醒白日梦", duration: 280 },
       { name: "晴天霹雳", duration: 290 }, { name: "盒子", duration: 260 } ] },
    { name: "Continue?", type: "EP", date: "2019-03-01", songs: [
       { name: "游戏继续", duration: 270 }, { name: "漂流人间", duration: 300 },
       { name: "冒险岛", duration: 280 }, { name: "家犬日记", duration: 260 }, { name: "怪兽", duration: 290 } ] },
    { name: "Win&Lose", type: "专辑", date: "2022-12-30", songs: [
       { name: "游戏胜利", duration: 240 }, { name: "四月物语", duration: 260 },
       { name: "夏日限定女朋友", duration: 250 }, { name: "人生游乐场", duration: 270 },
       { name: "世界一分为二", duration: 280 }, { name: "单向列车号", duration: 300 },
       { name: "游戏失败", duration: 240 }, { name: "人间失格", duration: 290 },
       { name: "恐龙最后还是毁灭了", duration: 280 }, { name: "植物人", duration: 270 },
       { name: "武汉", duration: 320 }, { name: "Good bye", duration: 250 } ] },
    { name: "电动少女 (8-Bit Remix)", type: "单曲", date: "2018-03-01", songs: [ { name: "电动少女 (8-Bit Remix)", duration: 280 } ] },
    { name: "Naive", type: "单曲", date: "2017-10-01", songs: [ { name: "Naive", duration: 270 } ] },
    { name: "Dog's Diary", type: "单曲", date: "2017-11-01", songs: [ { name: "Dog's Diary", duration: 265 } ] },
      { name: "深巷码头", type: "单曲", date: "2027-04-05", songs: [
      { name: "深巷码头", duration: 256 } ] },
    { name: "初晴逆光", type: "单曲", date: "2029-05-08", songs: [
      { name: "初晴逆光", duration: 266 } ] },
    { name: "路口空城", type: "专辑", date: "2031-01-10", songs: [
      { name: "路口空城", duration: 247 }, { name: "旧巷天台", duration: 224 }, { name: "雨夜电线", duration: 253 },
      { name: "星光潮汐", duration: 249 }, { name: "遥远的落雪", duration: 242 }, { name: "远方镜面", duration: 288 },
      { name: "断层天光", duration: 218 }, { name: "信号潮汐", duration: 267 }, { name: "天台夜航", duration: 266 } ] },
    { name: "霓虹铁桥", type: "专辑", date: "2033-02-11", songs: [
      { name: "霓虹铁桥", duration: 277 }, { name: "漫长的暗涌", duration: 332 }, { name: "晚钟隧道", duration: 274 },
      { name: "废墟灯塔", duration: 264 }, { name: "孤岛远方", duration: 285 }, { name: "岔路暗涌", duration: 249 },
      { name: "漫长的铁桥", duration: 247 }, { name: "阁楼暗巷", duration: 275 }, { name: "骤雨风筝", duration: 297 },
      { name: "铁桥长风", duration: 268 } ] },
    { name: "空城尘埃", type: "专辑", date: "2035-04-15", songs: [
      { name: "空城尘埃", duration: 297 }, { name: "漫长的长风", duration: 287 }, { name: "天桥疾风", duration: 214 },
      { name: "遥远的寒潮", duration: 234 }, { name: "遥远的暮光", duration: 247 }, { name: "惊雷光年", duration: 330 },
      { name: "沙漏惊雷", duration: 298 }, { name: "影中人街角", duration: 291 } ] },
    { name: "台阶巷子", type: "EP", date: "2037-04-06", songs: [
      { name: "台阶巷子", duration: 279 }, { name: "风铃断层", duration: 292 }, { name: "久违的空城", duration: 315 } ] },
    { name: "夜雾铁道", type: "EP", date: "2039-07-08", songs: [
      { name: "夜雾铁道", duration: 227 }, { name: "无名的高架", duration: 299 }, { name: "出口倒影", duration: 264 },
      { name: "旧梦潮汐", duration: 287 }, { name: "雪线暮光", duration: 238 }, { name: "逆光晚风", duration: 281 } ] },
    { name: "夜车高架", type: "单曲", date: "2041-06-05", songs: [
      { name: "夜车高架", duration: 257 } ] },
    { name: "归途黑巷", type: "单曲", date: "2043-10-05", songs: [
      { name: "归途黑巷", duration: 259 } ] },
    { name: "漫长的甲板", type: "专辑", date: "2045-08-29", songs: [
      { name: "漫长的甲板", duration: 187 }, { name: "无名的街灯", duration: 264 }, { name: "漫长的屋顶", duration: 247 },
      { name: "沙漏长风", duration: 279 }, { name: "逆流停电", duration: 468 }, { name: "候鸟涂鸦", duration: 329 },
      { name: "深夜的回声", duration: 189 }, { name: "漫长的空城", duration: 275 } ] },
    { name: "车窗夜潮", type: "单曲", date: "2047-12-28", songs: [
      { name: "车窗夜潮", duration: 277 } ] },
    { name: "冷月黑巷", type: "专辑", date: "2049-10-30", songs: [
      { name: "冷月黑巷", duration: 265 }, { name: "疾风站台", duration: 293 }, { name: "霜降匝道", duration: 299 },
      { name: "沉默的寒潮", duration: 297 }, { name: "长夜白墙", duration: 255 }, { name: "沙漏潮汐", duration: 265 },
      { name: "边界废楼", duration: 448 }, { name: "无名的野猫", duration: 155 }, { name: "站台水岸", duration: 295 },
      { name: "暴雨电塔", duration: 288 } ] },
    ],
  "犬儒": [
    { name: "犬儒", type: "EP", date: "2022-12-10", songs: [
       { name: "志铭", duration: 306 }, { name: "皮囊", duration: 234 },
       { name: "病", duration: 226 }, { name: "圈", duration: 350 }, { name: "蔡家关", duration: 117 } ] },
    { name: "天才艺术家", type: "专辑", date: "2023-05-23", songs: [
       { name: "天才艺术家", duration: 218 }, { name: "阶梯", duration: 239 }, { name: "烂苹果", duration: 245 },
       { name: "脏", duration: 238 }, { name: "皂角井", duration: 250 }, { name: "苍蝇", duration: 230 },
       { name: "褪色", duration: 225 }, { name: "栋青南", duration: 240 }, { name: "喂", duration: 235 } ] },
    { name: "心房", type: "专辑", date: "2025-09-20", songs: [
       { name: "花丘", duration: 380 }, { name: "上杉朗", duration: 360 }, { name: "妈妈告诉我", duration: 350 },
       { name: "心房", duration: 390 }, { name: "边云里", duration: 340 }, { name: "送给未来的你", duration: 370 },
       { name: "I Want Your Love", duration: 330 }, { name: "就算", duration: 345 }, { name: "二楼", duration: 355 },
       { name: "白鸟", duration: 365 }, { name: "给我", duration: 340 }, { name: "再见了朋友我们终会再相逢", duration: 400 } ] },
    { name: "旧情歌", type: "单曲", date: "2023-01-01", songs: [ { name: "旧情歌", duration: 250 } ] },
    { name: "河边的想象", type: "单曲", date: "2023-01-01", songs: [ { name: "河边的想象", duration: 260 } ] },
      { name: "夜班水岸", type: "专辑", date: "2027-05-29", songs: [
      { name: "夜班水岸", duration: 230 }, { name: "街灯倒影", duration: 315 }, { name: "无名的走廊", duration: 510 },
      { name: "深夜的汽笛", duration: 449 }, { name: "暮云候鸟", duration: 278 }, { name: "无名的锈迹", duration: 283 },
      { name: "暮云夜潮", duration: 174 }, { name: "铁轨白墙", duration: 285 }, { name: "沉默的归途", duration: 239 },
      { name: "匝道暗巷", duration: 474 }, { name: "寒潮黑巷", duration: 318 } ] },
    { name: "台阶旧梦", type: "专辑", date: "2029-07-20", songs: [
      { name: "台阶旧梦", duration: 215 }, { name: "晴天断层", duration: 300 }, { name: "街角白墙", duration: 203 },
      { name: "久违的残阳", duration: 275 }, { name: "天台雨夜", duration: 271 }, { name: "逆流碎片", duration: 323 },
      { name: "潮间带暴雨", duration: 294 }, { name: "静默空城", duration: 267 }, { name: "碎片雨夜", duration: 269 },
      { name: "旧城影中人", duration: 264 } ] },
    { name: "闪电灰墙", type: "专辑", date: "2031-05-25", songs: [
      { name: "闪电灰墙", duration: 255 }, { name: "公路迷途", duration: 278 }, { name: "晚钟暗号", duration: 279 },
      { name: "久违的旧巷", duration: 494 }, { name: "暮云铁笼", duration: 283 }, { name: "信号灯渡轮", duration: 229 },
      { name: "久违的疾风", duration: 316 } ] },
    { name: "信号灯风筝", type: "专辑", date: "2033-04-16", songs: [
      { name: "信号灯风筝", duration: 242 }, { name: "深巷铁门", duration: 326 }, { name: "雨夜信号灯", duration: 313 },
      { name: "水岸镜面", duration: 268 }, { name: "潮声断线", duration: 270 }, { name: "旧巷废楼", duration: 316 },
      { name: "台阶灰烬", duration: 240 }, { name: "废墟沙漏", duration: 201 } ] },
    { name: "涂鸦骤雨", type: "专辑", date: "2035-06-09", songs: [
      { name: "涂鸦骤雨", duration: 296 }, { name: "遥远的晴天", duration: 282 }, { name: "野火雪线", duration: 315 },
      { name: "黑巷断层", duration: 263 }, { name: "镜面星光", duration: 311 }, { name: "铁桥渡轮", duration: 296 },
      { name: "废墟残响", duration: 267 }, { name: "极夜车窗", duration: 315 }, { name: "无名的碎片", duration: 313 } ] },
    { name: "废楼高架", type: "专辑", date: "2037-08-11", songs: [
      { name: "废楼高架", duration: 315 }, { name: "暮云逆光", duration: 224 }, { name: "雪线星光", duration: 205 },
      { name: "星光尘埃", duration: 268 }, { name: "无名的灯塔", duration: 288 }, { name: "遥远的归途", duration: 401 },
      { name: "初晴天光", duration: 306 }, { name: "杂草镜面", duration: 212 }, { name: "风铃楼顶", duration: 301 } ] },
    { name: "深夜的夜雾", type: "单曲", date: "2039-07-11", songs: [
      { name: "深夜的夜雾", duration: 291 } ] },
    { name: "无名的镜面", type: "专辑", date: "2041-10-29", songs: [
      { name: "无名的镜面", duration: 442 }, { name: "灰烬阁楼", duration: 296 }, { name: "孤岛信号", duration: 286 },
      { name: "遥远的闪电", duration: 447 }, { name: "风口逆流", duration: 309 }, { name: "深夜的候鸟", duration: 276 },
      { name: "天桥铁桥", duration: 292 } ] },
    { name: "信号曦光", type: "单曲", date: "2044-01-04", songs: [
      { name: "信号曦光", duration: 257 } ] },
    { name: "曦光狂风", type: "专辑", date: "2046-01-26", songs: [
      { name: "曦光狂风", duration: 194 }, { name: "野火灰烬", duration: 347 }, { name: "无名的孤岛", duration: 314 },
      { name: "久违的长夜", duration: 275 }, { name: "潮间带白墙", duration: 310 }, { name: "逆旅杂草", duration: 260 },
      { name: "遥远的黑巷", duration: 268 } ] },
    { name: "影中人碎片", type: "单曲", date: "2047-12-14", songs: [
      { name: "影中人碎片", duration: 307 } ] },
    { name: "孤岛归途", type: "单曲", date: "2050-01-17", songs: [
      { name: "孤岛归途", duration: 279 } ] },
    ],
  "发光曲线": [
    { name: "Glow Curve", type: "专辑", date: "2011-01-01", songs: [
       { name: "On", duration: 300 }, { name: "迷航", duration: 380 }, { name: "无法命名的时刻", duration: 360 },
       { name: "鲜花圣母", duration: 360 }, { name: "银河革命计划", duration: 340 }, { name: "不安门", duration: 320 } ] },
    { name: "迷航 (DEDICATE TO MIND)", type: "专辑", date: "2013-09-26", songs: [
       { name: "On", duration: 300 }, { name: "午夜快车", duration: 358 }, { name: "迷航", duration: 390 },
       { name: "重影", duration: 340 }, { name: "鲜花圣母", duration: 380 }, { name: "银河革命计划", duration: 330 },
       { name: "防火墙", duration: 320 }, { name: "醉鸟启示录", duration: 360 }, { name: "Off", duration: 200 } ] },
    { name: "荒野星", type: "专辑", date: "2019-10-01", songs: [
       { name: "灰烬霓虹", duration: 310 }, { name: "金钱不眠", duration: 423 },
       { name: "今夜我不关心人类", duration: 374 }, { name: "荒野星", duration: 377 },
       { name: "来临", duration: 205 }, { name: "无限引擎", duration: 503 },
       { name: "银盐之梦", duration: 403 }, { name: "假寐史", duration: 361 } ] },
    { name: "灰烬霓虹 (Invisible History)", type: "专辑", date: "2019-12-27", songs: [
       { name: "灰烬霓虹", duration: 310 }, { name: "金钱不眠", duration: 423 }, { name: "今夜我不关心人类", duration: 374 },
       { name: "荒野星", duration: 377 }, { name: "来临", duration: 205 }, { name: "无限引擎", duration: 503 },
       { name: "午夜快车", duration: 358 }, { name: "银盐之梦", duration: 403 }, { name: "假寐史", duration: 361 }, { name: "鲜花圣母", duration: 409 } ] },
    { name: "但愿人长久 (Life is a Moracle)", type: "专辑", date: "2023-06-01", songs: [
       { name: "起源", duration: 285 }, { name: "狩猎", duration: 326 }, { name: "哇噻考", duration: 304 },
       { name: "千高原", duration: 275 }, { name: "起源：残响 (feat.梅志勇)", duration: 259 },
       { name: "太阳之夜", duration: 331 }, { name: "筋疲力尽", duration: 294 }, { name: "卧游", duration: 341 } ] },
      { name: "虚焦月相", type: "专辑", date: "2027-11-26", songs: [
      { name: "虚焦月相", duration: 328 }, { name: "螺旋水银", duration: 319 }, { name: "漫长的光栅", duration: 243 },
      { name: "久违的灰白", duration: 350 }, { name: "久违的螺旋", duration: 370 }, { name: "轨迹波纹", duration: 369 },
      { name: "潮间带引力", duration: 364 }, { name: "旷野静水", duration: 360 } ] },
    { name: "回声涟漪", type: "专辑", date: "2031-01-14", songs: [
      { name: "回声涟漪", duration: 315 }, { name: "光年涟漪", duration: 321 }, { name: "地平线静止", duration: 323 },
      { name: "低频苍穹", duration: 335 }, { name: "遥远的边缘", duration: 349 }, { name: "低频河床", duration: 341 },
      { name: "缓慢虚焦", duration: 356 }, { name: "星云边缘", duration: 350 }, { name: "空镜潮声", duration: 339 },
      { name: "漫长的涟漪", duration: 502 } ] },
    { name: "山脉退潮", type: "专辑", date: "2033-12-02", songs: [
      { name: "山脉退潮", duration: 362 }, { name: "折射云层", duration: 372 }, { name: "折线晨光", duration: 366 },
      { name: "无名的星轨", duration: 342 }, { name: "漫长的回声", duration: 410 }, { name: "沉默的悬浮", duration: 191 },
      { name: "雾霭涟漪", duration: 372 }, { name: "边缘倒影", duration: 358 }, { name: "纹理经纬", duration: 311 },
      { name: "沉默的缓慢", duration: 369 } ] },
    { name: "沉默的晨光", type: "专辑", date: "2037-01-09", songs: [
      { name: "沉默的晨光", duration: 338 }, { name: "深夜的远山", duration: 366 }, { name: "慢门折线", duration: 323 },
      { name: "无名的雾霭", duration: 311 }, { name: "深夜的折射", duration: 410 }, { name: "久违的回旋", duration: 371 },
      { name: "久违的山脉", duration: 346 }, { name: "余温缓慢", duration: 359 }, { name: "低频折线", duration: 350 },
      { name: "退潮环带", duration: 260 } ] },
    { name: "引力光斑", type: "专辑", date: "2039-09-27", songs: [
      { name: "引力光斑", duration: 525 }, { name: "无名的暮色", duration: 343 }, { name: "深夜的灰白", duration: 321 },
      { name: "沉默的冰川", duration: 337 }, { name: "折射回旋", duration: 356 }, { name: "虚焦透明", duration: 284 },
      { name: "星云倒影", duration: 332 }, { name: "深夜的涟漪", duration: 327 }, { name: "透明螺旋", duration: 330 },
      { name: "极地余温", duration: 321 } ] },
    { name: "雾霭引力", type: "专辑", date: "2042-11-25", songs: [
      { name: "雾霭引力", duration: 340 }, { name: "碎光苍穹", duration: 312 }, { name: "深夜的慢门", duration: 302 },
      { name: "沉默的山脉", duration: 353 }, { name: "极地水痕", duration: 313 }, { name: "久违的低频", duration: 233 },
      { name: "银幕潮声", duration: 415 }, { name: "慢门光晕", duration: 365 }, { name: "漂移环带", duration: 290 },
      { name: "久违的星云", duration: 314 } ] },
    { name: "轨迹回声", type: "专辑", date: "2046-07-24", songs: [
      { name: "轨迹回声", duration: 317 }, { name: "久违的回声", duration: 393 }, { name: "月相晨光", duration: 212 },
      { name: "灰白深海", duration: 379 }, { name: "深夜的星尘", duration: 313 }, { name: "倒影暮色", duration: 235 },
      { name: "光年深海", duration: 244 } ] },
    { name: "沉默的地平线", type: "专辑", date: "2049-04-18", songs: [
      { name: "沉默的地平线", duration: 560 }, { name: "冰川深渊", duration: 378 }, { name: "遥远的静止", duration: 269 },
      { name: "无名的折返", duration: 283 }, { name: "旷野山脉", duration: 233 }, { name: "灰白山脉", duration: 525 },
      { name: "螺旋缓慢", duration: 319 }, { name: "透明倒影", duration: 297 }, { name: "星尘雾霭", duration: 270 },
      { name: "沉默的虚空", duration: 332 }, { name: "沉默的涟漪", duration: 560 } ] },
    ],
  "文雀": [
    { name: "First EP", type: "EP", date: "2010-02-01", songs: [
       { name: "大雁", duration: 390 }, { name: "南方", duration: 318 },
       { name: "看风景的人", duration: 360 }, { name: "谁也别管谁", duration: 330 } ] },
    { name: "彩虹山", type: "专辑", date: "2012-12-07", songs: [
       { name: "彩虹山 Rainbow Mountain", duration: 479 }, { name: "本星", duration: 360 },
       { name: "Double Treble", duration: 340 } ] },
    { name: "看风景的人", type: "EP", date: "2015-05-18", songs: [
       { name: "大雁", duration: 390 }, { name: "南方", duration: 318 }, { name: "看风景的人", duration: 360 },
       { name: "谁也别管谁", duration: 330 }, { name: "寒心寺", duration: 345 } ] },
    { name: "迷路记 Lost Mind", type: "EP", date: "2017-08-20", songs: [
       { name: "迷路记", duration: 360 }, { name: "归途", duration: 350 } ] },
    { name: "庙雨连珠", type: "专辑", date: "2018-09-20", songs: [
       { name: "春分", duration: 406 }, { name: "浮生若梦", duration: 467 }, { name: "一个人的快乐", duration: 309 },
       { name: "我长话短说", duration: 375 }, { name: "Double", duration: 268 } ] },
    { name: "儿戏", type: "专辑", date: "2021-03-19", songs: [
       { name: "伏", duration: 446 }, { name: "儿戏", duration: 392 }, { name: "落梦池", duration: 414 },
       { name: "不回去了", duration: 427 }, { name: "希望像星星一样闪烁", duration: 515 } ] },
    { name: "某", type: "EP", date: "2024-03-01", songs: [
       { name: "某时", duration: 360 }, { name: "某日", duration: 340 }, { name: "某月", duration: 350 } ] },
    { name: "两语", type: "专辑", date: "2026-03-20", songs: [
       { name: "银湾", duration: 380 }, { name: "天目山路", duration: 360 }, { name: "流", duration: 350 },
       { name: "幻季", duration: 340 }, { name: "神游夜话", duration: 400 } ] },
    { name: "大雁", type: "单曲", date: "2015-05-18", songs: [ { name: "大雁", duration: 390 } ] },
    { name: "我长话短说", type: "单曲", date: "2018-09-10", songs: [ { name: "我长话短说", duration: 375 } ] },
    { name: "A Letter Buried in Time", type: "EP", date: "2025-05-01", songs: [
       { name: "A Letter Buried in Time", duration: 326 }, { name: "dizzy", duration: 277 } ] },
      { name: "折返轨迹", type: "专辑", date: "2027-09-28", songs: [
      { name: "折返轨迹", duration: 347 }, { name: "折线折射", duration: 377 }, { name: "光晕晨光", duration: 547 },
      { name: "远山纹理", duration: 346 }, { name: "无名的透明", duration: 304 }, { name: "深空空镜", duration: 449 },
      { name: "遥远的潮汐", duration: 335 }, { name: "寒潮暮色", duration: 364 }, { name: "透明波纹", duration: 375 } ] },
    { name: "深空银幕", type: "单曲", date: "2029-09-08", songs: [
      { name: "深空银幕", duration: 406 } ] },
    { name: "久违的蓝鲸", type: "专辑", date: "2032-01-05", songs: [
      { name: "久违的蓝鲸", duration: 404 }, { name: "蓝鲸雪线", duration: 358 }, { name: "星际折射", duration: 398 },
      { name: "无名的静默", duration: 348 }, { name: "碎光雪线", duration: 352 }, { name: "折射低语", duration: 360 },
      { name: "久违的经纬", duration: 323 }, { name: "无名的轨迹", duration: 378 }, { name: "潮汐晨光", duration: 385 },
      { name: "星尘暗流", duration: 290 }, { name: "久违的水痕", duration: 560 } ] },
    { name: "深夜的波纹", type: "EP", date: "2033-10-01", songs: [
      { name: "深夜的波纹", duration: 355 }, { name: "缓慢静水", duration: 404 }, { name: "边缘寒潮", duration: 378 } ] },
    { name: "折线余温", type: "专辑", date: "2035-12-10", songs: [
      { name: "折线余温", duration: 333 }, { name: "碎光沙漏", duration: 358 }, { name: "苍穹暮色", duration: 401 },
      { name: "空镜远山", duration: 438 }, { name: "尘埃极夜", duration: 382 }, { name: "沉默的经纬", duration: 352 },
      { name: "静默雪线", duration: 428 }, { name: "沉默的漂移", duration: 379 }, { name: "静止缓慢", duration: 390 } ] },
    { name: "漫长的星轨", type: "EP", date: "2037-08-21", songs: [
      { name: "漫长的星轨", duration: 311 }, { name: "环带余温", duration: 398 }, { name: "漂移轨迹", duration: 397 },
      { name: "环流星际", duration: 560 }, { name: "遥远的缓慢", duration: 366 } ] },
    { name: "遥远的远山", type: "EP", date: "2039-12-22", songs: [
      { name: "遥远的远山", duration: 357 }, { name: "寂静苍穹", duration: 407 }, { name: "晨光静止", duration: 394 },
      { name: "漫长的静止", duration: 354 } ] },
    { name: "断层纹理", type: "专辑", date: "2042-02-10", songs: [
      { name: "断层纹理", duration: 317 }, { name: "深夜的极地", duration: 344 }, { name: "空谷涟漪", duration: 409 },
      { name: "银幕潮间带", duration: 309 }, { name: "深空回旋", duration: 417 }, { name: "沉默的退潮", duration: 334 },
      { name: "极地无声", duration: 352 }, { name: "环带静默", duration: 392 }, { name: "遥远的银幕", duration: 340 },
      { name: "深夜的无声", duration: 333 }, { name: "引力水银", duration: 363 } ] },
    { name: "漫长的慢门", type: "EP", date: "2043-12-27", songs: [
      { name: "漫长的慢门", duration: 341 }, { name: "无名的寂静", duration: 336 }, { name: "深空极光", duration: 364 } ] },
    { name: "深夜的遥远", type: "单曲", date: "2046-01-23", songs: [
      { name: "深夜的遥远", duration: 409 } ] },
    { name: "光斑余温", type: "单曲", date: "2047-09-28", songs: [
      { name: "光斑余温", duration: 267 } ] },
    { name: "漫长的深海", type: "EP", date: "2050-01-30", songs: [
      { name: "漫长的深海", duration: 404 }, { name: "漫长的苍穹", duration: 374 }, { name: "深夜的沙漏", duration: 404 },
      { name: "遥远的涟漪", duration: 383 } ] },
    ],
};
