
const Cliente = require('../models/contact.model')



const contact = (req, res) => {
    res.render('contact');
};

const saveContact = (req, res) => {
    let cliente = new Cliente(req.body);
    console.log(cliente);
    const {nome, email, senha} = req.body;
    console.log(nome, email, senha);
    res.render('contact');
}

module.exports = { contact, saveContact };