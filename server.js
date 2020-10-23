var express = require('express')
const bodyParser = require('body-parser')
var app = express()
require('./database.js')

//servir contenido estatico
app.use(express.static(__dirname))

//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//importar rutas
const personaRoute = require('./routes/persona');
//rutas middlewares
app.use('/api/persona', personaRoute);

var server = app.listen(3000, ()=>{
    console.log("servidor corriendo en puerto:",
    server.address().port);
})