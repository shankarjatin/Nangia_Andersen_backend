const express = require('express');
const { searchCandidates, saveCandidate } = require('../controllers/candidateController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, searchCandidates);
router.post('/', authMiddleware, saveCandidate);

module.exports = router;
