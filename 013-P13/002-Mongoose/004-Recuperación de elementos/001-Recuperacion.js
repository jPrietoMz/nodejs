var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/p13'

const pokemonSchema = new mongoose.Schema({
    nombre:String,
    tipo:String,
    Naturaleza:String,
    Peso:String
})

const Pokemon = mongoose.model("pokemon",pokemonSchema)
mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
})

