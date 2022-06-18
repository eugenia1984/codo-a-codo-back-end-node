# :book: Node.js - Clase 2

---

## :star: ¿Qué va s a ver ?

- **hola.js** que es un servidor con Node.js

->> por convension la variable lleva el mismo nombre que la libreria, por eso tengo **http**

->> con el **.end()** cierro el flujo de informacion

->> con **.listen()** defino el puerto de escucha

```JavaScript
var http = require('http');  

var mensajes = function(res, res) { // recibe el request (la solicitud) y da el response (la respuesta)
  res.end('Hola Mundo'); 
  console.log('Ejecutando servidor en el puerto 4000');
}

const servidor = http.createServer(mensajes);
servidor.listen(4000);
```

- **hola_mundo.js** que es un servidor con Node.js que renderiza etqietas en html:

```JavaScript
var http = require("http");

var mensajes = function(solicitud, respuesta){

    respuesta.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    respuesta.write("<h1>Hola Ñandú</h1>");
    respuesta.end("Fin");
    console.log("Ejecutando servidor 2do mensaje en el puerto 4000...");

}

var servidor = http.createServer(mensajes);
servidor.listen(4000);
```

---
---

## :star: Modulo Express


### 1 - Inicializamos con nmp init el package.json
- Al instalar **Node.js** ya tengo el **npm** (Node Package Manager, el manejador de múdulos de Node).

- Si necesito **inicializar un proyecto**:

```> npm init ```

Y me comienza a preguntar los datos de mi proyecto:

-nombre del proyecto: **crud-node**, no debe tener espacios en blanco, ni caracteres especiales.

-version: **1.0.1** ó 0.0.1

-descripción: **crud en Node.js**

-entry point: **index.js**, es el archivo principal del proyecto, el que primero se ejecutará. Otros nombres pueden ser: **main.js** ó **app.js**.

-test command: aca se automatiza el test, si el proyecto es emdiano o grande, con un comando que defino aca corro todo el proyecto y lo pruebo automaticamente. Asi ante los cambios que realice corro los test y me aseguro que todo funcione bien.

-git repository: si va a un repositorio en git se completa aca

-keywords: son las palabras claves dle proyecto, en este caso podría ser: **nodejs**, **crud**

-autor: del proyecto, en este caso mi nombre: **Maria Eugenia Costa**

-licencia: hay distintos tipos, vamos a utilizar: **(ISC) MIT**.

-Pregunta si esta ok? (yes)

->> Se crea el **package.json** donde se van a ir guardando las dependencias que utilizaremos en el proyecto.




- Otro modo de inciializarlo, sin necesidad de ingresar los datos del proyecto, es con: ```> nmp init -y```, va a  ser uno generico, se puede modificar. El nombre dle proyecto debe estar siempre todo en minuscula.


### 2 - Modulo Express

```> npm install express``` utiliza el **módulo http** y nos facilita crear el servidor, se usa para APIs y para paginas con contenido dinámico. Es más fácil que hacerlo todo con http.

Se instala el módulo, sus dependencia y se agrega en el package.json como **dependencies**.

Puede demorar un poco, ya que trae varios módulos, genera la carpeta **node_modules**, son muchas carpetas, cada una es un modulo, todo es para que funcione express. Este node_modules va a estar en **.gitignore** y no se nos va a subir a github, al compartir el proyecto con el ```>npm install``` se van a instalar todas las dependencias. 

### 3 - Empezamos a utilizar Express para crear el servidor

- Creo mi archivo principal **app.js** (o sino **index.js** o **main.js**).

-Recordar nombrar las constantes como los pquetes que se requieren.

-En este caso el paquete express lo va a traer de **node_modules**

-Creo una instancia del servidor con: **const express= express();**

-declaro el numero para el puerto que va a escuchar

-manejo la ruta '/' o el index.html con el metodo .get(). **req** son las peticiones del usuario (REQUEST) y **res** es la respuesta (RESPONSE):
**app.get('/', (req, res) => {**

**res.send('Hola Express');**

**});**

```JavaScript
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hola Express');
});

const port = 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));
```

---
## :star: Paquete Nodemon

Como estoy todo el tiempo haciendo cambios en el proyecto, debería estar todo el tiempo parandolo con **Ctrl + C** y volviendolo a ejecutar; para tener esto automático tengo el **paquete nodemon**.

