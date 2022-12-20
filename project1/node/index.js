const fs = require("fs");
const http = require("http");
const url = require("url");

// create server

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/api":
      res.end("API");
      fs.readFile("../data/data.json", data => {
        console.log(data);
      });
      break;

    default:
      break;
  }
});

server.listen(3000, () => {
  console.log("Listening ....");
});
