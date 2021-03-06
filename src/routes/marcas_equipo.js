const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/add',async(req,res)=>{
    const peri = await pool.query('select * from marcas_equipo');
    res.render('marcas_equipo/add',{peri});

});

router.post('/add',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,
        
    }; 

    await pool.query('insert into marcas_equipo set ?', [newUser]);   
    res.redirect('/marcas_equipo/add');
    
});

router.get('/equipos',async(req,res)=>{
    const peri = await pool.query('select * from marcas_equipo');
    res.render('marcas_equipo/consultar',{peri});

});

router.post('/consultar',async(req,res)=>{
   
    const { Nombre_producto,Descripcion,Precio,} = req.body;
    const newUser = {
        Nombre_producto,
        Descripcion,
        Precio,
    }; 

    await pool.query('insert into marcas_equipo set ?', [newUser]);   
    res.redirect('/marcas_equipo/consultar');
    
});

router.get('/delete/:id_marcas_equipo', async(req,res)=>{
    const {id_marcas_equipo} = req.params;
    const peri =await pool.query('delete from marcas_equipo where id_marcas_equipo=?',[id_marcas_equipo]);  
    res.redirect('/marcas_equipo/equipos');
});

router.post('/consultar/:id_marcas_equipo',async (req,res)=>{
    const {id_marcas_equipo}= req.params;

    await pool.query(`UPDATE marcas_equipo set ? where id_marcas_equipo = ? `,[req.body,id_marcas_equipo]);
    res.redirect('/marcas_equipo/equipos');
});

router.post('/modificar5/:id_marcas_equipo',async (req,res)=>{
    const {id_marcas_equipo}= req.params;

    await pool.query(`UPDATE marcas_equipo set ? where id_marcas_equipo = ? `,[req.body,id_marcas_equipo]);
    res.redirect('/marcas_equipo/equipos');
});

module.exports = router;