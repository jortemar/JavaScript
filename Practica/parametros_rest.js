function suma(a, b) {
    return a + b;
}

alert(suma(7,2,3,4,5));

// los tres puntos hacen referencia a parámetros rest o al operador spread.
// En este caso son param. rest, que reúnen los parámetros restantes en un array.
// args es el nombre que le hemos dado al array
function sumaTodo(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

alert(sumaTodo(1));
alert(sumaTodo(1,2));
alert(sumaTodo(1,2,3));
alert(sumaTodo(1,2,3,4,6,8));

function mostrarNombre(nombre, apellido, ...titles) {
    alert (nombre + ' ' + apellido);

    let cadena = "";

    for (let title of titles) {
        cadena += title + ', ';
    }
    //removemos la última coma de la cadena
    cadena = cadena.substring(0, cadena.length - 2);
    alert("Los títulos son " + cadena);
}

mostrarNombre("Jose", "Ortega", "master del universo", "fucker maximus");
