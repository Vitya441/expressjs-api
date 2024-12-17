const jwt = require('jsonwebtoken');
const UserRepository = require("../repository/user");
const UserRoleRepository = require("../repository/userRole");
const constants = require("../constants");

class AuthService {

    // TODO: Здесь определяется роль, с которой будет создан пользователь
    async signUp(userData) {
        const user = await UserRepository.create(userData);
        if (user) {
            UserRoleRepository.create(user.id, constants.userRoleNum);  
        }
    }

    async login(email, password) {
        const user = await UserRepository.findUserByEmail(email);
        if (!user || !(await user.validatePassword(password))) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '100d' } );

        return { user, token };

    }

}

module.exports = new AuthService();