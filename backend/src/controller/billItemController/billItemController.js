const { validationResult } = require("express-validator")
const { Bill_Item } = require("../../models/billItemSchema/billItemSchema")

const billItemController = async (req,res) => {
    const error = validationResult(req)

    if(!error.isEmpty()){
        try {
            // res.send("billItemController,okokokokokokok")
            let billItemData = new Bill_Item(req.body)
            let data = await billItemData.save()
            console.log(data,"dadaddddaa")
            
        } catch (error) {
           console.log(error) 
        }
    }
}

module.exports = { billItemController }