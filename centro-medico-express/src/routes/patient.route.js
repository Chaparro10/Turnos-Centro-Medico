const { Router } = require("express");
const {
  getAllPatients,
  createPatient,
} = require("../controllers/patient.controller");
const handleValidatorSchema = require("../middleware/validatorSchema");
const { createPatientSchema } = require("../models/schemas/patient.schema");

const router = Router();

router.get("", getAllPatients);
router.post(
  "",
  handleValidatorSchema(createPatientSchema, "body"),
  createPatient
);
module.exports = router;
