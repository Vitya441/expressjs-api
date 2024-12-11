const UserRole = require("../models/userRole");

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





}

module.exports = new UserRoleRepository();