function separacionPalabras() {
    let parrafoInput = document.getElementById("parrafo"); 

    let parrafo = parrafoInput.value.trim();
    if (parrafo === "") {
        alert("Por favor ingrese un párrafo.");
        return;
    }
    let palabras = parrafo.split(" ");
    let grupos = [];

    palabras.forEach(palabra => {
        for (let i = 0; i < palabra.length; i += 2) {
            grupos.push(palabra.substring(i, i + 2));
        }
    });
    let parrafos = grupos.join(", ");
    document.getElementById("conteoparrafo").textContent = parrafos;
}
