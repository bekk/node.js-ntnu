var socketIo = require('socket.io');
var http = require('http');
var ecstatic = require('ecstatic');

var server = http.createServer(
  ecstatic({
    root: __dirname + '/../client',
    autoIndex: true,
    showDir: false
  })
);

var users = {};

var io = socketIo(server);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message', function(message){
    io.emit('message', message);
  });
});
server.listen(8000);
console.log('http://localhost:8000');
