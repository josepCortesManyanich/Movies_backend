const {Schema , model} = require('mongoose')
const mongoose = require ('mongoose')

const SerieSchema = new Schema({
    apiTitle:{
        type:String
    },
    apiImage:{
        type:String
    },
    apiYear:{
        type:String
    },
    apiPlot:{
        type:String,
        
    },
    apiGenre:{
        type:String,
       
    }
 

    
    });

module.exports = model('Series', SerieSchema)