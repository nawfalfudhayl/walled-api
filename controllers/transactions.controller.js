const Joi = require("joi");
const transactionService = require("../services/transactions.service");
const { TransactionResponse } = require("../dto/transactionResponse");

// const registerSchema = Joi.object({
//   date_time: Joi.string().email().required(),
//   type: Joi.string().required(),
//   password: Joi.string().required(),
//   avatar_url: Joi.string().optional(),
//   fullname: Joi.string().required(),
//   balance: Joi.number().optional(),
// });

// const loginSchema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
// });

const getTransactionById = async (req, res) => {
  try {
    const { id } = req.user;
    console.log(id, "pp");
    const user = await transactionService.getTransactionById(Number(id));
    res.status(200).json({ data: user });
  } catch (error) {
    if (error.message === "transaction not found") {
      return res.status(404).json({ error: error.message });
    }
    console.log(error);
    res.status(error.statusCode || 500).json({ error: error.message });
    1;
  }
};

const getTransaction = async (req, res) => {
  try {
    const { id } = req.user;
    console.log(id, "pp");
    const user = await transactionService.getTransaction(Number(id));
    res.status(200).json({ data: user });
  } catch (error) {
    if (error.message === "transaction not found") {
      return res.status(404).json({ error: error.message });
    }
    console.log(error);
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const createTransaction = async (req, res) => {
  try {
    const user = await transactionService.createTransaction(value);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const createTopup = async (req, res) => {
  try {
    const user = await transactionService.createTopup(value);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const createTransfer = async (req, res) => {
  try {
    const user = await transactionService.createTransfer(value);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports = { getTransactionById, createTransaction, getTransaction, createTopup, createTransfer };
