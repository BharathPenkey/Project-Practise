const express = require('express')
const { loginAdmin} = require('../controllers/adminControllers');

const router = express.Router();

//login
router.post('/login', loginAdmin)


module.exports = router