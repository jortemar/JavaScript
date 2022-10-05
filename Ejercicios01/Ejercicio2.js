let valor, cadena;
let contValores = 0;
let contPares = 0;
let contImpares = 0;
let resultado = 0;

do {
    cadena = prompt("Introduzca un valor");
    valor = parseInt(cadena);
    contValores++;

    if (valor%2 == 0) {
        contPares++;
    } else {
        contImpares++;
    }

    resultado += valor;        
} while (valor != 0);

document.write("Se han introducido un total de " + contValores + " valores <br>");
document.write("Se han introducido " + contPares + " números pares y " + contImpares + " números impares <br>");
document.write("La suma de los valores introducidos es " + resultado);