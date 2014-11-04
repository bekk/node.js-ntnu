var http = require('http');
var ecstatic = require('ecstatic');

http.createServer(
  ecstatic({ root: __dirname, autoIndex: true, showDir: false })
).listen(8080);

console.log('http://localhost:8080');
