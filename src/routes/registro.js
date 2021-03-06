const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/newregistro',(req,res)=>{
    res.render('registro/registro');
});
router.get('/usuario',async(req,res)=>{
    const admi = await pool.query('select * from sesion');
    res.render('registro/consultar',{admi});

});

router.post('/newregistro',async(req,res)=>{
   
    const { nombre,correo,contraseña} = req.body;
    const newUser = {
       nombre,  
       correo,
       contraseña,
    };  

    await pool.query('insert into sesion set ?', [newUser]);   
    res.redirect('usuario');
    
});

router.get('/delete/:id_correo', async(req,res)=>{
    const {id_correo} = req.params;
    const estu =await pool.query('delete from sesion where id_correo=?',[id_correo]);  
    res.redirect('/registro/usuario');
});

router.post('/consultar/:id_correo',async (req,res)=>{
    const {id_correo}= req.params;

    await pool.query(`UPDATE sesion set ? where id_correo = ? `,[req.body,id_correo]);
    res.redirect('usuario');
});

router.post('/modificar0/:id_correo',async (req,res)=>{
    const {id_correo}= req.params;

    await pool.query(`UPDATE sesion set ? where id_correo = ? `,[req.body,id_correo]);
    res.redirect('usuario/registro');
});
 
module.exports = router;