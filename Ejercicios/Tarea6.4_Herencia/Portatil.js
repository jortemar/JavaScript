import {Ordenador} from "./Ordenador.js";

class Portatil extends Ordenador {
    #autonomia;

    constructor(marca, modelo, ram, disco = 256, pulgadas = 15, autonomia = 4) {
        super(marca, modelo, ram, disco, pulgadas);
        this.#autonomia = autonomia;
    }

    get autonomia() {
        return this.#autonomia;
    }
    set autonomia(autonomia) {
        this.#autonomia = autonomia;
    }

    toString() {
        return "ORDENADOR PORTÁTIL \n" +
                super.toString() + '\n' +
                "Autonomía: " + this.#autonomia;
    }
}
/*
alert(new Portatil("IBM", "B344", 25, 55, 37, 6));
alert(new Portatil("HP", "2500"));
*/

let port1 = new Portatil("IBM", "B344", 25, 55, 37, 6);
//port1.setMarca("Pentium");
//port1.autonomia(34);
alert(port1);
//alert(port1.marca());
alert(port1.autonomia); // GETTER
port1.autonomia = 12; // SETTER
alert(port1.autonomia);
