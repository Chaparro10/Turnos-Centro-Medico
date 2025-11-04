const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/mysql.database");

const modelOffice = sequelize.define(
  "office",
  {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement:true,
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

module.exports = modelOffice;
