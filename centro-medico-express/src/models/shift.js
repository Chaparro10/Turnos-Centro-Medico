const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/mysql.database");
const modelPatient = require("./patient");
const modelDoctor = require("./doctor");

const modelShift = sequelize.define(
  "shifts",
  {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement:true,
      primaryKey:true
    },
    date: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "on time",
    },
  },
  {
    timestamps: true,
  }
);

//RELACIONES

// Un turno pertenece a un paciente
modelShift.belongsTo(modelPatient, {
  foreignKey: "patientId",
  as: "patient",
});
modelPatient.hasMany(modelShift, {
  foreignKey: "patientId",
  as: "shifts",
});

// Un turno pertenece a un doctor
modelShift.belongsTo(modelDoctor, {
  foreignKey: "doctorId",
  as: "doctor",
});
modelDoctor.hasMany(modelShift, {
  foreignKey: "doctorId",
  as: "shifts",
});

module.exports = modelShift;
