const fs = require ('fs');

const content = 'Criando um arquivo com File System';

// fs.writeFile ('C:/node/arquivo.txt', content, (err) => {
//     if (err) throw err;
//     console.log('Arquivo criado com sucesso');

// });

// fs.readFile ('C:/node/arquivo.txt', 'utf8', (err, data) =>{
//     if (err) throw err,
//     console.log(data);
// })

/**
 * Renomear arquivo
 */

const name = 'C:/node/arquivo.txt';
const nName = 'C:/node/node.txt';

// fs.rename (name, nName, (err) =>{
//     if(err) throw err;
//     console.log('Arquivo renomeado!');
// })

fs.unlink (nName, (err) => {
    if (err) throw err;
    console.log('Arquivo excluido!');
})