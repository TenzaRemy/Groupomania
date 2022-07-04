const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 

const email = require('../middleware/email-validator');
const password = require('../middleware/password-validator');
const userCtrl = require('../controllers/user');

router.post('/signup', email, password, userCtrl.signup);
router.post('/login', userCtrl.login);
// router.post('logout', userCtrl.logout);

router.get('/', auth, userCtrl.getAllUsers)
router.get('/:id', auth, userCtrl.getOneUser);

module.exports = router;