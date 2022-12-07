export class Company extends Data {
    #cif;

    constructor(name, address, phone, cif) {
        super(name, address, phone);
        this.#cif = cif;
    }

    get aboutCif() {
        return this.#cif;
    }
    set aboutCif(cif) {
        this.#cif = cif;
    }

    toString() {
        return "EMPRESA \n" + 
                super.toString() + '\n' +
                "CIF: " + this.#cif;
    }
}