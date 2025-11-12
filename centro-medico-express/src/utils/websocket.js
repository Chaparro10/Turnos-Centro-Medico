const { Server } = require("socket.io");

let io; // instancia compartida

function initWebSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*", // Cambia por tu dominio en producción
    },
  });

  const connectedUsers = new Map();

  io.on("connection", (socket) => {
    console.log("🟢 Nuevo cliente conectado", socket.id);

    socket.on("register", (data) => {
      const { userId, role } = data;
      connectedUsers.set(userId, { socket, role });
      socket.join(`${role}_${userId}`); // Ejemplo: doctor_5
      console.log(`✅ ${role} ${userId} registrado`);
    });

    socket.on("disconnect", () => {
      for (const [userId, info] of connectedUsers.entries()) {
        if (info.socket.id === socket.id) {
          connectedUsers.delete(userId);
          console.log(`🔴 Usuario ${userId} desconectado`);
        }
      }
    });
  });

  return io;
}

function getIO() {
  if (!io) {
    throw new Error("❌ Socket.io no ha sido inicializado. Llama initWebSocket(server) primero.");
  }
  return io;
}

module.exports = { initWebSocket, getIO };
