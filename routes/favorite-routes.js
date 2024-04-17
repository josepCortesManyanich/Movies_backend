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

router.post('/', async (req, res, next) => {
    const { apiId, apiTitle, apiImage } = req.body;
 
    // Verificar si los campos requeridos están presentes
    if (!apiId || !apiTitle || !apiImage) {
        return res.status(400).json({ error: 'Faltan campos requeridos en la solicitud' });
    }

    try {
        // Crear una nueva instancia de Favoritas con los datos de la película seleccionada
        const nuevaFavorita = new Favoritas({
            apiId,
            apiTitle,
            apiImage
        });

        // Guardar la nueva película en la colección de favoritos
        await nuevaFavorita.save();

        // Responder con un mensaje de éxito
        res.status(201).json({ message: 'Película agregada a favoritos exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al agregar la película a favoritos' });
    }
});














module.exports= router