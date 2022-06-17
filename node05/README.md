## :book: Clase 5 - 14 Junio

Temas:

Base de datos

---

## :star: Intalación - conexion a base de datos

- **MySQL** es el servidor

- **Heidy**, **Workbench** son el cliente

- Instalo con : ``` > npm install mysql ```

- A la altura de la raiz creo el archivo **db.js** donde voy a tener las cosas para la base de datos y:

-> Requerimos el modulo:
```JavaScript
const mysql = require('mysql');
```

->> Armamos la conexion:

```JavaScript
const connection = mysql.createConnection({
  host: 'localhost', // 127.0.0.1
  user: 'root', // usuario de la base de datos
  password: '', // password de la base de datos
  database: 'cac_22006'
});
```

->> Nos conectamos:

```JavaScript
connection.connect(error => {
  if (error) { throw error}
});
```

->> Lo exporto para poder usarlo fuera del modulo :

```JavaScript
module.exports = connection;
```

->> En terminal ```> node nd.js```

---

## :star: Uso la conexion par ahacer una consulta en la base de datos

Es **asincrono** se manda la consulta y cuando esta la respuesta llega.

Como es un callback, tiene como parametro el error y el resultado, asi de tener un error sale la excepcion y sino llega el resultado con la respuesta de la consulta de la base de datos.

```JavaScript
connection.query('SELECT * FROM productos', (error, result) => {
  if (error) {  throw error }
  console.log(results);
});
```

---

## :star: Traemos la lista de productos desde la base de datos

En **prudctos.js**:

```JavaScript
const express = require('express');
const router = express.Router();

const producto = require('../productos');
const connection = require('../db');

router.get('/productos', (req, res) => {
  connection.query('SELECT * FROM productos',  (error, results) => {
    if (error) { throw error }

    res.render('productos/index', { productos: results });
  })
});

router.get('/productos/:codigo', (req, res) => {
  connection.query('SELECT * FROm productos WHERe codigo = ?',
    [ req.params.codigo],
    (error, results) => {
      if (error) { throw error }
      //res.send(results);
      res.render('productos/show', { productos: results[0] })
  });
});
```

->> Y en **shows** debo cambiar como tengo en mi base de datos:

id -> codigo

name -> nombre

description -> descripcion

```
<% if (producto) { %>
  <h2>Codigo: <%= producto.codigo %></h2>
  <h3><%= producto.nombre %></h3>
  <p><%= producto.descripcion %></p>
<% } else { %>
  <p>No existe el producto</p>
<% }%>
```

---

## CRUD

**C**reate, **r**ead, **u**pdate, **d**elete


### Para crear productos

En > productos > index.ejs agrego : ```<a href="/productos/create"> Crear producto</a>``` para tener un link y poder crear un nuevo producto. 

-> En productos.js:

```JavaScript
// para crear los poductos
router.get('productos/create', (req, res) => {
  res.render('productos/create');
})
```

->> En views > productos > **create.ejs** y aca armo un formulario para ingresar los datos y crear el producto:

```
<from action="/productos/store" method="post">
  <div>
    <label for="codigo">Codigo:</label>
    <input type="text" id="codigo" name="codigo">
  </div>
  <div>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
  </div>
  <div>
    <label for="descripcion">Descripcion:</label>
    <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
  </div>
  <div>
    <label for="categoria">Categoria:</label>
   <select name="" id="">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
   </select>
  </div>
  <div>
    <button type="submit">Guardar</button>
  </div>
</from>
```

->> En **productos.js**:

```JavaScript
// para insertar el producto en la base de datos
router.posrt('produtcos/store', (req,res) => {
  connection.query('INSERT INTO productos SET = ?', { 
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria_id: req.body.categoria
  }, (error, results) => {
    if (error) { throw error }

    res.redirect('productos'); // una vez que ingreso el producto redirijo a la lista de los productos
  });
})
```

Tomamos los datos del formulario, hacemos la consulta por el codigo ingresado para traer los datos del producto y lo muestra.

---

- Para correr el proyecto: ```> npm run dev```

---