// Modelo de Tarea
class Tarea {
    constructor(id, nombre, descripcion, fechaLimite, modalidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaLimite = fechaLimite;
        this.modalidad = modalidad;
    }
}

module.exports = Tarea;
