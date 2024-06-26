function ordenNumeros() {
    let valor1Input = document.getElementById("valor1");
    let valor2Input = document.getElementById("valor2");
    let valor3Input = document.getElementById("valor3");

    let valor1 = parseFloat(valor1Input.value.trim());
    let valor2 = parseFloat(valor2Input.value.trim());
    let valor3 = parseFloat(valor3Input.value.trim());
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert("Por favor ingrese tres números válidos.");
        return;
    }
    let mayor;
    let menor;
    let intermedio;
    if (valor1 >= valor2 && valor1 >= valor3) {
        mayor = valor1;
        if (valor2 >= valor3) {
            intermedio = valor2;
            menor = valor3;
        } else {
            intermedio = valor3;
            menor = valor2;
        }
    } else if (valor2 >= valor1 && valor2 >= valor3) {
        mayor = valor2;
        if (valor1 >= valor3) {
            intermedio = valor1;
            menor = valor3;
        } else {
            intermedio = valor3;
            menor = valor1;
        }
    } else {
        mayor = valor3;
        if (valor1 >= valor2) {
            intermedio = valor1;
            menor = valor2;
        } else {
            intermedio = valor2;
            menor = valor1;
        }
    }
    document.getElementById("valor").innerHTML = "El numero mas grande es: " + mayor + "<br>" +
        "El numero intermedio es: " + intermedio + "<br>" +
        "El numero menor es: " + menor;


}function ordenNumeros() {
    let valor1Input = document.getElementById("valor1");
    let valor2Input = document.getElementById("valor2");
    let valor3Input = document.getElementById("valor3");

    let valor1 = parseFloat(valor1Input.value.trim());
    let valor2 = parseFloat(valor2Input.value.trim());
    let valor3 = parseFloat(valor3Input.value.trim());
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert("Por favor ingrese tres números válidos.");
        return;
    }
    let mayor;
    let menor;
    let intermedio;
    if (valor1 >= valor2 && valor1 >= valor3) {
        mayor = valor1;
        if (valor2 >= valor3) {
            intermedio = valor2;
            menor = valor3;
        } else {
            intermedio = valor3;
            menor = valor2;
        }
    } else if (valor2 >= valor1 && valor2 >= valor3) {
        mayor = valor2;
        if (valor1 >= valor3) {
            intermedio = valor1;
            menor = valor3;
        } else {
            intermedio = valor3;
            menor = valor1;
        }
    } else {
        mayor = valor3;
        if (valor1 >= valor2) {
            intermedio = valor1;
            menor = valor2;
        } else {
            intermedio = valor2;
            menor = valor1;
        }
    }
    document.getElementById("valor").innerHTML = "El numero mas grande es: " + mayor + "<br>" +
        "El numero intermedio es: " + intermedio + "<br>" +
        "El numero menor es: " + menor;


}