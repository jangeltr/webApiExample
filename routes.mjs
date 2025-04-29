import express from 'express'
import fs from 'fs'

function escucha(app){
    const router = express.Router()
    app.use('/',router)

    router.get('/data', async function(req, res, next){
        console.log('recibio peticion get en /data')
        console.log('parametros: ',req.params)
        console.log('query',req.query)
        fs.readFile('datos.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return res.status(500).json({ error: 'Error al leer el archivo' });
            }
            try{
                const datos = JSON.parse(data);
                res.status(200).json(datos);
            }catch(error){
                res.status(500).json({ error: 'Error al leer el archivo' });
                console.log(error)
            }
        });
    })
    router.post('/data', async function(req, res, next){
        console.log('recibio peticion post en /api/datos ')
        console.log('parametros: ',req.params)
        console.log('body: ',req.body)
        console.log('query',req.query)
        fs.readFile('datos.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return res.status(500).json({ error: 'Error al leer el archivo' });
            }
            const datos = JSON.parse(data);
            datos.push(req.body);
            console.log(datos)
            fs.writeFile('datos.txt', JSON.stringify(datos), (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo:', err);
                    return res.status(500).json({ error: 'Error al escribir en el archivo' });
                }
                res.status(200).json({
                    'Peticion post ':'Satisfactoria',
                    'insertado':req.body
                })
            })
        })
    })
}

export default escucha
