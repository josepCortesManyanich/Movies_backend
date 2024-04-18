const router = require('express').Router();
const User = require('../models/User');
const ErrorResponse = require('../error')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const saltRounds = 10
const {isAuthenticated} = require('../middlewares/jwt')
const mongoose = require('mongoose')


router.post('/signup', async (req, res, next) => {
    const { email, password, username, imageUrl } = req.body;
    console.log(req.body)
    
    if (email === "" || password === "" || username === "") {
      return next(new ErrorResponse('Obligatorio todos los campos para registrarse', 400))
    }
    // Regex para poner formato del mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return next(new ErrorResponse('Email is not a valid format', 400))
    }
     // Con la regex pongo unos requisitos en validación del password
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      return next(new ErrorResponse('La contraseña tiene que tener minimo 6 caracteres, una mayuscula, una minuscula y un simbolo.', 400))
    }
    try {
      const userInDB = await User.findOne({ email });
      if (userInDB) {
        return next(new ErrorResponse(`El usuario ya esta registrado con este ${email}`, 400))
      } else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const user = await User.create({ email, hashedPassword, username, imageUrl});
        const publicUser = { 
          username: user.username,
          email: user.email,
        }
        res.status(201).json({ data: publicUser });
      }
    } catch (error) {
      next(error);
    }
  });
  
  // @desc    LOG IN user
  // @route   POST /api/v1/auth/login
  // @access  Public
  router.post('/login', async (req, res, next) => { 
    const { email, password } = req.body;
    if (email === "" || password === "") {
      return next(new ErrorResponse('Rellena todos los campos ', 400))
    }
    try {
      const userInDB = await User.findOne({ email });
      if (!userInDB) {
        return next(new ErrorResponse(`No hay usuario registrado con este  ${email}`, 404));
      } else {
        const passwordMatches = bcrypt.compareSync(password, userInDB.hashedPassword);
        if (passwordMatches) {
          
          const payload = {
            email: userInDB.email,
            username: userInDB.username,
            imageUrl: userInDB.imageUrl,
            _id: userInDB._id
          }
         // Uso el middleware jwt para crear un token de autentificacion
          const authToken = jwt.sign(
            payload,
            'Josepcortes123456',
            { algorithm: 'HS256' }
          );
          console.log('Token de autenticación:', authToken)
          res.status(200).json({ authToken: authToken })
        } else {
        
          next(new ErrorResponse('No se puede autentificar este usuario', 401));
        }
      }
    } catch (error) {
      next(error)
    }
  });
  

  //    GET /api/v1/usuario/me
  router.get('/me', isAuthenticated, (req, res, next) => {
    res.status(200).json(req.payload);
  })
  
  //@route   POST /api/v1/usuario/edit
  router.put('/edit', isAuthenticated, async (req,res,next) => {
    const user = req.payload;
    const { email, username, imageUrl } = req.body;
  
    try {
      const userInDB = await User.findById(req.payload._id);
      if(!userInDB){
        next(new ErrorResponse(`Usuario no encontrado: ${req.payload._id}`, 404));
        return;
      } else{
        const updatedUser = await User.findByIdAndUpdate(req.payload._id, { email, username, imageUrl }, { new: true });
        res.status(202).json({ data: updatedUser })
      }
    } catch (error) {
      console.error(error);
      next(error)
    }
  })
  
  router.delete('/delete', isAuthenticated, async (req,res,next) => {
    try {
      const userInDB = await User.findById(req.payload._id);
      if(!userInDB){
        next(new ErrorResponse(`Usuario no encontrado ${req.payload._id}`, 404));
        return;
      } else{
        const deletedUser = await User.findByIdAndDelete(req.payload._id)
        res.status(202).json({ data: deletedUser })
      }
    } 
    catch (error) {
      console.error(error);
      next(error)
    }
  })


  router.post('/:movieId/add', isAuthenticated, async (req, res, next)=>{
    const userId = req.payload._id;
    const { movieId } = req.params;
    try {
      if (!mongoose.isValidObjectId(movieId)) {
        return next(new ErrorResponse('ID de película no válido', 400));
    }

        const user = await User.findById(userId);
        if(!user){
          return next(new ErrorResponse('Usuario no encontrado', 404));
        }
        if (!user.favoritas.includes(movieId)) {
          user.favoritas.push(movieId);
          // Guarda los cambios en la base de datos
          await user.save();
          res.status(200).json({ message: 'Película agregada a favoritos correctamente' });
      } else {
          // Si la película ya está en la lista, devuelve un error
          return next(new ErrorResponse('Esta película ya está en tu lista de favoritos', 400))
      }
  } catch (error) {
      // Manejo genérico de errores
      console.error(error);
      return next(new ErrorResponse('Error al agregar la película a favoritos', 500));
  }
});
  module.exports= router