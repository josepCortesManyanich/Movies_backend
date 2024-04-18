const mongoose = require ('mongoose')
const {Schema , model} = require('mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
      },
      hashedPassword: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      imageUrl:{
        type: String
      },
      favoritas: [{
        movieId: { type: Schema.Types.ObjectId, ref: 'Movies' },
        apiTitle: String,
        apiImage: String
      }],
      vistas: [{
        movieId: { type: Schema.Types.ObjectId, ref: 'Movies' },
        apiTitle: String,
        apiImage: String
      }],
  
      
    },
    {
      timestamps: true
    });

module.exports = model('User', UserSchema)
    
