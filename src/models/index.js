const sequelize = require('../database/db');
const User = require('./user');
const Role = require('./role');
const UserRole = require('./userRole');
const Clinic = require('./clinic');
const Review = require('./review');
const Ticket = require('./ticket');

Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id" });
User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id" });

Review.belongsTo(Clinic, {foreignKey: 'clinic_id'});
Review.belongsTo(User, {foreignKey: 'user_id'});

Ticket.belongsTo(Clinic, {foreignKey: 'clinic_id'});

// Экспорт моделей и sequelize
module.exports = {
    sequelize,
    User,
    Role,
    Clinic,
    Review,
    Ticket,
};