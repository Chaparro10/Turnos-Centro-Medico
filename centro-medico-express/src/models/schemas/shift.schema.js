const Joi = require("joi");

const createShiftSchema = Joi.object({
  userId: Joi.number().required(),
  doctorId: Joi.number().required(),
});

module.exports = { createShiftSchema };
