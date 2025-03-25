const express = require('express')
const verify = require('../controller/verifyController')
const router = express.Router()

router.get('/', verify)

module.exports = router