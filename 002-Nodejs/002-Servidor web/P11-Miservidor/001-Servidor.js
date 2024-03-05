const http = require('http');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const conexion = mysql.createConnection({
    host: "localhost",
    user: "JoseNBA1",
    password: "JoseNBA1",
    database: "nba_p12"
});

// Conexión a la base de datos
conexion.connect(function(err) {
    if (err) throw err;
    console.log("Conectado a la base de datos MySQL");
});

const servidor = http.createServer(function(req, res) {
    // Parsear la URL
    const ruta = url.parse(req.url, true);

    // Manejar las rutas
    switch (ruta.pathname) {
        case "/":
            enviarArchivo('inicio.html', res);
            break;
        case "/equipos":
            // Realizar consulta a la base de datos para obtener los equipos
            conexion.query('SELECT * FROM entradas', function(err, resultados, campos) {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Error interno del servidor');
                    throw err;
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('<h1>Equipos NBA</h1>');
                res.write('<ul>');
                resultados.forEach(function(equipo) {
                    res.write('<li>' + equipo.Equipo + ' (' + equipo.Alias + ') - ' + equipo.Ciudad + '</li>');
                });
                res.write('</ul>');
                res.end();
            });
            break;
        case "/sobremi":
            enviarArchivo('sobremi.html', res);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Página no encontrada');
    }
});

const puerto = 8080;
servidor.listen(puerto, function() {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});

function enviarArchivo(nombreArchivo, res) {
    const rutaArchivo = path.join(__dirname, nombreArchivo);
    fs.readFile(rutaArchivo, function(err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error interno del servidor');
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}
