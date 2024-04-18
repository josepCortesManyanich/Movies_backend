const mongoose = require ('mongoose')
const {Schema , model} = require('mongoose')

const FavoritaSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
      },
    apiId: {
        type: String
    },       
    apiTitle:{
        type:String
    },
    apiImage:{
        type:String
    },
    
    });

module.exports = model('Favoritas', FavoritaSchema)
    