const factura = {
    empresa: {
        nombre:"Chorizos ricos",
        direccion:"Calvario,3",
        telefono:96854125,
        CIF:"B5454656"
    },

    cliente: {
        nombre:"Jose",
        direccion:"Cura Navarro, 7",
        telefono:968585743,
        NIF:"7778856P"
    },

    elementos: [ {
        descripcion: "chorizo",
        precio: 3,
        cantidad: 25
    }, {
        descripcion: "butifarra",
        precio: 5,
        cantidad: 10
    }, {
        descripcion: "tocino",
        precio: 8,
        cantidad: 10
    } ],

    importeTotal: 0,
    iva: 10,
    formaPago: "Transferencia",

    calcularImporte: function() {
        for (i in this.elementos)
            this.importeTotal += this.elementos[i].cantidad * (this.elementos[i].precio + (this.elementos[i].precio * (this.iva / 100)));
    },

    mostrarImporte: function() {
        return `El importe total de la factura es de ${this.importeTotal} euros`;
    }
};

factura.calcularImporte();
alert(factura.mostrarImporte());
console.log(JSON.stringify(factura,null,2));