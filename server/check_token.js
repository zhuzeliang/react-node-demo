var jwt = require('jsonwebtoken')
const secret = '!@~#Zero389409258'
module.exports = function(req, res, next) {
    //检查post的信息或者url查询参数或者头信息
    var token = req.body.token || req.query.token || req.headers['x-access-token']
    // 解析 token
    if (token) {
        // 确认token
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                return res.json({ code: 1, msg: 'token信息错误或失效！' })
            } else {
                // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
                req.api_user = decoded
                next()
            }
        });
    } else {
        // 如果没有token，则返回错误
        return res.json({
            code: 1,
            msg: '没有提供token！'
        })
    }
}