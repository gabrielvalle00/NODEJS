// import express from 'express';
const express = require('express');
// import { engine } from 'express-handlebars';
const {engine} = require('express-handlebars');

const homeController = require('./controller/homeController');
const aboutController = require('./controller/aboutController');
const contactController = require('./controller/contactController');

const app = express();
const port = 8080;

//BodyParser
const bodyParser = require('body-parser');

// Configurando o BadyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.engine('handlebars', engine({defaultLayout:('main')}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/public`));

app.get('/', homeController.home);

app.get('/about', aboutController.about);

app.get('/contact', contactController.contact);







app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}.`);
});