Con el comando: ```> npm install -g nodemon``` lo instalo, con **g** queda globalmente, no solo para este proyecto, no va al package json porque esta global. 

Si solo lo quiero para el proyecto:  ```> npm install nodemon``` 

Y ahora para correrlo:

``` > nodemon.cmd app``` 

``` > nodemon app``` 


---

## :star: Paquete dotenv

- **Dotenv** ayuda a leer o generar **variables de entorno**, las variables que va a tener configurado el servidor, como por ejemplo para...

... los datos de la base de datos

... el puerto a utilizar

- ¿ Cómo la instalo ?

1ro: para el servidor con **Ctrl + C**

2do: ```> npm install dotenv``` ó ```> npm i dotenv```, **i** es la abbreviación de **install**.

3ro: si está todo bien en el **package.json** lo voy a ver en **dependencies**


---

## :star: .env

Creo un archivo **.env** para crear las variables de entorno, como:

... el puerto en que se ejecutara

... datos de las credenciales de la base de datos

... credenciales de alguna API que se consulta

En **app.js**, para poder levantar toda la informacion que tengo de las variables de netorno:

```JavaSCript
require('dotenv').config();
```

Y en **.env** declaro las *variables de entorno* coo constantes, va un valor por linea:

```PORT=5000```

Y en el **app.js** cambio ```const port = 3000;``` para utilizar la variable:

```JavaScript
const port = process.env.PORT || 3000;
```

->> busca la **variable de entorno** llamada **PORT** o si no la encontras configura el **3000** como puerto (le doy por default el 3000 en caso de que no encuentre la variable de entorno).

->> al estar ejecutando nodemon voy a ver que ya me cambia el puerto del 3000 que tenia al 5000:

```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
http://localhost:5000
```

- esto de las **variables de entorno** es muy importante, porque por ejemplo al utilizar **Heroku** me van a decir en què puertos puedo levantar mi servidor.

- si por ejemplo trabajamos con una **API** externa vamos a tener: **SECRET**, **API_KEY**

- si trabajamos con una base de datos, tenem

os: **DB_NAME** y **DB_USER**

-->> generalmente este archivo **.env** como tiene datos sensibles (claves) no se suele subir la repositorio, o se sube una vacio, con el nombre: **.env-example**:

```
PORT=
SECRET=
API_KEY=
DB_NAME=
DB_USER=
```

Luego cuando uno lo configura y lo baja ahi si carga los datos que se tenga en el entorno.


---

## :star: .gitignore

Recordar para que al repositorio no se suban toods los node_modules debo tener el archivo **.gitignore** y dentro aclarar **node_modules** asi no se sube.

---

## :star: Error 404 - middle ware

- Si por error tipeo una URL que no tengo, por ejemplo: **http://localhost:50007contacto** voy a ver : ***Cannot GET /contacto***, con los **middle ware** puedo ir filtrando, por ejemplo hacer uno que levante todas las rutas que no existen en el sistema para mostrarle una ruta o una vista prticular, con mensaje para redireccionarlo la inicio y no se quede ahi.

->  **app.use()** recibe un **callback** que tiene como parametros: 

**req** -> las peticiones

**res** -> las respuestas

**next** -> si la primer capa va bien, pasa a la otra capa, sino no va a next, sino redirecciono.

->> En este caso vamos a personalizar el mensaje  cuando tenemos el error 404.

```JavaScript
app.use((req,res,next) => {
  res.status(404).send('Not found')
})
```

->> Despues podemos cambiar este mensaje de Not Found por una vista.


La app primero va a ir a buscar la ruta '/' y si no la encuentra va a app.use():

```JavaScript
app.get('/', (req, res) => {
  res.send(`<h1>Hola Express</h1>`);
});

app.use((req, res, next) => {
  res.status(404).send('Not Found')
});
```

Si voy a inseccionar en el navegador > **Network** y recargo veo el **error 404**

---

## :star: Middleware STATIC de Express

- Sirve para leer archivos estáticos, html, css, con JavaScript.

- Debe ir primero, asi primero levanta los archivos estaticos.

```JavaScript
app.use(express.static(__dirname + '/public'));
```

