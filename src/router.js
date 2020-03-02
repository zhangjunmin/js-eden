/**
 * 路由控制
 */
const express = require("express")
const router = express.Router()
const Article = require("../model/article")
const mongoose = require("mongoose")
const url = "mongodb://localhost"
mongoose.connect(url,{
    dbName: "blog"
})
// 首页
router.get("/", (req, res)=> { 
    res.send("hello index")
})

// 列表 查询条件为真（假表示已经被删除），按创建时间倒序，根据页码，获取文章
router.get("/list(/page/:number)?",async (req, res)=> {
    const {number} = req.params;
    const pageCount = 10
    let skip = 0
    debugger
    if(number){
        skip = (number-1) * pageCount
    }
    const articles = await Article.find()
    .limit(pageCount)
    .sort("-createDate",)
    .skip(skip)
    res.json({
        message: "查询成功",
        data: articles
    })
})

// 详情
router.get("/article/:id", async (req, res)=> {
    const {id} = req.params;
    console.log(id)
    const article = await Article.findOne({
        _id: id
    })
    res.json({
        message: "查询成功",
        data: article
    })
})

// 新增 bodyParser
router.post("/article/add", async (req, res)=> {
    const {title, content,author } = req.body
    const article = new Article({
        title
        ,content
        ,author //以后要根据登录查询
    })
    const result = await article.save()
    res.json({
        message: "文章新增完成",
        data: result
    })
})

// 修改
router.post("/article/edit/:id", async (req, res)=> {
    const {id} = req.params
    const {title, content} = req.body
    const result = await Article.findByIdAndUpdate(id,{
        title
        ,content
        ,updateDate: Date.now()
    })
    res.json({
        message: "文章修改完成",
        data: result
    })
})

// 删除
router.post("/article/delete/:id", async (req, res)=> {
    const {id} = req.params
    const result = await Article.deleteOne({_id: id})
    res.json({
        message: "删除成功",
        data: result
    })
})

module.exports = router;