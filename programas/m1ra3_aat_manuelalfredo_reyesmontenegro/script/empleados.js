function eliminarPrimeraFila() {
    let tabla = document.getElementById("tablaNombres");
    
    if (tabla.rows.length > 1) {
        tabla.deleteRow(1);
        
    }
    else {
        alert('No hay filas para eliminar');
    }
}
function eliminarUltimafila() {
    let tabla = document.getElementById("tablaNombres");
    
    if (tabla.rows.length > 1) {
        tabla.deleteRow(tabla.rows.length - 1);
        
    }
    else {
        alert('No hay filas para eliminar');
    }
}
function agregarNuevoEmpleado() {
    let nombre = document.getElementById("inputNombre").value.trim();
    let fechaIngreso = document.getElementById("FechaIngreso").value.trim();
    let puesto = document.getElementById("inputPuesto").value.trim();
    let salario = parseFloat(document.getElementById("inputSalario").value.trim());

    if (nombre === "" || fechaIngreso === "" || puesto === "" || isNaN(salario)) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    let tabla = document.getElementById("tablaNombres");

    let nuevaFila = tabla.insertRow();

    let celdaNombre = nuevaFila.insertCell();
    let celdaFecha = nuevaFila.insertCell();
    let celdaPuesto = nuevaFila.insertCell();
    let celdaSalario = nuevaFila.insertCell();

    celdaNombre.textContent = nombre;
    celdaFecha.textContent = fechaIngreso;
    celdaPuesto.textContent = puesto;
    celdaSalario.textContent = salario.toFixed(2); 

    document.getElementById("inputNombre").value = "";
    document.getElementById("FechaIngreso").value = "";
    document.getElementById("inputPuesto").value = "";
    document.getElementById("inputSalario").value = "";
}