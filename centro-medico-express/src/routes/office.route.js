const { Router } = require("express");

const handleValidatorSchema = require("../middleware/validatorSchema");
const {
  getAllOffice,
  createOffice,
} = require("../controllers/office.controller");
const { createOfficeSchema } = require("../models/schemas/office.schema");

const router = Router();

router.get("", getAllOffice);
router.post(
  "",
  handleValidatorSchema(createOfficeSchema, "body"),
  createOffice
);

module.exports = router;
