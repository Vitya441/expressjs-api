const express = require("express");
const router = express.Router();
const clinicController = require("../controllers/clinic");
const validate = require("../middleware/validate");
const { createClinicSchema }  = require("../schemas/clinic");

router.post("/", validate(createClinicSchema), clinicController.createClinic);
router.get("/", clinicController.getAllClinics);
router.get("/:id", clinicController.getClinicById);

module.exports = router;
