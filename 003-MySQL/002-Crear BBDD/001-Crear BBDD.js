var mysql = require('mysql');
// npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs7",
    password:"nodejs7"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query('CREATE DATABASE nodejs7',function(err,result){
        if (err) throw err;
        console.log("Se ha creado la base de datos")
    })
})