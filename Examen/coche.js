class Coche {
    matricula;
    marca;
    modelo;
    constructor(matricula, marca, modelo) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Piloto {
    nombre;
    apellido1;
    apellido2;
    coches;
    constructor(nombre, apellido1, apellido2, coches) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.coches = coches;
    }
}

let cochesJulian = [
    new Coche("2222BYN", "Seat", "Arona"),
    new Coche("2567JXL", "Peugeot", "4008"),
    new Coche("3456LMM", "Lexus", "UX")
]

let julian = new Piloto("Julián", "Martín-Serrano", "Daponte", cochesJulian);

let json = JSON.stringify(julian, null, 2);
alert(json);

function ordenarMarca() {
    julian.coches.sort((a,b) => { 

        if (a.marca < b.marca) {
            return -1;
        }else if (a.marca < b.marca) {
            return 1;
        }else
            return 0;
    })

    console.clear();
    let json = JSON.stringify(julian.coches, null, 2)
    console.log(json);
}

ordenarMarca();