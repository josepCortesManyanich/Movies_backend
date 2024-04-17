require('dotenv').config();
const express = require ('express')
const cors = require ('cors')
const {dbConect} = require ('./db/index')

const app = express()

dbConect()

const indexRouter = require('./routes/index')
const userRouter = require ('./routes/user-routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/', indexRouter)
app.use('/api/user', userRouter)







app.listen(7000,() =>{
    console.log('Conectado a la base de datos')
})