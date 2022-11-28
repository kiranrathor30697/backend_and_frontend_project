const { Schema } = require("mongoose");
const { mongoose } = require("../../config/db")

let billItemSchema = new Schema({
    // cust_name:{
    //     type:String,
    //     required:true
    // },
    // phoneNumber:{
    //     type:String,
    //     required:true
    // },
    // date:{
    //     type:String,
    //     required:true
    // },
    // address:{
    //     type:String,
    //     required:true
    // },
    // state:{
    //     type:String,
    //     required:true
    // },
    // dist:{
    //     type:String,
    //     required:true
    // },
    // city:{
    //     type:String,
    //     required:true
    // },
    // billcreatorname:{
    //     type:String,
    //     required:true
    // },
    item:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    _custId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "customerInformation"
    }
    },{
        timestamps:true
    }
)

const Bill_Item = mongoose.model('Bill_Item',billItemSchema)

module.exports = { Bill_Item } 