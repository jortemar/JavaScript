class Invoice extends Company {
    #company = new company();
    #customer = new customer();
    #elements = new elements();
    #totalAmmount;
    #iva;
    #wayPay;

    constructor(totalAmmount, iva, wayPay) {
        super();
        this.#totalAmmount = totalAmmount;
        this.#iva = iva;
        this.#wayPay = wayPay;
    }
}