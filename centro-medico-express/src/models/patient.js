const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/mysql.database");

const modelUser = require("./user");

const modelPatient = sequelize.define(
  "patient",
  {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement:true,
      primaryKey:true
    },
  },
  {
    timestamps: true,
  }
);


//relaciones
// Relación: un paciente ES un usuario
modelPatient.belongsTo(modelUser, { foreignKey: 'userId', as: 'user' });
modelUser.hasOne(modelPatient, { foreignKey: 'userId', as: 'patient' });

module.exports = modelPatient;
