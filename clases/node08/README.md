## :star: Clase 08 * Node.js * 23 de Junio

---

Dentro de **routers** > creamos **auth.js**

```JavaSCript
const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
  res.render('auth/register')
})
```

En **views** > **auth** > **register.js**

En **views** > **layout-auth.ejs** que va a tener en el nav solo el formulario para registrarse, por lo que en los **partials** hay que agregar un **nav-auth.ejs**

Y la cargo en **app.js**


---

En la base de datos necesitamos dos nuevas tablas...

... **roles** que debe tener el campo **id** como PK, INT, AUTOINCREMENTAL y el **nombre** (usuario, admin, editor)

... **usuarios** con los campos: **email** como PK y **password**

---

## :star: Bcryptjs


Y vamos a tener que **encriptar** la contraseña de los emails, hace un tiempo se utilizaba el **md5**, pero o se usa más porque fue hakeado y se revierta la encriptación. Además siempre generaba el mismo HASH.

Ahora se utiliza **bcryptjs** , lo bueno es que genera codigos distintos.

Hay que crear el HASH, en **routers** > **auth.js**:

- Para instalar el modulo: ``` > npm install bcryptjs```

Se ejecuta una promesa, hay que usar un then-cath, o el async-await(usamos este nosotros).

```JavaScript
const bcryptjs = require('bycryptjs');

const bcryptjs = require('bycryptjs');

// para la parte del registro
router.post('/register', async (req, res) => {
  const hash = await bcryptjs.hash(req.body.password, 8);

  connection.query('INSET INTO usuarios SET =?', { email: req.body.email, password: req.body.password}, error => {
    if (error) { throw error }

    res.redirect('/');
  });
});
```

---

## :star: Express-session

- Para instalar el modulo: ``` > npm install express-session```

Asi nos podemos manejar con sesiones y se configura a nivel aplicacion en **app.js**

```JavaScript
const session = require('express-session');


app.use(session({
  secret: '',
  resave: false,
  saveUninitialized: false,
}))
```

```JavaScript
const isLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    }

    next();
}
```

```JavaScript
app.use('/admin', isLogin, require('./routes/admin/productos'));

app.use(require('./routes/auth'));
```