var mysql = require('mysql')
// npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"JoseNBA1",
    password:"JoseNBA1",
    database:"nba_p12"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query(`
        CREATE TABLE entradas 
        ( 
            id INT AUTO_INCREMENT PRIMARY KEY,
            Equipo VARCHAR(255),
            Alias TEXT,
            Ciudad VARCHAR(255)
        )
    `,function(err,result){
        if(err) throw err;
        console.log("Se ha creado la tabla")
    })
})