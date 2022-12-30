const fs = require("fs");

exports.writeInJson = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./data/${file}.json`, data, err => {
      reject(err);
    });
    resolve(data);
  });
};
