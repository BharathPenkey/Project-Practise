const admin = require('../models/adminModel')
const bcrypt = require('bcrypt')
const validator = require("validator")
const jwt = require('jsonwebtoken')

const createToken = (_id) => {   
    return jwt.sign({_id } , process.env.SECRET, {expiresIn : '3d'})
 }

const loginAdmin = async (req, res) => {
    const {email, password} = req.body
    try {
        if(email === 'pauljaiswal@gmail.com' && password === 'abcABC!123'){
             //to genrate salt 
         const salt = await bcrypt.genSalt(10)//default value = 10
         const hash = await bcrypt.hash(password, salt)
   

          //create user with email and hashed password
          const user = await admin.create({email, password : hash})
           const token = createToken(user._id)
          res.status(200).json({email, token})
        }
        else{
            res.status(400).json({error : 'Incorrect Details'})
        }
     }
     catch(error){
        res.status(400).json({error  : error.message})
     }

}

module.exports = {loginAdmin}