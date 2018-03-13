
var express = require('express')

var port = 3000
// 定义一个简单的路由
var app = express()
// 给node.js本地服务器编写接口
var router = express.Router()
//定义一个网站访问我们的项目
router.get('/', function (req, res, next) {
  req.url = '/index.html'
  next()
})
app.use(router)

const eleData = require('./data.json')
// 分别获取数据中三个不同的值
const seller = eleData.seller
const goods = eleData.goods
const ratings = eleData.ratings

var apiRouter = express.Router()
// 编写get请求配置
apiRouter.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  })
})
apiRouter.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})
apiRouter.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
})
app.use('/api', apiRouter)
// 指定上架服务器文件目录
app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at' + uri)
})
