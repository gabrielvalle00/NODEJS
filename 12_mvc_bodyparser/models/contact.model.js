class Cliente {
    constructor (body){
        this.id = null;
        this.nome = body.nome;
        this.email = body.email;
        this.senha = body.senha;
    }

    create() {
        return `INSERT INTO contatos VALUE (default,'${this.nome}', '${this.email}',
        '${this.senha}');`
    }
    read() {
        return `SELECT * FROM contatos WHERE id = ${this.id};`
    }
    update() {
        return `UPDATE * FROM contatos SET nome = '${this.nome}', senha = '${this.senha}', WHERE id = ${this.id};`
    }
    delete() {
        return `DELETE FROM contatos WHERE id = ${this.id};`
    }
}

module.exports = Cliente;
