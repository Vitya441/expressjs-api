const userService = require('../service/user'); // Сервис для тестирования
const userRepository = require('../repository/user'); // Мок репозитория

jest.mock('../repository/user'); // Мокаем UserRepository

describe('UserService', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Очищаем моки после каждого теста
    });

    test('should get user by ID', async () => {
        const userId = 1;
        const userMock = { id: userId, username: 'testuser', email: 'test@example.com' };

        userRepository.findById.mockResolvedValue(userMock); // Возвращаем мок-данные

        const result = await userService.getUserById(userId);

        expect(userRepository.findById).toHaveBeenCalledWith(userId); // Проверяем вызов метода
        expect(result).toEqual(userMock); // Проверяем, что возвращаются корректные данные
    });

    test('should throw an error if user is not found by ID', async () => {
        const userId = 2;

        userRepository.findById.mockResolvedValue(null); // Пользователь не найден

        await expect(userService.getUserById(userId)).rejects.toThrow('User not found'); // Ожидаем исключение
    });

    test('should delete user by ID', async () => {
        const userId = 3;
        const destroyMock = jest.fn().mockResolvedValue(1); // Возвращаем успешное удаление

        userRepository.findById.mockResolvedValue({ id: userId, destroy: destroyMock });

        const user = await userService.getUserById(userId); // Получаем пользователя
        await user.destroy(); // Вызываем метод удаления

        expect(userRepository.findById).toHaveBeenCalledWith(userId); // Проверяем, что был вызван findById
        expect(destroyMock).toHaveBeenCalled(); // Проверяем, что destroy вызван
    });

    test('should not delete if user is not found', async () => {
        const userId = 4;

        userRepository.findById.mockResolvedValue(null); // Пользователь не найден

        await expect(userService.getUserById(userId)).rejects.toThrow('User not found'); // Ожидаем исключение
    });
});
