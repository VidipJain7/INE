const { Model, DataTypes } = require('sequelize');

class Order extends Model {}

Order.init({
  tableNumber: DataTypes.INTEGER,
  status: DataTypes.STRING,
}, { sequelize: require('../config/database'), modelName: 'order' });

module.exports = Order;
