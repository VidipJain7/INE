const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('restaurant', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
