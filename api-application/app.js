const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("From Middleware ^_^");
  next();
});

const data = JSON.parse(fs.readFileSync("./data/data.json"));

const writeInJson = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./data/data.json", data, err => {
      reject(err);
    });
    resolve(data);
  });
};

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    result: data.length,
    data: data,
  });
};

const addProduct = (req, res) => {
  const id = data.length + 1;
  const dataObject = Object.assign({ id: id }, req.body);
  data.push(dataObject);
  writeInJson(JSON.stringify(data))
    .then(() => {
      res.status(201).json({
        status: "success",
        data: dataObject,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const getOneProduct = (req, res) => {
  const product = data[parseInt(req.params.id) - 1];

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};

// routes
// app.get("/api/v1/products/:id", getOneProduct);

app.route("/api/v1/products").get(getAllProducts).post(addProduct);
// server

app.listen(8080, "localhost", () => {
  console.log("Server Running ...");
});
