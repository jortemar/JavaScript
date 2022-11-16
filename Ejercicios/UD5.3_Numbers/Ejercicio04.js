/*
4. Un bucle infinito ocasional

Este bucle es infinito. Nunca termina, ¿por qué?

let i = 0;
while (i != 10) {
    i += 0.2;
}

*/

/*
RESPUESTA

No va a funcionar porque 0.2 es una fracción sin fin en el sistema binario. La variable i
llegaría a tomar un valor muy cercano a 10, pero nunca llegaría a ser exactamente 10 y pasaría de
largo la única condición de salida que tiene el bucle.
Para que funcionase tendríamos que ir redondeando el resultado, porque si redondeamos 0.2, al ir aumentando
las multiplicaciones el error al final se va a acabar manifestando en decimales muy alejados.
*/

let i = 0;

while (i != 10) {
    i += 0.2;
    i = +i.toFixed(1); 
}

alert(`El bucle ha llegado a su fin. El valor de i es ${i}`);
