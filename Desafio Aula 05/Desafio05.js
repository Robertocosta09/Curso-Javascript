let entrada = prompt("Digite seu produto, T-shirt, Bermuda, Boné")
let produtoEscolhido = entrada.toUpperCase();
console.log(produtoEscolhido)

produto();

function produto() {
    if (produtoEscolhido == "TENIS") {
        alert("Aguarde Novidades de T-shirts Chegando")
    } else if (produtoEscolhido == "T-SHIRT") {
        alert("Aguarde Novidades de BERMUDA Chegando")
    } else if (produtoEscolhido == "BONÉ") {
        alert("Aguarde Novidades de Boné Chegando")
    }


    else {
        alert("Produto em falta")
    }
}

class produtoCustomizado {
    constructor(cor, tamanho, modelo) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.modelo = modelo;
    }

    descreverProduto() {
        console.log(`Este é um produto customizado no modelo ${this.modelo}.`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Tamanho: ${this.tamanho}`);
    }
}

function acaoDoUsuario() {
    let cor = prompt("Digite a cor do produto:");
    let tamanho = prompt("Digite o tamanho do produto:");
    let modelo = prompt("Masculino ou Feminino");

    const produtoPersonalizado = new produtoCustomizado(cor, tamanho, modelo);

    produtoPersonalizado.descreverProduto();
}

acaoDoUsuario();