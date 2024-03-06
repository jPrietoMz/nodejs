var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/p13'

const formularioSchema = new mongoose.Schema({
    nombre:String,
    asunto:String,
    mensaje:String,
    fecha:String
})

const Formulario = mongoose.model("pokemon",formularioSchema)

const NuevoFormulario = new Formulario({
    nombre:"Cyndaquil",
    tipo:"Fuego",
    Naturaleza:"Atrevida",
    Peso:"27 kg"
})
mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
    NuevoFormulario.save()
        .then(function(){
            console.log("Insertado")
        })
})
