import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config() 
const dbConnect = async () => {
    try{
        const conn =  await mongoose.connect(process.env.MONGO_URI)
        console.log("connnected to mongodb")
        console.log(conn.connection.host)
    }catch(error){
        console.log(error)
    }
}

export default dbConnect