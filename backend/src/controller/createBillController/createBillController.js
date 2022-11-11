const { validationResult } = require("express-validator")
const { BILLDATA } = require("../../models/createBillSchema")

const createBillController = async (req,res) => {
    const error = validationResult(req)
    if(!error.isEmpty()){
        try{
            const billData = new BILLDATA(req.body)
            const myBillData = await billData.save()
            // const {cust_name,phoneNumber,date,address,state,dist,city,billcreatorname,item} = myBillData
            const {createdAt,updatedAt,...total} = myBillData

            delete req.body.createdAt;
            delete req.body.updatedAt;
            delete req.body.__v;
            res.status(200).json({
                        message: "Bill created Successfully",
                        data:req.body
                    })
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "Bad Request",
            })
        }
    }
}
module.exports = { createBillController }