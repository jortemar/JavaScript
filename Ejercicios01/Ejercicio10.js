/************************************************************************* 
10. El cálculo de la letra del Documento Nacional de Identidad (DNI) es un
proceso matemático sencillo que se basa en obtener el resto de la división
entera del número de DNI y el número 23. A partir del resto de la división,
se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
            'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Por tanto, si el resto de la división es 0, la letra del DNI es la T y si
el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño
script que:

a. Almacene en una variable el número de DNI indicado por el usuario y en otra
variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente
al usuario que indique su número y su letra, se puede utilizar la función prompt(),
que devuelve un valor String)

b. En primer lugar (y en una sola instrucción) se debe comprobar si el número es
menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al
usuario indicando que el número proporcionado no es válido y el programa no
muestra más mensajes.

c. Si el número es válido, se calcula la letra que le corresponde según el método
explicado anteriormente.

d. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si
no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha
indicado no es correcta. En otro caso, se muestra un mensaje indicando que el
número y la letra de DNI son correctos.

e. ¿Qué sucede si no realizamos la conversión de datos del valor String que devuelve
prompt()?

f. Modifica el ejercicio para que la salida se realice por consola.

g. ¿Sabrías modificar el ejercicio para que la salida se realice directamente sobre el
documento HTML?
**************************************************************************/
            
let DNI = prompt("Introduzca su DNI sin espacios, con la letra al final");
let letra = DNI.charAt(DNI.length - 1);
let numero = parseInt(DNI);

if (numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
    console.log("El número proporcionado no es válido");
    document.write("El número proporcionado no es válido");
} else {
    var letraGenerada = generarLetra(numero);

    if (letraGenerada === letra) {
        alert("El DNI es correcto");
        console.log("El DNI es correcto");
        document.write("El DNI es correcto");
    } else {
        alert("El número y/o la letra del DNI son incorrectos");
        console.log("El número y/o la letra del DNI son incorrectos");  
        document.write("El número y/o la letra del DNI son incorrectos"); 
    }    
}

function generarLetra(numeroIntroducido) {
    const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
                'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let resto = numeroIntroducido % 23;
    return LETRAS[resto];
}    

/*apartado E
En mi caso sí pasaría, porque al convertir a float se elimina la letra y me limpia el número.
Si no fuera por eso no pasaría nada, porque el programa trataría el dato como
si fuera un número para hacer las comparaciones.
*/

