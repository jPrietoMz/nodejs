/*var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/anime'

mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
})

node:22012) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:22012) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version sobre este código: var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/anime'

mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
})

*/

var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/anime';

mongoose.connect(conexion).then(function() {
    console.log("Conectado a MongoDB");
}).catch(function(err) {
    console.error("Error al conectar a MongoDB:", err);
});
