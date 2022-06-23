const express = require('express');
const router = express.Router();

const connection = require('../db');

router.get('/register', (req, res) => {
  res.render('auth/register', {lauout: 'layout-auth'})
});

router.post('/register', (req, res) => {
  connection.query('INSET INTO usuarios SET =?', { email: req.body.email. password: req.body.password}, error => {
    if (error) { throw error }

    res.redirect('/');
  });
});