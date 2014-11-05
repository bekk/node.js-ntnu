var socketIo = require('socket.io-client');

var io = socketIo();
var sendMessageButton = document.querySelector('button[type=submit]');
var messageField = document.querySelector('#message');
var messagesList = document.querySelector('#messages');

sendMessageButton.addEventListener('click', function(e) {
  e.preventDefault();
  // Din kode her
});

io.on('message', function(message) {
  // Din kode her
});
