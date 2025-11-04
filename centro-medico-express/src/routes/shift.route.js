const { Router } = require("express");

const handleValidatorSchema = require("../middleware/validatorSchema");

const { getAllShift, createShift } = require("../controllers/shift.controller");
const { createShiftSchema } = require("../models/schemas/shift.schema");

const router = Router();

router.get("", getAllShift);
router.post("", handleValidatorSchema(createShiftSchema, "body"), createShift);

module.exports = router;
