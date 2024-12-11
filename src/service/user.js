const userRepository = require("../repository/user");

class UserService {
    
    async createUser(userData) {
        return await userRepository.create(userData);
    }

    async getAllUsers() {
        return await userRepository.findAll();
    }

    async getUserById(userId) {
        const user = await userRepository.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

}

module.exports = new UserService();