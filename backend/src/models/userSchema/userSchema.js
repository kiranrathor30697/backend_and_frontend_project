const { mongoose } = require("../../config/db");
const { Schema } = require('mongoose')
let userSchema = new Schema({
                                username:{
                                    type: String,
                                    required: true,
                                },
                                email:{
                                    type: String,
                                    unique: true,
                                    required: true
                                },
                                dob:{
                                    type:String,
                                    required:true
                                },
                                password:{
                                    type: String,
                                    required: true,
                                    minLength:8
                                },
                                confirmPassword:{
                                    type: String,
                                    minLength:8
                                },
                                confirmationCode:{
                                    
                                }
                                },{
                                    timestamps:true
                            });

const User = mongoose.model('MyUser',userSchema)
module.exports = { User }