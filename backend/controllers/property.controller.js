const Property = require("../models/Property");
const Review = require("../models/Review");

exports.createProperty = async (req, res) => {
  const property = await Property.create({
    ...req.body,
    host: req.user.id
  });
  res.status(201).json(property);
};

exports.getAllProperties = async (req, res) => {
  const properties = await Property.find().populate("host", "name");
  res.json(properties);
};

exports.getPropertyById = async (req, res) => {
  const property = await Property.findById(req.params.id)
    .populate("host", "name");

  const reviews = await Review.find({ property: property._id })
    .populate("user", "name");

  res.json({ property, reviews });
};

exports.deleteProperty = async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (!property || property.host.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await property.deleteOne();
  res.json({ message: "Property deleted" });
};
