const ticketRepository = require("../repository/ticket");

class TicketService {
    
    async createTicket(ticketData) {
        return await ticketRepository.create(ticketData);
    }

    async findAllTickets() {
        return await ticketRepository.findAll();
    }

    async findTicketById(ticketId) {
        const ticket = await ticketRepository.findById(ticketId);
        if (!ticket) {
            throw new Error('Ticket not found'); // Ошибка выбрасывается, если тикет отсутствует
        }
        return ticket;
    }

    async findAllByClinicId(clinicId) {
        return await ticketRepository.findByClinicId(clinicId);
    }
}

module.exports = new TicketService();