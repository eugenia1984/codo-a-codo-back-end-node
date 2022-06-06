const http = require("http"); 
const fs = require('fs'); // el modulo FILE SYSTEM, para poder leer un html con su metodo .readFile()

const servidor = http.createServer((req, res) => {
  fs.readFile(__dirname+ '/index.html', (err, html) =>  {
    if (err) {
      console.log(err.message);
      res.write('No se pudo leer el archivo.');
    } else {
      res.write(html);
    }

    res.end();  // para cerrar la comunicacion
  });
});

const port = 3000; 

servidor.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
