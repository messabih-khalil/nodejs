const express = require("express");
const {
  getAllUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
