const  readline = require("readline-sync")

const contatoControlador = require("./controlador.js");

function menu() {
    console.log("1.Adicionar Contato");
    console.log("2.Listar Contato");
    console.log("3.Buscar Contato");
    console.log("4.Atualizar Contato");
    console.log("5.Remover Contato");
    console.log("6.Sair");
}

function escolherOpcao(opcao) {
    switch (opcao) {
        case "1":
            readline.question("Nome: ");
            readline.question("Email: ");
            readline.question("Telefone: ");
            contatoControlador(nome, email, telefone)
            break;
        case "2":
            
            console.log(contatoControlador.listaContatos(Contato))
            break;
        
    }
}