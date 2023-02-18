const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.use('/', express.static(__dirname + '/public'))
io.on('connection', (socket) => {
  socket.on('msg_send', (data) => {
    console.log(data)
    socket.broadcast.emit('msg_rcvd', data)
  })
  // setInterval(() => {
  //   socket.emit('from_server')
  // }, 2000)
})

server.listen(3000, () => {
  console.log('server started')
})
