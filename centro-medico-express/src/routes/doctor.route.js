const { Router } = require("express");
const {
  getAllDoctor,
  createDoctor,
} = require("../controllers/doctor.controller");
const handleValidatorSchema = require("../middleware/validatorSchema");
const { createDoctorSchema } = require("../models/schemas/doctor.schema");

const router = Router();

router.get("", getAllDoctor);
router.post("", handleValidatorSchema(createDoctorSchema,'body'),createDoctor);

module.exports = router;
