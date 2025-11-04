const modelPatient = require("../models/patient");
const modelShift = require("../models/shift");

const findAllShift = async () => {
  let response = {
    ok: true,
    message: "Lista de turnos",
    shifts: [],
  };
  try {
    const res = await modelShift.findAll();
    response.shifts = res;
    if (!res || res.length == 0) {
      throw new Error("No se encontraron turnos");
    }
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error durante la busqueada::: ${error.message}`;
  }
  return response;
};

const saveShift = async (data) => {
  let response = {
    ok: true,
    message: "Turno registrado correctamente",
  };
  try {
    await modelShift.create(data);
  } catch (error) {
    response.ok = false;
    response.message = `Ocurrio un error al guardar el turno::: ${error.message}`;
  }
  return response;
};

module.exports = { findAllShift, saveShift };
