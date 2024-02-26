// routes/auth.js
const express = require('express');
const router = express.Router();
const Authenticate = require('../middleware/authenticate');
const { SignupController, LoginController, ForgotController, LogoutController } = require('../controllers/authController');
const { BookTicketController, MyBookingController } = require('../controllers/bookingController');
require('../db/conn');


router.post('/signup', SignupController);
router.post('/login', LoginController);
router.post('/forgotpassword', ForgotController);
router.post('/logout', LogoutController);
router.post('/authenticate', Authenticate, (req, res) => {
  const email = req.email;
  res.json({ message: 'Secure route accessed successfully!', email: email });
});
router.post('/bookticket', BookTicketController);
router.post("/mybookings", MyBookingController);

module.exports = router;
