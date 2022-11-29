const { Schema } = require("mongoose");
const { mongoose } = require("../../config/db")

let billItemSchema = new mongoose.Schema({
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
        ref: "CustomerInformation"
    }
    },{
        timestamps:true
    }
)

const BillItem = mongoose.model('BillItem',billItemSchema)

module.exports = { BillItem } 