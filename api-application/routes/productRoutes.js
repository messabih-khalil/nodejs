const express = require("express");
const fs = require("fs");
const { writeInJson } = require("../actions/writingFile");

const {
  getAllProducts,
  addProduct,
} = require("../controllers/productsController");

// import middleware

const { checkBody } = require("../middlewares/productMiddleware");

// / ROUTES
const router = express.Router();

// routes
// app.get("/api/v1/products/:id", getOneProduct);

router.route("/").get(getAllProducts).post(checkBody, addProduct);

module.exports = router;
