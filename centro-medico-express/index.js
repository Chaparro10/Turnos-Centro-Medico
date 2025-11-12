require("dotenv").config();
const http = require("http");
const express = require("express");
const {
  testConnectionMysql,
  syncronizeModel,
  sequelize,
} = require("./src/database/mysql.database");
const { initWebSocket } = require("./src/utils/websocket");

const app = express();

app.use(express.json());

const server = http.createServer(app);
initWebSocket(server);

app.use("/api/users/", require("./src/routes/user.route"));
app.use("/api/doctors/", require("./src/routes/doctor.route"));
app.use("/api/patients/", require("./src/routes/patient.route"));
app.use("/api/offices/", require("./src/routes/office.route"));

const startServer = async () => {
  try {
    await testConnectionMysql();
    await syncronizeModel();

    app.listen(3010, () => {
      console.log("Servidor corriendo en el puerto 3010");
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
  }
};

startServer();
