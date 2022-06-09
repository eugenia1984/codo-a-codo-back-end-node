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
# :book: Teoría : UNIDAD 2

---

Temas:

- Mostrar HTML desde archivo

- Formularios - Métodos GET y POST

- NPM, el manejador de bibliotecas.

- NPM Init

- NPM -v

- Archivo Json de configuración de NPM

- Servidor en Node.Js

- Concepto de Servicios Web

- Consumir Web services desde JavaScript.

---

# :star: 2. Acerca de NPM

## Acerca de NPM

**npm** es el registro de software más grande del mundo. Los desarrolladores de código abierto de todos los continentes usan npm para compartir y tomar prestados paquetes, y muchas organizaciones también usan npm para administrar el desarrollo privado.

npm consta de tres componentes distintos:

- el sitio web

- la interfaz de línea de comandos (CLI)

- el registro


Utilizá el sitio web para descubrir paquetes, configurar perfiles y administrar otros aspectos de su experiencia npm. Por ejemplo, podés configurar  organizaciones  para administrar el acceso a paquetes públicos o privados.


La CLI se ejecuta desde una terminal y es la forma en que la mayoría de los desarrolladores interactúan con npm.


El registro es una gran base de datos pública de software JavaScript y la meta-información que la rodea.

---

### Utilizá npm para. . .

- Adaptar paquetes de código para tus aplicaciones o incorporar paquetes tal como están.

- Descargar herramientas independientes que podés usar de inmediato.

- Ejecutar paquetes sin descargar usando npx .

- Compartir código con cualquier usuario de npm, en cualquier lugar.

- Restrinjir el código a desarrolladores específicos.

- Crear organizaciones para coordinar el mantenimiento, la codificación y los desarrolladores de paquetes.

- Formar equipos virtuales utilizando organizaciones.

- Administrar múltiples versiones de código y dependencias de código.

- Actualizar las aplicaciones fácilmente cuando se actualice el código subyacente.

- Descubrir múltiples formas de resolver el mismo rompecabezas.

- Buscar otros desarrolladores que estén trabajando en problemas y proyectos similares.

---

## Empezando

- 1 - Para comenzar con npm, podés crear una cuenta , que estará disponible en http://www.npmjs.com/~*yourusername *.

- 2 - Después de configurar una cuenta npm, el siguiente paso es usar la interfaz de línea de comandos (CLI) para instalar npm . 


--

### Compartir paquetes y colaborar con otros

Si eligís compartir tus paquetes públicamente, no hay ningún costo. Para usar y compartir paquetes privados, debes actualizar tu cuenta. Para compartir con otros, crear organizaciones llamadas organizaciones npm , o invite a otros a trabajar con vos, de forma privada (por una tarifa) o públicamente (gratis). O podés registrarte para obtener una instancia privada de npm para tu empresa, llamada npm Enterprise , para que puedas desarrollar paquetes internamente que no se comparten públicamente.

