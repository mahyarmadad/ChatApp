const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 5000;
const router = require("./router");
const { addUser, removeUser, getUser, getUserInRoom } = require("./Users");

app.use(router);
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }) => {
    const user = addUser(socket.id, name, room);
    socket.join(user.room);
    socket.emit("message", {
      user: "Admin",
      text: `${user.name} , Welcome to the ${user.room} Room`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "Admin", text: `${user.name} has joined` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUserInRoom(user.room),
    });
  });

  socket.on("sendMessage", (msg) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: msg });
  });

  //   socket.on("sendMessage", (message) => {
  //     const user = getUser(socket.id);
  //     io.to(user.room).emit("message", { user: user.name, text: message });
  //     io.to(user.room).emit("message", {
  //       room: user.room,
  //       users: getUserInRoom(user.room),
  //     });
  //   });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left the room`,
      });
    }
  });
});

server.listen(port, () => console.log(`Server has started on port ${port}!`));
