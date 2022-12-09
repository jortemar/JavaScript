class Coordenadas {
    #ejeX;
    #ejeY;

    constructor(ejeX, ejeY) {
        this.#ejeX = ejeX;
        this.#ejeY = ejeY;
    }

    get ejeX() {
        return this.#ejeX;
    }
    set ejeX(ejeX) {
        this.#ejeX = ejeX;
    }

    get ejeY() {
        return this.#ejeY;
    }
    set ejeY(ejeY) {
        this.#ejeY = ejeY;
    }

    toString() {
        return "Eje X: " + this.#ejeX + '\n' +
                "Eje Y: " + this.#ejeY;
    }

}