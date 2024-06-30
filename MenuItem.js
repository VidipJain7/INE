const { Model, DataTypes } = require('sequelize');

class MenuItem extends Model {}

MenuItem.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.FLOAT,
  category: DataTypes.STRING,
  image: DataTypes.STRING
}, { sequelize: require('../config/database'), modelName: 'menuItem' });

module.exports = MenuItem;
