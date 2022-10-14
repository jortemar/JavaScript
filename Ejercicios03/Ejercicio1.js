let listaVacia = new Array(10);
let listaLlena = llenarArray(listaVacia);
listaLlena.forEach(function(valores) {
    document.write(valores) + "<br>";
});



/*
let num;

do {    
    num = parseInt(prompt("Elija una opción con un número del 1 al 11 <br>" +
                            "1. Suma los valores del array" +
                            "2. Obtén un nuevo array de mayores de 30" +
                            "3. Muestra si el array contiene un valor y su posición" +
                            "4. Muestra todos los valores, si hay alguno igual a 0" +
                            "5. Muestra el contenido del array" +
                            "6. Obtén un nuevo array de los valores mutiplicados por dos" +
                            "7. Muestra el array si todos los valores son positivos" +
                            "8. Realiza un proceso un número muy alto de veces, mostrando indice y valor" +
                            "9. Recorre el array sin bucles" +
                            "10. Construye un nuevo array con ciertas condiciones" +
                            "11. Salir"));
    
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
        }

    } while (num != 11);       

} while (num <= 0 || num > 11);

*/

function llenarArray(a){

    a.forEach(function(valor) {
        valor = Math.floor(Math.random() * 100);
        a.push(valor);
    })
    
    return a;
    //a.forEach(a.push(Math.floor(Math.random() * 100)));
}


/*
//apartado A
let lista = new Array(10);
crearArray(lista);
let resultado = 0;

//do {
  //  parseInt(numero)=prompt("Eliga una opción");
//} while (numero > 4)

lista.forEach(clave =>
    document.write(clave)
    );



/*
lista.forEach(valor => resultado += valor);

document.write(resultado);

//apartado B
let nuevoArray;
lista.forEach(valor => {if(valor >= 5) nuevoArray.push(valor);

for (lista of valor) {
    if (valor >= 5) {
        nuevoArray.push(valor);
    }
}

//apartado C
let posicion;
numero = prompt("Introduzca un numero") + "<br>";;
if (lista.contains(numero)) {
    posicion = lista.indexOf(numero);
    document.write("El número " + numero + " está en la posición " + posicion) + "<br>";
} else
    document.write("El número introducido no está en el array") + "<br>"; 


//apartado D
if (lista.contains(0)) {
    for (lista of valor) {
        document.write(valor) + "<br>";
    }
}

//apartado E
for (let indice = 0; indice <= lista.length; indice++) {
    document.write("En la posición " + indice + " está el número " + lista[indice]) + "<br>";
}

//apartado F
let arrayPorDos;
for (lista of valor) {
    arrayPorDos.push(valor * 2);
    document.write(valor) + "<br>";
}

//apartado G
for (lista of valor) {   
    if (valor <= 0) {
        break;
    } else
    document.write(valor) + "<br>";
}
*/
