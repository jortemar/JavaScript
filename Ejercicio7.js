let factorial = 2;
let n = 0;

do {
    if (n < 0 || n > 150) {
        alert("Introduzca un número comprendido entre 0 y 150");
    }
    n = parseInt(prompt("Introduzca un número"));
} while (n < 0 || n > 150);

for (let i = 3; i <= n; i++) {
    factorial *= i;
}

function factorialFor(num) {
    let resultado = 2;
    for (let k = 3; k <= num; k++) {
        resultado *= k;
    }
    return resultado;
}

document.write("El factorial de " + n + " es " + factorial + " (hecho con for) <br>");
document.write("El factorial de " + n + " es " + factorialFor(n) + " (hecho con función for) <br>");

/*-----------------
Con ciclo while
------------------*/

let j = 3;
factorial = 2;
while (j <= n) {
    factorial *= j;
    j++;
}

function factorialWhile(num) {
    let h = 3;
    let resultado = 2;
    while (h <= num) {
        resultado *= h;
        h++;
    }
    return resultado;
}

document.write("El factorial de " + n + " es " + factorial + " (hecho con while) <br>");
document.write("El factorial de " + n + " es " + factorialWhile(n) + " (hecho con función while)");

//Si el resultado es muy alto nos lo expresa en notación científica.