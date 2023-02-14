/*
2. Filtrar anagramas

Anagramas son palabras que tienen el mismo número de letras, pero en diferente orden.
Por ejemplo:
nap - pan
ear - are - era
cheaters - hectares - teachers

Escriba una función aclean(arr) que devuelva un array limpio de anagramas.
Por ejemplo:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" o "PAN,cheaters,era"

Es decir, de cada grupo de anagramas debe quedar solo una palabra, sin importar cual.
Pista: dividir cada palabra en letras, ordenarla y luego utilizarla como
clave en un map, si la clave existe no se añadirá de nuevo al map.
*/

function aclean() {
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    /*Map nos permite crear colecciones de objetos (formados por clave y valor).
    Además, permite claves de cualquier tipo en cualquiera de sus posiciones (incluso objetos).
    En este ejercicio nos va a ayudar a asociar la palabra ordenada (clave) con 
    el valor real de esa clave, que será la palabra original (valor) */
    let coleccionLimpia = new Map();
    let palabra;
    
    for (pal of arr) {
        palabra = pal.toLowerCase().split("");
        palabra.sort();
        coleccionLimpia.set(palabra.join(""), pal);
    }
    return coleccionLimpia;
}

let coleccionResultado = aclean();

//muestra los valores del map
for (pal of coleccionResultado.values()) {
    alert(pal);
}

/*
//muestra las claves del map
for (pal of coleccionResultado.keys()) {
    alert(pal);
}
*/
