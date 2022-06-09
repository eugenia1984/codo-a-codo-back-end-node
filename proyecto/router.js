const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/productos', (req, res) => {
  res.send('Listado de productos');
});

router.get('/productos/:codigo', (req, res) => {
  res.render('productos/show', { codigo: req.params.codigo });
});

module.exports = router;