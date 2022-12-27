const fs = require("fs");

const writeInJson = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./data/${file}.json`, data, err => {
      reject(err);
    });
    resolve(data);
  });
};

module.exports = writeInJson;
