const express = require('express');
const { loginController, signupController } = require('../controllers/authControllers');
const { musicController } = require('../controllers/musicControllers');
const router = express.Router();

router.post('/login', loginController)
router.post('/register', signupController)
router.get('/musics', musicController);

module.exports = router;
