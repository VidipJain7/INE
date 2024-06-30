const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const MenuItem = require('./MenuItem');
const Order = require('./Order');

User.init(sequelize);
MenuItem.init(sequelize);
Order.init(sequelize);

Order.belongsTo(User, { as: 'customer' });
Order.belongsToMany(MenuItem, { through: 'OrderItems' });
MenuItem.belongsToMany(Order, { through: 'OrderItems' });

sequelize.sync();

module.exports = { User, MenuItem, Order };
