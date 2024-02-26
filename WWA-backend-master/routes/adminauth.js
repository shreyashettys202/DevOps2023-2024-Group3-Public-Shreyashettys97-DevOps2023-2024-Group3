// routes/adminauth.js
const express = require('express');
const router = express.Router();
const Authenticate = require('../middleware/authenticate');
const { AdminSignupController, AdminLoginController, AdminLogoutController, AdminForgotController } = require('../controllers/adminAuthController');
const { AdminBookTicketController, AdminBookingsController, AdminEditTicketController, AdminDeleteBookingController } = require('../controllers/adminBookingController');
require('../db/conn');
const adminMail = process.env.ADMIN_MAIL;

router.post('/admin/signup', AdminSignupController);
router.post('/admin/login', AdminLoginController);
router.post('/admin/forgotpassword', AdminForgotController);
router.post('/admin/logout', AdminLogoutController);
router.post('/admin/authenticate', Authenticate, (req, res) => {
    const email = req.email;
    if (email != adminMail) {
        return res.status(401).json({ message: 'Unautherized' });
    }
    res.json({ message: 'Secure route accessed successfully!', email: email });
});
router.post('/admin/bookticket', AdminBookTicketController);
router.post("/admin/mybookings", AdminBookingsController);
router.post("/admin/editticket", AdminEditTicketController);
router.post('/admin/deletebooking', AdminDeleteBookingController);

module.exports = router;