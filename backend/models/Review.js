const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property"
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
