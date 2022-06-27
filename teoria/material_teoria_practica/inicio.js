const express = require('express');
const mysql   = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

var conexion = mysql.createConnection({
        host: 'cursophp.com.ar',
        user: 'root',
        password: 'fullstack',
        database: 'ejemplo',
        port: '3306'
}
)

    app.get('/', function (req, res) {
            res.send('Hola GET - Bienvenido al Club')
    })

    app.get('/listado', cors(), function (req, res) {
   
      const sql = 'SELECT * FROM personas ORDER BY pers_edad DESC';
                   
      conexion.query(sql, (error,resultados) =>{
        if (error) throw error;
          if(resultados.length > 0 ){
              res.json(resultados);
          }
       }
       )
    });

    app.get('/consulta/:nro', function (req, res) {
        res.send('Hola GET - Listado de Socios del club')
    })     

    app.post('/', function (req, res) {
            res.send('Hola POST')
    })

  

  app.delete('/', function (req, res) {
    res.send('Hola DELETE')
  })

  app.put('/', function (req, res) {
    res.send('Hola PUT')
  })

  app.patch('/', function (req, res) {
    res.send('Hola PATCH')
  })
 
app.listen(PORT)