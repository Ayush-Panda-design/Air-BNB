const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property"
    },
    startDate: Date,
    endDate: Date,
    totalPrice: Number,
    status: {
      type: String,
      enum: ["CONFIRMED", "CANCELLED"],
      default: "CONFIRMED"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
