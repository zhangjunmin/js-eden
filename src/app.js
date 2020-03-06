/**
 ** APP入口
 */

// 资源引入
const express = require("express")
const app = express()
const router = require("../router/blog")
const mongoose = require("mongoose")
const reactViews = require('express-react-views');

// 数据库连接
const url = "mongodb://localhost"
mongoose.connect(url, { dbName: "blog" })

// 模板引擎
app.set("views", "./views")
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())
// app.use(express.static(path.join(__dirname, 'public')));

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