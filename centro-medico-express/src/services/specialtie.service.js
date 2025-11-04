

const modelSpecialtie = require("../models/specialtie");



const findAllSpecialtie = async () => {
  let response = {
    ok: true,
    message: "Lista de especialidades",
    specialties: [],
  };
  try {
    const res = await modelSpecialtie.findAll();
    response.specialties = res;
    if (!res || res.length == 0) {
      throw new Error("No se encontraron especialidades");
    }
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error durante la busqueada::: ${error.message}`;
  }
  return response;
};

const saveSpecialtie = async (data) => {
  let response = {
    ok: true,
    message: "Especialidad registrada correctamente",
  };
  try {
    await modelSpecialtie.create(data);
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error al guardar la especialidad ::: ${error.message}`;
  }
  return response;
};

module.exports = { findAllSpecialtie, saveSpecialtie };
