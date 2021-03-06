const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routes/registro');
const { Router } = require('express');
// inicio
const app =express();

//configuracion
app.set('port',process.env.PORT || 4000);

app.set('views',path.join(__dirname,'views'));

app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');


//app.set('json spaces',2);


//MIDDELWARE - peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//variables globales
app.use((req,res,next) =>{
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/accesorios',require('./routes/accesorios'));
// app.use('/accesorios',require('./routes/consultar'));
app.use('/computadores',require('./routes/computadores'));
// app.use('/computadores',require('./routes/consult'));
app.use('/portatiles',require('./routes/portatiles'));
// app.use('/portatiles',require('./routes/laptops'));
app.use('/piezas',require('./routes/piezas'));
// app.use('/piezas',require('./routes/partes'));  
app.use('/marcas_equipo',require('./routes/marcas_equipo'));
// app.use('/marcas_equipo',require('./routes/equipos'));
app.use('/contacto',require('./routes/contacto'));
// app.use('/contacto',require('./routes/mensajes'));
app.use('/administra',require('./routes/administrativos'));
app.use('/api/productos',require('./routes/productos'));
//app.use('/api/pedidos',require('./routes/pedidos'));
//app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/registro',require('./routes/registro'));
app.use('/compra',require('./routes/compra'));
app.use('/pedidos',require('./routes/pedidos'));
app.use('/factura',require('./routes/factura'));
app.use('/mantenimiento',require('./routes/mantenimiento'));





// public - navegador puede acceder
app.use(express.static(path.join(__dirname,'public')));

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});