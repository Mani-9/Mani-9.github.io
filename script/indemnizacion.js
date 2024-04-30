function totalIndemnizacion(){
    let sueldo = parseFloat(document.getElementById("inputsueldobase").value);
    let años = parseFloat(document.getElementById("inputcantidadaños").value);
    let salariop = parseFloat(document.getElementById("inputsalariop").value);
    let pendiente = parseFloat(document.getElementById("inputcomisiones").value);

    if (isNaN(sueldo) || isNaN(años)|| isNaN(salariop)|| isNaN(pendiente)) {
        alert("Ingrese todos los ingresos correctamente.");
        return;
    }
    meses = años*12;
    bono14 = ((sueldo/12)*meses);
    aguinaldo =(((sueldo/12)*meses));
    sueldoaños = sueldo*años;

    let salpendiente = 2*sueldo;
    let totalindemnizacion = sueldoaños+bono14+aguinaldo+salpendiente-pendiente;


    document.getElementById("inputbono14").value = bono14.toFixed(2);
    document.getElementById("inputaguinaldo").value = aguinaldo.toFixed(2);
    document.getElementById("total").value = totalindemnizacion.toFixed(2);
    
}