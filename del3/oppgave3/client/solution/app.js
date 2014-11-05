var socketIo = require('socket.io-client');
var renderMessage = require('./renderMessage');
var createMessage = require('./createMessage');

var io = socketIo();
var sendMessageButton = document.querySelector('button[type=submit]');
var messageField = document.querySelector('#message');
var messagesList = document.querySelector('#messages');

sendMessageButton.addEventListener('click', function(e) {
  e.preventDefault();
  io.emit('message', createMessage(messageField.value));
});

io.on('message', function(message) {
  var renderedMessage = renderMessage(message);
  messagesList.insertBefore(renderedMessage, messagesList.firstChild);
});
