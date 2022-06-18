# book: Node.js - Clase 01

---
## :star: Mi primer Script en Node.js

- En el archivo [**primer-script.js**](https://github.com/eugenia1984/codo-a-codo-back-end-node/blob/main/node01/primer-script.js) tengo un console: ```console.log("Hola Node.js");```.

- ¿ Cómo lo veo ?

Desde VSC, abro la termianl **powershell**, con cd ingreso en el directorio **node01** y ejecuto ``` node primer-script.js``` y por terminal veo: *Hola Node.js*.

En vez de verlo en el navegador, inspeccionando desde el console, como hacíamos en el Front, ahora se hace en el Back con Node.

Pero ojo, no todo funciona...

...*window.alert* y *window.prompt* no están porque no tenemos el object window.

... *fetch* tampoco funciona.


Lo que si puedo hacer desde el servidor, que desde el front no es...

... generar archivos.

... acceder a base de datos.

---

## :star: Mi primer servidor 

- Node trabaja con **modulos**, con el módulo HTTP vamos a crear nuestro servidor en el archivo [**primer-servidor.js**](https://github.com/eugenia1984/codo-a-codo-back-end-node/blob/main/node01/primer-servidor.js).

```JavaScript
const http = require('http');
```
-> para requerir el modulo HTTP


-> Para crear el servidor con **.createServer()** va a recibir una funcion anonima como parametro, dicha función va a recibir 2 params: 

- request (peticion que va a recibir)

- response (respuesta que va a enviar)

```JavaScript
const servidor = http.createServer( (request, response) => {
  response.end(); // para terminar la comunicacion
});
```

Si quisiera mostrar alguna *respuesta*:

```JavaScript
const servidor = http.createServer( (request, response) => {
  response.end('Hola Node.js'); // para terminar la comunicacion
});
```
-> para **volver a ejecutar el codigo** *Ctr+C* y lo vuelvo a ejecutar ``` node .\primer-servidor.js```


-> Si quiero ver el **object request**:

```JavaScript
const servidor = http.createServer((request, response) => {
  console.log(request);
  response.end("Hola Nodejs"); // para terminar la comunicacion
});
```

Y al ejecutar el csript por terminal veo todo el object request que es muy extenso.

Si por ejemplo solo quiero ver dos cosas del object, como request.ur y request.method,  entonces:

```JavaScript
const servidor = http.createServer((request, response) => {
  console.log(request.url, request.method);
  response.end("Hola Nodejs"); // para terminar la comunicacion
});
```

-> por consola veo:
```
/ GET
/favicon.ico GET
```


- **Para manejar las rutas**, si quiero manejar las respuestas acorde a las URL, imaginando que tengo una web */contacto*:

```JavaScript
const servidor = http.createServer((request, response) => {
  console.log(request.url, request.method);

  if (request.url.includes('/contacto')) {   // si tengo la pagina (URL) /contacto.html
    response.end('Contacto'); 
  } else {
    response.end('Hola Node.js') // para terminar la comunicacion
  }
});
```

Entonces si en la URL tengo **http://localhost:3001/contacto** voy a ver en el navegador *contacto*, para cualquier otra url veo *Hola Node.js*


-> para asignarle un puerto, se utiliza el 3000 o el 5000
```JavaScript
const port = 3000;  
```

-> para que el servidor escuche a traves del puerto, con -listen() que puede recibir como parametro: 

- el puerto al que va a estar escuchando

- una funcion anonima que es el mensaje o lo que se hara al escuchar el servidor

```JavaScript
servidor.listen(port, () => {
  console.log(`http://localhost:${port}`)
}); 
```


---

## :star: Mi segundo servidor con Node.js que renderiza HTML con el módulo FileSystem (FS)

[En **servidor-html.js**](https://github.com/eugenia1984/codo-a-codo-back-end-node/blob/main/node01/servidor-html.js)

```JavaScript
const http = require("http"); 
const fs = require('fs'); // el modulo FILE SYSTEM, para poder leer un html con su metodo .readFile()

const servidor = http.createServer((req, res) => {
  res.end(__dirname+); // nombre del directorio actual
});

const port = 3000; 

servidor.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
```

-> En el navegador veo el directorio actual, *muestra el path donde esta el script(el directorio)*: **C:\Users\juan\Desktop\copia2\codo_a_codo_node\node01**


- Para levantar el **index.html**:

```JavaScript
const http = require("http"); 
const fs = require('fs'); // el modulo FILE SYSTEM, para poder leer un html con su metodo .readFile()

