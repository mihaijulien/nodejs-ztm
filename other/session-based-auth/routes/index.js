const express = require('express');
const authenticate = require('../middleware/authenticate');
const authController = require('../controller/auth');
const profileController = require('../controller/profile');

const router = express.Router();

// create an unprotected login endpoint
router.post('/login', authController.login);

// all routes that come after this middleware are protected and
// can only be accessed if the user is logged in
router.use(authenticate);

router.get('/profile', profileController.profile);

module.exports = router;
