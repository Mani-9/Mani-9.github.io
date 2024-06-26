function pares() {
    let numero1Input = document.getElementById("numeropar1")
    let numero2Input = document.getElementById("numeropar2")

    let par1 = parseFloat(numero1Input.value.trim());
    let par2 = parseFloat(numero2Input.value.trim());
    if (isNaN(par1) || isNaN(par2) || par1 % 2 !== 0 || par2 % 2 !== 0) {
        alert("Por favor ingrese 2 numeros pares.");
        return;
    }
    
    let numerosPares = [];

    for (let i = par1; i <= par2; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }

    document.getElementById('resultado').innerHTML = "Los números pares en el rango son: " + numerosPares.join(", ");

}