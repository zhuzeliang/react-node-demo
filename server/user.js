const express = require('express')
const utils = require('utility')
const sd = require('silly-datetime')
const jwt = require('jsonwebtoken')

const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = { 'pwd': 0, '__v': 0 }
const secret = '!@~#Zero389409258'

Router.post('/loginRegister', function(req, res) {
    const { user, pwd } = req.body
    User.findOne({ user }, function(err, doc) {
        if (doc) {
            if (doc.pwd != md5Pwd(pwd)) {
                return res.json({ code: 1, msg: '用户名或者密码错误' })
            } else {
                let token = jwt.sign(doc.toJSON(), secret, {
                    expiresIn: 60 * 60  //秒到期时间
                });
                let { _id, user } = doc
                return res.json({ code: 0, data: { _id, user, token } })
            }
        } else {
            const userModel = new User({ user, pwd: md5Pwd(pwd) })
            userModel.save(function(e, d) {
                if (e) {
                    return res.json({ code: 1, msg: '后端出错了' })
                }
                let token = jwt.sign(d.toJSON(), secret, {
                    expiresIn: 60 * 60 //秒到期时间
                });
                let { _id, user } = d
                return res.json({ code: 0, data: { _id, user, token } })
            })
        }
    })

})



//测试接口

Router.get('/testApi', (req, res) =>{
    res.json({ code: 0, data: { _id:"whdaiud8",name:"张强"} })
})

function md5Pwd(pwd) {
    const salt = '!@~#Zero389409258'
    return utils.md5(utils.md5(pwd + salt))
}


module.exports = Router;