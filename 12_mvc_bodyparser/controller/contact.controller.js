
const Cliente = require('../models/contact.model');
const conMysql = require('../dao/connection.database');



const contact = (req, res) => {
    res.render('contact');
};

const saveContact = (req, res) => {
    let cliente = new Cliente(req.body);
    conMysql.query(cliente.create())
    //console.log(cliente);
    //const {nome, email, senha} = req.body;
    //console.log(nome, email, senha);
    res.render('contact');
}

module.exports = { contact, saveContact };