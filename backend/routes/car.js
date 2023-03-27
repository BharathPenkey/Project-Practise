const express = require('express')
const {getALLCarDetails,createNewBooking}= require('../controllers/carControllers')

const router = express.Router();

router.get('/carDetails', getALLCarDetails);


router.post('newBooking', createNewBooking)
module.exports = router
