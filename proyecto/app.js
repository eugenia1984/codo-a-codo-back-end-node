require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const session = require('express-session');

app.use(session({
    secret: 'k(x=zN;86;K(Ea>4',
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const isLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    }

    next();
}

app.use(require('./routers/index'));
app.use(require('./routers/productos'));
app.use(require('./routers/contacto'));

app.use('/admin', isLogin, require('./routes/admin/productos'));

app.use(require('./routes/auth'));

app.use((req, res, next) => {
    res.status(404).send('Not found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));
