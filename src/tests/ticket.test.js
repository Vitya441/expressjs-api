const ticketService = require('../service/ticket'); // Сервис для тестирования
const ticketRepository = require('../repository/ticket'); // Мок репозитория

jest.mock('../repository/ticket');

describe('Ticket Service', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should create a ticket', async () => {
        const ticketData = {
            service_name: 'Consultation',
            doctor_name: 'Dr. Smith',
            appointment_date: '2024-12-20',
            appointment_time: '10:00',
            clinic_id: 1,
        };

        const createdTicket = { id: 1, ...ticketData };

        ticketRepository.create.mockResolvedValue(createdTicket); // Мок ответа создания тикета

        const result = await ticketService.createTicket(ticketData);

        expect(ticketRepository.create).toHaveBeenCalledWith(ticketData); // Проверяем вызов метода создания
        expect(result).toEqual(createdTicket); // Проверяем возвращаемый результат
    });

    test('should find all tickets', async () => {
        const ticketsMock = [
            { id: 1, service_name: 'Consultation', doctor_name: 'Dr. Smith' },
            { id: 2, service_name: 'Surgery', doctor_name: 'Dr. Doe' },
        ];

        ticketRepository.findAll.mockResolvedValue(ticketsMock); // Мок ответа поиска всех тикетов

        const result = await ticketService.findAllTickets();

        expect(ticketRepository.findAll).toHaveBeenCalled(); // Проверяем вызов метода findAll
        expect(result).toEqual(ticketsMock); // Проверяем возвращаемый результат
    });

    test('should find a ticket by ID', async () => {
        const ticketId = 1;
        const ticketMock = { id: ticketId, service_name: 'Consultation', doctor_name: 'Dr. Smith' };

        ticketRepository.findById.mockResolvedValue(ticketMock); // Мок ответа поиска по ID

        const result = await ticketService.findTicketById(ticketId);

        expect(ticketRepository.findById).toHaveBeenCalledWith(ticketId); // Проверяем вызов метода findById
        expect(result).toEqual(ticketMock); // Проверяем возвращаемый результат
    });

    test('should throw an error if ticket by ID is not found', async () => {
        const ticketId = 2;

        ticketRepository.findById.mockResolvedValue(null); // Мок ответа: тикет не найден

        await expect(ticketService.findTicketById(ticketId)).rejects.toThrow('Ticket not found');
        expect(ticketRepository.findById).toHaveBeenCalledWith(ticketId); // Проверяем вызов метода findById
    });

    test('should find all tickets by clinic ID', async () => {
        const clinicId = 1;
        const ticketsMock = [
            { id: 1, service_name: 'Consultation', clinic_id: clinicId },
            { id: 2, service_name: 'Surgery', clinic_id: clinicId },
        ];

        ticketRepository.findByClinicId.mockResolvedValue(ticketsMock); // Мок ответа поиска по clinic_id

        const result = await ticketService.findAllByClinicId(clinicId);

        expect(ticketRepository.findByClinicId).toHaveBeenCalledWith(clinicId); // Проверяем вызов метода findByClinicId
        expect(result).toEqual(ticketsMock); // Проверяем возвращаемый результат
    });
});
