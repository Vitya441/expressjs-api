const User = require("../models/user")

class UserRepository {
    
    async create(userData) {
        return await User.create(userData);
    }

    async findAll() {
        return await User.findAll();
    }

    async findById(userId) {
        return await User.findByPk(userId);
    }

    async findUserByEmail(email) {
        return User.findOne({where: {email: email}})
    }



}   

module.exports = new UserRepository();