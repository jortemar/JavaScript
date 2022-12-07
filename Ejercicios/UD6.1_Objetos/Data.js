class Data {
    #name;
    #address;
    #phone;

    constructor(name, address, phone) {
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
    }

    get aboutName() {
        return this.#name;
    }
    set aboutName(name) {
        this.#name = name;
    }

    get aboutAddress() {
        return this.#address;
    }
    set aboutAddress(address) {
        this.#address = address;
    }

    get aboutPhone() {
        return this.#phone;
    }
    set aboutPhone(phone) {
        this.#phone = phone;
    }

    toString() {
        return "Nombre: " + this.#name + "\n" +
                "Dirección: " + this.#address + "\n" +
                "Teléfono: " + this.#phone;
    }
}