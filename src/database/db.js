const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('web_db', 'vitya', '22817', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;