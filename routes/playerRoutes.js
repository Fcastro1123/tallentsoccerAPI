const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createPlayer, getPlayers } = require('../controllers/playerController');

router.post('/', auth, createPlayer);
router.get('/', auth, getPlayers);

module.exports = router;
