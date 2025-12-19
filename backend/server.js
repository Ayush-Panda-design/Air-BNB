const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error.middleware");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const propertyRoutes = require("./routes/property.routes");
const bookingRoutes = require("./routes/booking.routes");

require("dotenv").config();
connectDB();

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
  cors: { origin: "*" }
});

require("./sockets/notifications")(io);

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/bookings", bookingRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
