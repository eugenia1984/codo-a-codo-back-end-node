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


Y vamos a tener que **encriptar** la contraseña de los emails, hace un tiempo se utilizaba el **md5**, pero o se usa más porque fue hakeado y se revierta la encriptación. Además siempre generaba el mismo HASH.

Ahora se utiliza **bcryptjs** , lo bueno es que genera codigos distintos.


- Para instalar el modulo: ``` > npm install bcryptjs```