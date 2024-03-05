var mysql = require('mysql')
//npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"json15",
    password:"json15"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query('CREATE DATABASE json15', function(err,result){
        if (err) throw err;
        console.log("Se ha creado la base de datos")
    })
})