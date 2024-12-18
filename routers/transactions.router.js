const express = require("express");
const router = express.Router();

const transactionsController = require("../controllers/transactions.controller");
const authenticateToken = require("../middleware/middleware");

// router.post("/register", userController.createUser);
// router.post("/login", userController.login);
router.get(
  "/transaction",
  authenticateToken,
  transactionsController.getTransaction
);
router.post(
  "/createTransaction",
  authenticateToken,
  transactionsController.createTransaction
);
router.post(
  "/createTopup",
  authenticateToken,
  transactionsController.createTopup
);
router.post(
  "/createTransfer",
  authenticateToken,
  transactionsController.createTopup
);

module.exports = router;
