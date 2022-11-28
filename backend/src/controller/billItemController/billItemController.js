const { validationResult } = require("express-validator")
const { Bill_Item } = require("../../models/billItemSchema/billItemSchema")

const billItemController = async (req,res) => {
    const error = validationResult(req)
    // console.log(req.body,"req.bodddddddddy")

    if(!error.isEmpty()){
        try {
            // res.send("billItemController,okokokokokokok")
            const {item,quantity,price,_custId} = req.body

            let billItemData = new Bill_Item({item,quantity,price,_custId})

            // console.log(billItemData,"billItemData")

            // console.log(_custId,"custId")
            let data = await billItemData.save()
            
        } catch (error) {
           console.log(error) 
        }
    }
}

module.exports = { billItemController }