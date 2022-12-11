/* No incluimos 'prototype' porque en esta ocasión no estamos
creando métodos en una clase, sino propiedades en el objeto Math */

//el número más pequeño que es múltiplo de los dos
Math.mcm = function(a, b) {
    return a * b / Math.mcd(a, b);
}

//el número más grande por el que los dos son divisibles
// El else se va repitiendo hasta que el resto entre a y b sea 0 y se rompa el bucle
Math.mcd = function(a, b) {
    if (a % b == 0) {
        return b;
    } else {
        return Math.mcd(b, a % b);
    }
}

class Fraccion {
    #numerador;
    #denominador;

    constructor(numerador, denominador) {
        this.#numerador = numerador;
        this.#denominador = denominador;
    }

    get numerador() {
        return this.#numerador;
    }
    set numerador(numerador) {
        this.#numerador = numerador;
    }

    get denominador() {
        return this.#denominador;
    }
    set denominador(denominador) {
        this.#denominador = denominador;
    }

    toString() {
        return `${this.#numerador} / ${this.#denominador}`;
    }

    cambiarFraccion(a, b) {
        this.#numerador = a;
        this.#denominador = b;
    }

    simplificar() {
        let maxComDiv = Math.mcd(this.#numerador, this.#denominador);
        this.#numerador = this.#numerador / maxComDiv;
        this.#denominador = this.#denominador / maxComDiv;
    }

    static suma(obj1, obj2) {
        /* Sacamos el mcm de los denominadores. Este número se dividirá por el
        denominador de cada fracción, multiplicándolo después por el numerador
        para obtener el nuevo numerador. Después sumamos los numeradores
        y simplificamos si se puede */

        let minComMult = Math.mcm(obj1.denominador, obj2.denominador);
        let numerador1 = minComMult / obj1.denominador * obj1.numerador;
        let numerador2 = minComMult / obj2.denominador * obj2.numerador;
        let sumaNumeradores = numerador1 + numerador2;

        let obj3 = new Fraccion(sumaNumeradores, minComMult);
        obj3.simplificar();
        return obj3;
    }

    static resta(obj1, obj2) {
        let minComMult = Math.mcm(obj1.denominador, obj2.denominador);
        let numerador1 = minComMult / obj1.denominador * obj1.numerador;
        let numerador2 = minComMult / obj2.denominador * obj2.numerador;
        let restaNumeradores = numerador1 - numerador2;

        let obj3 = new Fraccion(restaNumeradores, minComMult);
        obj3.simplificar();
        return obj3;
    }

    static multiplicacion(obj1, obj2) {
        let objMult = new Fraccion(obj1.numerador * obj2.numerador, obj1.denominador * obj2.denominador);
        objMult.simplificar();
        return objMult;
    }

    static division(obj1, obj2) {
        let objDiv = new Fraccion(obj1.numerador * obj2.denominador, obj1.denominador * obj2.numerador);
        objDiv.simplificar();
        return objDiv;
    }
}

/*
const Frac1 = new Fraccion(12, 6);
alert(Frac1);
alert(Frac1.numerador);
Frac1.numerador = 8;
alert(Frac1);
Frac1.cambiarFraccion(20, 15);
alert(Frac1);
Frac1.simplificar();
alert(Frac1);

const Frac2 = new Fraccion(4, 3);
const Frac3 = new Fraccion(2, 4);

alert("Multiplicacion " + Fraccion.multiplicacion(Frac2, Frac3));
alert("Division " + Fraccion.division(Frac2, Frac3));
alert("Suma " + Fraccion.suma(Frac2, Frac3));
alert("Resta " + Fraccion.resta(Frac2, Frac3)); 
*/