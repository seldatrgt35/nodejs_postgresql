const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AuditLog = sequelize.define('AuditLog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = AuditLog;
