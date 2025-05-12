const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, contact, password } = req.body;

  try {
    const existing = await User.findOne({ email: email.trim() });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const newUser = new User({ 
      name: name.trim(), 
      email: email.trim(), 
      contact: contact.trim(), 
      password: password.trim() // this will be hashed in the schema
    });

    await newUser.save();
    console.log('✅ New user registered:', newUser.email);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.log('❌ Registration error:', err.message);
    res.status(500).json({ message: 'Registration error', error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('🟨 Login attempt:', { email, password });

  try {
    const user = await User.findOne({ email: email.trim() });

    if (!user) {
      console.log('🟥 No user found with email:', email.trim());
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password.trim(), user.password);
    console.log('🔍 Password match:', match);

    if (!match) {
      console.log('🟥 Incorrect password for email:', email.trim());
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    console.log('✅ Login successful for:', user.email);

    res.status(200).json({
      message: 'Login successful',
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.log('❌ Login error:', err.message);
    res.status(500).json({ message: 'Login error', error: err.message });
  }
});

module.exports = router;
