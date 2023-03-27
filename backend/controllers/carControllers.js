const Car = require('../models/carModel')


const getALLCarDetails = async (req, res) => {
    const cars = await Car.find({}).sort({createdAt : -1})
    res.status(200).json(cars)
}

const createNewBooking = async (req, res) => {
    const {img,seater,name, innova,rateperkm,available_Date,Book,fare} = req.body
    try{
    
       const newCar = await Car.create({img,seater,name, innova,rateperkm,available_Date,Book,fare}) 
       res.status(200).json(newCar) 
    }
    catch(error){
       res.status(400).json({error : error.message})
    }
}

module.exports = {
    getALLCarDetails,
    createNewBooking
}