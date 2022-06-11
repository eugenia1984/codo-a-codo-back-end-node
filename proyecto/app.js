require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));

app.use(require('./routers/index'));
app.use(require('./routers/productos'));
app.use(require('./routers/contacto'));

app.use((req, res, next) => {
    res.status(404).send('Not found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));
