const Joi = require("joi");

const createOfficeSchema = Joi.object({
  name: Joi.string().required(),
  doctorId: Joi.number().required(),
});

module.exports = { createOfficeSchema };
