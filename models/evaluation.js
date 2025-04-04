const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Evaluation = sequelize.define('Evaluation', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  observation: DataTypes.TEXT
});

module.exports = Evaluation;