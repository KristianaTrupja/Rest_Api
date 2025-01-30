const express = require('express')
const productRoute = require('./api/routes/product')
const userRoute = require('./api/routes/user')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kristianatrupja:kRtR-202209!@cluster0.v0cdl.mongodb.net/');
mongoose.connection.on('error',err=>{
    console.log('Connection failed')
})
mongoose.connection.on('connected',connected=>{
    console.log('Connected to database...')
})
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/product',productRoute)
app.use('/user',userRoute)
app.use((req,res,next)=>{
    res.status(404).json({
        error: 'Bad request'
    })
})

module.exports = app;