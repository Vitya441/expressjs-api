const UserRole = require("../models/userRole");
const Role = require("../models/role");
const User = require("../models/user");

class UserRoleRepository {
    
    async create(userId, roleId) {
        await UserRole.create(
            {
                user_id: userId,
                role_id: roleId
            }            
        )
    }

    async getRoleId(userId) {
        let userRole = await UserRole.findOne(
          {
            where: 
            { 
              user_id: userId 
            },
            raw: true
          }
        );
        return userRole.role_id;
    }

    async setRole(userId, roleId) {
        UserRole.update(
          { 
            role_id: roleId 
          }, 
          { 
            where: 
            { 
              user_id: userId 
            } 
          }
        );
    }

    async getListOfRolesByUserId(userId) {
      try {
          const user = await User.findByPk(userId, {
              include: {
                  model: Role, // Подключаем модель Role
                  attributes: ['name'], // Получаем только имя роли
                  through: { attributes: [] } // Отключаем промежуточные поля из users_roles
              }
          });

          if (!user) {
              throw new Error('User not found');
          }

          const roleNames = user.Roles.map(role => role.name);

          console.log('User roles:', roleNames); // Для отладки

          return roleNames;

      } catch (error) {
          console.error('Error fetching roles:', error);
          throw error; // Пробрасываем ошибку наверх
      }
  }





}

module.exports = new UserRoleRepository();