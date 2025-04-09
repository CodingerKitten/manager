const registrationService = require('../service/registration.service');

exports.register = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await registrationService.registerUser(userData);
    res.status(201).json({ success: true, user });
  } catch (err) {
    next(err); // Pass to error middleware
  }
};