function frecuenciaPalabra() {
    let parrafoInput = document.getElementById("parrafo");
    let palabraInput = document.getElementById("palabra");

    let parrafo = parrafoInput.value.trim();
    let palabra = palabraInput.value.trim();
    
    if (parrafo === "" || palabra === "") {
        alert("Por favor ingrese un párrafo y una palabra.");
        return;
    }
    
    parrafo = parrafo.toLowerCase();
    palabra = palabra.toLowerCase();

    let palabras = parrafo.split(/\W+/);
    let contadorPalabra = 0;

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra) {
            contadorPalabra++;
        }
    }

    document.getElementById("numerodepalabras").textContent = "La palabra '" + palabra + "' aparece " + contadorPalabra + " veces en el párrafo.";
}
