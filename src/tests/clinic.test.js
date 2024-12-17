const clinicService = require('../service/clinic');
const clinicRepository = require('../repository/clinic');
const User = require('../models/user');
const bcrypt = require('bcrypt');

jest.mock('../repository/clinic'); // Мок репозитория

describe('ClinicService', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Очистка моков после каждого теста
    });

    test('should create a clinic successfully', async () => {
        const clinicData = { name: 'Test Clinic', address: '123 Test Street' };

        clinicRepository.create.mockResolvedValue(clinicData); // Задаем результат для мок-метода

        const result = await clinicService.createClinic(clinicData);

        expect(clinicRepository.create).toHaveBeenCalledWith(clinicData); // Проверяем вызов метода
        expect(result).toEqual(clinicData); // Проверяем результат
    });

    test('should fetch all clinics', async () => {
        const clinics = [
            { name: 'Clinic 1', address: 'Address 1' },
            { name: 'Clinic 2', address: 'Address 2' },
        ];

        clinicRepository.findAll.mockResolvedValue(clinics); // Мокаем метод findAll

        const result = await clinicService.getAllClinics();

        expect(clinicRepository.findAll).toHaveBeenCalled(); // Проверяем вызов findAll
        expect(result).toEqual(clinics); // Проверяем результат
    });
    
});
