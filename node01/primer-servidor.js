const http = require("http"); // para requerir el modulo HTTP

const servidor = http.createServer((request, response) => {
  console.log(request.url, request.method);
  // si tengo la pagina (URL) /contacto.html
  if (request.url.includes('/contacto')) {
    response.end('Contacto'); 
  } else {
    response.end('Hola Node.js') // para terminar la comunicacion
  }
});

const port = 3001; // para asignarle un puerto, se utiliza el 3000 o el 5000

servidor.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
