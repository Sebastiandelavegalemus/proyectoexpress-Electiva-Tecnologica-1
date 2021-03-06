const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/add',(req,res)=>{
    res.render('mantenimiento/add');
});

router.get('/consultar',async(req,res)=>{
    const mate = await pool.query('select * from mantenimiento');
    res.render('mantenimiento/consultar',{mate});

});

router.post('/add',async(req,res)=>{
   
    const { nombre,producto,serial,fecha_recibido,fecha_entrega,estado,} = req.body;
    const newUser = { 
        nombre,
        producto,
        serial,
        fecha_recibido,
        fecha_entrega,
        estado,}; 

    await pool.query('insert into mantenimiento set ?', [newUser]);   
    res.redirect('/mantenimiento/consultar');
    
});

router.get('/delete/:id_usuario', async(req,res)=>{
    const {id_usuario} = req.params;
    const mate =await pool.query('delete from mantenimiento where id_usuario=?',[id_usuario]);  
    res.redirect('/mantenimiento/consultar');
});



router.post('/modificar11/:id_usuario',async (req,res)=>{
    const {id_usuario}= req.params;

    await pool.query(`UPDATE mantenimiento set ? where id_usuario = ? `,[req.body,id_usuario]);
    res.redirect('/mantenimiento/consultar');
});



module.exports = router;