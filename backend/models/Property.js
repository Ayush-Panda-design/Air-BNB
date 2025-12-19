const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    location: String,
    images: [String],
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", PropertySchema);
