const Joi = require("joi");
const userRepository = require("../repositories/transactions.repository");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../utils/auth.util");

const createTransaction = async (transactionsData) => {
  let transactions = await userRepository.findUserByEmail(
    transactionsData.email
  );
  if (user.rows.length > 0) {
    throw new Error("transactions already exist");
  }
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(transactionsData.password, salt);
  const newTransaction = { ...transactionsData, password: hashedPassword };
  transactions = await userRepository.createUser(newTransaction);
  return transactions;
};

// const login = async (userData) => {
//   let user = await userRepository.findUserByEmail(userData.email);

//   if (user.rows.length === 0) {
//     throw new Error(404);
//   }

//   const isPasswordMatched = await bcrypt.compare(
//     userData.password,
//     user.rows[0].password
//   );

//   if (!isPasswordMatched) {
//     throw new Error(401);
//   }

//   const token = generateAccessToken({
//     email: userData.email,
//     id: user.rows[0].id,
//   });

//   return token;
// };

const getTransactionById = async (id) => {
  let transaction = await userRepository.findTransactionById(id);
  if (!transaction) {
    throw new Error("user not found");
  }
  return transaction;
};

const getTransaction = async (id) => {
  let transaction = await userRepository.findTransaction(id);
  if (!transaction) {
    throw new Error("user not found");
  }
  return transaction;
};

module.exports = { createTransaction, getTransactionById, getTransaction };
