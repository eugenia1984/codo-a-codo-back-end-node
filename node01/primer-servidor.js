const http = require('http'); // para requerir el modulo HTTP

// Para crear el servidor con .createServer() va a recibir una funcion anonima como parametro, dicha función va a recibir 2 params: request (peticion que va a recibir) y response (respuesta que va a enviar)
const servidor = http.createServer( (request, response) => {
  response.end('Hola Nosejs'); // para terminar la comunicacion
});


const port = 3000;  // para asignarle un puerto, se utiliza el 3000 o el 5000

/* para que el servidor escuche a traves del puerto, con -listen() que puede recibir como parametro: 
- el puerto al que va a estar escuchando
- una funcion anonima que es el mensaje o lo que se hara al escuchar el servidor 
*/
servidor.listen(port, () => {
  console.log(`http://localhost:${port}`)
}); 