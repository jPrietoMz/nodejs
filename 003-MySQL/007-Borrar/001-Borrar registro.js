var mysql = require('mysql')
// npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"json15",
    password:"json15",
    database:"json15"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query(`
        DELETE FROM entradas
        WHERE id = 1
    `,function(err,result){
        if(err) throw err;
        console.log("Se ha eliminado el registro")
    })
})