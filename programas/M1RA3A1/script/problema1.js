function obtenerDatos() {
    var carnetInput = document.getElementById("numCarnet");
    var nombreInput = document.getElementById("txtNombre");

    var carnet = carnetInput.value.trim();
    var nombre = nombreInput.value.trim();

    if (carnet === "" || nombre === "") {
        alert("Por favor ingresa tanto el carnet como el nombre.");
        return;
    }

    document.getElementById("datoscarnet").textContent = "Su carnet es: " + carnet;
    document.getElementById("datosnombre").textContent = "Su nombre es: " + nombre;

    console.log("Carnet:", carnet);
    console.log("Nombre:", nombre);

    alert("Carnet: " + carnet + "\nNombre: " + nombre);
}
function validarCarnet(carnet) {
    // Validar el formato del carnet
    return true;
  }
  
  function validarNombre(nombre) {
    // Validar el formato del nombre
    return true;
  }

