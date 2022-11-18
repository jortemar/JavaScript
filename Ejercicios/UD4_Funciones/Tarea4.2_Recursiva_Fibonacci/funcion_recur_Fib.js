/*
La función de Fibonacci es un clásico de la programación recursiva. Se trata de
una función relacionada con una sucesión de elementos, donde los dos primeros
son el cero y el uno, y  el resto son la suma de sus dos anteriores:

Es decir, la sucesión es: 0,1,1,2,3,5,8,13,21,34,55,89...

A la función le pasaremos el número del que queremos saber el valor Fibonacci
y nos devolverá dicho valor. Asi si pasamos el número 10, devolvería 55.
*/

let sucesion = [0,1]; //Introducimos el 0 en la primera posición del array

function fibonacci(num) {
    for (i = 2; i <= num; i++) {
        sucesion[i] = sucesion[i - 1] + sucesion[i - 2];

        /*
        También se puede solucionar el problema introduciendo de inicio un único valor en el array
        (sucesion = [0]), siempre y cuando utilicemos una variabe extra para almacenar el resultado
        (el programa la necesitará para calcular el segundo valor del array), y que inicializaremos con el valor 1.
        Igualmente habrá que rebajar el inicio del for a i=1
        */

        /*
        sucesion = [0];  Habría que declarar estas dos variables fuera del ámbito de la función
        resultado = 1;

        sucesion[i] = resultado;
        resultado = sucesion[i] + sucesion[i-1];
        */
    }

    return sucesion[num];
}

let posicion = parseInt(prompt(`Introduzca el orden del valor deseado de la secuencia de Fibonacci`));
alert(`El valor número ${posicion} de la secuencia de Fibonacci es ${fibonacci(posicion)}`);

   




