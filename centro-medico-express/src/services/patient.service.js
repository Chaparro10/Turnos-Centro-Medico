const modelPatient = require("../models/patient");

const findAllPatients = async () => {
  let response = {
    ok: true,
    message: "Lista de pacientes",
    patients: [],
  };
  try {
    const res = await modelPatient.findAll();
    response.patients = res;
    if (!res || res.length == 0) {
      throw new Error("No se encontraron pacientes");
    }
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error durante la busqueada::: ${error.message}`;
  }
  return response;
};

const savePatient = async (data) => {
  let response = {
    ok: true,
    message: "Paciente registrado correctamente",
  };
  try {
    await modelPatient.create(data);
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error al guardar el paciente::: ${error.message}`;
  }
  return response;
};

module.exports = { findAllPatients, savePatient };
