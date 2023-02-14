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

/*
const company1 = new Company("Jose", "Calle Calvario", 958457852, "B4546875");
alert(company1);
alert(company1.cif);  // GETTER
company1.cif = "T4525632";  // SETTER
alert(company1);
*/