let numeros = crearArray();
/*Utilizo la clase Array para copiar el array, ya que si utilizo = se crea solo una referencia
y se cambia el contenido de la copia al modificar el original*/
let arrayRep = Array.from(numeros);
let arrayDup, contador, numPos;
let opcion;
do {
    do {
        opcion = parseInt(prompt("Elija una opción para ejecutar sobre el array\n\n" +
                                    "   1. Crea otro array con las tres primeras posiciones\n" +
                                    "   2. Si tiene más de 5 elementos, mostrar las posiciones pares\n" +
                                    "   3. Muestra el producto de los valores pares\n" +
                                    "   4. Si todos los valores son pares y positivos, muestra el\n" +
                                    "producto de los valores del array\n" +
                                    "   5. Si hay algún valor par y menor que 10, se añade al array todos\n" +
                                    "los valores desde el valor par hasta 10\n" +
                                    "   6. Invierte el array original\n" +
                                    "   7. Si el array contiene el valor 10, crea un duplicado del array\n" +
                                    "   8. Muestra cuántos elementos del array son positivos\n" +
                                    "   9. Salir"),"0"); //Valor por defecto 0

        switch (opcion) {
            case 1:
                apartadoA();
                break;
            case 2:
                apartadoB();
                break;
            case 3:
                apartadoC();
                break;
            case 4:
                apartadoD();
                break;
            case 5:
                apartadoE();
                break;
            case 6:
                apartadoF();
                break;
            case 7:
                apartadoG();
                break;
            case 8:
                apartadoH();
                break;
            case 9:
                alert("Gracias por utilizar este programa");
                break;
            default:
                alert("Introduzca un valor entre 1 y 9");
        }                                

    } while (opcion < 1 || opcion > 9);
} while (opcion != 9);


function crearArray() {
    let arrayNum = [];
    for(i = 0; i < 10; i++) {
        arrayNum[i] = (Math.floor(Math.random() * 21));
    }
    alert(`El array se ha creado con éxito: ${arrayNum}`);
    return arrayNum;
}

//a. Crea un nuevo array con las tres primeras posiciones del array.
function apartadoA() {
    alert("Las tres primeras posiciones del array son " + numeros.slice(0,3));
}

//b. Si un array tiene más de 5 elementos, mostrar las posiciones pares del array.
function apartadoB() {
    let frase;
    if (numeros.length >= 5) {
        frase = "Los números pares del array son ";
        for (i in numeros) {
            if (numeros[i] % 2 == 0) {
                frase += numeros[i] + ", ";  
            }
        }
    } else
        frase = "El array tiene cinco o menos elementos";

    alert(frase);    
}

//c. Mostrar el producto de los valores pares.
function apartadoC() {
    alert("El producto de los valores pares del array es " + numeros.filter(a => a % 2 == 0).reduce((a, b) => a * b));
    /*
    let producto = 1;
    for (i in numeros) {    
        if (numeros[i] % 2 == 0) {
            producto *= numeros[i]; 
        }
    }

    alert(`El producto de los valores pares del array es ${producto}`);
    */
}

//d. Si todos los valores de un array son pares y positivos mostrar el producto
//    de todos los valores del array.
function apartadoD() {
    if (numeros.every(a => a % 2 == 0 && a > 0)) {
        alert(`El producto de los valores pares del array es ${numeros.reduce((a, b) => a * b)}`);
    } else
        alert("Uno o más de un número del array no es positivo o impar");
}

//e. Si tenemos un array que contiene algún valor par y menor que 10. Añade
//    al array todos los valores, que haya desde el valor par hasta 10.
function apartadoE() {
    if (numeros.some(a => a % 2 == 0 && a < 10)) {
        for (i in numeros) {
            if (numeros[i] % 2 == 0 && numeros[i] < 10) {
                for (j = numeros[i]; j <= 10; j++) {
                    numeros.push(j);
                }
                break;                                    
            } 
        }

        alert(`El array, con los nuevos valores añadidos, ha quedado así ${numeros}`);
    } else
        alert("El array no contiene valores pares y menores que 10");
}

//f. Transforma el array para que contenga los mismos valores, pero en orden
//    inverso al que estaban al ser creado.
function apartadoF() {
    alert(`El array original invertido quedaría así ${arrayRep.reverse()}`);
}

//g. Si el array contiene el valor 10, crear un duplicado del array.
function apartadoG() {
    if (numeros.includes(10)) {
        arrayDup = numeros;
        alert(`Se ha creado un duplicado del array: ${arrayDup}`);
    } else
        alert("El array no contiene el valor 10");
}

//h. Mostrar cuántos elementos del array son positivos
function apartadoH() {
    contador = 0;
    numPos = "";
    for (i in numeros) {
        if (numeros[i] > 0) {
            contador++;
            numPos += `${numeros[i]}, `
        }
    }

    alert(`Hay ${contador} elementos positivos en el array: ${numPos}`);
}