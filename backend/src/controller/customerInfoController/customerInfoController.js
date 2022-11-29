const { BillItem } = require("../../models/billItemSchema/billItemSchema");
const { CustomerInformation } = require("../../models/createBillSchema/createBillSchema");

const customerInfoController = async (req,res) => {
    // res.send("dshjfhsdf")
    try {
        await CustomerInformation.aggregate([
            {
                '$lookup':{
                    'from':'billitems',//other table name
                    'localField':'_id',//name of main table field 
                    'foreignField': '_custId',//name of sub table field
                    'as':'info'
                }   
            },{
                $unwind: "$info",
            }
        ]).exec(function(err, result){
            if(err){
              console.log(err);
            } else {
              console.log(result);
              res.send(result)
            }
         } )
    } catch (error) {
        console.log(error)
      
    }
}

module.exports = {customerInfoController}