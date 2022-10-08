let provincias = ["Granada","Cádiz","Sevilla","Almería","Córdoba","Málaga","Huelva","Jaén"];
let salida = prompt("¿Cómo quiere que se muestre este ejercicio?\n" +
                    "1. Por pantalla\n" + 
                    "2. Por consola");

let mensajeSalida = "El array tiene un tamaño de " + provincias.length + "<br>";
mensajeSalida += "Array original: " + provincias + "<br> Array ordenado: " + provincias.sort() + "<br>";
mensajeSalida += "Array invertido: " + provincias.reverse() + "<br>";
let longitud = provincias.unshift("Moscú");
longitud = provincias.push("Buenos Aires");
mensajeSalida += "Array tras las nuevas entradas: " + provincias + "<br>";
let elemento = provincias.pop();
elemento = provincias.shift();
mensajeSalida += "Array tras borrar las entradas anteriores: " + provincias + "<br>";

if (provincias.includes("Madrid")) {
    let indice = provincias.indexOf("Madrid");
    provincias.splice(indice);
} else
    provincias.push("Madrid");

mensajeSalida += "Array tras comprobar Madrid: " + provincias + "<br>";
let cadena = "Método toString: " + provincias.toString() + "<br>";

if (salida == 1) {
    document.write(cadena);
} else
    console.log(cadena);

provincias.splice(provincias.indexOf("Córdoba"),1);
mensajeSalida += "Array tras eliminar Córdoba: " + provincias + "<br>"; 

mensajeSalida += "Las tres últimas posiciones del array son: " + provincias.slice(provincias.length - 3) + "<br>";

provincias.splice(2,3);
mensajeSalida += "Array tras eliminar las posiciones 3ª,4ª y 5ª : " + provincias + "<br>";

if (salida == 1) {
    document.write(mensajeSalida);
} else 
    console.log(mensajeSalida); /*No funciona la salida por consola. Supongo que el mensaje será demasiado grande, así que 
                                habría que ir metiendo las salidas una por una, o por grupos más pequeños.*/


//Ejercicio 2

let datos = [];
let valor = prompt("Introduzca un valor");

do {
    datos.push(valor);
    valor = prompt("Introduzca otro valor o la palabra 'fin' para terminar");

} while (valor.toLowerCase() != "fin");

provincias.push(datos);

document.write("La suma de los dos arrays: " + provincias + "<br>");

provincias.splice(provincias.indexOf(datos[0]),datos.length);
document.write("El array de provincias vuelve a quedar así: " + provincias);







