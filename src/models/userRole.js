const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");


const UserRole = sequelize.define("users_roles", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
});

module.exports = UserRole;