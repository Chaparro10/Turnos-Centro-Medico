const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/mysql.database");

const modelUser = require("./user");
const modelSpecialtie = require("./specialtie");
const modelPatient = require("./patient");
const modelOffice = require("./office");

const modelDoctor = sequelize.define(
  "doctor",
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
// Relación: un doctor ES un usuario
modelDoctor.belongsTo(modelUser, { foreignKey: 'userId', as: 'user' });
modelUser.hasOne(modelDoctor, { foreignKey: 'userId', as: 'doctor' });

modelDoctor.hasMany(modelSpecialtie);
modelSpecialtie.belongsTo(modelDoctor);

modelDoctor.hasMany(modelPatient, { foreignKey: 'doctorId', as: 'patients' });
modelPatient.belongsTo(modelDoctor, { foreignKey: 'doctorId', as: 'doctor' });

modelDoctor.hasOne(modelOffice);
modelOffice.belongsTo(modelDoctor);


module.exports = modelDoctor;
