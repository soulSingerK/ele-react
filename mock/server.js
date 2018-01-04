var koa = require('koa')
var koarouter = require('koa-router')
var indexData = require('./index/index-data')
var findData = require('./find/find-data')

var app = new koa()
var router = new koarouter({
  prefix: '/api'
})
// 热搜
router.get('/hot', (ctx, next) => {
  ctx.body = indexData.hot_data
})
// 天气
router.get('/weather', (ctx, next) => {
  ctx.body = indexData.weather
})
// 地址
router.get('/address', (ctx, next) => {
  ctx.body = indexData.address
})
// 轮播图
router.get('/banner', (ctx, next) => {
  ctx.body = indexData.bannerData
})
// 主内容
router.get('/content', (ctx, next) => {
  ctx.body = indexData.body
})

// 发现的  头部数据
router.get('/find', (ctx, next) => {
  ctx.body = findData.findHdData
})
// 限时好礼
router.get('/time', (ctx, next) => {
  ctx.body = findData.gift
})
// 美食推荐
router.get('/food', (ctx, next) => {
  ctx.body = findData.GoodFoods
})
// 天天特价
router.get('/price', (ctx, next) => {
  ctx.body = findData.goodPriceData
})

app.use(router.routes())

console.log('this server is start !!')
app.listen(4040)