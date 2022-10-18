let numeros = [] = crearArray();
alert("Array ordenado: " + numeros);

let num;

do {    
    num = parseInt(prompt("Elija una opción con un número del 1 al 11:\n\n" +
                            "   1. Suma los valores del array\n" +
                            "   2. Obtén un nuevo array de mayores de 30\n" +
                            "   3. Muestra si el array contiene un valor y su posición\n" +
                            "   4. Muestra todos los valores, si hay alguno igual a 0\n" +
                            "   5. Muestra el contenido del array\n" +
                            "   6. Obtén un nuevo array de los valores mutiplicados por dos\n" +
                            "   7. Muestra el array si todos los valores son positivos\n" +
                            "   8. Realiza un proceso un número muy alto de veces, mostrando indice y valor\n" +
                            "   9. Recorre el array sin bucles\n" +
                            "   10. Construye un nuevo array con ciertas condiciones\n" +
                            "   11. Salir"),"0"); //valor por defecto: 0
    
    do {    
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
                break;  // Esto hay que arreglarlo. No funciona bien
        }

    } while (num != 11);       

} while (num <= 0 || num > 11);


function crearArray() {
    let arrayNumeros = [];
    
    for (let i = 0; i < 10; i++) {
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
    lista.forEach(function(valor) {resultado += valor});
    alert(resultado);   
}

//let result = numeros.reduce(a, b => a + b);
//alert("Suma de todos los números: " + result);

/*

//apartado B
let nuevoArray;
lista.forEach(valor => {if(valor >= 5) nuevoArray.push(valor);

for (lista of valor) {
    if (valor >= 5) {
        nuevoArray.push(valor);
    }
}

*/

//let filtrados = numeros.filter(a => a % 2 == 0);
//alert("Números pares :" + filtrados);

/*

//apartado C
let posicion;
numero = prompt("Introduzca un numero") + "<br>";;
if (lista.contains(numero)) {
    posicion = lista.indexOf(numero);
    alert("El número " + numero + " está en la posición " + posicion) + "<br>";
} else
    alert("El número introducido no está en el array") + "<br>"; 

*/

//let numero = parseInt(prompt("Numero a buscar en el array"));
//if (!isNaN(numero)) {
    //let posicion = numeros.indexOf(numero);

    //if(posicion != 1) {
       // alert("La primera posicion en el array del numero " + numero + "es la " + posicion);
    //} else 
       // alert("El número " + numero + " no se encuentra en el array");
        
//} else
    //prompt("Valor incorrecto");



/*

//apartado D
if (lista.contains(0)) {
    for (lista of valor) {
        alert(valor) + "<br>";
    }
}

//apartado E
for (let indice = 0; indice <= lista.length; indice++) {
    alert("En la posición " + indice + " está el número " + lista[indice]) + "<br>";
}

//apartado F
let arrayPorDos;
for (lista of valor) {
    arrayPorDos.push(valor * 2);
    alert(valor) + "<br>";
}

//apartado G
for (lista of valor) {   
    if (valor <= 0) {
        break;
    } else
    alert(valor) + "<br>";
}
*/
