/**
 * DAO - Date Access Object (Objeto de acesso a dados).
 * 
 * Instalar módulo Mysql: npm install mysql2
 */
const mysql2 = require('mysql2');

const conMysql = mysql2.createConnection({
    host: 'localhost',
    database: 'aula-mvc',
    user: 'root',
    password: '1234'
});

module.exports = conMysql


