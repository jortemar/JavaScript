/************************************************************************
12.Realizar un programa que almacene 10 valores numéricos (positivos
o negativos). Si todos los valores son numéricos, mostraremos:

a. El menor de todos los valores.
b. El mayor de todos los valores.
*************************************************************************/
let numeros = [];

for (i = 0; i < 10; i++) {
    numeros.push(parseFloat(prompt("Introduzca un número, positivo o negativo")));
}

if (numeros.every(a => !isNaN(a))) {
    ordenados = numeros.sort((a, b) => a - b);
    alert("El menor de los valores introducidos es " + ordenados[0]);
    alert("El mayor de los valores introducidos es " + ordenados[ordenados.length - 1]);
} else
    alert("Uno o más de los valores introducidos no son números");    