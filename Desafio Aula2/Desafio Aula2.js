
let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));

// Verifica se os valores são iguais
if (valor1 === valor2) {
    console.log("Os valores são iguais.");
    alert("Os valores são iguais.");
} else {
    // Verifica qual valor é maior
    if (valor1 > valor2) {
        console.log("valor 1 é maior que valor 2");
        alert("Valor 1 é maior que valor 2");
    } else {
        console.log("Valor 2 é maior que valor 1");
        alert("Valor 2 é maior que valor 1");
    }

    // Calcula e exibe a soma dos valores
    const sum = valor1 + valor2;
    console.log(`A soma dos valores é: ${sum}.`);
    alert(`A soma dos valores é: ${sum}.`);
}