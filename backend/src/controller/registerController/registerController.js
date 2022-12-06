const { User } = require('../../models/userSchema/userSchema')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const nodemailer = require("nodemailer")
const salt = 10;

// const sendMailVerify = async (name,email) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host:"smtp.gmail.com",
//             port:587,
//             secure:false,
//             requireTLS:true,
//             auth: {
//                 user:"kirankamlesh12345@gmail.com",
//                 pass:"mepjluscaugpwtdi"
//             }
//         })
//         const mailOptions = {
//             from:'kirankamlesh12345@gmail.com',
//             to:email,
//             subject:'For Mail Verification',
//             html:'<p>hello '+name+', Please click here to <a href="http://localhost:3000/login">verify</a></p>'
//         }

       
//             transporter.sendMail(mailOptions,(err,info)=>{
//                 if(err){
//                     console.log(err)
//                 }else{
//                     console.log(info)
//                 }
//             })
        
//     } catch (error) {
//         console.error(error)
//     }
// }
const registerController = (req,res)=>{

    const error = validationResult(req)
    
    if(error.isEmpty()){

        User.findOne({email:req.body.email},(err,info)=>{
            if(info === null){
                let hash = bcrypt.hashSync(req.body.password, salt);
                req.body.password = hash;
                // const userData = new User(req.body)

                // sendMailVerify(req.body.username,req.body.email)

                try {
                    const transporter = nodemailer.createTransport({
                        host:"smtp.gmail.com",
                        port:587,
                        secure:false,
                        requireTLS:true,
                        auth: {
                            user:"kirankamlesh12345@gmail.com",
                            pass:"mepjluscaugpwtdi"
                        }
                    })
                    const mailOptions = {
                        from:'kirankamlesh12345@gmail.com',
                        to:req.body.email,
                        subject:'For Mail Verification',
                        html:'<p>hello '+req.body.username+', Please click here to <a href="http://localhost:3000/login">verify</a></p>'
                    }
            
                   
                        transporter.sendMail(mailOptions,(error,response)=>{
                            if(error){
                                console.log(error)
                            }else{
                                console.log(response)
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
                            }
                        })
                    
                } catch (error) {
                    console.error(error)
                }



                // userData.save()
                // .then(data=>{
                //     const {username,email,dob,_id} = data
                //     res.status(201).json({
                //         message:'User created Successfully',
                //         username,
                //         _id,
                //         email,
                //         dob
                //     })
                // })
                // .catch(err=>{
                //     res.status(201).json({
                //         message:'Not Register',
                //         error:err
                //     })
                // })
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