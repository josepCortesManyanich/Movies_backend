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
      favoritas:{
        type: [Schema.Types.ObjectId],
        ref: 'Movies'
      }

    },
    {
      timestamps: true
    });

module.exports = model('User', UserSchema)
    
