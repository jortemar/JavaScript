import {Company} from "./Company.js";
import {Customer} from "./Customer.js";
import {Elements} from "./Elements.js";

class Invoice {
    #company = new Company();
    #customer = new Customer(); 
    #elements = new Elements();
    #totalAmount;
    #iva;
    #wayPay;

    constructor(totalAmount, iva, wayPay) {
        this.#company = new Company("Endesa", "Cura Navarro, 34, 7º C", 968857452, "B52145896");
        this.#customer = new Customer("José Ortega", "Calvario, 114", 968574782, "77788585F");
        this.#elements = new Elements("Pimiento rojo de Badajoz", 2.70, 30);
        this.#totalAmount = totalAmount;
        this.#iva = iva;
        this.#wayPay = wayPay;
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

    get aboutWayPay() {
        return this.#wayPay;
    }
    set aboutWayPay(wayPay) {
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
}

const factura1 = new Invoice(500, "reducido", "efectivo");
alert(factura1);