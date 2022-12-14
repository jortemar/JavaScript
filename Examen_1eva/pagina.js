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

for (let i in daw.modulos) {
    document.write(`<table style = "border:3px solid black; border-collapse:collapse;">`);

    document.write('<tr>');
    document.write('<td style = "border:1px solid black"> Código: <td/>');
    document.write('<td style = "border:1px solid black">' + daw.modulos[i].codigo + '<td/>');
    document.write('</tr>');

    document.write('<tr>');
    document.write('<td style = "border:1px solid black"> Nombre: <td/>');
    document.write('<td style = "border:1px solid black">' + daw.modulos[i].nombre + '<td/>');
    document.write('</tr>');

    document.write('<tr>');
    document.write('<td style = "border:1px solid black"> Horas Totales <td/>');
    document.write('<td style = "border:1px solid black">' + daw.modulos[i].horasTotales + '<td/>');
    document.write('</tr>');

    document.write(`<table/>`);
}