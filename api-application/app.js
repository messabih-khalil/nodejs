const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const app = express();

// MIDDLEWARE

app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("From Middleware ^_^");
  next();
});

// FUNCTIONS

const data = JSON.parse(fs.readFileSync("./data/data.json"));
const users = JSON.parse(fs.readFileSync("./data/users.json"));

const writeInJson = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./data/${file}.json`, data, err => {
      reject(err);
    });
    resolve(data);
  });
};

// ROUTES

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

// USERS ROUTES

const userRouter = express.Router();
app.use("/api/v1/users", userRouter);

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    users: users,
  });
};

const addUser = (req, res) => {
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

const getUser = (req, res) => {
  const user = users[parseInt(req.params.id) - 1];

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

const updateUser = (req, res) => {
  return;
};

const deleteUser = (req, res) => {
  return;
};

userRouter.route("/").get(getAllUsers).post(addUser);

userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
// server

app.listen(8080, "localhost", () => {
  console.log("Server Running ...");
});
