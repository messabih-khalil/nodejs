const { writeFile } = require("fs");
const superAgent = require("superagent");

//  write data

const writeData = data => {
  return new Promise((resolve, reject) => {
    writeFile("data.txt", data, err => {
      reject(err);
    });
    resolve();
  });
};

// get data

const usersData = async () => {
  const posts = await superAgent.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  await writeData(JSON.stringify(posts.body));
  console.log("Writing :)");
};

usersData();

console.log("Outside");
