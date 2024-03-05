var servidor = require('http');
var archivos = require('fs');
var url = require('url');
var qs = require('querystring');

servidor.createServer(function(req,res){
    if(req.method === 'POST' && req.url === '/guardar-mensaje') {
        var body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            var formData = qs.parse(body);
            var mensaje = `Nombre: ${formData.nombre}\nCorreo electrónico: ${formData.email}\nMensaje: ${formData.mensaje}\n\n`;

            archivos.appendFile('mensajes.txt', mensaje, function(err) {
                if (err) throw err;
                console.log('Mensaje guardado con éxito!');
            });

            res.writeHead(302, {'Location': '/gracias.html'});
            res.end();
        });
    } else {
        res.writeHead(200, {'Content-Type':'text/html'});
   
        switch(req.url) {
            case "/":
                archivos.readFile('inicio.html',function(err, data){
                    res.write(data)
                    res.end("")
                });
                break;
            case "/sobremi":
                archivos.readFile('sobremi.html',function(err, data){
                    res.write(data)
                    res.end("")
                });
                break;
            case "/contacto":
                archivos.readFile('contacto.html',function(err, data){
                    res.write(data)
                    res.end("")
                });
            case "/gracias.html":
                archivos.readFile('gracias.html',function(err, data){
                    res.write(data)
                    res.end("")
                });
                break;
            default:
                res.end("Página no encontrada");
        }
    }
}).listen(8080);
