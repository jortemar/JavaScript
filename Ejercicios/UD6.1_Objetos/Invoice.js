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
        let productos = ["pimiento", "tomate", "chorizo"];
        this.#company = new Company("Endesa", "Cura Navarro, 34, 7º C", 968857452, "B52145896");
        this.#customer = new Customer("José Ortega", "Calvario, 114", 968574782, "77788585F");
        for (let i = 0; i <= 2; i++) {
            precio = Math.floor((Math.random() * 4 + 1) * 100) / 100;
            cantidad = Math.round((Math.random() * 2) * 10);
            this.#elements.push(new Elements(productos[i], precio, cantidad));
        }

        this.#iva = iva;
        this.#wayPay = wayPay;
        this.#totalAmount = calcularPrecio();
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
        return this.#elements;
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
                this.#elements + '\n' + '\n' +
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
        //precioFinal = this.#elements.quantity * (this.#elements.price + (this.#elements.price * (iva/100)));
        
        for (let j = 0; j <= 2; j++) {  
            precioFinal += this.#elements[j].quantity * (this.#elements[j].price + (this.#elements[j].price * (iva/100)));
        }
        
        
        return precioFinal.toFixed(2); 
    }

    mostrarPrecio() {
        alert("El importe neto de la factura es de " + this.#totalAmount + " euros");
    }
}

const factura1 = new Invoice("superreducido", "efectivo");
alert(factura1);
factura1.mostrarPrecio();
alert(factura1.elements);
