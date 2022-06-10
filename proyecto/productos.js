const productos = [
  {id: 1, name: 'Mesa'},
  {id: 2, name: 'Silla'},
  {id: 3, name: 'Escritorio'},
];

const all = () => productos

const find = (id) => productos.find(producto.id == id)

module.exports = {
  all,
  find
}