const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const validate = require("../middleware/validate");
const { createUserSchema }  = require("../schemas/user");

// router.post("/", userController.createUser);
router.post("/", validate(createUserSchema), userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);


module.exports = router;  
