const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Ticket = sequelize.define('Ticket', {
    service_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    doctor_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    appointment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    appointment_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
});

module.exports = Ticket;