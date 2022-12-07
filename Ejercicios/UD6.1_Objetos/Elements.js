export class Elements {
    #description;
    #price;
    #quantity;

    constructor(description, price, quantity) {
        this.#description = description;
        this.#price = price;
        this.#quantity = quantity;
    }

    get aboutDescription() {
        return this.#description;
    }
    set aboutDescription(description) {
        this.#description = description;
    }

    get aboutPrice() {
        return this.#price;
    }
    set aboutPrice(price) {
        this.#price = price;
    }

    get aboutQuantity() {
        return this.#quantity;
    }
    set aboutQuantity(quantity) {
        this.#quantity = quantity;
    }

    toString() {
        return "PRODUCTO: " + "\n" +
                "Descripción: " + this.#description + '\n' +
                "Precio: " + this.#price + '\n' + 
                "Cantidad: " + this.#quantity;
    }
}