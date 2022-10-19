let numeros = [] = crearArray();
alert("Array ordenado: " + numeros);
let num;

do {  
    do {
        num = parseInt(prompt("Elija una opción con un número del 1 al 11:\n\n" +
                                "   1. Suma los valores del array\n" +
                                "   2. Obtén un nuevo array solo con los números pares\n" +
                                "   3. Muestra si el array contiene un valor y su posición\n" +
                                "   4. Muestra todos los valores, si hay alguno igual a 0\n" +
                                "   5. Muestra el contenido del array\n" +
                                "   6. Obtén un nuevo array de los valores mutiplicados por dos\n" +
                                "   7. Muestra el array si todos los valores son positivos\n" +
                                "   8. Realiza un proceso un número muy alto de veces, mostrando índice" +
                                " y valor de la forma más efectiva\n" + 
                                "   9. Recorre el array sin bucles\n" +
                                "   10. Construye un nuevo array con números entre 10 y 20, si todos\n" +
                                " los valores del array son positivos\n" +
                                "   11. Salir"),"0"); //valor por defecto: 0
    
        switch(num) {
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
                apartadoI();
                break;
            case 10:
                apartadoJ();
                break;
            case 11:
                alert("Gracias por usar este programa");
                break;
            default:
                alert("El número introducido no está comprendido entre 1 y 11");
        }
    } while (num != 11);       
} while (num <= 0 || num > 11);

function crearArray() {
    let arrayNumeros = [];
    
    for (i = 0; i < 10; i++) {
        arrayNumeros[i] = Math.floor(Math.random()*100);
    }
    
    alert("Array sin ordenar: " + arrayNumeros);

    /* En realidad, el sort utiliza para ordenarse el código ASCII, por lo que un array de strings sí lo ordenaría bien,
    pero uno de números no. Por eso utilizamos como parámetro la función de callback en el método .sort */

    return (arrayNumeros.sort(function(a,b) {
        return a-b;
    }));
}

function apartadoA() {
    let resultado = 0;
    
    for (i in numeros) {
        resultado += numeros[i];
    }
    
    //resultado = numeros.reduce((a, b) => a + b);

    /* El método .reduce reduce el array a un único valor, recorriendo sus posiciones y 
    tratando los datos en función de lo que le marquemos */

    alert("La suma de todos los números del array es: " + resultado);
}

function apartadoB() {  
    //el método filter devuelve un array. No es necesario declararlo
    numerosPares = numeros.filter(a => a % 2 == 0); 
    alert("Los números pares del array son: " + numerosPares);
}

function apartadoC() {
    let numIntro;
    do {
        numIntro = parseInt(prompt("Introduzca un número para comprobar si se encuentra en el array"));   
    } while (isNaN(numIntro));

    //El método devuelve -1 si el .indexOf no encuentra el número
    let posicion = numeros.indexOf(numIntro);
    if (posicion != -1) { 
        alert("El número " + numIntro + " está en el array en la posición " + posicion);
    } else
        alert("El número " + numIntro + " no se encuentra en el array");
}

function apartadoD() {
    if (numeros.includes(0)) {
        alert("El array tiene un 0 en la primera posición\n" + 
                "Contenido del array: " + numeros);
    } else
        alert("El array no contiene el número 0");
}

function apartadoE() {
    let mensaje = "";
    numeros.forEach(valor => mensaje += valor + " ");
    alert(mensaje);
}

function apartadoF() {
    //.map aplica una condición sobre los valores de un array, y atrapa los nuevos valores en un nuevo array
    arrayPorDos = numeros.map(a => a * 2); 
    alert("El nuevo array con las posiciones del anterior multiplicadas por dos queda así:\n" + 
    arrayPorDos + "\nmientras que el array original se mantiene así:\n" + numeros);
}

function apartadoG() {
    //.every comprueba si todos los valores del array cumplen una cierta condición. Devuelve un booleano
    if (numeros.every(a => a > 0)) {
        alert("Todos los números del array son positivos\n" + 
                "Array: " + numeros);
    } else
        alert("El array contiene al menos un cero");
}

function apartadoH() {
    alert("La forma más eficiente de recorrer un array, mostrando valor e índice, es el forEach");
    numeros.forEach((valor, indice) => alert("La posición " + indice + " tiene el valor " + valor));
}

function apartadoI() {
    alert("Con el método .slice podemos extraer elementos del array. No es lo más eficiente");
    recorrerArrayAlternativa = numeros.slice(0);
    alert(recorrerArrayAlternativa);
}

//Este último apartado no funciona bien. Hay que revisarlo
function apartadoJ() {
    if (numeros.every(a => a > 0)) {
        nuevoArray = numeros.map(a => a >= 10 && a <= 20);
        alert("El nuevo array está formado por " + nuevoArray);
    } else
        alert("Hay un cero en la primera posición, por lo que todos los números no son positivos");    
}