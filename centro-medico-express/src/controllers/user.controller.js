const { findAllUser, saveUser,lo, loginUser } = require("../services/user.service");
const { hashPassword } = require("../utils/bcrypt");
const { hashear } = require("../utils/jwt");

const getAllUser = async (req, res) => {
  try {
    const response = await findAllUser();
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const passHash = hashPassword(req.body.password);
    const data = { ...req.body, password: passHash };

    const response = await saveUser(data);
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const response = await loginUser(req.body);
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json(error.message);
  }
};

module.exports = { getAllUser, createUser, login };
