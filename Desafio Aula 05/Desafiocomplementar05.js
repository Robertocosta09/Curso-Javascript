// Definição do array de objetos "Produtos"
const produtos = [
    { nome: 'Produto A', preco: 50 },
    { nome: 'Produto B', preco: 30 },
    { nome: 'Produto C', preco: 70 },
    { nome: 'Produto D', preco: 20 },
    { nome: 'Produto E', preco: 60 }
];

// Função para ordenar a coleção de produtos por menor preço
function ordenarPorMenorPreco(array) {
    return array.slice().sort((a, b) => a.preco - b.preco);
}

// Chamada da função de ordenação
const produtosOrdenados = ordenarPorMenorPreco(produtos);

// Exibição do resultado da ordenação
const outputElement = document.getElementById('output');
outputElement.innerHTML = '<h2>Produtos Ordenados por Menor Preço:</h2>';
outputElement.innerHTML += '<ul>';
produtosOrdenados.forEach(produto => {
    outputElement.innerHTML += `<li>${produto.nome} - Preço: R$ ${produto.preco.toFixed(2)}</li>`;
});
outputElement.innerHTML += '</ul>';
