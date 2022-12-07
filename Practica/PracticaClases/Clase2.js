import {Clase1} from "./Clase1.js";

class Clase2 {
    #clase1;
    #dni;
    /*
    constructor(nombre, apellido, dni) {
        this.#clase1.nombre = nombre;
        this.#clase1.apellido = apellido;
        this.#dni = dni;
    }
    */

    constructor(dni) {
        this.#clase1 = new Clase1("José", "Ortega");
        this.#dni = dni;
    }

    get clase1() {
        return this.#clase1;
    }
    set clase1(clase1) {
        this.#clase1 = clase1;
    }

    get dni() {
        return this.#dni;
    }
    set dni(dni) {
        this.#dni = dni;
    }

    toString() {
        return this.#clase1 + "\n" +
                "DNI: " + this.#dni;
    }
}

const obj = new Clase2("77718854Z");
alert(obj);