const servidor = http.createServer((req, res) => {
  /*
  .readFile() 
  callbacj con ...
  ...@param: error - para chequear el error
  ...@param: html - el contenido del archivo
  */
  fs.readFile(__dirname+ '/index.html', (err, html) =>  {
    console.log(err); // para ver por consola el error
    res.end(err.message); // para renderizar el error en el navegador
  });
});

const port = 3000; 

servidor.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
```
-> Para crear un mensaje de error adrede en el path escribo mal **'/indeex.html'** y al ejecutarlo en el navegador veo:

**ENOENT: no such file or directory, open 'C:\Users\juan\Desktop\copia2\codo_a_codo_node\node01\indeex.html'**


Y con el ```console.log(err)``` por consola veo el error:

```
[Error: ENOENT: no such file or directory, open 'C:\Users\juan\Desktop\copia2\codo_a_codo_node\node01\indeex.html'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\juan\\Desktop\\copia2\\codo_a_codo_node\\node01\\indeex.html'      
}
```

-> Lo ideal al renderizar le html es mostrar un mensaje mas generico al usuario, por ejemplo:

```JavaScript
 res.end('Error, no se puede mostar el archivo');
```

Algo más completo sería así...

... si hay error por consola me lo muestra y al usuario le muestro el error generico

... si no hya error me renderiza el html

y siempre debo cerrar la comunicacion

```JavaScript
const servidor = http.createServer((req, res) => {
  fs.readFile(__dirname+ '/indeex.html', (err, html) =>  {
    if (err) {
      res.writeHead(500);
      console.log(err.message);
      res.write('No se pudo leer el archivo');
    } else {
      res.write(html);
    }

    res.end('Comunicacion finalizada');  // para cerrar la comunicacion
  });
});
```

->> Otro ejemplo si quiero mandar más info del error si es un texto HTML:

**res.writeHead(200, {'Content-Type':'text/html'});**

**res.write(html);**

```JavaScript
const servidor = http.createServer((req, res) => {
  fs.readFile(__dirname+ '/index.html', (err, html) =>  {
    if (err) {
      res.writeHead(500);
      console.log(err.message);
      res.write('No se pudo leer el archivo');
    } else {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(html);
    }

    res.end('Comunicacion finalizada');  // para cerrar la comunicacion
  });
});
```

->> Si fuera un error al querer leer un JSON, por ejemplo al comunicarme con una API:

**res.writeHead(200, {'Content-Type':'application/json'});**

**res.write(JSON.stringify({email: 'x@x.com', name: 'juan'}));**

```JavaScript
const servidor = http.createServer((req, res) => {
  fs.readFile(__dirname+ '/index.html', (err, html) =>  {
    if (err) {
      res.writeHead(500);
      console.log(err.message);
      res.write('No se pudo leer el archivo');
    } else {
      res.writeHead(200, {'Content-Type':'application/json'});
      res.write(JSON.stringify({email: 'x@x.com', name: 'juan'}));
    }

    res.end('Comunicacion finalizada');  // para cerrar la comunicacion
  });
});
```

### Codigos de estado

**100**

**200** ->> cuando esta ok, por ejemplo el **201** para enviar a crear un registro

**300** para redireccionar paginas

**400** ->> son los errores, el **403** forbiden para algo privado,, el **404** es cuando no encentra el archivo, **403** forbiden para algo privado, el **405** Method Not Allowed, el **406** Not Acceptable, el **407** Proxy Authentication Required, el **408** Request Timeout, el **409** Conflict, y hay muchos más

**500** ->> errores, como el **500** error interno.

---

## :star: Modulos - creando el primer modulo

[Creo mi primer modulo,  **usuarios.js**](https://github.com/eugenia1984/codo-a-codo-back-end-node/blob/main/node01/usuarios.js)


En **usuarios.js**:
```JavaScript
const nombres = ['Juan', 'Ana', 'Pedro', 'Maria'];

module.export = nombres; // para poder exportar nombres
```

¿Cómo lo utilizo ?

Requeriendolo, porque ya lo tengo exportado, entonces deja de ser privado y se puede utilizar por fuera.

si tuviera otra constante, la cual no incluyo en module.constante, entocnes esa si va a seguir siendo privada.

Entonces en **script-modulos.js**:

```JavaScript
const usuarios = require('./usuarios');

console.log(usuarios);
```

Otro ejemplo sería:

```JavaScript
const nombres = require('./usuarios');
nombres.forEach(nombre => cosole.log(nombre));
```

Y asi voy a mostrar los nombres de los usuarios.

---
---