/************************************************************
1. Indica como se pueden realizar las siguientes acciones:

a. Crea un nuevo array con las tres primeras posiciones del array.
b. Si un array tiene más de 5 elementos, mostrar las posiciones pares del array.
c. Mostrar el producto de los valores pares.
d. Si todos los valores de un array son pares y positivos mostrar el producto
    de todos los valores del array.
e. Si tenemos un array que contiene algún valor par y menor que 10. Añade
    al array todos los valores, que haya desde el valor par hasta 10.
f. Transforma el array para que contenga los mismos valores, pero en orden
    inverso al que estaban la ser creado.
g. Si el array contiene el valor 10, crear un duplicado del array.

2. Declara un array de tipo numérico y realiza cada uno de los ejercicios
    anteriores comprobando su resultado.
*************************************************************/

let opcion;
do {
    do {
        opcion = parseInt(prompt("Elija una opción para ejecutar sobre el array\n " +
                                    "1. Crea otro array con las tres primeras posiciones\n" +
                                    "2. Si tiene más de 5 elementos, mostrar las posiciones pares\n" +
                                    "3. Muestra el producto de los valores pares\n" +
                                    "4. Si todos los valores son pares y positivos, mostrar el array\n" +
                                    "5. Si hay algún valor par y menor que 10, se añade al array todos\n" +
                                    "los valores desde el valor par hasta 10\n" +
                                    "6. Invierte el array original\n" +
                                    "7. Si el array contiene el valor 10, crea un duplicado del array\n" +
                                    "8. Salir"));

    } while (opcion < 1 || opcion > 8);
} while (opcion != 8);

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
    default:
        prompt("Introduzca un valor entre 1 y 8");
}

let arrayNumeros = [];
function crearArray() {
    
}

function apartadoA() {

}



















/*

let numeros = [];
let entradaDatos = prompt("Introduzca un número o escriba 'fin' para terminar");

while (entradaDatos.toLowerCase() != "fin") {
    numeros.push(parseFloat(entradaDatos));
} 

//apartado A
alert("Las tres primeras posiciones del array son " + numeros.slice(0,3));

//apartado B
if (numeros.lenght > 5) {


    for (i in numeros) {
        if (i%2 == 0) {
            posicionesPares.push(numeros[i]);
        }
    }
    alert ("Valores en posiciones pares");

} else
    alert("");


//apartado C
function cb(a) {
    if (a % 2 == 0) {
        return a;
    } else {
        return 1};
}

alert ("Producto de valores pares arrray " + productosPares);

//apartadoD
if (numeros.every((currentValue) => currentValue >= 0 && currentValue % 2 == 0)) {
    let producto = numeros.reduce(function(a,b) {return a*b;},1);
    alert("Producto de los valores del array: " + producto);

} else  
    alert("No todos los valores son pares o mayores que cero");

//apartadoE
if (numeros.some(a=>a%2==0 && a<10){
    result=numeros.filter(a=>a%2==0 && a < 10);
    let valor = result[0];
    for (let i=valor; i <= 10; i ++) {
        numeros.push(i);
    }
    alert(numeros);
} else
    alert("No existe un valor par menor de diez");


//apartado seis
numeros = numeros.reverse();
alert(numeros);


// apartado siete
if (numeros.some(a => a ==10)) {
    alert("El array contiene el número 10");
    duplicado = numeros.slice();
    alert("Muestro el duplicado: " + duplicado);
} else
    alert("El array no contiene el número 10");


// apartado ocho
duplicado = numeros.filter(a => a >= 0 );
alert("El array contiene " + duplicado.lenght + " números positivos");

// apartado nueve() {
    let mensaje = "Contenido del Array: \n";
    numeros.forEach(element => {
        mensaje += element+ ",";
    });
    alert(mensaje);


function inicializar() {
    let arrayNumeros = [];
    let arrayPares = [];
    for (let i = 0; i < 20; i ++) {
        numeros[i]= i + 1;
        arrayNumeros[i] = Math.floor(Math.random()*100);
        arrayPares[i] = Math.floor(Math.random() * 10)*2;

    }
    //function(a,b){return a - b;}
    alert(arrayNumeros.sort(function(a,b){return a-b;}));
    return(arrayNumeros.sort(function(a,b){return a-b;}));

    //alert(arrayPares).sort...
}*/