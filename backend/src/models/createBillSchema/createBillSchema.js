const { Schema } = require("mongoose");
const { mongoose } = require("../../config/db")

let createBillSchema = new Schema({
    cust_name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    dist:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    billcreatorname:{
        type:String,
        required:true
    },
    // _custId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "BillItem"
    // }
   
    },{
        timestamps:true
    }
)

const CustomerInformation = mongoose.model('CustomerInformation',createBillSchema)

module.exports = { CustomerInformation } 