const express = require('express');
const router = express.Router();
const productos = require('../ejemplo.json');
const pool =require('../database');

console.log(productos);

// ruta para consultar todo los productos
router.get('/', async(req,res)=>{
    const produTodos = await pool.query('select * from productos ');
    //res.json(produTodos);
    const num1 = 'hola';
    console.log(num1);
    //res.render('productos/list',{produTodos});
    res.json(productos);
    //res.send('soy productos');
});

//rauta para consultar solo por id un producto
router.get('/:id', async(req,res)=>{
    const {id} = req.params;
    const produId = await pool.query('select * from productos where id_producto= ?',[id]);
    res.json(produId);
    //res.send(produId);
});

router.post('/',async(req,res)=>{
    const {nombre_producto,valor_producto,codigo_producto} = req.body;
    const newProducto ={nombre_producto,valor_producto,codigo_producto};
    await pool.query('insert into productos set ?', [newProducto]);
    console.log(req.body);
    res.send('tamos listones');
});

router.get('/editar-producto/:id_producto',async(req,res)=>{
    const { id_producto } = req.params;
    // req.params poder recibir los párametros --get
    //re.body poder recibir los datos de un formulario --post
    const produId = await pool.query('select * from productos where id_productos= ?',[id_producto]);
    res.rende('productos/modificar',{produId});

});

router.post('/editar-producto/:id_producto',async(req,res)=>{
    const { id_producto } = req.params;
    const {nombre_producto,valor_producto,codigo_producto} = req.body;
    const updateProducto ={nombre_producto,valor_producto,codigo_producto};
    
    // req.params poder recibir los párametros --get
    //re.body poder recibir los datos de un formulario --post
    const produId = await pool.query('update productos set ? where id_producto =? ',[ updateProducto , id_producto]);
    
    res.redirect('/agregar');
 
});

router.get('/eliminar/:id_producto', async(req,res)=>{
    const { id_producto } = req.params;
    await pool.query('delete from producto where id_producto= ?', [id_producto]);
    console.log(req.body);
    console.log("ok");
    //res.send('tamos listones');
});

module.exports = router;
