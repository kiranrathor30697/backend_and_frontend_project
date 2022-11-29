const { validationResult } = require("express-validator")
const { CustomerInformation } = require("../../models/createBillSchema/createBillSchema")

const createBillController = (req,res) => {
    const error = validationResult(req)
    if(!error.isEmpty()){
        // console.log("req.body",req.body)
        let myCustomerInformation = new CustomerInformation(req.body)

        myCustomerInformation.save()
        .then((data)=>{
                // const {createdAt,updatedAt,...total} = myCustomerInformation
            delete data._doc.createdAt
            delete data._doc.updatedAt
            delete data._doc.__v

            res.status(200).json({
                        message: "Bill created Successfully",
                        data:data._doc
                    })
             })
        .catch((err)=>{
            console.log(err)
            res.status(500).json({
                message: "Bad Request",
            })
        })
    }
}
module.exports = { createBillController }