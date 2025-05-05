const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String },
  image: { type: String },
  audio: { type: String }, // ✅ new field for audio link
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Song', songSchema);
