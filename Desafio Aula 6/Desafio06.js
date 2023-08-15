const produtos = [
    { nome: "Camiseta", preco: 20 },
    { nome: "Calça", preco: 40 },
    { nome: "Sapato", preco: 60 },
    { nome: "Óculos de Sol", preco: 25 },
    { nome: "Bolsa", preco: 30 }
];

// Exemplo de como acessar os produtos no array
let listaProdutos = "Lista de produtos:\n";
produtos.forEach((produto, index) => {
    listaProdutos += `${index + 1}. ${produto.nome} - R$${produto.preco}\n`;
});

alert(listaProdutos);