$(document).ready(function() {
    $('#agregarFila').click(function() {
        let numFilas = $('#tablaNombres tbody tr').length + 1;
        let nuevaFila = `<tr>
                            <th scope="row">${numFilas}</th>
                            <td>2024-${String(numFilas).padStart(4, '0')}</td>
                            <td>Nuevo Estudiante ${numFilas}</td>
                            <td>nuevo${numFilas}@micorreo.com.gt</td>
                        </tr>`;
        $('#tablaNombres tbody').append(nuevaFila);
    });
    $('#elminarFila').click(function() {
        if ($('#tablaNombres tbody tr').length > 0) {
            $('#tablaNombres tbody tr').last().remove();
        } else {
            alert('No hay filas para eliminar');
        }
    });
});
