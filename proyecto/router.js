const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h1>Hola Express</h1>`);
});

router.get('/productos', (req, res) => {
  res.send('Listado de productos');
});

router.get('/productos/:codigo', (req, res) => {
  //res.send('Producto:' + req.params.codigo);
  res.send(`Producto: ${req.params.codigo}`);
});

module.export = router;