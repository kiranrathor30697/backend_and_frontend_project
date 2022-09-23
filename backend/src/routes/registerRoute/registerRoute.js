const express = require('express')
const { registerController } = require('../../controller/registerController/registerController')
const registerRoute = express.Router()

registerRoute.post('/register',registerController)


module.exports = { registerRoute }