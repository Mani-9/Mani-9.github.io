class Indemnizacion {
    public sueldoBase: number = 0;
    public fechaContratacion: Date = new Date();
    public añosTrabajados: number = 0;
    public mesesTrabajados: number = 0;
    public bono14: number = 0;
    public aguinaldoProporcional: number = 0;
    public salarioPendiente: number = 0;
    public deudasCobrosPendientes: number = 0;
    public totalIndemnizacion: number = 0;

    public asignarSueldoBase(valor: number): void {
        this.sueldoBase = valor;
    }

    public asignarFechaContratacion(valor: Date): void {
        this.fechaContratacion = valor;
    }

    public asignarAñosTrabajados(): void {
        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();

        this.mesesTrabajados = (añoActual - this.fechaContratacion.getFullYear()) * 12 +
            (fechaActual.getMonth() - this.fechaContratacion.getMonth());

        this.añosTrabajados = Math.floor(this.mesesTrabajados / 12);
    }

    public calcularBono14(): string {
        this.bono14 = (this.sueldoBase / 12) * this.mesesTrabajados;
        return `El bono 14 es: Q${this.bono14.toFixed(2)}`;
    }

    public calcularAguinaldoProporcional(): string {
        this.aguinaldoProporcional = (this.sueldoBase / 12) * this.mesesTrabajados;
        return `El aguinaldo proporcional es: Q${this.aguinaldoProporcional.toFixed(2)}`;
    }

    public calcularSalarioPendiente(valor: number): void {
        this.salarioPendiente = valor;
    }

    public calcularDeudasCobrosPendientes(valor: number): void {
        this.deudasCobrosPendientes = valor;
    }

    public calcularTotalIndemnizacion(): string {
        this.totalIndemnizacion = (this.sueldoBase * this.añosTrabajados) +
                                  this.bono14 + 
                                  this.aguinaldoProporcional + 
                                  this.salarioPendiente - 
                                  this.deudasCobrosPendientes;
        return `El total de la indemnización es: Q${this.totalIndemnizacion.toFixed(2)}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const indemnizacion = new Indemnizacion();

    const ingresoSueldoBase = document.getElementById('inputsueldobase') as HTMLInputElement;
    const ingresoFechaContratacion = document.getElementById('inputFechaContratacion') as HTMLInputElement;
    const ingresoSalarioPendiente = document.getElementById('inputSalariopendiente') as HTMLInputElement;
    const ingresoDeudasCobrosPendientes = document.getElementById('inputComisiones') as HTMLInputElement;
    const imputañosTrabajados = document.getElementById('im') as HTMLInputElement;
    const resultadoBono14 = document.getElementById('inputBono14') as HTMLInputElement;
    const resultadoAguinaldoProporcional = document.getElementById('inputAguinaldo') as HTMLInputElement;
    const resultadoTotalIndemnizacion = document.getElementById('total') as HTMLTextAreaElement;

    function obtenerValoresDeIndemnizacion(): boolean {
        if (!ingresoSueldoBase.value || !ingresoFechaContratacion.value || !ingresoSalarioPendiente.value || !ingresoDeudasCobrosPendientes.value) {
            alert("Por favor, llene todos los campos");
            return false; 
        }

        indemnizacion.asignarSueldoBase(parseFloat(ingresoSueldoBase.value));
        indemnizacion.asignarFechaContratacion(new Date(ingresoFechaContratacion.value));
        indemnizacion.asignarAñosTrabajados();
        indemnizacion.calcularBono14();
        indemnizacion.calcularAguinaldoProporcional();
        indemnizacion.calcularSalarioPendiente(parseFloat(ingresoSalarioPendiente.value));
        indemnizacion.calcularDeudasCobrosPendientes(parseFloat(ingresoDeudasCobrosPendientes.value));
        indemnizacion.calcularTotalIndemnizacion();
        
        return true; 
    }

    document.getElementById('calcular')?.addEventListener('click', () => {
        if (obtenerValoresDeIndemnizacion()) {
            resultadoBono14.value = indemnizacion.bono14.toFixed(2);
            resultadoAguinaldoProporcional.value = indemnizacion.aguinaldoProporcional.toFixed(2);
            resultadoTotalIndemnizacion.value = indemnizacion.totalIndemnizacion.toFixed(2);
           (document.getElementById('inputCantidadAnos') as HTMLInputElement).value = indemnizacion.añosTrabajados.toString();

        }
    });
});
