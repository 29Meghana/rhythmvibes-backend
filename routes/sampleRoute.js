// backend/routes/sampleRoute.js

const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
    res.send('Sample Route is working!');
});

module.exports = router;
