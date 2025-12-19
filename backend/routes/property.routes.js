const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/property.controller");

router.get("/", controller.getAllProperties);
router.get("/:id", controller.getPropertyById);
router.post("/", auth(["HOST"]), controller.createProperty);
router.delete("/:id", auth(["HOST"]), controller.deleteProperty);

module.exports = router;
