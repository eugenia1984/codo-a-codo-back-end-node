const productos = [
  {id: 1, name: 'Mesa', description: 'de eucaliptus'},
  {id: 2, name: 'Silla', description: 'de pino'},
  {id: 3, name: 'Escritorio', description: 'individual'},
];

const all = () => productos

const find = (id) => productos.find(producto => producto.id == id)

module.exports = {
  all,
  find
}