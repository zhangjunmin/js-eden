const mongoose = require("mongoose")
const Schema = mongoose.Schema

/**
 * 用户模型结构
 * name 不可为空，且唯一 邮箱或者手机号码格式
 * state 状态，真为正常，假为不可用
 */
const user = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
    ,password: String
    ,state: Boolean
})

module.exports = user