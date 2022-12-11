/* La clase Data es padre de Company y Customer. Utilizaremos estas dos,
además de la clase Elements, para inicializar como objetos algunas de
las propiedades de la clase Invoice */

import {Company} from "./Company.js";
import {Customer} from "./Customer.js";
import {Elements} from "./Elements.js";

class Invoice {
    #company;
    #customer;
    #elements = [];
    #totalAmount;
    #iva;
    #wayPay;

    constructor(iva, wayPay) {
        let precio, cantidad;
        const PRODUCTOS = ["Pimientos", "Tomate", "Chorizo", "Panceta", "Berenjenas", "Sandía", "Cebollas",
                             "Coliflor", "Pepinos", "Mortadela", "Morcillas", "Espárragos", "Lechugas"];

        this.#company = new Company("Alimentación San Ramón", "Cura Navarro, 34, Polígono La Estacada", 968857452, "B52145896");
        this.#customer = new Customer("José Ortega", "Calvario, 114", 968574782, "77788585F");

        // Se generan 3 productos aleatorios en descripcion, precio y cantidad 
        for (let i = 0; i <= 2; i++) {
            precio = Math.floor((Math.random() * 4 + 1) * 100) / 100;
            cantidad = Math.ceil((Math.random() * 2) * 10);
            this.#elements.push(new Elements(PRODUCTOS[Math.floor(Math.random() * 13)], precio, cantidad));
        }

        this.#iva = iva;
        this.#wayPay = wayPay;
        /* Llamamos al método para que nos proporcione la
        propiedad que nos falta por asignar ' this.#totalAmount ' */
        this.#totalAmount = this.calcularPrecio();
    }

    get company() {
        return this.#company;
    }
    set company(company) {
        this.#company = company;
    }

    get customer() {
        return this.#customer;
    }
    set customer(customer) {
        this.#customer = customer;
    }

    get elements() {
        // este método sirve para quitar las comas al mostrar un array
        return this.#elements.join("");
    }
    set elements(elements) {
        this.#elements = elements;
    }

    get totalAmount() {
        return this.#totalAmount;
    }
    set totalAmount(totalAmount) {
        this.#totalAmount = totalAmount;
    }

    get iva() {
        return this.#iva;
    }
    set iva(iva) {
        this.#iva = iva;
    }

    get wayPay() {
        return this.#wayPay;
    }
    set wayPay(wayPay) {
        this.#wayPay = wayPay;
    }

    toString() {
        return this.#company + '\n' + '\n' +
                this.#customer + '\n' + '\n' +
                "PRODUCTOS (precio sin IVA): " +
                this.#elements.join("") + '\n' + '\n' +
                "DETALLES DE PAGO: \n" +
                "Importe Total: " + this.#totalAmount + '\n' +
                "IVA: " + this.#iva + '\n' + 
                "Forma de Pago: " + this.#wayPay;
    }

    calcularPrecio() {
        let iva;
        let precioFinal = 0;
        switch (this.#iva.toLowerCase()) {
            case 'general':
                iva = 21;
                break;
            case 'reducido':
                iva = 10;
                break;
            case 'superreducido':
                iva = 4;
                break;
            default:
                alert('El tipo de IVA introducido no es correcto');
        }

        // se le añade el IVA al precio bruto y se van sumando los precios netos de los distintos productos
        for (let i = 0; i <= 2; i++) {  
            precioFinal += this.#elements[i].quantity * (this.#elements[i].price + (this.#elements[i].price * (iva/100)));
        }
    
        return precioFinal.toFixed(2);
    }

    mostrarPrecio() {
        alert("El importe total de la factura es de " + this.#totalAmount + " euros");
    }
}

const factura1 = new Invoice("Superreducido", "Transferencia");
alert(factura1);
factura1.mostrarPrecio();