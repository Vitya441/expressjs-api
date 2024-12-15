const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const validate = require("../middleware/validate");
const { createUserSchema }  = require("../schemas/user");


router.post('/signup', validate(createUserSchema), authController.signUp);

module.exports = router;  