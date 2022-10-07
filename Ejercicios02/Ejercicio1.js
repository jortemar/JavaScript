let provincias = ["Almería","Cádiz","Córdoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
let salida = prompt("¿Cómo quiere que se muestre este ejercicio?\n" +
                    "1. Por pantalla\n" + 
                    "2. Por consola");

let mensajeSalida = "El array tiene un tamaño de " + provincias.length + "\n";
mensajeSalida += "Array original: " + provincias + "\n Array ordenado: " + provincias.sort() + "\n";
mensajeSalida += "Array invertido: " + provincias.reverse() + "\n";
let longitud = provincias.unshift("Moscú");
longitud = provincias.push("Buenos Aires");
mensajeSalida += "Array tras las nuevas entradas: " + provincias + "\n";
let elemento = provincias.pop();
elemento = provincias.shift();
mensajeSalida += "Array tras borrar las entradas anteriores " + provincias + "\n";

if (provincias.includes("Madrid")) {
    let indice = provincias.indexOf("Madrid");
    provincias.splice(indice);
} else
    provincias.push("Madrid");

mensajeSalida += "Array tras comprobar Madrid " + provincias + "\n";
let cadena = provincias.toString();

if (salida == 1) {
    document.write(cadena);
} else
    console.log(cadena);

provincias.splice(provincias.indexOf("Córdoba"));
mensajeSalida += "Array tras eliminar Córdoba " + provincias + "\n"; 



if (salida == 1) {
    document.write(mensajeSalida);
} else
    console.log(mensajeSalida);





