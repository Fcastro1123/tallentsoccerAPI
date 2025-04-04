const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Score = sequelize.define('Score', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  attribute: DataTypes.STRING,
  category: DataTypes.STRING,
  score: { type: DataTypes.INTEGER, validate: { min: 0, max: 10 } }
});

module.exports = Score;