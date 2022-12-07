export class Clase1 {
    #nombre;
    #apellido;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get apellido() {
        return this.#apellido;
    }
    set apellido(apellido) {
        this.#apellido = apellido;
    }

    toString() {
        return "Nombre: " + this.#nombre + "\n" + 
                "Apellido: " + this.#apellido;
    }
}