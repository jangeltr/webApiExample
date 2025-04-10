const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use(cors())

const escucha = require('./routes.js')
escucha(app)

app.listen('8080',function(){
    console.log('escuchando en el puerto 8080')
})
