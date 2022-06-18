# :book: Clase 04 de Node.js - 09 de Junio 2022

---

## :star: Reordenamos las rutas


En **router.js** teniamos todas las rutas juntas, las vamos a reordenar con

... ruta principal (index) 

...  ruta de producto

... ruta de contacto, con dos subrutas, una muestra el formulario y la otra lo procesa

->> en la ruta principal creo la carpeta **routers** y dentro: **index.js** para la ruta principal y **productos.js**:

index.js:

```JavaScript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
```
productos.js, aca tengo que modificar la ruta para el modulo productos: **const productos = require('../productos');**:
```JavaScript
const express = require('express');
const router = express.Router();

const productos = require('../productos');

router.get('/productos', (req, res) => {
    res.render('productos/index', { productos: productos.all() });
});

router.get('/productos/:codigo', (req, res) => {
    // res.send('Producto: ' + req.params.codigo);
    res.render('productos/show', { producto: productos.find(req.params.codigo) });
});

module.exports = router;
```

->> borro el archivo **routers.js** ya que ahora lo pase a estos otros dos archivos

->> Y en **app.js** antes cargaba router, o cual tengo que modificar:

```JavaScript
app.use(require('./routers/index'));
app.use(require('./routers/productos'));
```


---

## :star: Crear formulario de contacto

- En **routers** creo el nuevo archivo **contacto.js** para tener **la ruta contacto** creada:

```JavaScript
const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/contacto', (req, res) => {
  response.render('contacto/contacto');
});

module.exports = router;
```
- En **views** creo una nueva carpeta **contacto** con el archivo **contacto.ejs** porque sera **la vista contacto**. 

- En **app.js** redirecciono a la ruta:
```JavaScript
app.use(require('./routers/index'));
app.use(require('./routers/productos'));
app.use(require('./routers/contacto'));
```
---

## Formularios

Para que la apliación reciba lo enviado en el formulario con el metodo post, se envia un objeto con clave nombre y el valor el nombre.

Entonces express a traves de un middleware utiliza el .urlencoded():

```JavaScript 
app.use(express.urlencoded({ extended: false})); 
```
Lo debo agregar en **app.js** antes de las rutas.

Y luego lo obtiene mediante el ```req.body``` asi tendra el objeto con los datos enviados desde el formulario.

Lo dejamos en **false**, de tener formularios más complejos lo necesitaríamso en **true**, para utilizar esta funcionalidad extendida.

Hay que crear la ruta por post en **router** > **contacto.js**:

```JavaScript 
router.post('/contacto', (req, res) => {
  console.log(req.body);
  res.send('Enviando...');
});
```

- Por el momento solo **recibimos** la información, no la procesamos ni hacemos nada, por eso hago que se muestre el mensaje de 'Enviando...'.

## :star: Express validator


- Hay que **validar** (**sanitizar**) la información recibida.

- ¿ Cómo lo instalo ? Con: ```> npm install express-validator```

