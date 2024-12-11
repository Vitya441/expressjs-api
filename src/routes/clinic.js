const express = require("express");
const router = express.Router();
const clinicController = require("../controllers/clinic");

router.post("/", clinicController.createClinic);
router.get("/", clinicController.getAllClinics);
router.get("/:id", clinicController.getClinicById);

module.exports = router;