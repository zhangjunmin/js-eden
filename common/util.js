/**
 * 工具对象
 */
const emailReg = /^\w+@[a-zA-Z0-9]{2,10}\.[a-z]{1,3}(\.[a-z]{1,3})?$/
const mobielReg = /^1[3-8]\d{9}$/
const digitReg = /^\d+$/
const util = {
    // 验证是否是邮箱
    isEmail: (value) => emailReg.test(value)
    // 验证是否是手机号码
    , isMobile: (value) => mobielReg.test(value)
    // 是否数字
    , isDigit: (value) => digitReg.test(value)
    // 封装promise，处理promise里的异常.
    , awaitWarper: (promise) => {
        return promise.then((data) => [null, data])
            .catch((err) => [err, null])
    }
}
module.exports = util