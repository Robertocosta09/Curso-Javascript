
let texto = '';

for (; ;) {

    const entrada = prompt('Digite uma palavra (ou "ESC" para sair):');

    if (entrada.toUpperCase() === 'ESC') {
        break;
    }

    texto += entrada + ' ';

    console.log('Texto atual:', texto);
}
console.log('Fim do programa.');


let numero = parseInt(prompt('Digite um número:'));

if (isNaN(numero)) {
    console.log('Você precisa digitar um número válido.');
} else {

    for (let i = 0; i < numero; i++) {
        console.log('Olá');
    }
}


