const { body } = require('express-validator')
const validations = [
    body('username').notEmpty().isAlpha().withMessage('Please Enter Username'),
    body('email').notEmpty().isEmail().withMessage('Please Enter Email'),
    body('dob').notEmpty().isDate().withMessage('Please Enter DateOfBirth (YYYY/MM/DD)'),
    body('password').notEmpty().isLength({min:8}).withMessage('Please Enter minimum 8 digit password')
]

module.exports = { validations }