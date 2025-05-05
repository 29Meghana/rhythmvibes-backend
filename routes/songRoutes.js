const express = require('express');
const router = express.Router();
const { getSongs, addSong } = require('../controllers/songController'); // ✅ Import functions

// GET all songs
router.get('/', getSongs);

// POST a new song
router.post('/', addSong);

module.exports = router;
