# Clase 7 - Node.js - 21 de Junio

---

## :star: Para eliminar un producto:

->> En **productos.js**:

```JavaScript
router.delete('/productos/:codigo/delete', controller.delete);
```

->> En **controller.js**:

```JavaScript

module.exports.delete = (req,res) => {
  connection.query('DELETE FROM productos WHERE codigo = ?', [req.params.codigo], error => {
    if (error) { throw error}

    res.redirect('/productos');
  });
}
```

- Y así **borro** un producto.

->> En views > productos > index.ejs agrego un formularioq ue sea como un boton para borrar. Le voy a darla clase **form-delete** para despues poder utilizar JavaScript en el.

```html
 <form class="form-delete" action="/productos/<%= producto.codigo %>/delete?_method=DELETE"  method="post" >
  <button type="submit" class="btn btn-danger"> Borrar</button>
</form>
```

->> En view > productos > index.ejs agrego con JS para capturar los submits, agrego script al final:

```html
<script>
  document.addEventListener('submit', event => {
    if (event.target.classList.contains('form-delete')) {
      event.preventDefault();

      if(config('¿Estas seguro que desea borrar el producto?')) {
        event.target.submit();
      }
    }
  });
</script>
```


---

Debemos separar por un lado lo del administrador y por el otro lo del cliente, para seguir con el patron **MVC**

MODELO -> la base de datos

VISTA -> view

CONTROLADOR -> controler

1. Creo la carpeta **controllers** y llevo controlers.js que lo renombro a **productos.js** y cambio  '../db'

2. en routers > productos.js : 
```JavaScript
const connection = require('../controllers/productos');
```

3. Necesito las rutas para la parte adminsitrativa entonces creo en router > admin y le copio el productos.js

4. En **views** creo una carpeta llamada **admin** y le copio todo lo que tiene productos

5. En **controllers** creo **admin** y copio  productos.js

6. El usuario (/productos) solo ve los productos, ni edita, ni crea ni elimina...

... en **views** > **producto** solo va a tener index.ejs y show.ejs. 

... en **controllers** > **produtos.ejs le dejo solo el index y el show.

7. para el **admin**...

...routes > admin > productos.js tengo que actualizar el controlador

... controllers > admin > productos.js tengo que cambiar en index la vista a **'admin/productos/index'** lo mismo en el .create(), .store(), show(), .edit() y .update() -> en todos los .redirect() agrego'/admin/' y en el .render() agrego'/admin/'

... en las vistas tambien debe apuntar a '/admin/' y es recomendable que los productos en vez de en cards esten en tablas


8. Hay que tener un ayout para el ciente con el formulario de contacto y otra para el admin (no va a necesitar el contacto y va a querer ver todo como tablas, no necesita cards). Y voy a tener que crear un nuevo partial > nav para el admin y le saco la parte de contacto