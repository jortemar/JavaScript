/*
6. Un entero aleatorio entre min y max

Crea una función randomInteger(min, max) que genere un número entero aleatorio
entre min y max incluyendo ambos, min y max, como valores posibles.
Todo número del intervalo min..max debe aparecer con la mismaprobabilidad.

Ejemplos de funcionamiento:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/

function randomInteger(min, max) {
    let numeros = "";
    
    for (i = 0; i <= 10; i++) {
        numeros += Math.floor(Math.random() * (max - min + 1) + min) + ", ";
    }

    alert(numeros);
}

let numMin = parseInt(prompt("Introduzca el valor mínimo"));
let numMax = parseInt(prompt("Introduzca el valor máximo"));
randomInteger(numMin, numMax);