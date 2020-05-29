const http = require("http");

http
  .createServer((req, res) => {
    res.end("Hello Node");
  })
  .listen(4444, () => {
    console.log("O servidor esta rodando");
  });
