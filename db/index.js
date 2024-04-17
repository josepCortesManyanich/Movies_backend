const mongoose = require ('mongoose')

const dbConect = async () =>{
    try {
        mongoose.connect('mongodb://localhost:27017/Movies')
    } catch (error) {
        console.error(error)
        next(error)
    }
}

module.exports= {dbConect}