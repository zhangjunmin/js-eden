/**
 * 定义模型结构
 * mongoose 供有9个类型（String，Number，Date，Buffer，Boolean，
 * ObjectId，Array，Decimal128，Mixed
 */

 const mongoose = require("mongoose")
 const article = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    status: Boolean, // 状态
    createDate: {type: Date, default: Date.now},
    updateDate: {type: Date, default: Date.now}
 })

 module.exports = article