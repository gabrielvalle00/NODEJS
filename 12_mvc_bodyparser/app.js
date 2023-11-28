// import express from 'express';
const express = require('express');
// import { engine } from 'express-handlebars';
const { engine } = require('express-handlebars');

const homeController = require('./controller/home.controller');
const aboutController = require('./controller/about.controller');
const contactController = require('./controller/contact.controller');

const app = express();
const port = 8080;

//BodyParser
const bodyParser = require('body-parser');

// Configurando o BadyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/public`));

app.get('/', homeController.home);

app.get('/about', aboutController.about);

app.get('/contact', contactController.contact);

app.post('/saveContact', contactController.saveContact);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});