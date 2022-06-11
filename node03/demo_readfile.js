var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

/* 
//Crear nuevo archivo con appendFile:

var fs = require('fs');
fs.appendFile('nuevoarchivo.txt', 'Hola Node!', function (err) {
  if (err) throw err;
  console.log('Archivo Guardado!');
});
*/

/* 
// Cree un archivo nuevo y vacío usando el método open():
var fs = require('fs');
fs.open('archivo.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Guardado!');
});
*/

/*
// Crearemos un nuevo archivo usando el método writeFile()
var fs = require('fs');
fs.writeFile('archivo.txt', 'Hola Node!', function (err) {
  if (err) throw err;
  console.log('Guardado!');
});
*/

/*
// Incorporar "Este es el nuevo texto." al final del archivo "archivo.txt":

var fs = require('fs');
fs.appendFile('archivo.txt', ' Este es el nuevo texto.', function (err) {
 if (err) throw err;
  console.log('Se actualizó el archivo!');
});
*/

/*
// El método fs.writeFile() reemplaza el archivo y el contenido especificados

var fs = require('fs');
fs.writeFile('archivo.txt', 'Este es el nuevo texto', function (err) {
  if (err) throw err;
  console.log('Archivo Reemplazado!');
});
*/

/*
// Para eliminar un archivo con el módulo Sistema de archivos, usamos el método fs.unlink()

var fs = require('fs');
fs.unlink('archivo.txt', function (err) {
  if (err) throw err;
  console.log('Archivo eliminado!');
});
*/

/*
//Para cambiar el nombre de un archivo con el módulo Sistema de archivos, utilizá el método fs.rename():

var fs = require('fs');
fs.rename('archivo.txt', 'backup.txt', function (err) {
  if (err) throw err;
  console.log('Archivo renombrado a backup.txt!');
});
*/