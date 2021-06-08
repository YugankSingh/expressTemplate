const express = require('express')
const router = express.Router()

const rootController = require('../controllers/index')

router.get('/', rootController)


module.exports = router