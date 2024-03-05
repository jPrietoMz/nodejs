var mysql = require('mysql')
//npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"JoseNBA1",
    password:"JoseNBA1"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query('CREATE DATABASE NBA_p12', function(err,result){
        if (err) throw err;
        console.log("Se ha creado la base de datos")
    })
})