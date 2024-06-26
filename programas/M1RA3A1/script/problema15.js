function crearTabla() {
    var numFilas = parseInt(document.getElementById('numfilas').value);
    var numColumnas = parseInt(document.getElementById('numcolumnas').value);

    var tablaHTML = '<table class="table table-bordered">';
    for (var i = 0; i < numFilas; i++) {
        tablaHTML += '<tr>';
        for (var j = 0; j < numColumnas; j++) {
            tablaHTML += '<td>' +'</td>';
        }
        tablaHTML += '</tr>';
    }
    tablaHTML += '</table>';

    document.getElementById('contenedorTabla').innerHTML = tablaHTML;
}