const User = require("../models/User");
const Property = require("../models/Property");
const Booking = require("../models/Booking");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id })
    .populate("property");
  res.json(bookings);
};

exports.getHostDashboard = async (req, res) => {
  const properties = await Property.find({ host: req.user.id });
  const bookings = await Booking.find()
    .populate("property")
    .where("property")
    .in(properties.map(p => p._id));

  res.json({ properties, bookings });
};
