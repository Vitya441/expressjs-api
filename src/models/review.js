const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Review = sequelize.define('Riview', {
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
});



module.exports = Review;