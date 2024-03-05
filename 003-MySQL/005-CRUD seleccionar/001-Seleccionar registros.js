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
        SELECT * FROM entradas
    `,function(err,result,fields){
        if(err) throw err;
        console.log(result)
    })
})