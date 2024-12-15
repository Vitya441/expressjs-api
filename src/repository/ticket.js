const Ticket = require("../models/ticket");

class TicketRepository {
    
    async create(ticketData) {
        return await Ticket.create(ticketData);
    }

    async findAll() {
        return await Ticket.findAll();
    }

    async findById(ticketId) {
        return await Ticket.findByPk(ticketId);
    }

    async findByClinicId(clinicId) {
        return await Ticket.findAll({
            where: { clinic_id: clinicId }
        });
    }
    


}

module.exports = new TicketRepository();