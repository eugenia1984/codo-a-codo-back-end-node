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

->> Hasta ahora lo venia ejecutando con ```> nodemon.cmd app```


->> Ahora utilizo los scripts : ```> npm run dev```

---

## :star: Vistas - EJS

**ejs** es un **motor de vistas**, parecido a handlerbar o pug (se escribe similar a Python con identacion, sin {}).

- ¿ Cómo lo instalo ?: ```> npm install ejs``` ó 
```> npm i ejs```

- Para verificar en **package.json** en dependencias veo:
```JavaScript
"dependencies": {
  "dotenv": "^16.0.1",
  "ejs": "^3.1.8",
  "express": "^4.18.1",
  "nodemon": "^2.0.16"
}
```

-_>> Hay que decirle a express para que use este view engine, en el **app.js**:

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

Con el ```<%= %>``` lo renderizo


### include

```<%- include('partials/header) -%>```

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

Y para incluirlo en **index.ejs**: ```<%- include('partials/nav') %>```

---

## :star: Layout - Modulo express-ejs layout

Otro modo de ir maquetando, lo que hace es envolver la vista y todo lo que se repite, como el header, footer lo hago en el layout.


Para instalarlo: ```npm install express-ejs-layouts```

-->> Para configurar el modulo en **app.js**:

```JavaScript
const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);
```
-->> Voy a tene error, me falta dentro de **views** tener el **layout**

Y para hacer más rápido me copio todo lo que tenia en el index y lo paso al layout.

Y en el **layout.ejs** en el ```<body>``` tengo :

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

-->> Y en */*show.ejs** poder mostrar todos los datos del producto, debo modificar en **router.js**:

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