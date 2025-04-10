const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use(cors())

const escucha = require('./routes.js')
escucha(app)

app.listen('9090',function(){
    console.log('escuchando en el puerto 9090')
})
