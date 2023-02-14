/*
3. Repetir hasta que se ingrese un número

Crea una función readNumber que pida un número hasta
que el visitante ingrese un valor numérico válido.
El valor resultante debe ser devuelto como number.

El visitante puede también detener el proceso ingresando una linea
vacía o presionando “CANCEL”. En tal caso la función debe devolver null.
*/

function readNumber() {
    let opcion;
   
        do {
            opcion=prompt("Introduzca un valor numérico");

        } while (isNaN(opcion) && (opcion.toLowerCase() != "cancel" && opcion.toLowerCase() != "" ));

        if (isNaN(opcion) || opcion.length == 0)
            return null;    
        else {
            return +opcion;
            //con el + cambiamos el tipo de variable a 'number'
        }    
}

let resultado = readNumber();

if (typeof(resultado) === "number") {
    alert(`El valor introducido es ${resultado} y es de tipo ${typeof(resultado)}`);
} else
    alert(`El valor introducido es ${resultado}`);
