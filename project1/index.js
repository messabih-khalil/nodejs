
const http = require("http");
const url = require("url");

const { generatePosts, getPostDetails } = require("./modules/module");

// create server

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  switch (pathname) {
    case "/api":
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(generatePosts());

      break;
    case "/product":
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(getPostDetails(query.id));

      break;

    default:
      break;
  }
});

server.listen(3000, () => {
  console.log("Listening ....");
});
