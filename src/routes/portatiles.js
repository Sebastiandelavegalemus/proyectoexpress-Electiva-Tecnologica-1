const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/add',async(req,res)=>{
    const not = await pool.query('select * from portatiles');
    res.render('portatiles/add',{not});

});

router.post('/add',async(req,res)=>{
    
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,

    }; 

    await pool.query('insert into portatiles set ?', [newUser]);
    res.redirect('/portatiles/add');
    
});

router.get('/laptops',async(req,res)=>{
    const not = await pool.query('select * from portatiles');
    res.render('portatiles/consultar',{not});

});

router.post('/consultar',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,
    }; 
    
    await pool.query('insert into portatiles set ?', [newUser]);   
    res.redirect('/portatiles/laptops');
    
});

router.get('/delete/:id_portatiles', async(req,res)=>{
    const {id_portatiles} = req.params;
    const not =await pool.query('delete from portatiles where id_portatiles=?',[id_portatiles]);  
    res.redirect('/portatiles/laptops');
});

router.post('/consultar/:id_computid_portatilesadores',async (req,res)=>{
    const {id_portatiles}= req.params;

    await pool.query(`UPDATE portatiles set ? where id_portatiles = ? `,[req.body,id_portatiles]);
    res.redirect('/portatiles/laptops');
});

router.post('/modificar3/:id_portatiles',async (req,res)=>{
    const {id_portatiles}= req.params;

    await pool.query(`UPDATE portatiles set ? where id_portatiles = ? `,[req.body,id_portatiles]);
    res.redirect('/portatiles/laptops');
});

module.exports = router;