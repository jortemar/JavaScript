//apartado A
let lista = [1,2,3,4,5,6,7,8,9,10];
let resultado = 0;

for (lista of valor) {
    resultado += valor;
}

document.write(resultado);

//apartado B
let nuevoArray;
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
    document.write("El número " + numero + " está en la posición " + posicion) + "<br>";;
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




