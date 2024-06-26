function maxComunDivisor(){
    let numero1Input = document.getElementById("numero1");
    let numero2Input = document.getElementById("numero2")

    let val1 = Math.abs(parseFloat(numero1Input.value));
    let val2 = Math.abs(parseFloat(numero2Input.value));

    if (isNaN(val1) || isNaN(val2) || val1 === 0 || val2 === 0) {
        handleError("Entrada inválida. Ingrese dos números válidos.");
        return;
    }
    while (val2 !== 0) {
        let temp = val2;
        val2 = val1 % val2;
        val1 = temp;
    }

    alert("El máximo común divisor es: " + Math.abs(val1));
}
