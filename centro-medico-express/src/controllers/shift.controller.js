const { findAllShift, saveShift } = require("../services/shift.service");

const getAllShift = async (req, res) => {
  try {
    const response = await findAllShift();
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createShift = async (req, res) => {
  try {
    const response = await saveShift(req.body);
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllShift, createShift };
