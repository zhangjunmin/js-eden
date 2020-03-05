/**
 * 路由控制
 */
const express = require("express")
const router = express.Router()
const Article = require("../model/article")
const User = require("../model/user")
const util = require("../common/util")
// 首页
router.get("/", (req, res) => {
    res.send("hello index")
})

// 列表 查询条件为真（假表示已经被删除），按创建时间倒序，根据页码，获取文章
router.get("/list(/page/:pageNumber)?", async (req, res, next) => {
    const { pageNumber } = req.params;
    const pageCount = 10
    let skip = 0
    // 如果未传入页码或者 页码不是数字，那就默认查第一页
    if (pageNumber && util.isDigit(pageNumber)) {
        skip = (pageNumber - 1) * pageCount
    }
    const [err, data] = await util.awaitWarper(Article.find()
        .limit(pageCount)
        .sort("-createDate")
        .skip(skip))
    if(err){
        return next(err)
    }
    res.json({
        message: "查询成功",
        data
    })
})

// 详情
router.get("/article/:id", async (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    const [err, data] = await util.awaitWarper(Article.findOne({
        _id: id
    }))
    if(err){
        return next(err)
    }
    res.json({
        message: "查询成功",
        data
    })
})

// 新增 bodyParser
router.post("/article/add", async (req, res, next) => {
    const { title, content, author } = req.body
    const article = new Article({
        title
        , content
        , author //以后要根据登录查询
    })
    const [err, data] = await util.awaitWarper(article.save())
    if(err){
        return next(err)
    }
    res.json({
        message: "文章新增完成",
        data
    })
})

// 修改
router.post("/article/edit/:id", async (req, res, next) => {
    const { id } = req.params
    const { title, content } = req.body
    const [err, data] = await util.awaitWarper(Article.findByIdAndUpdate(id, {
        title
        , content
        , updateDate: Date.now()
    }))
    if(err){
        return next(err)
    }
    res.json({
        message: "文章修改完成",
        data
    })
})

// 删除
router.post("/article/delete/:id", async (req, res, next) => {
    const { id } = req.params
    const [err, data] = await util.awaitWarper(Article.deleteOne({ _id: id }))
    if(err){
        return next(err)
    }
    res.json({
        message: "删除成功",
        data
    })


})

// 注册
router.post("/logon", async (req, res, next) => {
    const { name, password } = req.body
    const user = new User({
        name
        , password
    })

    const [err, data] = await util.awaitWarper(user.save())
    if (err) {
        return next(err)
    } 
    res.json({
        message: "注册成功",
        data
    })
})

// 登录(分3种情况，用户不存在，用户密码不正确，正确)
router.post("/login", async (req, res, next) => {
    const { name, password } = req.body
    const [err, data] = await util.awaitWarper(User.findOne({ name }))
    if(err){
        return next(err)
    }
    let message
    if (data) {
        if (data.password === password) {
            message = "登录成功"
        } else {
            message = "密码不正确"
        }
    } else {
        message = "用户不存在"
    }
    res.json({
        message
        , data
    })
})

module.exports = router;