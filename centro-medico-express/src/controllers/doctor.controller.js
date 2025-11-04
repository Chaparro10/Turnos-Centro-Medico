const { findAllDoctor, saveDoctor } = require("../services/doctor.service");

const getAllDoctor = async (req, res) => {
  try {
    const response = await findAllDoctor();
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDoctor = async (req,res) => {
  try {
    const response = await saveDoctor(req.body);
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllDoctor, createDoctor };
