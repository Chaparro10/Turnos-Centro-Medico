const Joi = require("joi");

const createPatientSchema = Joi.object({
  userId: Joi.number().required(),
  doctorId: Joi.number().required(),
});

module.exports = { createPatientSchema };
