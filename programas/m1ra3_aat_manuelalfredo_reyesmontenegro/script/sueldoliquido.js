function totalGanado(){
    let sueldo = parseFloat(document.getElementById("inputsalario").value);
    let bono = parseFloat(document.getElementById("inputbonificacion").value);
    let comisiones = parseFloat(document.getElementById("inputComisiones").value);
    
    if (isNaN(sueldo) || isNaN(bono) || isNaN(comisiones)) {
        alert("Ingrese todos los ingresos correctamente.");
        return;
    }
    let totalganancias = sueldo+bono+comisiones;
    let iggs = ((sueldo*4.83)%100);
    document.getElementById("totalganado").value = totalganancias.toFixed(2);
    document.getElementById("inputigss").value = iggs.toFixed(2);
}
function totalEgresos(){
    let ahorro = parseFloat(document.getElementById("inputahorro").value);
    let iggs = parseFloat(document.getElementById("inputigss").value);
    let prestamos = parseFloat(document.getElementById("inputprestamos").value);

    if (isNaN(ahorro) || isNaN(iggs) || isNaN(prestamos)) {
        alert("Ingrese todos los ingresos correctamente.");
        return;
    }
    let descuentos = ahorro+iggs+prestamos;
    document.getElementById("totaldescuento").value = descuentos.toFixed(2);
}
function sueldoLiquido(){
    let totalganado = parseFloat(document.getElementById("totalganado").value);
    let totaldescuento = parseFloat(document.getElementById("totaldescuento").value);

    let totalliquido = totalganado - totaldescuento ;
    document.getElementById("sueldoloquido").value = totalliquido.toFixed(2);
    if((totalliquido) <= 0){
        alert("Posee una deuda");
        return;
    }
}