const {Schema , model} = require('mongoose')
const mongoose = require ('mongoose')

const MovieSchema = new Schema({
    apiTitle:{
        type:String
    },
    apiImage:{
        type:String
    },
    
    });

module.exports = model('Movies', MovieSchema)