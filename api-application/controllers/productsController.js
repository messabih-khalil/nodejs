const fs = require("fs");
const { writeInJson } = require("../actions/writingFile");

const data = JSON.parse(fs.readFileSync("./data/data.json"));



exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    result: data.length,
    data: data,
  });
};

exports.addProduct = (req, res) => {
  const id = data.length + 1;
  const dataObject = Object.assign({ id: id }, req.body);
  data.push(dataObject);
  writeInJson("data", JSON.stringify(data))
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

exports.getOneProduct = (req, res) => {
  const product = data[parseInt(req.params.id) - 1];

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};
