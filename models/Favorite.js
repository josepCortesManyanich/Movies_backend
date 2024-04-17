const mongoose = require ('mongoose')
const {Schema , model} = require('mongoose')

const FavoritaSchema = new Schema({
    usuario: {
        type: Schema.Type.ObjectId, ref: 'Usuario'
      },
    peliculas:{
        apiId: {type: String},
        apiTitle:{type:String}
    },
    series:{
        apiId:{type:String},
        apiTitle:{type: String},
    },
      
    });

module.exports = model('Favoritas', FavoritaSchema)
    