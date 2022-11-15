/*
1. Sumar números desde prompt

Crea un script que pida al visitante que ingrese dos números y muestre su suma.
P.D. Hay una trampa con los tipos de valores.
*/

alert("Vamos a realizar una suma");
let num1 = parseFloat(prompt("Introduzca el primer sumando"));
let num2 = parseFloat(prompt("Introduzca el segundo sumando"));
let resultado = num1 + num2;
resultado = Math.round(resultado * 1e6) / 1e6; //aceptaría hasta seis cifras decimales

alert(`El resultado de la suma es ${resultado}`);
