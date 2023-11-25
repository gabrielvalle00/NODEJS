

const home = (req, res) => {
    let pessoas = [
        {nome: 'Valle', idade: 21},
        {nome: 'Pantalhão', idade: 25},
        {nome: 'Thiago', idade: 18},
        {nome: 'Milly', idade: 19},
        {nome: 'Izaias', idade: 80},
    ]
    res.render('home', { gostandoDeExpHbs: true, dados: pessoas });
};

module.exports = { home };