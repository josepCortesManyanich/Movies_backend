const express = require('express');
const router = express.Router();
const Movies = require ('../models/Movies')



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

router.get('/:movieId', async(req,res,next) =>{
    const {movieId} = req.params
    try {
        const movieDb = await Movies.findById(movieId)
        if(!movieDb){
            console.log('No hay movies')
        } else res.status(200).json({data: movieDb})
    } catch (error) {
        console.error(error)
    }
})




module.exports = router