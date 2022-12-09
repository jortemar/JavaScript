/*---------------------------------------------------------------
6. Realizar un programa que pida un número y compruebe si es un valor numérico, positivo y
menor que 10. Si el valor es válido:
a. Mostrar la tabla de multiplicar el número introducido.
b. Mostrar todas las tablas de multiplicar desde el 1 hasta el valor introducido.
---------------------------------------------------------------*/

let cad;
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

for (let i = 1; i <= num; i++){
    document.write("<b>Tabla del " + i + "</b><br>");
    for (let j = 0; j <= 10; j++) {
        document.write(i + " x " + j + " es " + i * j + "<br>");
    }
    document.write("<br>");
}