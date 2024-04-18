const express = require('express');
const router = express.Router();
const Favoritas= require('../models/Favorite');
const {isAuthenticated}= require('../middlewares/jwt')


router.get('/', async(req,res,next) =>{
    try {
        const favorita = await Favoritas.find({})
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
        let newFavorita = await Favoritas.findOne({ userID: userId });

        // Si no existe una lista de favoritos para este usuario, creamos una nueva
        if (!newFavorita) {
            newFavorita = new Favoritas({
                userID: userId,
                apiId,
                apiTitle,
                 apiImage
            });
            await newFavorita.save(); // Guardamos la nueva lista de favoritos en la base de datos
            return res.status(201).json({ message: 'Película agregada a favoritos exitosamente' });
        }

        // Si ya existe una lista de favoritos para este usuario, agregamos la película a la lista existente
        newFavorita.favoritas.push({ apiId, apiTitle, apiImage });
        await newFavorita.save(); // Guardamos la lista de favoritos actualizada en la base de datos
        return res.status(201).json({ message: 'Película agregada a favoritos exitosamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Ocurrió un error al agregar la película a favoritos' });
    }
});









module.exports= router