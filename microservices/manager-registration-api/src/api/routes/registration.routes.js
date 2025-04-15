const express = require('express');
const registrationController = require('../controllers/registration.controller');

const router = express.Router();

// Route to handle user registration
router.post('/register', registrationController.registerUser);

module.exports = router;