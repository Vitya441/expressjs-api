const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Role = require('./role');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }

});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10); // Хэширование пароля перед сохранением
});

// Метод проверки пароля
User.prototype.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


module.exports = User;
