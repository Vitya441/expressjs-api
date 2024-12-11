const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Clinic = sequelize.define('Clinic', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Clinic;