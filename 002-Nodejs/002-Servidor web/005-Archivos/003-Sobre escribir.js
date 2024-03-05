var archivos = require('fs');
archivos.writeFile("nuevo.txt",'Este es mi contenido 3 \n', function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})