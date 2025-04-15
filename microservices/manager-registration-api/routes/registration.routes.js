const express = require('express');
const router = express.Router();
const controller = require('../controllers/registration.controller');
const validate = require('../validators/registration.validator');

// Route to handle user registration
router.post('/', validate, controller.register);

module.exports = router;