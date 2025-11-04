const { findAllPatients, savePatient } = require("../services/patient.service");

const getAllPatients = async (req, res) => {
  try {
    const response = await findAllPatients();
    if (!response || response.patients.length == 0) {
      throw new Error(response.message);
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createPatient = async (req, res) => {
  try {
    const response = await savePatient(req.body);
    if (!response) {
      throw new Error(response.message);
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getAllPatients, createPatient };
