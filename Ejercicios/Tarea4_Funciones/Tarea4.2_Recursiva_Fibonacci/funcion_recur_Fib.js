/*
La función de Fibonacci es un clásico de la programación recursiva. Se trata de
una función relacionada con una sucesión de elementos, donde los dos primeros
son el cero y el uno, y  el resto son la suma de sus dos anteriores:

Es decir, la sucesión es: 0,1,1,2,3,5,8,13,21,34,55,89...

A la función le pasaremos el número del que queremos saber el valor Fibonacci
y nos devolverá dicho valor. Asi si pasamos el número 10, devolvería 55.
*/

let sucesion = [0,1];                   
/*Introducimos el 0 y el 1 en las dos primeras posiciones del array. A partir
de ahí la función ya puede recoger las dos primeras posiciones y empezar a sumar*/

function fibonacci(num) {
    //empezamos por la posición 2 (tercer número de la secuencia), porque los dos primeros ya los tenemos
    for (i = 2; i <= num; i++) { 
        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    return sucesion[num];
}

let posicion = parseInt(prompt(`Introduzca la posción del valor deseado de la secuencia de Fibonacci`));
alert(`La posición número ${posicion} de la secuencia de Fibonacci es ${fibonacci(posicion-1)}`);