Para obtener más información sobre npm como producto, las próximas funciones nuevas y los usos interesantes de npm, suscríbite al boletín informativo en [npm-Weekly](https://www.npmjs.com/npm-weekly) o seguí a [@npmjs en Twitter](https://twitter.com/npmjs).

---

### Documentación de referencia de CLI

Si bien los comandos CLI relevantes se tratan a lo largo de esta cursada de Codo a Codo, también NPM pone a disposición su documentación del usuario, e incluye ayuda de línea de comandos, en su propia sección de documentación y ayuda instantánea (páginas de manual) .


---

## :star: 3. Crear cuenta de usuario NPM


### Crear una nueva cuenta de usuario en el registro público
 

Si no tenés una cuenta de usuario de npm, podés crear una cuenta para compartir y descargar paquetes de Javascript en el registro público.

Nota: Si estás utilizando un registro de npm Enterprise, debes iniciar sesión con tus credenciales de usuario en lugar de crear una cuenta. 

### Crear una cuenta en el sitio web

Ir a la [página de registro de npm](https://www.npmjs.com/signup).

En el formulario de registro de usuario, escribí los campos:

Nombre de usuario: el nombre de usuario que se mostrará cuando publiques paquetes o interactúes con otros usuarios de npm en npmjs.com. Tu nombre de usuario debe estar en minúsculas y puede contener guiones y números.

Dirección de correo electrónico: tu dirección de correo electrónico pública se agregará a los metadatos de sus paquetes y será visible para cualquiera que descargue sus paquetes. También enviaremos un correo electrónico a esta cuenta cuando actualices paquetes, así como actualizaciones e información de productos ocasionales.

Contraseña : Tu contraseña debe cumplir con nuestras pautas de contraseña:

- tiene más de 10 caracteres

- no coincide o contiene significativamente su nombre de usuario, por ejemplo, no use 'username123'

- no es una contraseña de uso común

->> Lee el Acuerdo de licencia de usuario final y la Política de privacidad e indique que estás de acuerdo con ellos.



->> Hacé clic en Crear una cuenta

Nota: Después de registrarte para obtener una cuenta npm, recibirá un correo electrónico de verificación de cuenta. Debe verificar su dirección de correo electrónico para publicar paquetes en el registro.

---

### Probando su nueva cuenta con npm login

Utilizá el comando npm login para probar el inicio de sesión en su nueva cuenta.

Nota: Si escribís mal el nombre de usuario de tu cuenta existente cuando inicias sesión con el comando npm login, crearás una nueva cuenta con el nombre mal escrito. Para obtener ayuda con las cuentas creadas accidentalmente, comunícate con el Soporte de npm .

En la línea de comando, escribí el siguiente comando:

```npm init sesion```

Cuando se te solicite, ingrese su nombre de usuario, contraseña y dirección de correo electrónico.

Si tenés habilitada la autenticación de dos factores , cuando se te solicite, ingrese una contraseña de un solo uso.

Para comprobar que has iniciado sesión correctamente, escriba:

```npm whoami```

Debería mostrarte tu nombre de usuario npm.

---

## :star: 4. Registro Público de NPM

### ¿Que es el registro público de npm?


El registro público de npm es una base de datos de paquetes de JavaScript, cada uno compuesto por software y metadatos. Los desarrolladores de código abierto y los desarrolladores de las empresas utilizan el registro npm para contribuir con paquetes a toda la comunidad o miembros de sus organizaciones, y descargar paquetes para utilizarlos en sus propios proyectos.

npm es el Node Package Manager que viene incluido y ayuda a cada desarrollo asociado a Node. Durante años, Node ha sido ampliamente utilizado por los desarrolladores de JavaScript para compartir herramientas, instalar varios módulos y administrar sus dependencias. Es por eso que es fundamental que las personas que trabajan con Node.js entiendan qué es npm.



Esta herramienta funciona de dos formas:

- Como un repositorio ampliamente utilizado para la publicación de proyectos Node.js de código abierto. Lo que significa que es una plataforma en línea donde cualquiera puede publicar y compartir herramientas escritas en JavaScript.

- Como una herramienta de línea de comandos que ayuda a interactuar con plataformas en línea, como navegadores y servidores. Esto ayuda a instalar y desinstalar paquetes, gestión de versiones y gestión de dependencias necesarias para ejecutar un proyecto.

Para usarlo, tenés que instalar node.js como te mostré en la unidad anterior de codo a codo Desarrollo Web, ya que están desarrollados y se instalan de forma agrupada.

---

## :star: 5. Paquetes y Módulos en NPM

### Acerca de paquetes y módulos

El registro npm contiene paquetes, muchos de los cuales también son módulos de nodo o contienen módulos de nodo. 

### Acerca de los paquetes

Un paquete es un archivo o directorio descrito por un archivo package.json. Un paquete debe contener un archivo package.json para que se publique en el registro de npm. 

Los paquetes pueden ser sin ámbito o con ámbito para un usuario u organización, y los paquetes con ámbito pueden ser privados o públicos. 

### Formatos de paquete
Un paquete es cualquiera de los siguientes:

- a) Una carpeta que contiene un programa descrito por un archivo package.json.

- b) Un tarball comprimido con gzip que contiene (a).

- c) Una URL que se resuelve en (b).

- d) A ```<name>@<version>```que se publica en el registro con (c).

- e) A ```<name>@<tag>``` que apunta a (d).

- f) A ```<name>```que tiene una etiqueta latest que satisface (e).

- g) Una URL git que, cuando se clona, ​​da como resultado (a).


### Formatos de URL de git del paquete npm

Las URL de Git utilizadas para los paquetes npm se pueden formatear de las siguientes formas:

```git://github.com/user/project.git#commit-ish```

```git+ssh://user@hostname:project.git#commit-ish```

```git+http://user@hostname/project/blah.git#commit-ish```

```git+https://user@hostname/project/blah.git#commit-ish```


El ```commit-ish``` puede ser cualquier etiqueta, sha, o una rama que se puede suministrar como un argumento a git checkout. 

El valor predeterminado commit-ish es master.

###  Acerca de los módulos

Un módulo es cualquier archivo o directorio en el directorio ```node_modules``` que la función ```require()``` Node.js puede cargar .

