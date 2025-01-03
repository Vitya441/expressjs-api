const express = require("express");
const router = express.Router();
const clinicController = require("../controllers/clinic");
const validate = require("../middleware/validate");
const { createClinicSchema } = require("../schemas/clinic");

/**
 * @swagger
 * components:
 *   schemas:
 *     Clinic:
 *       type: object
 *       required:
 *         - name
 *         - address
 *       properties:
 *         id:
 *           type: integer
 *           description: Уникальный идентификатор клиники
 *         name:
 *           type: string
 *           description: Название клиники
 *         address:
 *           type: string
 *           description: Адрес клиники
 *       example:
 *         id: 1
 *         name: "Healthy Life Clinic"
 *         address: "123 Main Street, Cityville"
 */

/**
 * @swagger
 * tags:
 *   name: Clinics
 *   description: API для управления клиниками
 */

/**
 * @swagger
 * /clinics:
 *   post:
 *     summary: Создать новую клинику
 *     tags: [Clinics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clinic'
 *     responses:
 *       201:
 *         description: Клиника успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clinic'
 *       400:
 *         description: Неверный запрос
 *       500:
 *         description: Внутренняя ошибка сервера
 */
router.post("/", validate(createClinicSchema), clinicController.createClinic);

/**
 * @swagger
 * /clinics:
 *   get:
 *     summary: Получить список всех клиник
 *     tags: [Clinics]
 *     responses:
 *       200:
 *         description: Список клиник успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clinic'
 *       500:
 *         description: Внутренняя ошибка сервера
 */
router.get("/", clinicController.getAllClinics);

/**
 * @swagger
 * /clinics/{id}:
 *   get:
 *     summary: Получить информацию о клинике по ID
 *     tags: [Clinics]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID клиники
 *     responses:
 *       200:
 *         description: Информация о клинике успешно получена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clinic'
 *       404:
 *         description: Клиника не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */
router.get("/:id", clinicController.getClinicById);

module.exports = router;
