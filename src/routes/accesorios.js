const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/add',async(req,res)=>{
    const estu = await pool.query('select * from accesorios');
    res.render('accesorios/add',{estu});

});

router.post('/add',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,
        
    }; 

    await pool.query('insert into accesorios set ?', [newUser]);   
    res.redirect('/accesorios/add');
    
});

router.get('/consultar',async(req,res)=>{
    const estu = await pool.query('select * from accesorios');
    res.render('accesorios/consultar',{estu});

});

router.post('/consultar',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,
    }; 

    await pool.query('insert into accesorios set ?', [newUser]);   
    res.redirect('/accesorios/consultar');
    
});

router.get('/delete/:id_accesorios', async(req,res)=>{
    const {id_accesorios} = req.params;
    const estu =await pool.query('delete from accesorios where id_accesorios=?',[id_accesorios]);  
    res.redirect('/accesorios/consultar');
});

router.post('/consultar/:id_accesorios',async (req,res)=>{
    const {id_accesorios}= req.params;

    await pool.query(`UPDATE accesorios set ? where id_accesorios = ? `,[req.body,id_accesorios]);
    res.redirect('/accesorios/consultar');
});

router.post('/modificar1/:id_accesorios',async (req,res)=>{
    const {id_accesorios}= req.params;

    await pool.query(`UPDATE accesorios set ? where id_accesorios = ? `,[req.body,id_accesorios]);
    res.redirect('/accesorios/consultar');
});

module.exports = router;