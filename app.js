require('dotenv').config();
const express = require ('express')
const cors = require ('cors')
const {dbConect} = require ('./db/index')

const indexRouter = require('./routes/index')
const userRouter = require ('./routes/user-routes')
const movieRouter = require('./routes/Movies-router')
const serieRouter = require('./routes/series-routes')

const app = express()

dbConect()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/', indexRouter)
app.use('/api/user', userRouter)
app.use('/api/movies', movieRouter)
app.use('/api/series', serieRouter)







app.listen(7000,() =>{
    console.log('Conectado a la base de datos')
})