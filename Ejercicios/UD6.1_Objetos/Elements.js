export class Elements {
    #description;
    #price;
    #quantity;

    constructor(description, price, quantity) {
        this.#description = description;
        this.#price = price;
        this.#quantity = quantity;
    }

    get description() {
        return this.#description;
    }
    set description(description) {
        this.#description = description;
    }

    get price() {
        return this.#price;
    }
    set price(price) {
        this.#price = price;
    }

    get quantity() {
        return this.#quantity;
    }
    set quantity(quantity) {
        this.#quantity = quantity;
    }

    toString() {
        return "PRODUCTO: " + "\n" +
                "Descripción: " + this.#description + '\n' +
                "Precio: " + this.#price + '\n' + 
                "Cantidad: " + this.#quantity + '\n';
    }
}