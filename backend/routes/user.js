const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 

const email = require('../middleware/email-validator');
const password = require('../middleware/password-validator');
const userCtrl = require('../controllers/user');

router.post('/signup', email, password, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('logout', userCtrl.logout);

module.exports = router;