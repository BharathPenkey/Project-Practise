const mongoose = require('mongoose')



//CREATING SCHEMA
const Schema = mongoose.Schema
const adminSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true 
    },
    password : {
        type : String,
        required : true
    }
})







module.exports = mongoose.model("Admin" , adminSchema)



