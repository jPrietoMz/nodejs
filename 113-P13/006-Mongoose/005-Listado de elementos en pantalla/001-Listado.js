var mongoose = require('mongoose');
//const db_uri='mongodb://localhost:27017/anime'
const conexion = 'mongodb://127.0.0.1/anime'

const dragonballSchema = new mongoose.Schema({
    personaje: String,
    raza: String,
    origen: String
})

const Dragonball = mongoose.model("Dragonball", dragonballSchema)

mongoose.connect(conexion).then(function () {
    console.log("Conectado a MongoDB");
    Dragonball.find({})
        .exec()
        .then(function (dragonball) {
            console.log(dragonball);
        })
        .catch(function (err) {
            console.error("Error al consultar la base de datos:", err);
        });
}).catch(function (err) {
    console.error("Error al conectar a MongoDB:", err);
})
/*
var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/contacto'

const formularioSchema = new mongoose.Schema({
    nombre:String,
    asunto:String,
    mensaje:String,
    fecha:String
})

const Formulario = mongoose.model("Formulario",formularioSchema)
mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
    Formulario.find({})
        .exec()
        .then(function(formularios){
            console.log(formularios)
        })
})
*/


