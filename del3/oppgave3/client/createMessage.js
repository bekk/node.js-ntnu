var date = new Date();
var userName = 'user'+date.getSeconds();

module.exports = function createMessage(messageText) {
  var time = new Date();
  return {
    message: messageText,
    timestamp: time.toLocaleTimeString().replace(/\./g, ':'),
    sender: userName
  };
};
