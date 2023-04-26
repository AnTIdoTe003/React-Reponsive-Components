const userModel = require('../models/user')
 
const registerUser = async (req,res) =>{
    try{
        const {username, email, password, confirmPassword} = req.body
        // checks
        if(!username){
            return res.json({ message:"Name is required"})
        }
        if(password.length <6){
            return res.json({ message:"Password is not strong enough"})
        }
        if(confirmPassword!=password){
            return res.json({ message:"Passwords do not match"})
        }

        const existEmail = await userModel.findOne({ email})

        if(existEmail){
            return res.json({ message:"Email already exists"})
        }

        const user = await userModel.create({ username, email, password, confirmPassword})
        return res.json(user)
    }catch(error){
        console.log(error.message)
    }
}

module.exports={
    registerUser
}