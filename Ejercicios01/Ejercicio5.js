/*---------------------------------------------------------------
5. Programa que pide 2 números y halla su potencia.
a. La potencia se debe realizar mediante productos y debemos asegurarnos de que los
valores con los que trabajamos son numéricos.
b. No admitiremos valores negativos.
---------------------------------------------------------------*/

let cad1, cad2, num1, num2;

do {
    if (num1 < 0 || num2 < 0) {
        alert("Los dos números deben ser positivos");
    }
    
    cad1 = prompt("Introduzca un número");
    cad2 = prompt("Introduzca otro número");

    num1 = parseInt(cad1);
    num2 = parseInt(cad2);
} while (num1 < 0 || num2 < 0);

let pot1 = num1 * num1;
let pot2 = num2 * num2;

document.write("La potencia de " + num1 + " es " + pot1 + "<br>");
document.write("La potencia de " + num2 + " es " + pot2);



