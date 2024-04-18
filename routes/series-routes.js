const express = require('express');
const router = express.Router();
const SeriesFavoritas= require('../models/FavoriteSeries');
const {isAuthenticated}= require('../middlewares/jwt')


router.get('/', async(req,res,next) =>{
    try {
        const favorita = await SeriesFavoritas.find({})
        if(!favorita){
            console.log('No hay favoritas')
        } else res.status(200).json({data: favorita})
    } catch (error) {
        console.error(error)
    }
})

router.post('/', isAuthenticated, async (req, res, next) => {
    const { apiId, apiTitle, apiImage } = req.body;
    const userId = req.payload._id;
    
    try {
        let listaFavoritas = await Favoritas.findOne({ userID: userId });

        if (!listaFavoritas) {
            listaFavoritas = new SeriesFavoritas({ userID: userId, favoritas: [] });
        }
        if (listaFavoritas && listaFavoritas.favoritas) {
           
            const serieExistente = listaFavoritas.favoritas.find(serie => serie.apiId === apiId);
            if (!serieExistente) {
                listaFavoritas.favoritas.push({ apiId, apiTitle, apiImage });
                await listaFavoritas.save();
                return res.status(201).json({  data: listaFavoritas});
            } 
        } else {
            return res.status(500).json({ error: 'Ocurrió un error al obtener la lista de favoritos' });
        }
    } catch (error) {
        console.error(error);
    }
});


module.exports= router