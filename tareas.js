// Modelo de Tarea
class Tarea {
    constructor(id, nombre, descripcion, fechaLimite, modalidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaLimite = this.validarFechaLimite(fechaLimite);
        this.modalidad = modalidad;
    }

    validarFechaLimite(fecha) {
        const fechaValida = new Date(fecha);
        if (isNaN(fechaValida.getTime())) {
            throw new Error(`Fecha límite inválida: ${fecha}`);
        }
        return fechaValida;
    }

    obtenerResumen() {
        return `Tarea: ${this.nombre}, Descripción: ${this.descripcion}, Fecha Límite: ${this.fechaLimite.toLocaleDateString()}, Modalidad: ${this.modalidad}`;
    }
}

module.exports = Tarea;