/*let cad;
let num;
let booleano = false;

do {
    if (booleano) {
        alert("Debe introducir un número mayor que 0 y menor que 10");
    } 
    cad = prompt("Introduzca un número");
    num = parseInt(cad);

    if (typeof(num) != "number" || num <= 0 || num >= 10) {
        booleano = true;
    } else 
        booleano = false;

} while (booleano);



for (let i = 1; i <= valor; i++){
    document.write("<b>Tabla del " + i + "</b><br>");
    for (let j = 0; j <= 10; j++) {
        document.write(i + " x " + j + " es " + i * j + "<br>");
    }
    document.write("<br>");
}*/

let valor = pedirNumero();
calcularTablas(valor);

function pedirNumero() {

    let num;
    let booleano = false;
    do {
        if (booleano) {
            alert("Debe introducir un número mayor que 0 y menor que 10");
        } 
        num = parseInt(prompt("Introduzca un número"));
    
        if (typeof(num) != "number" || num <= 0 || num >= 10) {
            booleano = true;
        } else 
            booleano = false;
    
    } while (booleano);

    return num;
}

function calcularTablas(num) {

    for (let i = 1; i <= num; i++){
        document.write("<b>Tabla del " + i + "</b><br>");
        for (let j = 0; j <= 10; j++) {
            document.write(i + " x " + j + " es " + i * j + "<br>");
        }
        document.write("<br>");
    }
}