/**
 * APP入口
 */
const express = require("express")
const app = express()
const router = require("./router")
// 处理方法
app.use(router)
// 侦听
app.listen(3000,()=> console.log("服务已经启动"))