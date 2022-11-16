const express = require('express')
const { billItemController } = require("../../controller/billItemController/billItemController")

const billItemRoute = express.Router()
billItemRoute.post('/billItem',billItemController)

module.exports = { billItemRoute }