- ¿ Donde veo la documentacion? En [https://express-validator.github.io/docs/](https://express-validator.github.io/docs/)

- Debemos tener validaciones en el Back End además de en el Front End, más que nada para que no nos manden codigos que afecte nuestra aplicación.

-->> En **routes > contacto.js**:

**body** -> para poner las reglas

**validationResult** -> me avisa si hay errores o no

```JavaScript
const { body, validationResult } = require('express-validator');
```

-->> Para validar que tenga un nombre, y que tenga al menos 3 caracteres:

```JavaScript
router.post('/contacto', [
  body('nombre').exists().isLength(3),
], (req, res) => {
  console.log(req.body);
  res.send('Enviando...');
});
```

-->> Para ver los posibles errores:

```JavaScript
router.post('/contacto', [
  body('nombre').exists().isLength(3),
], (req, res) => {
  const errors = validationResult(req);
  console.log(req.body, errors);
  res.send('Enviando...');
});
```

-->> Si no hay errores lo envio (if) y si hay un error debo detallar los errores (else):
```JavaScript
if(errors.isEmpty()) {
  res.send('Enviando...');
}  else {
  res.render('contacto/contacto', { errors: errors.array() });
}
```

-->> En **contacto.ejs** chequeo que el error no este definido o este vacio, ya que la primera vez va a ser undefined. Si esta definido, se recorre como un array:

```
<% if (typeof errors != 'undefined') { %>
  <ul>
    <% errors.forEach(error => { %>
      <li> <%= error.msg %> </li>
    <% })  %>
  </ul>
<% } %>
```

-->> En **contacto.js** mandamos tanto los errores como los valore que ingresaron:

```JavaScript
if(errors.isEmpty()) {
    res.send('Enviando...');
  } else {
    res.render('contacto/contacto', { values: req.body, errors: errors.array() });
  }
```

En la vista **contacto.ejs** tengo el atributo value que es el valor inicial del input, como un valor por default, y con JS puedo pasarle como valor por default el dato ingresado:
``` <input type="text" id="nombre" name="nombre" value="<%= values.nombre %>">```.

Y para no tener el error de que values no esta definido, en **contacto.js**:

```JavaScript
router.get('/contacto', (req, res) => {
  res.render('contacto/contacto', { values: {} });
});
```

En **contacto.js** puedo personalizar el mensaje de error que muestro con **'El nombre es obligatorio y tiene que tener 3 caracteres como mínimo.'** para el nombre y ademas valido que existe y debe tener al menos 3 caracteres. Para el **mail** muestro el mensaje **El correo es obligatorio** en caso de que no pase la validacion de que existe y es email, y para el **mensaje** muestro **El mensaje es obligatorio** para el caso de que no pase la validacion de ue existe y no esta vacio :

```JavaScript

router.post('/contacto', [
  body('nombre', 'El nombre es obligatorio y tiene que tener 3 caracteres como mínimo.')
    .exists().isLength(3),
  body('email', 'El correo es obligatorio').exists().isEmail(),
  body('mensaje', 'El mensaje es obligatorio').exists().notEmpty()
], (req, res) => {
  const errors = validationResult(req);
  console.log(req.body, errors);

  if(errors.isEmpty()) {
    res.send('Enviando...');
  } else {
    res.render('contacto/contacto', { values: req.body, errors: errors.array() });
  }
});
```

-->> Agregando **normalize**  y utilizando **check** puedo hacer más validaciones:

```JavaScript
[
    body('nombre', 'El nombre es obligatorio y tiene que tener 3 caracteres como minimo.')
        .exists().isLength(3).escape(),
    body('email', 'El correo es obligatorio')
        .exists().isEmail().normalizeEmail(),
    check('mensaje')
        .exists()
        .notEmpty()
        .withMessage('El mensaje es obligatorio')
        .isLength(3)
        .withMessage('El mensaje tiene que tener 3 carateres o mas')
        .trim().escape()
]
```
---

- Primero tengo la ruta 

```JavaScript
app.post('/contacto', (req, res) => {
  res.render('contacto');
});
```

- Segundo le agrego las validaciones:

```JavaScript
app.post('/contacto', [
  body('nombre', 'Ingresar nombre').exists().isLength(3),
  body('email', 'Ingresar email').exists().esEmail(),
  body('mensaje'. 'Ingresar mensaje').exists().notEmpty(),
], (req, res) => {
  res.render('contacto');
});
```

- Tercero si no hay errores lo envio, si hay errores lo envio:

```JavaScript
app.post('/contacto', [
  body('nombre', 'Ingresar nombre').exists().isLength(3),
  body('email', 'Ingresar email').exists().esEmail(),
  body('mensaje'. 'Ingresar mensaje').exists().notEmpty(),
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.render('contacto', { values: req.body, errors: errors.array() });
  } else {
    res.send('Enviando...')
  }
  
});
```
---

Por el momento los datos no se envian a ningun lado, por el momento se dejan ahi.

En las proximas clases se va a ir guardando en la Base de Datos, otro modo ser´´ía enviarlo por e-mail.

- Si queriamos tambien ***sanitizar** la información:

->> body('nombre', 'El nombre es obligatorio y tiene que tener 3 caracteres como minimo.').exists().isLength(3)**.escape()**,


->>  body('email', 'El correo es obligatorio').exists().isEmail()**.normalizeEmail()**,

->>   check('mensaje').exists().notEmpty().withMessage('El mensaje es obligatorio').isLength(3).withMessage('El mensaje tiene que tener 3 carateres o mas')**.trim().escape()**


**.escape()** -> escapa el contenido, transforma a texto para que no genere error, evita que me puedan cargar algun script que se ejecute en mi aplicacion (evito que me inserten codigo)

**.normalize()** -> normaliza el email, le saca espacios, etc

**.trim()** -> saca espacios tanto al principio como al final

