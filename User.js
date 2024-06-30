const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING
}, { sequelize: require('../config/database'), modelName: 'user' });

module.exports = User;
