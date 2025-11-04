const modelOffice = require("../models/office");



const findAllOffice = async () => {
  let response = {
    ok: true,
    message: "Lista de consultorios",
    offices: [],
  };
  try {
    const res = await modelOffice.findAll();
    response.offices = res;
    if (!res || res.length == 0) {
      throw new Error("No se encontraron consultorios");
    }
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error durante la busqueada::: ${error.message}`;
  }
  return response;
};

const saveOffice = async (data) => {
  let response = {
    ok: true,
    message: "Consultorio registrado correctamente",
  };
  try {
    await modelOffice.create(data);
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error al guardar el consultorio::: ${error.message}`;
  }
  return response;
};

module.exports = { findAllOffice, saveOffice };
