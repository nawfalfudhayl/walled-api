const pool = require("../db/db");

// const findTransactionByEmail = async (email) => {
//   try {
//     const result = await pool.query("SELECT * FROM transactions where email = $1", [
//       email,
//     ]);
//     return result;
//   } catch (error) {
//     throw new Error("Something went wrong");
//   }
// };

const findTransactionById = async (id) => {
  try {
    console.log(id);
    const result = await pool.query(
      "SELECT * FROM transactions where user_id = $1",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const findTransaction = async () => {
  try {
    const result = await pool.query("SELECT * FROM transactions", []);
    return result.rows;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const createTransaction = async (transaction) => {
  const { date_time, type, from_to, description, amount } = transaction;

  try {
    const result = await pool.query(
      "INSERT INTO transactions (date_time, type, from_to, description, amount) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [date_time, type, from_to, description, amount]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Database error occurred while creating the transaction.");
  }
};

module.exports = { createTransaction, findTransactionById, findTransaction };
