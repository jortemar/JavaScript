let horas = prompt("Introduzca el número de horas trabajadas");
let precio = prompt("Introduzca el precio de la hora");
let salario;

if (horas > 40) {
    salario = 40*precio;
    let horasExtra = horas - 40;
    salario += horasExtra*(precio*1.5);
} else
    salario = horas*precio;


document.write("El salario es " + salario);