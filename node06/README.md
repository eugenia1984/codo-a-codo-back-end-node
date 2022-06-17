## :book: Clase 6 - 16 de Junio

---

### Agregamos Bootstrap

- Usamos la version 5.1

- Copiamos el link al css de  bootstrap em views > layouts.ejs:

```<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">```

- Y tambien el link de JS:

```<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>```

- En layout.ejs metemos todo dentro de un div o main con clase container.

- En contacto.ejs le doy estilo con Bootstrap:

-> a los labels le agrego **class="form-label"**

-> a los input le agrego **class="form-control"**

-> al boton agrego **class="btn btn-primary"**

-> todo el form lo meto en una **row** y le doy un ancho de **6** y la centro justificandola con center

- En productos.ejs le damos Bootstrap

- En productos ceate tambien agrego bootstrap

-> a los labels agrego: **class="form-label"**

-> a los input le agrego **class="form-control"**

-> al boton agrego **class="btn btn-primary"**

---

## :star: Refactorizamos el codigo

Necesito ir agregando rutas en **productos.js** lo que nos va a ir quedando muy largo, asi que lo vamos a pasar con un controlador, utilizando el **MVC** (Modelo Vista Controlador).

El controlador muestra la vista o muestra los datos de la base de datos que la trae.

Creo **controller.js**:


```JavaScript
const connection = require('./db'); // para trabajar con la base de datos en el controlador

module.exports.index = (req, res) => {
    connection.query('SELECT * FROM productos',  (error, results) => {
      if (error) { throw error }
  
      res.render('productos/index', { productos: results });
    })
}
```

Y ahora en **productos.js** voy a tener:
```JavaScript
router.get('/productos', controller.index);
```

Y asi hago con cada .get() que tenia los voy pasando a **controller.js** y voy dejando el **productos.js** mas chico


->> Y asi voy refactorizando

---

## :star: Sequelize 

Para las bases de datos

---

## :star: Mongoose

---


## :star: Metodos de los formularios

POST -> para enviar

GET -> para obtener

PUT -> para modificar todo

PATCH -> para modificar una parte

DELETE -> para borrar un registro

### Modulo methods-override

- 1ro: lo instalamos con :```> npm install method-override```. Más información en [http://expressjs.com/en/resources/middleware/method-override.html](http://expressjs.com/en/resources/middleware/method-override.html)

- 2do: lo requerimos en **app.js** 
```JavaScript
const override = require('methods-override');
```

- 3ro lo configuramos en **app.js**, siempre antes de las rutas:

```JavaScript
app.use(methodOverride('__method'));
```

---

## :star: CRUD : UPDATE

- En **productos.js**:

```JavaScript
router.get('/productos/:codigo/edit', controller.edit);
```

- En **controller.js** por ahora es el mismo codigo que el create:

```JavaScript

module.exports.edit = (req,res) => {
  connection.query('SELECT * FROm productos WHERe codigo = ?',
    [ req.params.codigo],
    (error, results) => {
      if (error) { throw error }
      //res.send(results);
      res.render('productos/show', { productos: results[0] })
  });
}
```

- Me copio el create.ejs y lo copio en un nuevo archivo **editar.ejs**


->> En **productos.js**:
```JavaScript
router.put('/productos/update', controller.update);
```

->> En **controller.js**:

---