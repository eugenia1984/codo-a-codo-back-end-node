const connection = require('../../db'); 

module.exports.index = (req, res) => {
  connection.query('SELECT * FROM productos',  (error, results) => {
    if (error) { throw error }

    res.render('admin/productos/index', { productos: results });  // res.render('admin/productos/index', { productos: results, layout: 'layout-admin' });
  })
}

// para crear un nuevo producto
module.exports.create = (req, res) => {
  res.render('admin/productos/create'); //  res.render('admin/productos/create', { layout: 'layout-admin' });
}

module.exports.store =  (req,res) => {
  connection.query('INSERT INTO productos SET = ?', { 
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria_id: req.body.categoria,
    precio : req.body.precio
  }, (error, results) => {
    if (error) { throw error }

    res.redirect('/admin/productos');
  });
}

// para mostrar un producto por su codigo
module.exports.show = (req, res) => {
  connection.query('SELECT * FROM productos WHERE codigo = ?', [ req.params.codigo], (error, results) => {
      if (error) { throw error }

      res.render('admin/productos/show', { productos: results[0] }) //  res.render('admin/productos/show', { producto: results[0], layout: 'layout-admin' });
  });
}

// para modificar un producto de la base de datos
module.exports.edit = (req,res) => {
  connection.query('SELECT * FROM productos WHERE codigo = ?', [ req.params.codigo], (error, results) => {
      if (error) { throw error }
      
      res.render('admin/productos/edit', { producto: results[0] }); //   res.render('admin/productos/edit', { producto: results[0], layout: 'layout-admin' });
  });
}

module.exports.update = (req, res) => {
  connection.query('UPDATE productos SET ? WHERE codigo = ?', [ {
    nombre: req.body.nombre,
    descripcion : req.body.descripcion,
    categoria_id: req.body.categoria, // base de datos : formulario
    precio: req.body.precio
  }, req.body.codigo], (error, results) => {
    if(error) { throw error }

    res.redirect('/admin/productos');
  });
}

// para eliminar un producto de la base de datos
module.exports.delete = (req,res) => {
  connection.query('DELETE FROM productos WHERE codigo = ?', [req.params.codigo], error => {
    if (error) { throw error}

    res.redirect('/admin/productos');
  });
}
