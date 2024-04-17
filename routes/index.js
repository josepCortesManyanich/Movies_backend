const express = require('express');
const router = express.Router();

const ErrorResponse = require('../error')

router.get('/',  (req,res,next) =>{
    try {
        res.send('API MOVIES')
    } catch (error) {
        console.error(error)
        next(error)
    }
})

module.exports= router