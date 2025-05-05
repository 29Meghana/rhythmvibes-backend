const Song = require('../models/Song');

// @desc    Get all songs
// @route   GET /api/songs
exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add a new song
// @route   POST /api/songs
exports.addSong = async (req, res) => {
  const { title, artist, genre, image, audio } = req.body; // ✅ include audio

  try {
    const newSong = new Song({ title, artist, genre, image, audio }); // ✅ include audio
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
