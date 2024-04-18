const express = require('express');
const router = express.Router();
const Series = require ('../models/Series')



router.get('/', async(req,res,next) =>{
    try {
        const serieDb = await Series.find({})
        if(!serieDb){
            console.log('No hay series')
        } else res.status(200).json({data: serieDb})
    } catch (error) {
        console.error(error)
    }
})

module.exports = router