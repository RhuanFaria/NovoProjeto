const   Contato = require("./modelo.js");

const contatos = [];

function adicionarContato(nome, email, telefone) {
    const novoContato = new Contato ["Rhuan", "negolossaurorex@gmail.com", "61983851472"];
    contatos.push(novoContato);
}
function listaContatos() {
    return contatos;
}

function buscaContato(nome) {
    return contatos.find((buscou) => buscou.nome === nome);
}

function atualizarContato(nome, email, telefone) {
    const contato = buscaContato(nome);
    if (contato) {
        contato.email = email;
        contato.telefone = telefone;
    }
}

function removerContato(nome){
    const contato = contato.findIndex((contato) => contato.nome === nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1);
    }
}

function main() {
    while (true) {
        menu();
        const opcao = readline.question('entre com uma opcao');
        escolherOpcao(opcao)
    }   
}

main()
module.exportes = {adicionarContato, listaContatos, buscaContato, atualizarContato, removerContato}