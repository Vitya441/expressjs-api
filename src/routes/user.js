const express = require("express");
const router = express.Router();
// const User = require('../models/user');
const userController = require("../controllers/user");

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);



// // Создание пользователя
// router.post('/', async (req, res) => {
//     try {
//       const user = await User.create(req.body);
//       res.json(user);
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to create user.' });
//     }
// });

// // Получить всех
// router.get('/', async (req, res) => {
//     try {
//       const users = await User.findAll();
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to fetch users.' });
//     }
// });

// // Получить по ID
// router.get('/:id', async (req, res) => {
//     try {
//       const user = await User.findByPk(req.params.id);
//       if (!user) {
//         res.status(404).json({ message: 'User not found.' });
//       } else {
//         res.json(user);
//       }
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to fetch user.' });
//     }
//   });


module.exports = router;  
