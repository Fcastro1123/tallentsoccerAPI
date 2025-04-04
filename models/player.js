const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Player = sequelize.define('Player', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: DataTypes.STRING,
  position: DataTypes.STRING,
  age: DataTypes.INTEGER,
  address: DataTypes.TEXT,
  phone: DataTypes.STRING,
  dominant_foot: DataTypes.STRING,
  height: DataTypes.DECIMAL,
  weight: DataTypes.DECIMAL,
});

module.exports = Player;