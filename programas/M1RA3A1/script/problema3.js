"use strict";
function promedioAlumno(){
    let nombreInput = document.getElementById("nombreS");
    let apellidoInput = document.getElementById("apellidoS");
    let cursoInput = document.getElementById("nombreCurso");
    let nota1Input = document.getElementById("notA1");
    let nota2Input = document.getElementById("notA2");
    let nota3Input = document.getElementById("notA3");
    let nota4Input = document.getElementById("notA4");
    let nota5Input = document.getElementById("notA5");

    let nombre = nombreInput.value.trim();
    let apellido = apellidoInput.value.trim();

    if (nombre === "" || apellido === "") {
        alert("Por favor ingrese su nombre y apellido.");
        return;
    }
    let curso = cursoInput.value.trim();
    if (curso === "" ) {
        alert("Por favor ingrese el nombre del curso");
        return;
    }
    let nota1 = parseFloat(nota1Input.value.trim());
    let nota2 = parseFloat(nota2Input.value.trim());
    let nota3 = parseFloat(nota3Input.value.trim());
    let nota4 = parseFloat(nota4Input.value.trim());
    let nota5 = parseFloat(nota5Input.value.trim());
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
        alert("Por favor ingrese todas las notas como números válidos.");
        return;
    }
    let promedio = ((nota1 + nota2 + nota3 + nota4 + nota5)/5 );
    alert("nombre(s):" + " " + nombre + "\napellido(s): " + apellido + "\ncurso: " + curso +"\nPromedio: " + promedio);
}
