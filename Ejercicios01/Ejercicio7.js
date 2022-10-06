/*---------------------------------------------------------------
7. Calcula la factorial de un número entero n.
Utilizando un for y también utilizando un while.
El valor que nos introduzcan no podrá ser negativo, ni mayor de 150.
e. ¿Qué sucede si introducimos un valor alto que desborde?
---------------------------------------------------------------*/

let factorial = 1;
let n = 0;

do {
    if (n < 0 || n > 150) {
        alert("Introduzca un número comprendido entre 0 y 150");
    }
    n = parseInt(prompt("Introduzca un número"));
} while (n < 0 || n > 150);

for (let i = 2; i <= n; i++) {
    factorial *= i;
}

document.write("El factorial de " + n + " es " + factorial + " (hecho con for) <br>");

/*-----------------
Con ciclo while
------------------*/

let j = 2;
factorial = 1;
while (j <= n) {
    factorial *= j;
    j++;
}

document.write("El factorial de " + n + " es " + factorial + " (hecho con while) <br>");

/* Con función recursiva

funcion factorial(x) {
    if (x = 0) {
        return 1;
    } else 
        return x * factorial(x-1);
}*/

//Si el resultado es muy alto puede llegar a saturar el sistema.