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

/*
const customer1 = new Customer("Jose", "Calle Calvario", 958457852, "77744458P");
alert(customer1);
alert(customer1.nif);  // GETTER
customer1.nif = "44265896R";  // SETTER
alert(customer);
*/