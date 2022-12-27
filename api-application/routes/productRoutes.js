const express = require("express");
const fs = require("fs");
const { writeInJson } = require("../actions/writingFile");

const {
  getAllProducts,
  addProduct,
} = require("../controllers/productsController");

// / ROUTES
const router = express.Router();

// routes
// app.get("/api/v1/products/:id", getOneProduct);

router.route("/").get(getAllProducts).post(addProduct);

module.exports = router;
