const fs = require("fs");

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

module.exports = { generatePosts, getPostDetails };
