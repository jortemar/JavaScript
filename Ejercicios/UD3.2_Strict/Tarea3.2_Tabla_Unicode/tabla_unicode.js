
document.write(`<table style = "border:3px solid; border-collapse:collapse; 
                width:70%; margin:100px auto" >`);
let hexa, decimal;

for (i = 0; i < 25; i++) {
    document.write(`<tr></tr>`);

    for (j = 33; j <= 53; j++) {
        document.write(`<td style = "border:1px solid"> ${convierteHexa(j)} </td>`);
    }
    
}

document.write(`</table>`);


function convierteHexa (numDecimal) {
    //alert(`El número ${numDecimal} en hexadecimal es ${numDecimal.toString(16).toUpperCase()}`);
    //el método .fromCharCode, que debe ir siempre con clase 'String' (no funciona con objeto String)
    //nos convierte un número decimal en código unicode ('\u' + hexadecimal)
    return String.fromCharCode(numDecimal);
}

//alert(convierteHexa(33));