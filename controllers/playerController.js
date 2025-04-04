const { Player } = require('../models');

exports.createPlayer = async (req, res) => {
  try {
    const data = req.body;
    data.created_by = req.user.id;
    const player = await Player.create(data);
    res.status(201).json(player);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar jogador' });
  }
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar jogadores' });
  }
};