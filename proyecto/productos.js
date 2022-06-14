/*const productos = [
  {id: 1, name: 'Mesa', description: 'de eucaliptus'},
  {id: 2, name: 'Silla', description: 'de pino'},
  {id: 3, name: 'Escritorio', description: 'individual'},
];

const all = () => productos

const find = (id) => productos.find(producto => producto.id == id)

module.exports = {
  all,
  find
}*/
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

// para crear los poductos
router.get('productos/create', (req, res) => {
  res.render('productos/create');
})
// para insertar el producto en la base de datos
router.posrt('produtcos/store', (req,res) => {
  connection.query('INSERT INTO productos SET = ?', { 
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria_id: req.body.categoria
  }, (error, results) => {
    if (error) { throw error }

    res.send(results);
  });
})

router.get('/productos/:codigo', (req, res) => {
  connection.query('SELECT * FROm productos WHERe codigo = ?',
    [ req.params.codigo],
    (error, results) => {
      if (error) { throw error }
      //res.send(results);
      res.render('productos/show', { productos: results[0] })
  });
});

module.exports = router;