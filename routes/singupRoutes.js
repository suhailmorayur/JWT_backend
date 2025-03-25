const express = require('express')
const singup = require('../controller/singupController')
const router = express.Router()

router.post('/', singup)

module.exports = router