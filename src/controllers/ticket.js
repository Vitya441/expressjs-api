const ticketService = require("../service/ticket");

class TicketController {

    async createTicket(req, res) {
        try {
            const ticket = await ticketService.createTicket(req.body);
            res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async findAllTickets(req, res) {
        try {
            const users = await ticketService.findAllTickets()
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findTicketById(req, res) {
        try {
            const ticket = await ticketService.findTicketById(req.params.id)
            res.json(ticket);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async findAllByClinicId(req, res) {
        try {
            const tickets = await ticketService.findAllByClinicId(req.params.clinic_id);
            res.json(tickets);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }



}

module.exports = new TicketController();