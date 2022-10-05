let cad1 = prompt("Introduzca un número");
let cad2 = prompt("Introduzca otro número");

let num1 = parseInt(cad1);
let num2 = parseInt(cad2);

if (typeof(num1, num2) == "number" && num1 % 2 != 0 && num2 % 2 != 0) {
    document.write("Los números pares entre " + num1 + " y " + num2 + " son: <br>");

    while (num1 < num2) {
        if (num1 % 2 == 0) {
            document.write(num1 + "<br>");
        }
        num1++; 
    }
} else
    document.write("Alguno de los números, o los dos, no son impares");