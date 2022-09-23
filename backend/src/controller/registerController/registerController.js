const { User } = require('../../models/userSchema/userSchema')
const bcrypt = require('bcrypt')
const salt = 10;
const registerController = (req,res)=>{

    const { validationResult } = require('express-validator')
    const error = validationResult(req)
    
    if(error.isEmpty()){

        User.findOne({email:req.body.email},(err,info)=>{
            if(info === null){
                let hash = bcrypt.hashSync(req.body.password, salt);
                req.body.password = hash;
                const userData = new User(req.body)
                userData.save()
                .then(data=>{
                    const {username,email,dob,_id} = data
                    res.status(201).json({
                        message:'User created Successfully',
                        username,
                        _id,
                        email,
                        dob
                    })
                })
                .catch(err=>{
                    res.status(201).json({
                        message:'Not Register',
                        error:err
                    })
                })
            }else{
                res.status(400).json({
                    message:"Email Alreardy Exist"
                })
            }
        })
    }else{
        res.status(400).json({error:error.array()})
    }
}

module.exports = { registerController }