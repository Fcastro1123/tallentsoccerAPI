const db = require('../config/db');
const User = require('./user');
const Player = require('./player');
const Evaluation = require('./evaluation');
const Score = require('./score');

User.hasMany(Player, { foreignKey: 'created_by' });
Player.belongsTo(User, { foreignKey: 'created_by' });

Player.hasMany(Evaluation, { foreignKey: 'player_id' });
Evaluation.belongsTo(Player, { foreignKey: 'player_id' });

User.hasMany(Evaluation, { foreignKey: 'evaluator_id' });
Evaluation.belongsTo(User, { foreignKey: 'evaluator_id' });

Evaluation.hasMany(Score, { foreignKey: 'evaluation_id' });
Score.belongsTo(Evaluation, { foreignKey: 'evaluation_id' });

module.exports = { db, User, Player, Evaluation, Score };