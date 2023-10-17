// inportar módulo express
const express = require('express');

//criar variavel para ter acessoas funcionalidades do express
const app = express();

// /**
//  * express.static serve para identificar um local no diretório do projeto
// */

app.use(express.static(`${__dirname}/publico`)) // dirname =  identifica o diretorio raiz

app.get('/', function (req, res) {
    //     res.sendFile('/publico/html/index.html')//sendFile = carregar uma pagina
    res.sendFile(`${__dirname}/publico/html/index.html`)
})

app.use(function (req ,res) {
    res.status(404).sendFile(`${__dirname}/publico/html/404.html`)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})