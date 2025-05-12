const Song = require('../models/Song');

// ✅ Get all songs
exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Add a new song
exports.addSong = async (req, res) => {
  const { title, artist, genre, image, audio } = req.body;

  try {
    const newSong = new Song({ title, artist, genre, image, audio });
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
