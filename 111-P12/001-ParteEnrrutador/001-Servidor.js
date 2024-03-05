const http = require('http');
const url = require('url');
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
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Parsear la URL
    const ruta = url.parse(req.url, true);

    // Manejar las rutas
    switch (ruta.pathname) {
        case "/":
            res.write('<h1>Página de Inicio</h1>');
            res.end();
            break;
        case "/equipos":
            // Realizar consulta a la base de datos para obtener los equipos
            conexion.query('SELECT * FROM entradas', function(err, resultados, campos) {
                if (err) {
                    res.write('Error al obtener los equipos');
                    res.end();
                    throw err;
                }
                res.write('<h1>Equipos NBA</h1>');
                // Mostrar los resultados de la base de datos
                res.write('<ul>');
                resultados.forEach(function(equipo) {
                    // Accede a los valores de las columnas específicas en cada fila del resultado
                    res.write('<li>' + equipo.Equipo + ' (' + equipo.Alias + ') - ' + equipo.Ciudad + '</li>');
                });
                res.write('</ul>');
                res.end();
            });
            break;
        case "/sobremi":
            res.write('<h1>Sobre Mí</h1>');
            res.end();
            break;
        default:
            res.write('Página no encontrada');
            res.end();
    }
});

const puerto = 8080;
servidor.listen(puerto, function() {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
