/**
 ** APP入口
 */

// 资源引入
const express = require("express")
const app = express()
const router = require("../router/blog")
const mongoose = require("mongoose")

// 数据库连接
// 设置连接参数解决MongoDB的nodejs驱动程序的弃用导致报警
const opts = {
    "dbName": "blog"
    , "useNewUrlParser": true
    , "useUnifiedTopology": true
    , "useCreateIndex": true
}
const url = "mongodb://localhost"
mongoose.connect(url, opts)

// 模板引擎
app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.static("./public"));

// parse application
// parse form-urlencode
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 挂载路由
app.use(router)

// 处理异常
app.use((err, req, res, next) => {
    if (err) {
        res.statusCode = 500
        return res.send(err.message)
    }
})
// 侦听
app.listen(3000, () => console.log("服务已经启动"))