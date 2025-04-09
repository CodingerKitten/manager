const express = require('express');
const router = express.Router();
const registrationController = require('../controller/registration.controller');
const validateRegistration = require('../dto/registration.dto');

router.post('/register', validateRegistration, registrationController.register);

module.exports = router;