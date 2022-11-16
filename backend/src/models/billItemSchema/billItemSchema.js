const { Schema } = require("mongoose");
const { mongoose } = require("../../config/db")

let billItemSchema = new Schema({
    // cust_name:{
    //     type:"string",
    //     required:true
    // },
    // phoneNumber:{
    //     type:"string",
    //     required:true
    // },
    // date:{
    //     type:"string",
    //     required:true
    // },
    // address:{
    //     type:"string",
    //     required:true
    // },
    // state:{
    //     type:"string",
    //     required:true
    // },
    // dist:{
    //     type:"string",
    //     required:true
    // },
    // city:{
    //     type:"string",
    //     required:true
    // },
    // billcreatorname:{
    //     type:"string",
    //     required:true
    // },
    item:{
        type:"string",
        required:true
    },
    quantity:{
        type:"number",
        required:true
    },
    price:{
        type:"number",
        required:true
    },custId:{
        type:"string",
        required:true
    }
    },{
        timestamps:true
    }
)

const Bill_Item = mongoose.model('billItem',billItemSchema)

module.exports = { Bill_Item } 