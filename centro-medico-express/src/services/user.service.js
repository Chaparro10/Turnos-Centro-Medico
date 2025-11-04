const modelUser = require("../models/user");
const { compareHash } = require("../utils/bcrypt");
const { hashear } = require("../utils/jwt");

const saveUser = async (data) => {
    let response = {
        ok: true,
        message: "Usuario agregado correctamente",
    };
    try {
        const existUser = await findOneUser(data.email);
        if (existUser) {
            throw new Error("Ya existe un usuario con ese email");
        }
        await modelUser.create(data);
    } catch (error) {
        response.error = true;
        response.message = `Fallo al agregar el usuario`;
        console.log("Ocurrio un error al guardar el usuario: ", error);
    }
    return response;
};

const findOneUser = async (email) => {
    let response = {
        ok: true,
        message: "Usuario encontrado",
        user: {},
    };
    try {
        const res = await modelUser.findOne(email);
        response.user = res;
    } catch (error) {
        response.ok = false;
        response.message = "Ocurrio un error durante la busqueda";
        console.log("Ocurrio un error durante la busqueda", error);
    }
};

const findAllUser = async () => {
    let response = {
        ok: true,
        message: "Lista de usuarios",
        users: [],
    };
    try {
        const res = await modelUser.findAll();
        console.log("res", res);
        if (!res || res.length == 0) {
            throw new Error("No se encontraron registros");
        }
        response.users = res;
    } catch (error) {
        response.message = "Ocurrio un error durante la busqueda de usuarios";
        response.ok = false;
        console.log("Ocurrio un error durante la busqueda de usuarios", error);
    }

    return response;
};

const loginUser = async (data) => {
    let response = {
        ok: true,
        message: "Login exitoso",
        token: null,
    };
    try {
        const res = await modelUser.findOne({ where: { email: data.email } });

        if (!res || res.length == 0) {
            throw new Error("credenciales incorrectas");
        }
        const isValidPass = compareHash(res.password, data.password);
        if (!isValidPass) {
            throw new Error("credenciales incorrectas");
        }
        const result = res.dataValues;

        const payload = {
            id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
            role: result.role,
        };

        const token = hashear(payload);
        response.token = token;
    } catch (error) {
        response.message = error.message;
        response.ok = false;
        console.log("Ocurrio un error durante el login", error);
    }

    return response;
};

module.exports = { saveUser, findOneUser, findAllUser, loginUser };
