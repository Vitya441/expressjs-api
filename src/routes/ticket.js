const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticket");

router.post("/", ticketController.createTicket);
router.get("/", ticketController.findAllTickets);
router.get("/:id", ticketController.findTicketById);
router.get("/clinics/:clinic_id", ticketController.findAllByClinicId);

module.exports = router;