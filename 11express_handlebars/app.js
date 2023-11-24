// import express from 'express';
const express = require('express');
// import { engine } from 'express-handlebars';
const {engine} = require('express-handlebars');

const app = express();
const port = 8080;

app.engine('handlebars', engine({defaultLayout:('main')}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    let pessoas = [
        {nome: 'Valle', idade: 21},
        {nome: 'Pantalhão', idade: 25},
        {nome: 'Thiago', idade: 18},
        {nome: 'Milly', idade: 19},
        {nome: 'Izaias', idade: 80},
    ]
    res.render('home', { gostandoDeExpHbs: true, dados: pessoas });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}.`);
});