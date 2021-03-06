const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/add',async(req,res)=>{
    const mate = await pool.query('select * from piezas');
    res.render('piezas/add',{mate});

});

router.post('/add',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,
        
    }; 

    await pool.query('insert into piezas set ?', [newUser]);   
    res.redirect('/piezas/add');
    
});

router.get('/partes',async(req,res)=>{
    const mate = await pool.query('select * from piezas');
    res.render('piezas/consultar',{mate});

});

router.post('/consultar',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,
    }; 

    await pool.query('insert into piezas set ?', [newUser]);   
    res.redirect('/piezas/consultar');
    
});

router.get('/delete/:id_piezas', async(req,res)=>{
    const {id_piezas} = req.params;
    const mate =await pool.query('delete from piezas where id_piezas=?',[id_piezas]);  
    res.redirect('/piezas/partes');
});

router.post('/consultar/:id_piezas',async (req,res)=>{
    const {id_piezas}= req.params;

    await pool.query(`UPDATE piezas set ? where id_piezas = ? `,[req.body,id_piezas]);
    res.redirect('//piezas/partes');
});

router.post('/modificar4/:id_piezas',async (req,res)=>{
    const {id_piezas}= req.params;

    await pool.query(`UPDATE piezas set ? where id_piezas = ? `,[req.body,id_piezas]);
    res.redirect('/piezas/partes');
});

module.exports = router;