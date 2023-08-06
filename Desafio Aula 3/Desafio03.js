
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

//for
for (let i = 1; i <= 5; i++) {

    let resultado = i * 2;

    console.log('Resultado da iteração ' + i + ': ' + resultado);
}

//while
let contador = 1;
const limite = 5;

while (contador <= limite) {

    if (contador % 2 !== 0) {

        console.log('O contador ' + contador + ' é ímpar.');
    } else {
        console.log('O contador ' + contador + ' é par.');
    }

    contador++;
}