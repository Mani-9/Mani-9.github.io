function verificarNumero() {
    let numeroInput = document.getElementById("numeroConsulta");

    let numero = parseFloat(numeroInput.value.trim());
    if (isNaN(numero)) {
        alert("Por favor ingrese un numero.");
        return;
    }
    if (numero > 0) {
        document.getElementById("valor").innerHTML = "el valor es positivo";
    }
    if (numero < 0) {
        document.getElementById("valor").innerHTML = "el valor es negativo";
    }
    if (numero == 0) {
        document.getElementById("valor").innerHTML = "el valor es neutro";
    }

}