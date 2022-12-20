const fs = require("fs");
const http = require("http");
const url = require("url");

const getData = () => {
  const productData = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
  return productData;
};

const serilizeData = () => {
  const dataObj = JSON.parse(getData());
  return dataObj;
};

const generatePosts = () => {
  let htmlBody = ``;
  serilizeData().forEach(e => {
    htmlBody += `
    <a href="/product?id=${e.id}">
    <ol>
    <li>User Id : ${e.userId}</li>
    <li>Id : ${e.id}</li>
    <li>
      Title : ${e.id}
    </li>
    <li>
      body : ${e.body}
    </li>
  </ol>
    </a>
  <hr/>
    `;
  });

  return htmlBody;
};

const getPostDetails = id => {
  let htmlBody;
  serilizeData().forEach(e => {
    if (parseInt(e.id) == parseInt(id)) {
      htmlBody = `
      <a href="/product?id=${e.id}">
      <ol>
      <li>User Id : ${e.userId}</li>
      <li>Id : ${e.id}</li>
      <li>
        Title : ${e.id}
      </li>
      <li>
        body : ${e.body}
      </li>
    </ol>
      </a>
    <hr/>
      `;
    }
  });

  return htmlBody;
};

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
