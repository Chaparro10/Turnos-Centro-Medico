const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/mysql.database");

const modelSpecialtie = sequelize.define(
  "spelciatie",
  {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement: true,
        primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = modelSpecialtie;
