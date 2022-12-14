class Modulo {
    codigo;
    nombre;
    horasTotales;
    horasSemanales;
    curso;
    ects;

    constructor (codigo, nombre, horasTotales, horasSemanales, curso, ects) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.horasTotales = horasTotales;
        this.horasSemanales = horasSemanales;
        this.curso = curso;
        this.ects = ects;
    }

    get codigo() {
        return this.codigo;
    }
    set codigo (codigo){
        this.codigo = codigo;
    }

    get nombre() {
        return this.nombre;
    }
    set nombre(nombre) {
        this.nombre = nombre;
    }

    get horasTotales() {
        return this.horasTotales;
    }
    set horasTotales(horasTotales) {
        this.horasTotales = horasTotales;
    }

    get horasSemanales() {
        return this.horasSemanales;
    }
    set horasSemanales(horasSemanales) {
        this.horasSemanales = horasSemanales;
    }

    get curso(){
        return this.curso;
    }
    set curso(curso) {
        this.curso = curso;
    }

    get ects() {
        return this.ects;
    }
    set ects(ects) {
        this.ects = ects;
    }    

    toString() {
        return "MODULO: \n" + 
                "Código: " + this.codigo + '\n' + 
                "Nombre: " + this.nombre + '\n' +
                "Horas Totales: " + this.horasTotales + '\n' +
                "Horas Semanales: " + this.horasSemanales + '\n' +
                "Curso: " + this.curso + '\n' +
                "Ects: " + this.ects + '\n\n';

    }
}

class Ciclo {
    familia;
    nombre;
    modulos = [];

    constructor() {
        this.familia = "Informática";
        this.nombre = "Desarrollo de Aplicaciones Web";
        this.modulos = [
            new Modulo("0843", "Sistemas Informáticos", 225, 7, "primero", 10),
            new Modulo("0484", "Bases de Datos", 165, 5, "primero", 12),
            new Modulo("0485", "Programación", 230, 7, "primero", 14),
            new Modulo("0373", "Lenguaje de marcas y SGI", 125, 6, "segundo", 14),
            new Modulo("0487", "Entorno de desarrollo", 90, 3,"primero", 6),
            new Modulo("0612", "Desarrollo Web en Entorno Cliente", 125, 6, "segundo", 14),
            new Modulo("0613", "Desarrollo Web en entorno Servidor", 165, 8, "segundo", 12),
            new Modulo("0614", "Despliegue de aplicaciones web", 85, 4, "segundo", 5),
            new Modulo("0615", "Diseño de interfaces web", 120, 6, "segundo", 9),
            new Modulo("0616", "Proyecto", 30, null, null, 5),
            new Modulo("0617", "Formación y orientación laboral", 90, 3, "primero", 5),
            new Modulo("0619", "Formación en centros de trabajo", 400, null, null, 22)
        ];
    }

    get familia() {
        return this.familia;
    }
    set familia(familia) {
        this.familia = familia;
    }

    get nombre() {
        return this.nombre;
    }
    set nombre(nombre) {
        this.nombre = nombre;
    }

    get modulos() {
        return this.modulos;
    }
    set modulos(modulos) {
        this.modulos = modulos;
    }

    toString() {
        return "CICLO: \n" +
                "Familia: " + this.familia + '\n' +
                "Nombre: " + this.nombre + '\n\n' +
                this.modulos.join("") + '\n';
    }
}

const daw = new Ciclo();

let num;

