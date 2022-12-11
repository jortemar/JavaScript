class Coordenadas {
    #ejeX;
    #ejeY;

    constructor(ejeX, ejeY) {
        if (isNaN(ejeX)) {
            this.#ejeX = 0;
        } else
            this.#ejeX = ejeX;

        if (isNaN(ejeY)) {
            this.#ejeY = 0;
        } else
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
        return "(" + this.#ejeX + ", " + this.#ejeY + ")";
    }

    cambiar(ejeX, ejeY) {
        this.#ejeX = ejeX;
        this.#ejeY = ejeY;
    }

    copia() {
        let copiaObjeto = new Coordenadas(this.#ejeX, this.#ejeY);
        return copiaObjeto;
    }

    iguales(ejeX, ejeY) {
        if (ejeX == this.#ejeX && ejeY == this.#ejeY) {
            alert("Los dos puntos son iguales");
        } else {
            alert("Los puntos son distintos");
        }
    }

    suma(ejeX, ejeY) {
        let ejeX2 = this.#ejeX + ejeX;
        let ejeY2 = this.#ejeY + ejeY;
        let puntoSuma = new Coordenadas(ejeX2, ejeY2);
        return puntoSuma;
    }

    obtenerDistancia(ejeX, ejeY) {
        let cateto1 = ejeX - this.#ejeX;
        let cateto2 = ejeY - this.#ejeY;
        return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2)).toFixed(2);
    }
}