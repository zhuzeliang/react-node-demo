const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const http = require('http')

const userRouter = require('./user')
const personRouter = require('./person')
const checkToken = require('./check_token')
const io = require('./socket')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())


app.use('/api', userRouter)

//需要登录后才可访问的接口 添加checkToken中间件
app.use('/api', checkToken, personRouter)

const server = http.createServer(app)

//websocket接口
io.getSocketio(server)

server.listen(9093, function() {
    console.log('Node app start at port 9093')
});