Y entonces en mi proyecto creo la carpeta **public** y dentro voy a tener mis archivos html planos, por ejemplo **contacto.html**, le agrego un ``` <h1>Contacto</h1>``` y en el **http://localhost:5000/contacto.html** voy a ver el contacto.html

---

## :star: Params

```JavaScript
app.get('/productos/:id', (req, res) => {
  res.send('Producto:' + req.params.id)
})
```

En vez de trabajar con archivos estacos de html, css y js, puedo hacer cosas dinámicamente, por ejemplo:

```JavaSCript
app.get('/productos', (req, res) => {
  res.send('Listado de productos');
});
```

-> Entonces en **http://localhost:5000/productos** voy a ver: **Listado de productos**

Si tuviera un e-commerce podría listar los productos, con el nombre, descripcion, precio, etc, en la url además del **producto** le paso como parámetro el **id** que va a ser único.


->> Si por ejemplo mandaria como parametro el id, entonces con **http://localhost:5000/productos/1**:

```JavaScript
app.get('/productos/1', (req, res) => {
  res.send('Producto nro. 1');
});
```

Si por ejemplo levantaría el numero dle producto, y al tener el id, podria mostrar una foto, descripcion, precio, etc.

->> La idea no es hacer una ruta por cada producto, menos en un e-commerce con muchos productos, en este caso el **id** va a ser un numero dinamico que va a ir a la base de datos para traer los datos del producto, para ello usamos los **parametros**:

```JavaScript
app.get('/productos/:codigo', (req, res) => {
  res.send('Producto:' + req.params.codigo);
}):
```

Tambien se pueden usar template literals:

```JavaScript
app.get('/productos/:codigo', (req, res) => {
  res.send(`Producto: ${req.params.codigo}`);
}):
```

---

## :star: Router

Vamos a crear un modulo para las rutas, para lo que creo un archivo **router.js** y me voy a llevar las tres rutas que tengo en **app.js**

```JavaScript
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hola Express')
})
//
module.exports = router 
```

Y las dejo en **router.js**:

```JavaScript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h1>Hola Express</h1>`);
});

router.get('/productos/1', (req, res) => {
  res.send('Listado de productos');
});

router.get('/productos/:codigo', (req, res) => {
  //res.send('Producto:' + req.params.codigo);
  res.send(`Producto: ${req.params.codigo}`);
});

module.exports = router;
```

Y para poder usarla en **app.js**: `
```JavaScript
app.use(require('./router'));
```

-->> Asi es como hay que ir trabajando, todo en **modulos** se que van exportando para poder utilizar en otro archivo.


---
---



## :star: TEORIA - UNIDAD 3:

### Temas:

- 1 require HTTP

- 2 writeHead – Crear / Modificar el encabezado HTTP

- 3 end() para el envío de cadenas en HTML

- 4 console.log desde Node.

- 5 Creando un servidor. El módulo HTTP

- 6 Configuración del puerto de escucha con listen()

- 7 Usando http.createServer()

- 8 Análisis de su funcionamiento y detalle de librerías activas.

- 9 Instalando librerías a Visual Studio

- 10 Creando un proyecto en Node con NPM

- 11 Leer Cadenas en consultas

- 12 El error 404 y el código 200

- 13 Módulo de archivos.

---

## :star: Agregar un encabezado HTTP

Para que la respuesta del servidor HTTP se muestre como HTML, debe incluir un encabezado HTTP con el
tipo de contenido correcto:

### Ejemplo

```JavaSCript
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hola Ñandú!');
  res.end();
}).listen(8080);
```

**En nuestro ejemplo, tanto los acentos como la Ñ no se verían bien ya que hay que configurar los charset en el
encabezado**:

El encabezado debería modificarse y quedar como el siguiente:

```JavaScript
res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
```

El primer argumento del **método res.writeHead()** es el **código de estado**, **200** significa que la respuesta a
ejecutar está correcta.

El segundo argumento es **un objeto que contiene los encabezados de respuesta**. 

**Charset**, es la elección de un código de juego de caracteres que soporta acentos, Ñ y todos los demás símbolos en
español del teclado.

---

## :star: El módulo HTTP integrado

Node.js tiene un módulo incorporado llamado **HTTP**, que permite a Node.js transferir datos a través del  **Protocolo de transferencia de hipertexto (HTTP)**.

