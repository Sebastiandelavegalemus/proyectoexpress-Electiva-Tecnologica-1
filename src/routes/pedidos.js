const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/add',(req,res)=>{
    res.render('pedidos/add');
});

router.get('/consultar',async(req,res)=>{
    const pedi = await pool.query('select * from pedidos');
    res.render('pedidos/consultar',{pedi});

});

router.post('/add',async(req,res)=>{
   
    const { usuario,codigo_pedido,cantidad,valor_total,estado,} = req.body;
    const newUser = { 
        usuario,
        codigo_pedido,
        cantidad,
        valor_total,
        estado,}; 

    await pool.query('insert into pedidos set ?', [newUser]);   
    res.redirect('/pedidos/add');
    
});

router.get('/delete/:id_pedidos', async(req,res)=>{
    const {id_pedidos} = req.params;
    const pedi =await pool.query('delete from pedidos where id_pedidos=?',[id_pedidos]);  
    res.redirect('/pedidos/consultar');
});

router.post('/modificar8/:id_pedidos',async (req,res)=>{
    const {id_pedidos}= req.params;

    await pool.query(`UPDATE pedidos set ? where id_pedidos = ? `,[req.body,id_pedidos]);
    res.redirect('/pedidos/consultar');
});


module.exports = router;