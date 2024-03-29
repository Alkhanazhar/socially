const express = require('express');
const router = express.Router()
const { signUpController, signInController } = require('../controllers/userController');

router.post("/signup", signUpController)
router.post("/signin", signInController)
module.exports = router