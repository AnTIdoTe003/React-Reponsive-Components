const express = require('express')
const router = express.Router()
const cors = require('cors')
const {registerUser} = require('../controllers/authController')

// middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:3001'
    })
)

router.post('/register', registerUser)

module.exports = router