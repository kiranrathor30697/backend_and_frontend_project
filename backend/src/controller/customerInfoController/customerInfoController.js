const { Bill_Item } = require("../../models/billItemSchema/billItemSchema");

const customerInfoController = async (req,res) => {
    // res.send("dshjfhsdf")
    try {
        await Bill_Item.aggregate([
            {
                '$lookup':{
                    'from':'customerInformations',//other table name
                    'localField':'_id',//name of main table field 
                    'foreignField': '_custId',//name of sub table field
                    'as':'info'
                }
            }  
        ]).exec(function(err, result){
            if(err){
              console.log(err);
            } else {
              console.log(result);
            }
         } )
    } catch (error) {
        console.log(error)
      
    }
}

module.exports = {customerInfoController}