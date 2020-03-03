const mongoose = require("mongoose")
const schema = require("../schema/user")
const Model = mongoose.model
/**
 * 用户模型
 */
const User = new Model("User", schema)

module.exports = User