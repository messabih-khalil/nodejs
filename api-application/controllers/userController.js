const fs = require("fs");
const { writeInJson } = require("../actions/writingFile");

const users = JSON.parse(fs.readFileSync("./data/users.json"));

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    users: users,
  });
};

exports.addUser = (req, res) => {
  let userId = users.length + 1;
  const usersObject = Object.assign({ id: userId }, req.body);
  users.push(usersObject);
  writeInJson("users", JSON.stringify(users))
    .then(() => {
      res.status(201).json({
        status: "success",
        data: users,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getUser = (req, res) => {
  const user = users[parseInt(req.params.id) - 1];

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.updateUser = (req, res) => {
  return;
};

exports.deleteUser = (req, res) => {
  return;
};
