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

router.get('/productos', controller.index);

// para crear los poductos
router.get('productos/create', controller.create);

// para insertar el producto en la base de datos
router.posrt('produtcos/store', controller.store);

router.get('/productos/:codigo', controller.show);

router.get('/productos/:codigo/edit', controller.edit);
router.put('/productos/update', controller.update);

module.exports = router;