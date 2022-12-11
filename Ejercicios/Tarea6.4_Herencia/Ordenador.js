export class Ordenador {
    #marca;
    #modelo;
    #ram;
    #disco;
    #pulgadas;

    constructor(marca, modelo, ram = 16, disco = 512, pulgadas = 17) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ram = ram;
        this.#disco = disco;
        this.#pulgadas = pulgadas;
    }

    get marca() {
        return this.#marca;
    }
    set marca(marca) {
        this.#marca = marca;
    }

    get modelo() {
        return this.#modelo;
    }
    set modelo(modelo) {
        this.#modelo = modelo;
    }

    get ram() {
        return this.#ram;
    }
    set ram(ram) {
        this.#ram = ram
    }

    get disco() {
        return this.#disco;
    }
    set disco(disco) {
        this.#disco = disco;
    }

    get pulgadas() {
        return this.#pulgadas;
    }
    set pulgadas(pulgadas) {
        this.#pulgadas = pulgadas;
    }

    toString() {
        return "Marca: " + this.#marca + '\n' +
                "Modelo: " + this.#modelo + '\n' + 
                "RAM: " + this.#ram + '\n' +
                "Disco Duro: " + this.#disco + '\n' +
                "Pulgadas Pantalla: " + this.#pulgadas;
    }
}