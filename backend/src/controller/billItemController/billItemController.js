const { validationResult } = require("express-validator")
const { BillItem } = require("../../models/billItemSchema/billItemSchema")

const billItemController = async (req,res) => {
    const error = validationResult(req)
    // console.log(req.body,"req.bodddddddddy")

    if(!error.isEmpty()){
        try {
            // res.send("billItemController,okokokokokokok")
            // const {item,quantity,price,_custId} = req.body

            let billItemData = new BillItem(req.body)

            // console.log(billItemData,"billItemData")

            // console.log(_custId,"custId")
            let data = await billItemData.save()
            
        } catch (error) {
           console.log(error) 
        }
    }
}

module.exports = { billItemController }