const Booking = require("../models/Booking");
const Property = require("../models/Property");
const { daysBetween } = require("../utils/date");

exports.createBooking = async (req, res) => {
  const { property, startDate, endDate } = req.body;

  const conflict = await Booking.findOne({
    property,
    status: "CONFIRMED",
    $or: [
      { startDate: { $lte: endDate }, endDate: { $gte: startDate } }
    ]
  });

  if (conflict) {
    return res.status(400).json({ message: "Dates not available" });
  }

  const prop = await Property.findById(property);
  const days = daysBetween(startDate, endDate);
  const totalPrice = days * prop.price;

  const booking = await Booking.create({
    user: req.user.id,
    property,
    startDate,
    endDate,
    totalPrice
  });

  res.status(201).json(booking);
};
