const express = require('express');
const router = express.Router();
const bcryptjs = require('bycryptjs');

const connection = require('../db');

router.get('/login', (req, res) => {
    res.render('auth/login', { layout: 'layout-auth' });
});

router.post('/login', (req, res) => {
    connection.query('SELECT * FROM usuarios WHERE email = ?', [ req.body.email ], async (error, results) => {
        if (error) { throw error }

        if (results.length == 0) {
            res.send('El correo y/o contraseña son incorrectos');
        } else if ((await bcryptjs.compare(req.body.password, results[0].password)) == false) {
            res.send('El correo y/o contraseña son incorrectos');
        } else {
            req.session.user_id = results[0].id;

            res.redirect('/');
        }
    });
});

router.get('/register', (req, res) => {
    res.render('auth/register', { layout: 'layout-auth' });
});

router.post('/register', async (req, res) => {
    const hash = await bcryptjs.hash(req.body.password, 8);

    connection.query('INSERT INTO usuarios SET ?', { email: req.body.email, password: hash }, error => {
        if (error) { throw error }

        res.redirect('/');
    });
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = router
