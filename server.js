
//1
const http = require("node:http") ;

const server = http.CreateServer(function(req,res) {
  res.end("Hello World");
})

server.listen(1234);

//2
const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end("Hello World!");
});

server.listen(7777);
