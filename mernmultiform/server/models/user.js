const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    username: String,
    email: {type: String, unique: true},
    password: String,
    confirmPassword: String,
    department: String,
    year: String,
    semester: String,
    crush: String,
})

const  users = mongoose.model("users", UserSchema)


module.exports = users