Para incluir el módulo HTTP, usamos el método **require()**:

```JavaScript
var http = require('http');
```

### Node.js como servidor web

El módulo HTTP puede crear un servidor HTTP que escucha los puertos del servidor y da una respuesta al cliente.

Utilizamos el método **createServer()** para crear un servidor HTTP:

### Ejemplo

```JavaSCript
var http = require('http');
//crea un objeto server:
http.createServer(function (req, res) {
  res.write('Hola Mundo Node.Js!'); //escribe del lado del cliente
  res.end(); //cierra el canal de envío de datos
}).listen(8080); //el puerto se define en el nro 8080
```
La función pasada al método **http.createServer()** se ejecutará cuando alguien intente acceder a la computadora en el puerto 8080.

Guardá el código anterior en un archivo llamado "demo_http.js" y podés ejecutar el archivo con la orden:

```C:\Users\TuNombre>node demo_http.js```

Si seguiste los pasos en tu computadora, verás el mismo resultado que en el ejemplo cuando en el navegador vayas a la dirección: ```http://localhost: 8080```


```
Hola Mundo Node.Js!
```

---

## :star: Leer la cadena de consulta

La función pasada a **http.createServer()** tiene un argumento req que representa la solicitud del cliente, como un objeto **http.IncomingMessage**. Este *require* o requerimiento se encarga de enviar las peticiones para que el servidor atienda y responda su solicitud.

El objeto en si, tiene una propiedad llamada *url* que contiene la parte de la URL que viene después del nombre de dominio:

**demo_http_url.js**

```JavaScript
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
```

Guarda el código anterior en un archivo llamado "demo_http_url.js" e iniciá el archivo:

->> Inicie demo_http_url.js:

```
C:\Users\Tunombre>node demo_http_url.js
```

Si seguiste los mismos pasos en tu computadora, deberías ver dos resultados diferentes al abrir estas dos direcciones:

```http://localhost:8080/verano```


Producirá este resultado:

```/verano```

```http://localhost:8080/invierno```

Producirá este resultado:

```/invierno```

---

## :star: Manejo de errores de archivos con Error: 404

Desde el servidor de Node podemos seleccionar la respuesta que enviaremos al cliente que solicita un requerimiento. 

Para ello, los códigos de respuesta pueden ser enviados tomando en cuenta la situación de la respuesta.

### Por ejemplo:

Si la lectura de un fichero arroja un error podremos avisar al navegador web con el código 404 que indica que la página o el archivo solicitado no existe, o utilizar el código 200 que indica que todo se ejecutó correctamente y la devolución de la petición no conlleva error alguno.

Vamos a crear un archivo Node.js que abra el archivo solicitado y devuelva el contenido al cliente. 

Si algo sale mal, lanza un error 404:

```demo_archivo.js```:

```JavaScript
var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Archivo no encontrado");
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
  });
}).listen(8080);
```

---

## :star: Dividir la cadena de consulta

Hay módulos integrados para dividir fácilmente la cadena de consulta en partes legibles, como el módulo URL.

### Ejemplo

Divide la cadena de consulta en partes legibles:

```JavaScript
var http = require('http');
var url = require('url'); // realiza la conversión del formato url
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
```


Guarda el código anterior en un archivo llamado **demo_querystring.js** e ejecutá el archivo:

- Inicie demo_querystring.js:

```C:\Users\TuNombre>node demo_querystring.js```

La dirección: **http://localhost:8080/?year=2021&month=julio**

Producirá este resultado:

```2021 Julio```


---

## :star: Módulo ‘fs’ del sistema de archivos Node.js.

### Parte I

#### Node.js como servidor de archivos

El módulo del sistema de archivos Node.js te permite trabajar con el sistema de archivos de tu computadora.

Para incluir el módulo del sistema de archivos, hay que utilizar el método **require()**:

```JavaScript
var fs = require('fs');
```

Uso común del módulo Sistema de archivos:

- Leer archivos

- Crear archivos

- Actualizar archivos

- Borrar archivos

- Cambiar el nombre de los archivos

### :star: Leer archivos: fs.readFile()

El método **fs.readFile()** se utiliza para leer archivos.

Supongamos que tenemos el siguiente archivo HTML (ubicado en la misma carpeta que Node.js):

