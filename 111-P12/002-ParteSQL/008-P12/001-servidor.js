var servidor = require('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring')
var mysql = require('mysql')

var conexion = mysql.createConnection({
                host:"localhost",
                user:"JoseNBA1",
                password:"JoseNBA1",
                database:"nba_p12"
            });

servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'})
   var rutacompleta = ruta.parse(req.url,true)
   archivos.readFile('plantillas/cabecera.html',function(err,data){
        res.write(data)
       switch(req.url){
        case "/":
            archivos.readFile('inicio.html',function(err,data){
                res.write(data)
            });
            break;
        case "/sobremi":
            archivos.readFile('sobremi.html',function(err,data){
                res.write(data)
            });
            break;
        case "/blog":
           

            conexion.connect(function(err){
                if(err) throw err;
                console.log("conectado")
                conexion.query(`
                    SELECT * FROM entradas
                `,function(err,result,fields){
                    if(err) throw err;
                    console.log(result)
                    /*for (let i=0;i<result.length;i++){
                        console.log(result[i])
                    }*/
                })
            })
            break;
        case "/contacto":
            archivos.readFile('contacto.html',function(err,data){
                res.write(data)
            });
            break;
        case "/procesa":
            let datos = '';
            req.on('data', parte => {
                datos += parte.toString();
            });
            req.on('end', () => {
                var cadena = datos;
                var procesado = procesador.parse(cadena);
                console.log(procesado);

                // Insertar los datos en la tabla 'entradas'
                var query = "INSERT INTO entradas (Equipo, Alias, Ciudad) VALUES (?, ?, ?)";
                conexion.query(query, [procesado.Equipo, procesado.Alias, procesado.Ciudad], function(err, result) {
                    if (err) {
                        console.error("Error al insertar datos: " + err.message);
                        res.end("Error al insertar datos en la base de datos");
                    } else {
                        console.log("Datos insertados correctamente");
                        res.end("Datos insertados correctamente");
                    }
                });
            });
            break;
        default:
            res.end("Página no encontrada");
    } 
     archivos.readFile('plantillas/piedepagina.html',function(err,data){
        res.write(data)
         res.end("")
    });
    });
   
    if(req.url != "/favicon.ico"){
       var fecha = new Date();
    archivos.appendFile("registro.txt",fecha.getFullYear()+","+fecha.getMonth()+","+fecha.getDate()+","+fecha.getHours()+","+fecha.getMinutes()+","+fecha.getSeconds()+","+rutacompleta.host+","+rutacompleta.pathname+","+rutacompleta.search+","+req.url+"\n",function(err){
            if(err) throw err;
        })
    }
    
}).listen(8080)