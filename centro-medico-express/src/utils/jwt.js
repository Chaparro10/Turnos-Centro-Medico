const jwt = require("jsonwebtoken");

const hashear = (payload) => { //obtener el token
  const response = jwt.sign(payload, "test", { expiresIn: "1h" });
  return response;
};

const validateToken = (token) => { //validar token
  const response = jwt.verify(token, "test");
  return response;
};

module.exports = { hashear, validateToken };
