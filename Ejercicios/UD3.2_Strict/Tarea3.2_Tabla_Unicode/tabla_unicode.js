document.write(`<h1 style = "text-align:center; padding-top:60px">Tabla UNICODE</h1>`);
document.write(`<table style = "border:3px solid; border-collapse:collapse; 
                width:70%; text-align:center; margin:100px auto" >`);

let indice = 31;

for (i = 0; i < 25; i++) {
    indice++;
    document.write(`<tr>`);

    for (j = indice; j < indice + 250; j = j + 25) {
        document.write(`<td style = "border:1px solid; width:30px; background-color:cyan"><b> ${convierteHexa(j)} </b></td>`);
        document.write(`<td style = "border:1px solid; width:20px"> ${convierteUnicode(j)} </td>`);
        
    }
    document.write(`</tr>`);
}

document.write(`</table>`);


function convierteHexa(numDec) {
    return numDec.toString(16).toUpperCase();
}

function convierteUnicode(numDec) {
    return String.fromCharCode(numDec);
}

//numDec en hexadecimal es numDec.toString(16)}`);
//el método .fromCharCode(num en decimal), que debe ir siempre con clase 'String' (no funciona con objeto String)
//nos convierte un número decimal en código unicode ('\u' + hexadecimal)