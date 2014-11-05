var domify = require('domify');

module.exports = function renderMessage(message) {
  return domify(
    '<li class="message">' +
      '<div class="sender">' +
        message.sender + ' (' + message.timestamp  + ')' +
      '</div>' +
      '<div class="messagetext">' + message.message + '</div>' +
    '</li>'
  );
};
