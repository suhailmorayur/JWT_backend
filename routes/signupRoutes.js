const express = require('express')
const signup = require('../controller/signupController')
const router = express.Router()

router.post('/', signup)

module.exports = router