const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'postgres',
    password: 'selda2003',
    database: 'test',
});

module.exports = sequelize;