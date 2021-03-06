const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/add',(req,res)=>{
    res.render('compra/add');
});

router.get('/consultar',async(req,res)=>{
    const peri = await pool.query('select * from compra');
    res.render('compra/consultar',{peri});

});


router.post('/add',async(req,res)=>{
   
    const { nombre,numero_tarjeta,fecha,codigo,} = req.body;
    const newUser = { nombre, numero_tarjeta,fecha,codigo,}; 

    await pool.query('insert into compra set ?', [newUser]);   
    res.redirect('/compra/consultar');
    
});


router.get('/delete/:id_compra', async(req,res)=>{
    const {id_compra} = req.params;
    const estu =await pool.query('delete from compra where id_compra=?',[id_compra]);  
    res.redirect('/compra/consultar');
});



router.post('/modificar6/:id_compra',async (req,res)=>{
    const {id_compra}= req.params;

    await pool.query(`UPDATE compra set ? where id_compra = ? `,[req.body,id_compra]);
    res.redirect('/compra/consultar');
});


module.exports = router;