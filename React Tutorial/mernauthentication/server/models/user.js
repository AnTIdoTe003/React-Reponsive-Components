const mongoose = require('mongoose')
const {Schema} =mongoose

const userSchema = new Schema({
    username: String,
    email:{
        type:String,
        unique:true
    },
    password: String,
    confirmPassword: String
})


const userModel = mongoose.model('users', userSchema)

module.exports = userModel