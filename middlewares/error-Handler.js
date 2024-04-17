const ErrorResponse = require('../error')

//Administrar errores en consola
const errorHandler = (err, req, res, next) => {
    let error = { ...err }
  
    error.message = err.message;
 
    console.log(err);

    if (err.name === 'CastError') {
      const message = `ID no valido`;
      error = new ErrorResponse(message, 404);
    }
  
    if (err.code === 11000) {
      const message = 'Key duplicada';
      error = new ErrorResponse(message, 400);
    }
  
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
  
  module.exports = errorHandler;