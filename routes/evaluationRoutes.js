const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createEvaluation, getEvaluations } = require('../controllers/evaluationController');

router.post('/', auth, createEvaluation);
router.get('/', auth, getEvaluations);

module.exports = router;