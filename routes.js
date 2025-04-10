const express = require('express')

function escucha(app){
    const router = express.Router()
    app.use('/',router)

    router.get('/data', async function(req, res, next){
        console.log('recibio peticion get en /data')
        console.log('parametros: ',req.params)
        console.log('query',req.query)
        try{
            res.status(200).json({
                'Peticion get ':'Satisfactoria'
            })
        }catch(error){
            console.log(error)
        }
    })
    router.post('/data', async function(req, res, next){
        console.log('recibio peticion post en /api/datos ')
        console.log('parametros: ',req.params)
        console.log('body: ',req.body)
        console.log('query',req.query)
        try{
            res.status(200).json({
                'Peticion post ':'Satisfactoria',
                'insertado':"user"
            })
        }catch(error){
            console.log(error)
        }
    })
}

module.exports = escucha
