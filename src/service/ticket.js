const ticketRepository = require("../repository/ticket");

class TicketService {
    
    async createTicket(ticketData) {
        return await ticketRepository.create(ticketData);
    }

    async findAllTickets() {
        return await ticketRepository.findAll();
    }

    async findTicketById(ticketId) {
        return await ticketRepository.findById(ticketId);
    }

    async findAllByClinicId(clinicId) {
        return await ticketRepository.findByClinicId(clinicId);
    }
}

module.exports = new TicketService();