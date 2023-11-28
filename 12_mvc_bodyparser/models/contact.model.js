class Cliente {
    constructor (i){
        this.id = i.id;
        this.name = i.nome;
        this.email = i.email;
        this.senha = i.senha;
    }

    create() {
        return `INSERT INTO clientes VALUE ('${this.nome}', '${this.email}',
        '${this.senha}');`
    }
    read() {
        return `SELECT * FROM clientes WHERE id = ${this.id};`
    }
    update() {
        return `UPDATE * FROM cliente SET nome = '${this.nome}', senha = '${this.senha}', WHERE id = ${this.id};`
    }
    delete() {
        return `DELETE FROM clientes WHERE id = ${this.id};`
    }
}

module.exports = Cliente;