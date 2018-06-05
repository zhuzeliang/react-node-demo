const socket_io = require('socket.io')

//在线用户
let socketio = {}
let onlineUsers = {}
let onlineCount = 0

socketio.getSocketio = function(server) {

    let io = socket_io.listen(server, {
        path: '/socket.io',
        serveClient: false,
        pingInterval: 10000,
        pingTimeout: 5000,
        cookie: false
    })

    io.on('connection', function(socket) {
        console.log('a user connected')

        //监听新用户加入  
        socket.on('login', function(obj) {
            //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到 
            socket.name = obj._id

            //检查在线列表，如果不在里面就加入  
            if (!onlineUsers.hasOwnProperty(obj._id)) {
                onlineUsers[obj._id] = obj.user
                //在线人数+1  
                onlineCount++
            }

            //向所有客户端广播用户加入  
            io.emit('login', { onlineUsers: onlineUsers, onlineCount: onlineCount, user: obj })
            console.log(obj.user + '加入了聊天室')
        })

        //监听用户退出  
        socket.on('disconnect', function() {
            //将退出的用户从在线列表中删除  
            if (onlineUsers.hasOwnProperty(socket.name)) {
                //退出用户的信息  
                var obj = { _id: socket.name, user: onlineUsers[socket.name] }

                //删除  
                delete onlineUsers[socket.name];
                //在线人数-1  
                onlineCount--;

                //向所有客户端广播用户退出  
                io.emit('logout', { onlineUsers: onlineUsers, onlineCount: onlineCount, user: obj })
                console.log(obj.user + '退出了聊天室');
            }
        })

        //监听用户发布聊天内容  
        socket.on('message', function(obj) {
            //向所有客户端广播发布的消息  
            io.emit('message', obj)
            console.log(obj.user + '说：' + obj.content)
        })

    })
}

module.exports = socketio