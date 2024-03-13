var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/anime'

const dragonballSchema = new mongoose.Schema({
    personaje:String,
    raza:String,
    origen:String
})

const Dragonball = mongoose.model("Dragonball",dragonballSchema)
mongoose.connect(conexion).then(function(){
    console.log("conectado a mongo")
})

