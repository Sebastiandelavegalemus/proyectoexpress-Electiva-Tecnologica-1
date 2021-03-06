const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/add',(req,res)=>{
    res.render('factura/add');
});

router.get('/consultar',async(req,res)=>{
    const fact = await pool.query('select * from factura');
    res.render('factura/consultar',{fact});

});

router.post('/add',async(req,res)=>{
   
    const { producto,codigo,fecha,descuento,iva,total,} = req.body;
    const newUser = { 
        producto,
        codigo,
        fecha,
        descuento,
        iva,
        total,}; 

    await pool.query('insert into factura set ?', [newUser]);   
    res.redirect('/factura/add');
    
});

router.get('/delete/:id_factura', async(req,res)=>{
    const {id_factura} = req.params;
    const fact =await pool.query('delete from factura where id_factura=?',[id_factura]);  
    res.redirect('/factura/consultar');
});

router.post('/modificar9/:id_factura',async (req,res)=>{
    const {id_factura}= req.params;

    await pool.query(`UPDATE factura set ? where id_factura = ? `,[req.body,id_factura]);
    res.redirect('/factura/consultar');
});


module.exports = router;