**index.html**:

```html
<html>
<body>
<h1>Título</h1>
<p>Un párrafo.</p>
</body>
</html>
```

- Crearemos un archivo Node.js que lea el archivo HTML y devuelva el contenido:

### Ejemplo

```JavaScript
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
fs.readFile('index.html', function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write(data);
  return res.end();
});
}).listen(8080);
```

Guardá el código anterior en un archivo llamado "demo_readfile.js" e iniciá el archivo:

- Inicie **demo_readfile.js**:

```C:\Users\TuNombre>node demo_readfile.js```

Si has seguido los mismos pasos en tu computadora, verás el mismo resultado que en el ejemplo ingresando en tu navegador: [http://localhost:8080](http://localhost:8080)


###  :star: Crear archivos

El módulo del sistema de archivos tiene métodos para crear nuevos archivos:

- fs.appendFile()

- fs.open()

- fs.writeFile()

## :star: fs.appendFile()

El método **fs.appendFile()** agrega contenido especificado a un archivo. Si el archivo no existe, se creará el archivo.

### Ejemplo

Cree un nuevo archivo usando el método **appendFile()**:


```JavaScript
var fs = require('fs');
fs.appendFile('nuevoarchivo.txt', 'Hola Node!', function (err) {
  if (err) throw err;
  console.log('Archivo Guardado!');
});
```

## :star: fs.open()

El método **fs.open()** toma una *parámetro* como segundo argumento, si el parámetro es "w" , el archivo especificado se abre para escribir. Si el archivo no existe, se crea un archivo vacío:

### Ejemplo

Cree un archivo nuevo y vacío usando el método **open()**:

```JavaScript
var fs = require('fs');
fs.open('archivo.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Guardado!');
});
```

## :star: fs.writeFile()

El método **fs.writeFile()** reemplaza el archivo y el contenido de éste si existe. Si el archivo no existe, se creará un nuevo archivo con el contenido especificado:

### Ejemplo

Crearemos un nuevo archivo usando el método **writeFile()**:

```JavaScript
var fs = require('fs');
fs.writeFile('archivo.txt', 'Hola Node!', function (err) {
  if (err) throw err;
  console.log('Guardado!');
});
```

---

##  Módulo ‘fs’ del sistema de archivos Node.js.

### Parte II

####  Actualizar archivos

El módulo del sistema de archivos tiene los siguientes métodos para actualizar archivos:

- fs.appendFile()

- fs.writeFile()

El método fs.appendFile()agrega el contenido especificado al final del archivo especificado:

### Ejemplo

## :star: fs.appendFile()

Incorporar "Este es el nuevo texto." al final del archivo "archivo.txt":

```JavaScript
var fs = require('fs');
fs.appendFile('archivo.txt', ' Este es el nuevo texto.', function (err) {
 if (err) throw err;
  console.log('Se actualizó el archivo!');
});
```

## :star: fs.writeFile()

El método **fs.writeFile()** reemplaza el archivo y el contenido especificados:

### Ejemplo

Reemplazamos el contenido del archivo "archivo.txt":

```JavaScript
var fs = require('fs');
fs.writeFile('archivo.txt', 'Este es el nuevo texto', function (err) {
  if (err) throw err;
  console.log('Archivo Reemplazado!');
});
```

La diferencia fundamental en este método, es que el archivo no es creado nuevamente, sino que se reemplaza el dato contenido en él.

## :star: Borrar archivos: fs.unlink()

Para eliminar un archivo con el módulo Sistema de archivos, usamos el método fs.unlink().

### Ejemplo

Eliminar "archivo.txt":

```JavaScript
var fs = require('fs');
fs.unlink('archivo.txt', function (err) {
  if (err) throw err;
  console.log('Archivo eliminado!');
});
```

##  :star: Cambiar el nombre de los archivos: fs.rename()

Para cambiar el nombre de un archivo con el módulo Sistema de archivos, utilizá el método **fs.rename()**.


### Ejemplo

Cambiamos el nombre de "archivo.txt" a "backup.txt":

```JavaScript
var fs = require('fs');
fs.rename('archivo.txt', 'backup.txt', function (err) {
  if (err) throw err;
  console.log('Archivo renombrado a backup.txt!');
});
```


---
---