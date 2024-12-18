const pool = require("../db/db");

const findUserByEmail = async (email) => {
  try {
    const result = await pool.query("SELECT * FROM users where email = $1", [
      email,
    ]);
    return result;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const findUserById = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM users where id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const createUser = async (user) => {
  const { email, username, fullname, password, avatar_url, balance } = user;

  try {
    const result = await pool.query(
      "INSERT INTO users (email, username, fullname, password, avatar_url, balance) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [email, username, fullname, password, avatar_url, balance]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Database error occurred while creating the user.");
  }
};

module.exports = { createUser, findUserByEmail, findUserById };