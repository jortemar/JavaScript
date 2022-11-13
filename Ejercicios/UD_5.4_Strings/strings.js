/*
1. HACER MAYÚSCULAS EL PRIMER CARÁCTER
Escribe una función ucFirst(str) que devuelva el string str con el primer
carácter en mayúscula, por ejemplo:
ucFirst("john") == "John";*/


let palabra = prompt("Introduzca una palabra");
alert("La palabra con su primera letra en mayúscula es " + ucFirst(palabra));

/*
2. BUSCAR SPAM
Escribe una función checkSpam(str) que devuelva true si str contiene ‘viagra’ o
‘XXX’, de lo contrario false.
La función debe ser insensible a mayúsculas y minúsculas:
checkSpam('compra ViAgRA ahora') == true
checkSpam('xxxxx gratis') == true
checkSpam("coneja inocente") == false*/

function checkSpam(str) {
    str = str.toUpperCase();
    return ((str.includes("XXX") || str.includes("VIAGRA"))? true:false);
}

alert(checkSpam('compra ViAgRA ahora'));// == true
alert(checkSpam('xxxxx gratis'));// == true
alert(checkSpam("coneja inocente"));// == false


/*
3. TRUNCAR TEXTO
Crea una función truncate(str, maxlength) que verifique la longitud de str y, si
excede maxlength – reemplaza el final de str con el carácter de puntos
suspensivos "...", para hacer su longitud igual a maxlength.
El resultado de la función debe ser la cadena truncada (si es necesario).
Por ejemplo:
truncate("Lo que me gustaría contar sobre este tema es:", 20) =
"Lo que me gustaría c..."
truncate("Hola a todos!", 20) = "Hola a todos!"*/

function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return str.slice(0,(maxlength-str.length)) + "...";
    } else
        return str;
}

alert(truncate("Lo que me gustaría contar sobre este tema es:", 20)); // ="Lo que me gustaría c..."
alert(truncate("Hola a todos", 20)); // = "Hola a todos"

/*
let frase = prompt("Introduzca una frase");
alert()
truncate(frase, 20);
*/

/*
4. EXTRAER EL DINERO
Tenemos un costo en forma de “$120”. Es decir: el signo de dólar va primero y
luego el número.
Crea una función extractCurrencyValue(str) que extraiga el valor numérico de
dicho string y lo devuelva.
Por ejemplo:
alert( extractCurrencyValue('$120') === 120 ); // true*/

function extractCurrencyValue(str) {
    if(str.startsWith('$') || str.starsWith('€')) {
        return (str.slice(1));
    } else if (str.endsWith('$') || str.endsWith('€')) {
        return (str.slice(0, str.length -1));
    } else
        return str;
}

alert();
alert();
alert();
alert();
alert();