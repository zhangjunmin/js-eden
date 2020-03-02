/**
 ** APP入口
 */
const express = require("express")
const app = express()
const router = require("./router")

// parse application
app.use(express.json())
// parse form-urlencode
app.use(express.urlencoded({extended: true}))

// 挂载路由
app.use(router)
// 侦听
app.listen(3000,()=> console.log("服务已经启动"))