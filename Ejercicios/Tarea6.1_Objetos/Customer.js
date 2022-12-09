import {Data} from "./Data.js";

export class Customer extends Data {
    #nif;

    constructor(name, address, phone, nif) {
        super(name, address, phone);
        this.#nif = nif;
    }

    get nif() {
        return this.#nif;
    }
    set nif(nif) {
        this.#nif = nif;
    }

    toString() {
        return "CLIENTE: \n" +
                super.toString() + '\n' +
                "NIF: " + this.#nif;
    }
}