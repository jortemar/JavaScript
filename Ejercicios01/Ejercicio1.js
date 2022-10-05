let numero1 = 5;
let numero2 = 8;
let frase;

if (numero1 <= numero2) {
    frase = "numero1 no es mayor que numero2";
    alert(frase);
    console.log(frase);
    document.write(frase + "<br>");
}

if (numero2 > 0) {
    frase = "numero2 es positivo";
    alert(frase);
    console.log(frase);
    document.write(frase + "<br>");
}

if (numero1 < 0 || numero1 != 0) {
    frase = "numero1 es negativo o distinto de cero";
    alert(frase);
    console.log(frase);
    document.write(frase + "<br>");
}

if (numero1 + 1 < numero2) {
    frase = "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2";
    alert(frase);
    console.log(frase);
    document.write(frase);
}