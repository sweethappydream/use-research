const express = require('express')
const { authorizeBearerToken, authorizeVerifyToken } = require('../middlewares/authMiddleware')

const authController = require('../controllers/auth.controller.js')

const router = express.Router()

router.get('/getAccount', [authorizeBearerToken], authController.getAccount)

router.post('/register', [authorizeVerifyToken], authController.register)

router.post('/login', authController.login)

router.post('/sendVerifyCode', authController.sendVerifyCode)

router.post('/verifyEmail', authController.verifyCode)

router.post('/googleVerify', authController.googleVerify)

router.post('/changeAccount', [authorizeBearerToken], authController.changeAccount)

router.post('/changePassword', [authorizeBearerToken], authController.changePassword)

module.exports = router
