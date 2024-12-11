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

    async login(email, password, next) {
        const user = await UserRepository.findUserByEmail(email);
        
        // TODO (validate password)
        if (!user) {
            return new Error("Authorizatoin Exception");
        }

        user.role
    }


}

module.exports = new AuthService();