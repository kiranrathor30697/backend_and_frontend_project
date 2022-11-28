const { customerInfoController } = require("../../controller/customerInfoController/customerInfoController")
const express = require("express")
const customerBillInfoRoute = express.Router()

customerBillInfoRoute.get('/customerInfo',customerInfoController)
module.exports = {customerBillInfoRoute}