const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/user.controller");

router.get("/me", auth(), controller.getProfile);
router.get("/bookings", auth(), controller.getMyBookings);
router.get("/host/dashboard", auth(["HOST"]), controller.getHostDashboard);

module.exports = router;
