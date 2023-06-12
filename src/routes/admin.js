const express = require('express');
const router = express.Router();
const pool = require('../database');



router.get('/empresas', (req,res) => {
    res.render('admin/admin');
});

router.get('/usuarios', (req,res) => {
    res.render('admin/users');
});

module.exports = router;