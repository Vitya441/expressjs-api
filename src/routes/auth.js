const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const validate = require("../middleware/validate");
const { createUserSchema }  = require("../schemas/user");
const authenticateJwt = require('../middleware/authenticateJwt');
const authorizeRoles = require('../middleware/authorizeRoles');

router.post('/signup', validate(createUserSchema), authController.signUp);

router.post('/login', authController.login);

router.get('/protected', authenticateJwt, (req, res) => {
    res.json({ message: 'You have access!', user: req.user });
});

router.get('/admin', authenticateJwt, authorizeRoles(['Admin']), (req, res) => {
    res.json({ message: 'Welcome, admin!' });
});


module.exports = router;
