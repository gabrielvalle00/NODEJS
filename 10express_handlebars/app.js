// import express from 'express';
const express = require('express');
// import { engine } from 'express-handlebars';
const {engine} = require('express-handlebars');

const app = express();
const port = 8080;

app.engine('handlebars', engine({defaultLayout:('main')}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/publico`));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}.`);
});