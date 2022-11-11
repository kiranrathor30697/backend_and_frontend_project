const { Schema } = require("mongoose");
const { mongoose } = require("../config/db")

let createBillSchema = new Schema({
    cust_name:{
        type:"string",
        required:true
    },
    phoneNumber:{
        type:"string",
        required:true
    },
    date:{
        type:"string",
        required:true
    },
    address:{
        type:"string",
        required:true
    },
    state:{
        type:"string",
        required:true
    },
    dist:{
        type:"string",
        required:true
    },
    city:{
        type:"string",
        required:true
    },
    billcreatorname:{
        type:"string",
        required:true
    },
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
    },
    amount:{
        type:"number",
        required:true
    }
    },{
        timestamps:true
    }
)

const BILLDATA = mongoose.model('Bill',createBillSchema)

module.exports = { BILLDATA } 