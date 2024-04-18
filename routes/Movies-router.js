const express = require('express');
const router = express.Router();
const Movies = require ('../models/Movies')
const {isAuthenticated}= require('../middlewares/jwt')


router.get('/', async(req,res,next) =>{
    try {
        const movieDb = await Movies.find({})
        if(!movieDb){
            console.log('No hay favoritas')
        } else res.status(200).json({data: movieDb})
    } catch (error) {
        console.error(error)
    }
})

module.exports = router