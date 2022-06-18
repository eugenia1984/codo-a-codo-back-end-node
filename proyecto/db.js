const mysql = require('mysql');

const connection = mysql.createConnection({ 
  host: 'localhost', // 127.0.0.1
  user: 'root',
  password: 'rootroot',
  database: 'cac_22006'
});

connection.connect(error => { // Para conectar a la base de datos, si hay error lo lanzo como excepcion
  if (error) { throw error}
});

module.exports = connection;