/*
Crea una función en JavaScript que nos permita dibujar una tabla en una página Web.
• Como parámetros indicaremos el número de filas y de columnas con dos números. Por defecto la función tomara 10 filas y 4 columnas.
• La tabla se crea con un borde de 1 pixel, un tercer parámetro permite indicar el color(por defecto será negro). El borde exterior medirá 3 pixeles y siempre será del mismo color que el borde de las celdas.
• La tabla ocupará el 90% de la tabla
• Usa la función para crear una tabla con borde negro de 10 filas y 4 columnas
• Úsala de nuevo para generar una tabla de 20 filas y 10 columnas con borde azul.
• Finalmente, consigue dibujar 10 tablas de 5 filas y 4 columnas que tengan borde verde.
*/

function crearTabla(numFilas = 10, numColumnas = 4, color = 'black') {

    document.write(`<table style = "border:3px solid ${color}; border-collapse:collapse;
    width:90%; text-align:center; font-size:18px; margin:100px auto" >`);

    for (i = 0; i < numFilas; i++) {
        document.write("<tr>")
        for (j = 0; j < numColumnas; j++) {
            document.write(`<td style = "border:1px solid ${color}; padding:8px"> ${j} </td>`)
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

crearTabla(10, 4);
crearTabla(20, 10, 'blue');

for (k = 0; k < 10; k++) {
    document.write(`Tabla ${(k + 1)}`);
    crearTabla(5, 4, 'green');
}
