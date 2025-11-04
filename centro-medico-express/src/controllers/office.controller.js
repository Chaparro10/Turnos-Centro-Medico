const { findAllOffice, saveOffice } = require("../services/office.service");

const getAllOffice = async (req, res) => {
  try {
    const response = await findAllOffice();
    if (!response || response.offices.length == 0) {
      throw new Error(response.message);
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createOffice = async (req, res) => {
  try {
    const response = await saveOffice(req.body);
    if (!response) {
      throw new Error(response.message);
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getAllOffice, createOffice };
