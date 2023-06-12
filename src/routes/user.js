const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/ingresar', (req,res) => {
    res.render('home/login');
});

router.get('/plan', (req,res) => {
    res.render('users/user');
});

router.get('/realizado', (req,res) => {
    res.render('users/fin');
});

module.exports = router;