const bcrypt = require('bcrypt')
const { User } = require("../../models/userSchema/userSchema")

const loginController = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            console.log('exist')
            // const userData = new User(user)
            const {username,email,_id,dob} = user
            res.status(200).json({
                message:"Login Successfylly",
                _id,
                username,
                email,
                dob
            })
        } else {
            console.log("not exist")
            res.status(404).json({
                message:"User not Found"
            })
        }
    }else{
        res.status(404).json({
            message:"User not Found"
        })
    }    
}

module.exports = { loginController }