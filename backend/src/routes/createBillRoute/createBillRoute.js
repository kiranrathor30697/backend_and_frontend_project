const express = require('express')
const { createBillController } = require('../../controller/createBillController/createBillController')
const createBillRoute = express.Router()

createBillRoute.post('/createBill',createBillController)


module.exports = { createBillRoute }