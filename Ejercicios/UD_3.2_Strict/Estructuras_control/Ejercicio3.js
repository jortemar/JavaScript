/*--------------------------------------------------------------------------------------
3. Realizar un programa que calcule el salario de un trabajador, para ello pediremos el
número de horas trabajadas y el precio de la hora. Si el trabajador trabajas más de 40
horas semanales, se considera que trabaja horas extras. Las horas extras se pagan a 1.5
veces la hora normal.
a. Modifica el programa para que la operación se realice para cinco trabajadores.
b. Modifica el programa anterior para que el trabajador introduzca también su
nombre junto con su salario.
c. Modifica el programa anterior para que la salida se muestre en nuestro documento
html y también en la consola.
---------------------------------------------------------------------------------------*/

let horas, precio, salario, nombre;

for (let i = 0; i < 5; i++) {
    nombre = prompt("Introduzca el nombre del trabajador");
    horas = prompt("Introduzca el número de horas trabajadas");
    precio = prompt("Introduzca el precio de la hora");
    salario;

    if (horas > 40) {
        salario = 40*precio;
        let horasExtra = horas - 40;
        salario += horasExtra*(precio*1.5);
    } else
        salario = horas*precio;

    document.write("El salario de " + nombre + " es " + salario + "<br>");   
    console.log("El salario de " + nombre + " es " + salario + "<br>"); 
}

