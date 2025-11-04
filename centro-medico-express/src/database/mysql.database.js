const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASS_DB,
  {
    host: process.env.HOST_DB,
    dialect: "mysql",
  }
);

const testConnectionMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const syncronizeModel = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("error in sync all models:", error);
  }
};


module.exports = { sequelize, testConnectionMysql, syncronizeModel };
