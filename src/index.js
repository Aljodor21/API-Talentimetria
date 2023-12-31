const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');

//Inicializaciones
const app=express();


//Configuraciones
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine','.hbs');

//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Variables globales
app.use((req,res,next)=>{
    next();
});

//Routes
app.use(require('./routes'));
app.use(('/user'),require('./routes/user'));
app.use(('/admin'),require('./routes/admin'));

//Public
app.use(express.static(path.join(__dirname,'public')));

//Inicializacion del servidor
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});