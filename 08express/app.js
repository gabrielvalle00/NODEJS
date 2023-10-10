//Importar do Express
const express = require('express');

//Criar uma variavel para ter acesso as funcionalidades do express
const app = express();

app.get('/', function(req, res){
    res.write('Utilizando o Express com nodemon!')
    res.end();
});

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
});
