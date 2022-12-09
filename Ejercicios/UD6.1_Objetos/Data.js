export class Data {
    #name;
    #address;
    #phone;

    constructor(name, address, phone) {
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }

    get address() {
        return this.#address;
    }
    set address(address) {
        this.#address = address;
    }

    get phone() {
        return this.#phone;
    }
    set phone(phone) {
        this.#phone = phone;
    }

    toString() {
        return "Nombre: " + this.#name + "\n" +
                "Dirección: " + this.#address + "\n" +
                "Teléfono: " + this.#phone;
    }
}