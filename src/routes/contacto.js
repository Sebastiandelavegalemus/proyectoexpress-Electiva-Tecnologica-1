const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/enviar_mensaje',async(req,res)=>{
    const admi = await pool.query('select * from contacto');
    res.render('contacto/enviar_mensaje',{admi});

});

router.post('/enviar_mensaje',async(req,res)=>{
   
    const { Nombre,Telefono,Ciudad,Correo,Mensaje,} = req.body;
    const newUser = {
        Nombre,
        Telefono,
        Ciudad,
        Correo,
        Mensaje,
    };  

    await pool.query('insert into contacto set ?', [newUser]);   
    res.redirect('/contacto/enviar_mensaje');
    
});

router.get('/mensajes',async(req,res)=>{
    const admi = await pool.query('select * from contacto');
    res.render('contacto/consultar',{admi});

});

router.post('/consultar',async(req,res)=>{
   
    const { Nombre,Telefono,Ciudad,Correo,Mensaje,} = req.body;
    const newUser = {
        Nombre,
        Telefono,
        Ciudad,
        Correo,
        Mensaje,
    }; 

    await pool.query('insert into contacto set ?', [newUser]);   
    res.redirect('/contacto/mensajes');
    
});

module.exports = router;