const express = require('express')
const router = express.Router()
const Controller = require(`../controllers/users.controller`)

router.post('/login', Controller.login)

module.exports = router