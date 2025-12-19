const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/booking.controller");

router.post("/", auth(), controller.createBooking);

module.exports = router;
