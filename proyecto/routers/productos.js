const express = require('express');
const router = express.Router();

const controller = require('../controllers/productos');

router.get('/productos', controller.index);
router.get('/productos/:codigo', controller.show);

module.exports = router;
