const { Router } = require("express");

const handleValidatorSchema = require("../middleware/validatorSchema");
const { getAllSpecialtie, createSpecialtie } = require("../controllers/specialtie.controller");
const { createSpecialtieSchema } = require("../models/schemas/specialtie.schema");

const router = Router();

router.get("", getAllSpecialtie);
router.post("", handleValidatorSchema(createSpecialtieSchema,'body'),createSpecialtie);

module.exports = router;
