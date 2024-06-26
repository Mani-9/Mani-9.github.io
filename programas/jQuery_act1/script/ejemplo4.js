$(document).ready(function() {
    $('#contarCaracteres').click(function() {
        var nombre = $('#floatingInput').val();
        var conteoCaracteres = nombre.length;
        alert('El nombre tiene ' + conteoCaracteres + ' caracteres.');
    });
});
$(document).ready(function() {
    $('#promedio').click(function() {
        var nota1 = parseFloat($('#numero1').val());
        var nota2 = parseFloat($('#numero2').val());
        var nota3 = parseFloat($('#numero3').val());
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert('Por favor, ingrese notas válidas.');
            return;
        }
        var promedio = (nota1 + nota2 + nota3) / 3;
        if (promedio >= 70) {
            alert('El estudiante está aprobado con un promedio de ' + promedio.toFixed(2));
        } else {
            alert('El estudiante está reprobado con un promedio de ' + promedio.toFixed(2));
        }
    });
});
