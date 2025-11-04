
const { findAllSpecialtie, saveSpecialtie } = require("../services/specialtie.service");

const getAllSpecialtie = async (req, res) => {
  try {
    const response = await findAllSpecialtie();
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSpecialtie = async (req,res) => {
  try {
    const response = await saveSpecialtie(req.body);
    if (!response.ok) {
      throw new Error(response.message);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllSpecialtie, createSpecialtie };
