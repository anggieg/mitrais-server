const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Authorization route
router.post('/auth/register', authController.register);

module.exports = router;