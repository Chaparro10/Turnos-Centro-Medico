const Joi = require("joi");

const createDoctorSchema = Joi.object({
  userId: Joi.number().required(),
});

module.exports = { createDoctorSchema };
