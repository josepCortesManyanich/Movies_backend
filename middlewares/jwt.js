const {expressjwt : jwt} = require('express-jwt')
const ErrorResponse = require('../error')

//Extraer token jwt de la peticion de autorización
function getTokenFromHeaders(req) {
  
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") { 
      const token = req.headers.authorization.split(" ")[1];
      return token;
    }
    return null;
  }
  
  const isAuthenticated = jwt({
    secret: 'Josepcortes123456',
    algorithms: ["HS256"],
    requestProperty: 'payload',
    getToken: getTokenFromHeaders //token
  });

  module.exports = {isAuthenticated}