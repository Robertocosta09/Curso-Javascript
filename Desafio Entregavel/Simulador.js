function calcularValorFinal() {
    const valorOriginal = parseFloat(document.getElementById("valorOriginal").value);
    const desconto = parseFloat(document.getElementById("desconto").value);
    const icms = 0.21; // 21% de ICMS

    if (isNaN(valorOriginal) || valorOriginal <= 0) {
        alert("Digite um valor válido para o produto.");
        return;
    }

    if (isNaN(desconto) || desconto < 0) {
        alert("Digite um valor de desconto válido.");
        return;
    }

    const valorComICMS = valorOriginal * (1 + icms);
    const valorComDesconto = valorComICMS - desconto;
    const valorFinal = valorComDesconto.toFixed(2);

    document.getElementById("resultado").innerHTML = `Valor final do produto: R$ ${valorFinal}`;
}