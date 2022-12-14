/*
5. Un número aleatorio entre min y max

La función incorporada Math.random() crea un valor aleatorio entre
0 y 1 (no incluyendo 1). Escribe una función random(min, max) para
generar un número de punto flotante entre min y max (no incluyendo max).

Ejemplos de su funcionamiento:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

function random (min, max) {
    let numeros = "";
    
    for (i = 0; i <= 10; i++) {
        numeros += (Math.floor((Math.random() * ((max*1e10 - min*1e10))) + min*1e10) / 1e10) + ", ";
    }

    alert(numeros);
}
let numMin = parseInt(prompt("Introduzca el valor mínimo"));
let numMax = parseInt(prompt("Introduzca el valor máximo"));
random(numMin, numMax);
