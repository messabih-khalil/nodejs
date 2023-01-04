const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");

// MIDDLEWARE

app.use(express.json());

// Routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

module.exports = app;
