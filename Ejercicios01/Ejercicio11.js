/*******************************************************************
 11.Realizar un programa que almacene las notas de 10 alumnos. Si todas las notas
 son correctas, es decir, son valores numéricos y están entre 1 y 10, mostraremos
 la siguiente información:

 a. La mejor nota.
 b. La peor nota.
 c. La media de los aprobados.
 d. La media de los suspensos.
*********************************************************************/
let numeros = [];

for (i = 0; i < 10; i++) {
    numeros.push(parseFloat(prompt("Introduzca la nota, del 1 al 10, del alumno " + (i+1))));
}

if (numeros.every(a => a >= 0 && a <= 10)) {
    ordenado = numeros.sort((a, b) => b - a);
    alert("La mejor nota es un " + ordenado[0]);
    alert("La peor nota es " + ordenado[ordenado.length - 1]);
    alert("La media de aprobados es " + calcMediaAprobados(numeros));
    alert("La media de suspensos es " + calcMediaSuspensos(numeros));
} else
    alert("Una o más notas no se han introducido correctamente");

function calcMediaAprobados(arrayEntrada) {
    return calcMedia(arrayEntrada.filter(a => a >= 5));
}

function calcMediaSuspensos(arrayEntrada) {
    return calcMedia(arrayEntrada.filter(a => a < 5));
}

function calcMedia(arrayFiltrado) {
    let longitud = arrayFiltrado.length;
    let resultado = 0;

    for (i in arrayFiltrado) {
        resultado += arrayFiltrado[i];
    }

    return redondear(resultado / longitud);
}

/*el método .toFixed redondea a tantas décimas como le indiquemos en el parámetro y convierte el valor a cadena.
Volvemos a convertirlo en número antes de devolverlo*/
function redondear(num) {
    return parseFloat(num.toFixed(2)); 
}