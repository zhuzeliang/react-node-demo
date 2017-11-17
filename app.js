var http = require('http');

http.createServer(function(req, res) {  
  res.writeHead(200);
  res.end("hello world6666");
}).listen(8181);