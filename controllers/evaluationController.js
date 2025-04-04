const { Evaluation, Score } = require('../models');

exports.createEvaluation = async (req, res) => {
  try {
    const { player_id, observation, scores } = req.body;
    const evaluation = await Evaluation.create({ player_id, evaluator_id: req.user.id, observation });
    for (const s of scores) {
      await Score.create({ evaluation_id: evaluation.id, ...s });
    }
    res.status(201).json({ evaluation });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao registrar avaliação' });
  }
};

exports.getEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.findAll({ include: ['Player', 'Scores'] });
    res.json(evaluations);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar avaliações' });
  }
};