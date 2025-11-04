const handleValidatorSchema = (schema, property) => {
  return (req, res, next) => {
    const data = req[property]; // body o params
    const { error } = schema.validate(data);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }
    next();
  };
};
module.exports=handleValidatorSchema;
