/************************************************************
1. Indica como se pueden realizar las siguientes acciones:

a. Crea un nuevo array con las tres primeras posiciones del array.
b. Si un array tiene más de 5 elementos, mostrar las posiciones pares del array.
c. Mostrar el producto de los valores pares.
d. Si todos los valores de un array son pares y positivos mostrar el producto
    de todos los valores del array.
e. Si tenemos un array que contiene algún valor par y menor que 10. Añade
    al array todos los valores, que haya desde el valor par hasta 10.
f. Transforma el array para que contenga los mismos valores, pero en orden
    inverso al que estaban la ser creado.
g. Si el array contiene el valor 10, crear un duplicado del array.

2. Declara un array de tipo numérico y realiza cada uno de los ejercicios
    anteriores comprobando su resultado.
*************************************************************/

let numeros = [];
let entradaDatos = prompt("Introduzca un número o escriba 'fin' para terminar");

while (entradaDatos.toLowerCase() != "fin") {
    numeros.push(parseFloat(entradaDatos));
} 

//apartado A
alert("Las tres primeras posiciones del array son " + numeros.slice(0,3));

//apartado B
if (numeros.lenght > 5) {

}
    for (i in numeros) {
        if (i%2 == 0) {
            
        }
    }

//apartado C
