/**
 * 路由控制
 */
const express = require("express")
const router = express.Router()

// 首页
router.get("/", (req, res)=> { 
    res.send("hello index")
})

// 列表 分页
router.get("/list(/page/:number)?",(req, res)=> {
    const {number} = req.params;
    if(number){
        res.send(`第${number}页`)
    }else{
        res.send("列表首页")
    }
})

// 详情
router.get("/article/:id", (req, res)=> {
    const {id} = req.params;
    res.send(`第${id}页`)
})

// 新增 bodyParser
router.post("/article/add", (req, res)=> {
    const body = req.body
    console.log("body",body)
    res.send("文章新增完成")
})

// 修改
router.post("/article/edit/:id", (req, res)=> {
    const {id} = req.params
    const body = req.body
    console.log("body",body)
    res.send("文章新增完成")
})

// 删除
router.post("/article/delete/:id", (req, res)=> {
    const {id} = req.params
    res.send("文章删除")
})

module.exports = router;