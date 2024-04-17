require('dotenv').config();
const express = require ('express')
const cors = require ('cors')
const {dbConect} = require ('./db/index')

const app = express()

dbConect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));







app.listen(() =>{
    console.log('Conectado a la base de datos')
})