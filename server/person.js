const express = require('express')
const utils = require('utility')
const sd = require('silly-datetime')
const jwt = require('jsonwebtoken')

const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Person = model.getModel('person')
const _filter = { 'pwd': 0, '__v': 0 }


Router.post('/personSave', function(req, res) {
    const { name, sex, age, address, _id } = req.body
    console.log(_id)
    const body = req.body
    let date = sd.format(new Date(), 'YYYY-MM-DD HH:mm')
    const personModel = new Person({ name, sex, age, address, date })
    if (_id == '' || _id === undefined) {
        personModel.save(function(e, doc) {
            if (e) {
                return res.json({ code: 1, msg: '后端出错了' })
            }
            return res.json({ code: 0, data: { name, sex, age, address, _id } })
        })
    } else {
        Person.findByIdAndUpdate(_id, { name, sex, age, address }, function(err, doc) {
            const data = Object.assign({}, doc)
            return res.json({ code: 0, data: data })
        })
    }
})

Router.post('/personRemove', function(req, res) {
    const _id = req.body._id;
    Person.findByIdAndRemove(_id, function(err, doc) {
        return res.json({ code: 0, data: doc })
    })

})

Router.get('/personList', function(req, res) {
    Person.find({})
        .skip(0)
        .limit(10)
        .sort({ '_id': -1 })
        .exec(function(err, doc) {
            Person.count({}, function(err, count) {
                let data = {
                    count: count,
                    personDataList: doc
                }
                return res.json({ code: 0, data: data })
            })
        });

})



Router.get('/userInfo', function(req, res) {
    const _id = req.api_user._id
    if (!_id) {
        return res.json({ code: 1 })
    }
    User.findOne({ _id: _id }, _filter, function(err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '后端出错了' })
        }
        if (doc) {
            return res.json({ code: 0, data: doc })
        }
    })

})


module.exports = Router;