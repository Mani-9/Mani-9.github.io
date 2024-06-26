"use strict";
function obtenerHipotenusa() {
    let catetoAInput = document.getElementById("catetoA");
    let catetoBInput = document.getElementById("catetoB");

    let catetoa = parseFloat(catetoAInput.value.trim());
    let catetob = parseFloat(catetoBInput.value.trim());
    if (isNaN(catetoa) || isNaN(catetob)) {
        alert("Por favor ingrese ambos datos para encontrar la hipotenusa.");
        return;
    }
    let hipotenusa = Math.sqrt(Math.pow(catetoa, 2) + Math.pow(catetob, 2));
    document.getElementById("Hipotenusa").innerHTML = hipotenusa;
    console.log("Hipotenusa", hipotenusa);
    alert(" El valor de la Hipotenusa es:" + " " + hipotenusa);
}