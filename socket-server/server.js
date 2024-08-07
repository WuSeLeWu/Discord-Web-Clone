const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Bir kullanıcı bağlandı");

  socket.on("sendMessage", (message) => {
    console.log("Mesaj alındı:", message); // Mesajı kontrol edin
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("Bir kullanıcı ayrıldı");
  });
});

server.listen(3001, () => {
  console.log("Sunucu 3001 portunda çalışıyor");
});
