const express = require('express');
const router = express.Router();
const { getSongs, addSong } = require('../controllers/songController');

// ✅ GET /api/songs → fetch all songs
router.get('/', getSongs);

// ✅ POST /api/songs → add a new song
router.post('/', addSong);

module.exports = router;
