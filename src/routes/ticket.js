const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticket");

/**
 * @swagger
 * components:
 *   schemas:
 *     Ticket:
 *       type: object
 *       required:
 *         - service_name
 *         - doctor_name
 *         - appointment_date
 *         - appointment_time
 *       properties:
 *         id:
 *           type: integer
 *           description: Уникальный идентификатор талона
 *         service_name:
 *           type: string
 *           description: Название услуги
 *         doctor_name:
 *           type: string
 *           description: Имя врача
 *         appointment_date:
 *           type: string
 *           format: date
 *           description: Дата приёма
 *         appointment_time:
 *           type: string
 *           format: time
 *           description: Время приёма
 *         available:
 *           type: boolean
 *           description: Доступность талона
 *         clinic_id:
 *           type: integer
 *           description: ID клиники, к которой относится талон
 *       example:
 *         id: 1
 *         service_name: "Consultation"
 *         doctor_name: "Dr. John Doe"
 *         appointment_date: "2024-12-20"
 *         appointment_time: "14:30"
 *         available: true
 *         clinic_id: 2
 */

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: API для управления талонами
 */

/**
 * @swagger
 * /tickets:
 *   post:
 *     summary: Создать новый талон
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ticket'
 *     responses:
 *       201:
 *         description: Талон успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ticket'
 *       400:
 *         description: Неверный запрос
 *       500:
 *         description: Внутренняя ошибка сервера
 */
router.post("/", ticketController.createTicket);

/**
 * @swagger
 * /tickets:
 *   get:
 *     summary: Получить список всех талонов
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Список талонов успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ticket'
 *       500:
 *         description: Внутренняя ошибка сервера
 */
router.get("/", ticketController.findAllTickets);

/**
 * @swagger
 * /tickets/{id}:
 *   get:
 *     summary: Получить талон по ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID талона
 *     responses:
 *       200:
 *         description: Талон успешно найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ticket'
 *       404:
 *         description: Талон не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */
router.get("/:id", ticketController.findTicketById);

/**
 * @swagger
 * /tickets/clinics/{clinic_id}:
 *   get:
 *     summary: Получить список талонов для клиники
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: clinic_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID клиники
 *     responses:
 *       200:
 *         description: Список талонов успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ticket'
 *       404:
 *         description: Талоны не найдены для данной клиники
 *       500:
 *         description: Внутренняя ошибка сервера
 */
router.get("/clinics/:clinic_id", ticketController.findAllByClinicId);

module.exports = router;
