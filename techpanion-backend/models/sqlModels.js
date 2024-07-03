const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Form = sequelize.define('Form', {
  country: { type: DataTypes.STRING },
  bankKey: { type: DataTypes.STRING },
  bankAccountNumber: { type: DataTypes.STRING },
  reference: { type: DataTypes.STRING },
  // other fields...
});

const ActionHistory = sequelize.define('ActionHistory', {
  action: { type: DataTypes.STRING },
  timestamp: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
});

module.exports = { Form, ActionHistory, sequelize };
