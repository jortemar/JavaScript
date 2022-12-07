export class Customer extends Data {
    #nif;

    constructor(name, address, phone, nif) {
        super(name, address, phone);
        this.#nif = nif;
    }

    get aboutNif() {
        return this.#nif;
    }
    set aboutNif(cif) {
        this.#nif = cif;
    }

    toString() {
        return "CLIENTE: \n" +
                super.toString() + '\n' +
                "NIF: " + this.#nif;
    }
}