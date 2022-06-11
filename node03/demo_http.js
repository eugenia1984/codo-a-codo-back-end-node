const http = require('http'); // para requerir el modulo HTTP

//crea un objeto server:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hola Mundo Node.Js!'); //escribe del lado del cliente
  res.end(); //cierra el canal de envío de datos
}).listen(8080); //el puerto se define en el nro 8080