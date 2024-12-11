const Role = require('../models/role');

/**
 * Константно заношу в таблицу Roles 3 вида ролей
 */

const seedRoles = async () => {
    const roles = ['User', 'Admin', 'Manager']; // Ваши значения
    for (const roleName of roles) {
        await Role.findOrCreate({ where: { name: roleName } });
    }
};

module.exports = seedRoles;
