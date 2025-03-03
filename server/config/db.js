const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'postgres',
    password: '',
    database: 'test',
});

module.exports = sequelize;