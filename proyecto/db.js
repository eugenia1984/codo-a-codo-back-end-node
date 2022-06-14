const mysql = require('mysql');
// Para conectar a la base de datos
const connection = mysql.createConnection({
  host: 'localhost', // 127.0.0.1
  user: 'root',
  password: '',
  database: 'cac_22006'
});

connection.connect(error => {
  if (error) { throw error}
});

/*
connection.query('SELECT * FROM productos', (error, result) => {
  if (error) {  throw error }
  console.log(results);
});
*/
module.exports = connection;