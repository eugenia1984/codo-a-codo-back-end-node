require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(require('./router'));

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));