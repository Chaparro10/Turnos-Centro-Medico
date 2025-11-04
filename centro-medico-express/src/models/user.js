const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/mysql.database");

const modelUser = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement:true,
      primaryKey:true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("doctor", "patient"),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = modelUser;
