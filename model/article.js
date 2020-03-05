/**
 * 文档模型
 */
const mongoose = require("mongoose")
const schema = require("../schema/article")

const Article = mongoose.model("Article", schema)

module.exports = Article