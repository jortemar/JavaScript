/*---------------------------------------------------------------
9. Pedir una fecha, que se introducirá con valores numéricos, es decir, se pedirá el día,
después el mes y después el año, e indicar si es correcta.
Para que la fecha sea correcta:
a. El día debe corresponder con el número días del mes que se haya introducido.
b. El mes debe ser un valor entre 1 y 12.
c. El año debe ser un valor mayor que 0.
d. (Cuando veamos arrays y funciones) Utiliza un vector con los nombres de los meses,
para mostrar el nombre del mes. El array tendrá que ser local al proceso donde se
muestra el mes y no podremos utilizarlo fuera de él.
e. (Cuando veamos arrays Si la fecha introducida es correcta mostraremos la fecha
con el siguiente formato:
---------------------------------------------------------------*/
let dia, mes, año;
let mesBoolean = true;
dia = parseInt(prompt("Introduzca el día"));
if (mesBoolean) { 
    mes = parseInt(prompt("Introduzca el mes"));
    if (1 < mes < 12) {
        mesBoolean = false;
    }
}
año = parseInt(prompt("Introduzca el año"));
let mes31 = [1, 3, 5, 7, 8, 10, 12];
let mes30 = [4, 6, 9, 11];
let añosBisiestos = [];
for (let i = 0; i <= 3000; i+4) {
    añosBisiestos.push = i;
    document.write(i + "<br>");
}

if (mes31.includes(mes)) {
    if (dia > 31) {
        dia = parseInt(prompt("Este mes tiene un máximo de 31 dias. Vuelva a introducir el día"));
    }
} else if (mes30.includes(mes)) {
    if (dia > 30) {
        dia = parseInt(prompt("Este mes tiene un máximo de 30 dias. Vuelva a introducir el día"));
    }
} else
    if (añosBisiestos.includes(año) {
        dia = parseInt(prompt("Este mes tiene un máximo de 29 dias. Vuelva a introducir el día"));
    } else
        dia = parseInt(prompt("Este mes tiene un máximo de 28 dias. Vuelva a introducir el día"));
