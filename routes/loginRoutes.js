const express = require('express')
const login = require('../controller/loginController')
const router = express.Router()

router.post('/',login)

module.exports = router