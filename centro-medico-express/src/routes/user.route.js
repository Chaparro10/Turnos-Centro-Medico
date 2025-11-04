const { Router } = require("express");
const { getAllUser, createUser, login } = require("../controllers/user.controller");
const { createUserSchema } = require("../models/schemas/user.schema");
const handleValidatorSchema = require("../middleware/validatorSchema");

const router = Router();

router.get("", getAllUser);
router.post("", handleValidatorSchema(createUserSchema, "body"), createUser);
router.post("/login", login);

module.exports = router;
