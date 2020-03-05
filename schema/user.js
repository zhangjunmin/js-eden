const mongoose = require("mongoose")
const Schema = mongoose.Schema
const util = require("../common/util")


/**
 * 用户模型结构
 * name 不可为空，且唯一 邮箱或者手机号码格式
 * state 状态，真为正常，假为不可用
 */
const user = new Schema({
    name: {
        type: String,
        required: true,
        unique: [true, "name 字段是唯一的"],
        validate: {
            validator:(v)=> {
                return util.isEmail(v)||util.isMobile(v)
            },
            message: "格式不正确，必须是手机号码或者邮箱格式"
        }
    }
    ,password: String
    ,state: Boolean
})

// 保存前验证格式手机或者邮箱格式


module.exports = user