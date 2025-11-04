const Joi = require("joi");

 const createSpecialtieSchema = Joi.object({
  firstName: Joi.string().min(3).max(255).required(),
  lastName: Joi.string().min(3).max(255).required(),
  email: Joi.string().min(3).max(255).email().required(),
  password: Joi.string().min(3).max(255).required(),
  role: Joi.string().min(3).max(255).required(),
});


module.exports={createSpecialtieSchema};
