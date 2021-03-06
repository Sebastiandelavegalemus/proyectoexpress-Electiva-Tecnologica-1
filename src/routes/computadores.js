const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/add',async(req,res)=>{
    const docen = await pool.query('select * from computadores');
    res.render('computadores/add',{docen});

});

router.post('/add',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,

    }; 
  
    await pool.query('insert into computadores set ?', [newUser]);
    res.redirect('/computadores/add');   

});

router.get('/consult',async(req,res)=>{
    const docen = await pool.query('select * from computadores');
    res.render('computadores/consultar',{docen});

});

router.post('/consultar',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,
    }; 

    await pool.query('insert into computadores set ?', [newUser]);   
    res.redirect('/computadores/consultar');
    
});

router.get('/delete/:id_computadores', async(req,res)=>{
    const {id_computadores} = req.params;
    const docen =await pool.query('delete from computadores where id_computadores=?',[id_computadores]);  
    res.redirect('/computadores/consult');
});

router.post('/consultar/:id_computadores',async (req,res)=>{
    const {id_computadores}= req.params;

    await pool.query(`UPDATE computadores set ? where id_computadores = ? `,[req.body,id_computadores]);
    res.redirect('/computadores/consult');
});

router.post('/modificar2/:id_computadores',async (req,res)=>{
    const {id_computadores}= req.params;

    await pool.query(`UPDATE computadores set ? where id_computadores = ? `,[req.body,id_computadores]);
    res.redirect('/computadores/consult');
});

module.exports = router;