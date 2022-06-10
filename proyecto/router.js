const express = require('express');
const router = express.Router();

const productos = require('./productos');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/productos', (req, res) => {
    res.render('productos/index', { productos: productos.all() });
});

router.get('/productos/:codigo', (req, res) => {
    // res.send('Producto: ' + req.params.codigo);
    res.render('productos/show', { producto: productos.find(req.params.codigo) });
});

module.exports = router;