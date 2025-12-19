module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("🔔 Socket connected:", socket.id);

    socket.on("bookingCreated", (data) => {
      socket.broadcast.emit("notifyHost", data);
    });

    socket.on("disconnect", () => {
      console.log("🔕 Socket disconnected:", socket.id);
    });
  });
};
