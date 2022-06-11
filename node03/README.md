# :book: Clase 03 de Node.js - 07 de Junio 2022

---

## :star: Script en Package.json

Para correrlo y ejecutarlo con nodemon.

Con **start** inicializo el proyecto en modo produccion.

Con **dev** para trabajar en local.

```
"scripts": {
    "star": "node app",
    "dev": "nodemon app"
  },
```

->> Hasta ahora lo venia ejecutando con `> nodemon.cmd app`

->> Ahora utilizo los scripts : `> npm run dev`

---

## :star: Vistas - EJS

**ejs** es un **motor de vistas**, parecido a handlerbar o pug (se escribe similar a Python con identacion, sin {}).

- ¿ Cómo lo instalo ?: `> npm install ejs` ó
  `> npm i ejs`

- Para verificar en **package.json** en dependencias veo:

```JavaScript
"dependencies": {
  "dotenv": "^16.0.1",
  "ejs": "^3.1.8",
  "express": "^4.18.1",
  "nodemon": "^2.0.16"
}
```

-\_>> Hay que decirle a express para que use este view engine, en el **app.js**:

```JavaScript
app.set('view engine', 'ejs' );
```

-->> hasta ahora al ir a una ruta haciamos un **set** y ahora vamos aha cer un **render**, es decir una vista que se va a contruir con distintas cosas, inclusive con partes podemos armar una vista, como tener por un lado el header, por otro el footer, y al final armo el html:

```JavaScript
router.get('/', (req, res) => {
  res.render('index');
});
```

-->> En **router.js**:

```JavaScript
router.get('/', (req, res) => {
  res.render('index');
});
```

-->> Me va a dar error porque va a ir a buscar en la carpeta **veiws** el archivo **index.ejs**, para no tener el error creamos la carpeta y el archivo.

-->> Tambien tengo que cambiar las otras vistas que tenia, por ejemplo la que recibe e producto y el id del mismo, en vez de **.send()** voy a tener **.render()** y va a tener como **parametro** un objeto que consiste en el **codigo del producto (id)**:

```JavaScript
router.get('/productos/:codigo', (req, res) => {
  res.render('productos/show', { codigo: req.params.codigo });
});
```

-->> Creo una nueva vista dentro de **views** > **products** > **show.ejs** y en dicho archivo puedo renderizar el codigo enviado dle producto asi:

```jsx
  <h1>Producto: <%= codigo %></h1>
```

Con el `<%= %>` lo renderizo

### include

`<%- include('partials/header) -%>`

-->> Documentacion para ver en [https://ejs.co/](https://ejs.co/)

#### Etiquetas:

```
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it
```

---

## :star: Partials

Son como los **fragments** en Spring Boot para tener partes de .ejs que puedo reutilizar, por ejemplo el header y el footer.

Para esto dentro de **views** me creo la carpeta **partials** y ahi dentro van a estar, por ejemplo **nav.ejs**:

```
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/productos">Productos</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
```

Y para incluirlo en **index.ejs**: `<%- include('partials/nav') %>`

---

## :star: Layout - Modulo express-ejs layout

Otro modo de ir maquetando, lo que hace es envolver la vista y todo lo que se repite, como el header, footer lo hago en el layout.

Para instalarlo: `npm install express-ejs-layouts`

-->> Para configurar el modulo en **app.js**:

```JavaScript
const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);
```

-->> Voy a tene error, me falta dentro de **views** tener el **layout**

Y para hacer más rápido me copio todo lo que tenia en el index y lo paso al layout.

Y en el **layout.ejs** en el `<body>` tengo :

```HTML
  <main>
    <%- body %>>
  </main>
```

Para que el contenido del body sea dinamico. ->> esto está dentro de la librería de express-ejs-layouts

Y en la **vista** (**show.ejs**) solo pongo:

```
  <h2>Producto: <%= codigo %></h2>
```

Ya que el resto se va a renderizar del layout.

Y en **index.ejs**:

```
<h2>Hola EJS</h2>
```

Y se le va a sumar toda la renderizacion del layout.

---

### Renderizar una vista

En **router.ejs**:

```JavaSCript

router.get('/productos', (req, res) => {
  res.render('productos/index');
});
```

Aca voy a tener un **index** dentro de **productos**. Entonces tengo:

```
views
   partials
      nav.ejs
   productos
      show.ejs
      index.ejs
index.ejs
layout.ejs
```

---

### :star: Modulo * productos

-->> Lo que quiero es que en '/productos' pueda tener un listado de productos, entonces voy a crear un nuevo modulo **productos.js**, voy a tener la constante **productos** que va a ser un **array** y cada item es un objeto con el **id** del producto y el **nombre**, le odriamos agregar más datos como la descripción, el precio o una imagen.

```JavaScript
const productos = [
  {id: 1, name: 'Producto Nro. 1'},
  {id: 2, name: 'Producto Nro. 2'},
  {id: 3, name: 'Producto Nro. 3'},
];
```

Y tengo la funcion que me va a retornar todo el array:

```JavaScript
const all = () => {
  return productos;
}
```

Y tambien la función find para buscar el producto por id con el metodo .find() y me va a comparar que el numero dle producto sea igual al numero recibido por parametro:

```JavaScript
const find = (id) => {
  return productos.find(producto.id == id);
}
```

Ambas funciones son propias del módulo, si las quiero utilizar por fuera, debo exponerlas con :

```JavaScript
module.expots = {
  all: all,
  find: find
}
```

El primer all es como se llamara fuera del modulo y el segundo all es el nombre dentro del modulo (el nombre de mi funcion).

Como se van a llaamr igual tanto dentro como fuera del modulo, las nombro solo una vez.

```JavaScript
module.exports = {
  all,
  find
}
```

-->> Para poder usar el modulo en **router.js**:

```JavaScript
const productos = require('./productos');

router.get('/productos', (req, res) => {
  res.render('productos/index', {productos: productos.all()});
});
```

Y en la vista utilizo el modulo productos, retorno todo el array y lo asigno a productos.

Volviendo a views> productos > index.ejs

-->> Y en **show.ejs** poder mostrar todos los datos del producto, debo modificar en **router.js**:

```JavaScript
router.get('/productos/:codigo', (req, res) => {
  res.render('productos/show', { producto: productos.find(req.params.codigo) });
});
```

**.find()** siempre trae un elemento, en este caso el producto

---

---

## Git Hub

->> Paso al stage agrgando las modificaciones:

```
> git add .
```

->> Commiteo:

```
> git commit -m "clase 03 - vista"
```

->> Para subirlo al repositorio:

```
> git push
```

->> Veo si tengo algun tag:

```
> git tag
```

->> Creo el tag:

```
> git tag clase-03
```

->> Para subir el tag:

```
> git push --tags
```

---
---

# :book: TEORIA

---

## :star: Unidad 3 - Temas:

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