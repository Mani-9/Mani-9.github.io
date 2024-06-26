function mostrarNumeros() {
    let numeroInput = document.getElementById("numero");

    let numero = parseInt(numeroInput.value.trim());
    if (isNaN(numero) || numero < 1) {
        alert("Por favor, ingrese un número válido mayor o igual a 1.");
        return;
    }
    let resultado = "";
    for (let i=1; i<=numero; i++) {
        resultado += i + " ";
    }
    document.getElementById("impnumeros").textContent = resultado;
}