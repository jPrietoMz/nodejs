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
        INSERT INTO entradas VALUES(
            NULL,
            'Golden State Warriors',
            'GSW',
            'San Francisco'
        )
    `,function(err,result){
        if(err) throw err;
        console.log("Se ha insertado el registro")
    })
})