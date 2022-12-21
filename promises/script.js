const fs = require("fs");
const superAgent = require("superagent");

// read file promise

const readFilePromise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
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
// writing in new file
const writingInFilePromise = message => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/response.txt`, message, err => {
      reject("Writing filled");
    });
    resolve();
  });
};

// consuming promises

readFilePromise(`${__dirname}/file.txt`).then(data => {
  apiDataPromise(data).then(data => {
    writingInFilePromise(data.body.message)
      .then(msg => {
        console.log("Write Succed :)");
      })
      .catch(err => {
        console.log(err);
      });
  });
});
