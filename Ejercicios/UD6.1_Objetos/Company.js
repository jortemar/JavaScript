import {Data} from "./Data.js";

export class Company extends Data {
    #cif;

    constructor(name, address, phone, cif) {
        super(name, address, phone);
        this.#cif = cif;
    }

    get cif() {
        return this.#cif;
    }
    set cif(cif) {
        this.#cif = cif;
    }

    toString() {
        return "EMPRESA: \n" + 
                super.toString() + '\n' +
                "CIF: " + this.#cif;
    }
}