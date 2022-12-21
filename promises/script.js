const fs = require("fs");
const superAgent = require("superagent");

// read file promise

const readFilePromise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("i could not find the file");
      resolve(data);
    });
  });
};

// get data

const apiDataPromise = endpoint => {
  return new Promise((resolve, reject) => {
    superAgent
      .get(endpoint)
      .then(res => resolve(res))
      .catch(err => {
        reject(err);
      });
  });
};