// if (introducirContraseña()) {
    do {  
        do {
            num = parseInt(prompt("Elija una opción con un número del 0 al 10:\n\n" +
                                    "   0. Salir\n" +
                                    "   1. Mostrar objeto con todas sus propiedades\n" +
                                    "   2. Mostrar nombre de todos los módulos (solo nombre) (bucle for)\n" +
                                    "   3. Mostrar todas las propiedades y valores del modulo con más horas semanales (JSON)\n" +
                                    "   4. Mostrar todas las propiedades y valores del módulo con más horas totales (JSON)\n" +
                                    "   5. Muestra todas las propiedades y valores de todos los módulos ordenados por nombre (método sort de Array, JSON)\n" +
                                    "   6. Muestra todas las propiedades y valores de todos los módulos ordenados por código (método sort de Array, JSON)\n" +
                                    "   7. Muestra todas las propiedades y valores de todos los módulos de primer curso (método filter, JSON)\n" +
                                    "   8. Muestra todas las propiedades y valores de todos los módulos de segundo curso (método filter, JSON)\n" + 
                                    "   9. Muestra las horas semanales totales del primer curso (filter + reduce)\n" +
                                    "   10. Muestra las horas semanales totales del segundo curso (filter + reduce)\n"));
                        
            switch(num) {
                case 0:
                    alert("Gracias por usar este programa");
                    break;
                case 1:
                    apartadoA();
                    break;
                case 2:
                    apartadoB();
                    break;
                case 3:
                    apartadoC();
                    break;
                case 4:
                    apartadoD();
                    break;
                case 5:
                    apartadoE();
                    break;
                case 6:
                    apartadoF();
                    break;
                case 7:
                    apartadoG();
                    break;
                case 8:
                    apartadoH();
                    break;
                case 9:
                    apartadoI();
                    break;
                case 10:
                    apartadoJ();
                    break;
                default:
                    alert("El número introducido no está comprendido entre 1 y 11");
            }
        } while (num < 0 || num > 11);       
    } while (num != 0);
// }
    

function introducirContraseña() {
    let contador = 0;

    do {
        if (prompt("Introduzca su contraseña") === "Castillo Puche") {
            return true;
        } else
            contador++;
    } while (contador != 3);

    alert("Ha agotado los tres intentos");
    return false;
}

function apartadoA() {
    console.log(JSON.stringify(daw, null, 2));
}


function apartadoB() {

    for (let i in daw.modulos) {
        console.log(daw.modulos[i].nombre);
    }
}


function apartadoC() {
    
    daw.modulos.sort((a,b) => { 

        if (a.horasSemanales > b.horasSemanales) {
            return -1;
        }else if (a.horasSemanales < b.horasSemanales) {
            return 1;
        }else
            return 0;
    })

    console.log(JSON.stringify(daw.modulos[0], null, 2));
}

function apartadoD() {

    daw.modulos.sort((a,b) => { 

        if (a.horasTotales > b.horasTotales) {
            return -1;
        }else if (a.horasTotales < b.horasTotales) {
            return 1;
        }else
            return 0;
    })

    console.log(JSON.stringify(daw.modulos[0], null, 2));
}

function apartadoE() {
    daw.modulos.sort((a,b) => { 

        if (a.nombre < b.nombre) {
            return -1;
        }else if (a.nombre > b.nombre) {
            return 1;
        }else
            return 0;
    })

    console.log(JSON.stringify(daw.modulos, null, 2));
}

function apartadoF() {
    daw.modulos.sort((a,b) => { 

        if (a.codigo < b.codigo) {
            return -1;
        }else if (a.codigo > b.codigo) {
            return 1;
        }else
            return 0;
    })

    console.log(JSON.stringify(daw.modulos, null, 2));
}

function apartadoG() {
    let filtroPrimero = daw.modulos.filter(a => a.curso == "primero");

    console.log(JSON.stringify(filtroPrimero, null, 2));
}

function apartadoH() {
    let filtroSegundo = daw.modulos.filter(a => a.curso == "segundo");

    console.log(JSON.stringify(filtroSegundo, null, 2));
}

function apartadoI() {
    let horas = [];
    let filtroPrimero2 = daw.modulos.filter(a => a.curso == "primero");
    for (let i in filtroPrimero2) {
        horas.push(filtroPrimero2[i].horasSemanales);
    }

    console.log(horas.reduce((a,b) => a + b));
}

function apartadoJ() {
    let horas = [];
    let filtroPrimero2 = daw.modulos.filter(a => a.curso == "segundo");
    for (let i in filtroPrimero2) {
        horas.push(filtroPrimero2[i].horasSemanales);
    }

    console.log(horas.reduce((a,b) => a + b));
}

