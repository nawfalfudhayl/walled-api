const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");
const authenticateToken = require("../middleware/middleware");

router.post("/register", userController.createUser);
router.post("/login", userController.login);
router.get("/profile", authenticateToken, userController.getUserById);
module.exports = router;
