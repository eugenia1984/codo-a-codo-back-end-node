const express = require('express');
const router = express.Router();

//const productos = require('../productos');
const connection = require('../db');

// Para mostrar el listado de los productos
router.get('/productos', (req, res) => {
    connection.query('SELECT * FROM productos',  (error, results) => { // para traer los datos desde la base de datos
      if (error) { throw error }
  
      res.render('productos/index', { productos: results });
    })
});

// para crear un producto
router.get('/productos/create', (req, res) => {
  res.render('productos/create');
});

// para insertar el producto creado en la base de datos
router.post('productos/store', (req,res) => {
  connection.query('INSERT INTO productos SET = ?', { 
    // como tengo en la base de datos : aca puede variar
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    categoria_id: req.body.categoria
  }, (error, results) => {
    if (error) { throw error }

    res.redirect('/productos'); // una vez que ingreso el producto redirijo a la lista de los productos
  });
})

// Para mostrar el detalle del producto por codigo
router.get('/productos/:codigo', (req, res) => {
    connection.query('SELECT * FROM productos WHERE codigo = ?', 
      [ req.params.codigo ],
      (error, results) => {
        if (error) { throw error }

        res.render('productos/show', { producto: results[0] });
      });
});

module.exports = router;