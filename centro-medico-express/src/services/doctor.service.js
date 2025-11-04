const modelDoctor = require("../models/doctor");
const modelUser = require("../models/user");

const findAllDoctor = async () => {
  let response = {
    ok: true,
    message: "Lista de doctores",
    doctors: [],
  };
  try {
    const res = await modelDoctor.findAll({ include: "user" });
    response.doctors = res;
  } catch (error) {
    response.ok = false;
    response.message = `ocurrio un error::: ${error.message}`;
  }

  return response;
};

const saveDoctor = async (data) => {
  let response = {
    ok: true,
    message: "Usuario agregado correctamente",
  };
  try {
    const res = await modelDoctor.create(data);
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error al guardar el usuario:::${error.message}`;
  }
  return response;
};

module.exports = { findAllDoctor, saveDoctor };
