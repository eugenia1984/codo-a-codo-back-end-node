var http = require('http');  // por convension la variable lleva el mismo nombre que la libreria

var mensajes = function(res, res) { // recibe el request (la solicitud) y da el response (la respuesta)
  res.end('Hola Mundo'); // con el .end() cierro el flujo de informacion
  console.log('Ejecutando servidor en el puerto 4000');
}

const servidor = http.createServer(mensajes);
servidor.listen(4000);// para definir el puerto de escucha