var mysql = require('mysql')
// npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs7",
    password:"nodejs7",
    database:"nodejs7"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query(`
        UPDATE entradas
        SET titulo = 'Titulo modificado'
        WHERE id = 1
    `,function(err,result){
        if(err) throw err;
        console.log("Se ha actualizado el registro")
    })
})