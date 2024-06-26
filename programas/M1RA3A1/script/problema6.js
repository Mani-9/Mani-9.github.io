function multiplicacion(){
    let multiploInput = document.getElementById("multiplo");
    let valor1 = parseFloat(multiploInput.value.trim());
    if (isNaN(valor1) ) {
        alert("Por favor ingrese un numero");
        return;
    }
    let resultadoHTML = "La tabla de multiplicación es: <br>";
    
    for (let i = 1; i <= 10; i++) {
        let multiplo = valor1 * i;
        resultadoHTML += "El múltiplo con " + i + " es: " + multiplo + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultadoHTML;
}