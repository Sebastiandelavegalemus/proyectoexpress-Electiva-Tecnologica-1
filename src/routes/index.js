const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/Computer_Max',async(req,res)=>{
    const estu = await pool.query('select * from accesorios');
    res.render('inicio/Computer_Max',{estu});

});

module.exports = router;