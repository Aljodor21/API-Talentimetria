const express = require('express');
const router = express.Router();
const pool = require('../database')


router.get('/',(req,res)=>{
    res.render('home/index');
});

module.exports = router;