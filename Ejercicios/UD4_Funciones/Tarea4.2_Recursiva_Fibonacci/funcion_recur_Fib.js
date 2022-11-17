/*
La función de Fibonacci es un clásico de la programación recursiva. Se trata de
una función relacionada con una sucesión de elementos, donde los dos primeros
son el cero y el uno, y  el resto son la suma de sus dos anteriores:

Es decir, la sucesión es: 0,1,1,2,3,5,8,13,21,34,55,89...

A la función le pasaremos el número del que queremos saber el valor Fibonacci
y nos devolverá dicho valor. Asi si pasamos el número 10, devolvería 55.
*/


function fibonacci(i, num) {
    
    if (i < num) {
        alert("antes subir índice: " + resultado);
        sucesion[i] = resultado;
        resultado = sucesion[i] + sucesion[i-1];
        alert("después subir índice: " + resultado);
        return fibonacci(i + 1);
    } else {
        return sucesion[num];
    }

    /*
    for (i = 1; i <= num; i++) {
        sucesion[i] = resultado;
        resultado = sucesion[i] + sucesion[i-1];  
    }    
    alert(sucesion);
    */
}

let sucesion = [0]; //Introducimos el 0 en la primera posición del array
let resultado = 1;
let num = parseInt(prompt("Introduzca el orden del valor deseado de la secuencia de Fibonacci"));

alert(fibonacci(1, num));