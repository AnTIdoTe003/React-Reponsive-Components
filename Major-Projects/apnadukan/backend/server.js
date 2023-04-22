import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import dbConnect from "./config/db.js"

//rest obj
const app = express()

// middleware
app.use(morgan('dev'))
app.use(express.json())

//database configuration
dbConnect()

// env configuration
dotenv.config()




app.get('/', (req, res) => {
    res.send({
        message:'Welcome to Apna Dukan'
    })
})


// const PORT = 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})