// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const songRoutes = require('./routes/songRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/songs', songRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
