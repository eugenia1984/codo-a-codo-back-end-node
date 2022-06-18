var http = require("http");

var mensajes = function(solicitud, respuesta){

    respuesta.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    respuesta.write("<h1>Hola Ñandú</h1>");
    respuesta.end("Fin");
    console.log("Ejecutando servidor 2do mensaje en el puerto 4000...");

}

var servidor = http.createServer(mensajes);
servidor.listen(4000);