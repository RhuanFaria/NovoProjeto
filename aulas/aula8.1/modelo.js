const conectarDb = require ('./database')

class Contato {
        constructor(nome, email, telefone) {
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
            this.id = null;
        }
}

async function incluir(contato) {
    const { nome, email, telefone } = contato;
    const db = conectarDb();
    const collection = db.collection('contatos');
    const { insertedId } = await collection.insertOne({ nome, email, telefone });
    
    return { id: insertedId };
}

async function alterar(contato) {
    const { nome, email, telefone } = contato;
    const db = await conectarDb();
    const collection = db.collection('contatos');

    collection.updateOne({ _id: id }, { $set: { nome, email, telefone }})
}

async function deletar(contato) {
    const {id} = contato;
    const db = await conectarDb();
    const collection = db.collection('contatos');

    collection.deleteOne({ _id: id });

}

async function consultar(contato) {
    const { nome } = contato;
    const db = await conectarDb();
    const collection = db.collection("contatos");

    return collection.findOne({ nome });
}

module.exports = {
    Contato,
    incluir,
    alterar,
    deletar,
    consultar
}