Para que la  función ```require()``` Node.js lo cargue, un módulo debe ser uno de los siguientes:

- Una carpeta con un archivo ```package.json``` que contiene un campo **main**.

- Un archivo JavaScript.

Nota: Dado que no se requiere que los módulos tengan un archivo ```package.json```, no todos los módulos son paquetes. Solo los módulos que tienen un ```package.json```

El archivo también es parte del paquete.

En el contexto de un programa de nodo, module también es lo que se cargó desde un archivo. Por ejemplo, en el siguiente programa:

```javaScript
var req = require ('solicitud')
```

podríamos decir que "La variable se  refiere req al  módulo request".

 
 ---

## :star: 6. Alcances del registro en NPM

## Acerca de los alcances

Nota: Se debe utilizar npm versión 2 o superior para utilizar ámbitos. Para actualizar a la última versión de npm, en la línea de comando, ejecutá

```npm install npm @ latest -g```

Cuando te registrás para obtener una cuenta de usuario de npm o creas una organización, se te otorga un alcance que coincide con el nombre de tu usuario u organización. 

Un alcance te permite crear un paquete con el mismo nombre que un paquete creado por otro usuario u organización sin conflicto.

Cuando se enumeran como dependientes en un archivo package.json, los paquetes con ámbito están precedidos por su nombre de ámbito. El nombre del alcance es todo lo que se encuentra entre la barra  @ y la barra:

Alcance "npm":

```@ npm / nombre-paquete```

Alcance "npmcorp":

```@ npmcorp / nombre-paquete```


###  Visibilidad de alcances y paquetes

Los paquetes sin ámbito son siempre públicos.

Los paquetes privados siempre tienen un alcance.

Los paquetes con ámbito son privados de forma predeterminada; debe pasar una marca de línea de comandos al publicar para hacerlos públicos.

---

## :star:  7. Crear y publicar paquetes

### Crear y publicar paquetes privados

Para compartir tu código con un conjunto limitado de usuarios o equipos, podés publicar paquetes privados con ámbito de usuario o con ámbito de organización en el registro de npm.

Nota: Antes de poder publicar paquetes npm privados con ámbito de usuario, debes registrarte para obtener una cuenta de usuario npm pagada.

### Creando un paquete privado

Si estás utilizando npmrc para administrar cuentas en múltiples registros , en la línea de comando, cambiá al perfil apropiado:

```npmrc <nombre-perfil>```

En la línea de comando, creá un directorio para su paquete:

```mkdir mi-paquete-de-prueba```

Navegá hasta el directorio raíz de su paquete:

```cd mi-paquete-de-prueba```

Si está utilizando git para administrar el código de tu paquete, en el directorio raíz del paquete, ejecute los siguientes comandos, reemplazándolos con la URL remota ```git-remote-url``` de git para tu paquete:

``git init``

```git remote agregar origen git: // git-remote-url```

En el directorio raíz del paquete, ejecutá el comando npm init y pase el alcance a la scopebandera:

Para un paquete en el ámbito de la organización:

```npm init --scope = @ my-org```

Para un paquete de ámbito de usuario:

``npm init --scope = @ mi-nombre de usuario``

## Revisar el contenido del paquete en busca de información sensible o innecesaria

La publicación de información confidencial en el registro puede dañar a tus usuarios, comprometer su infraestructura de desarrollo, ser costosa de arreglar y ponerlo en riesgo de acciones legales. Recomendamos encarecidamente eliminar la información confidencial, como claves privadas, contraseñas, [información de identificación personal] [pii] (PII) y datos de tarjetas de crédito antes de publicar su paquete en el registro. Incluso si su paquete es privado, la información confidencial puede quedar expuesta si el paquete se hace público o se descarga en una computadora a la que puedan acceder más usuarios de los previstos.

##  Probando un paquete

Para reducir las posibilidades de publicar errores, recomendamos probar tu paquete antes de publicarlo en el registro de npm. Para probar su paquete, ejecute npm install con la ruta completa al directorio de su paquete:

```npm instalar mi paquete```

## Publicar paquetes privados

De forma predeterminada, los paquetes con ámbito se publican con visibilidad privada.

En la línea de comando, navegue hasta el directorio raíz de tu paquete.

```cd / ruta / a / paquete```

Para publicar tu paquete privado en el registro npm, ejecutá:

npm publicar

Para ver la página de tu paquete privado, visitá [https://npmjs.com/package/*package-name](https://npmjs.com/package/*package-name),  reemplazando package-name * con el nombre de tu paquete. Los paquetes privados dirán private debajo del nombre del paquete en el sitio web de npm.



