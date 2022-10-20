function crearTabla(row = 10, col = 4, color = 'black') {
    
    document.write("<table style=\"border: 3px solid " + color + "; width:90%; border-collapse:collapse; margin-left:auto; margin-right:auto;\";>");

    for (i = 0; i < row; i++) {
        document.write("<tr>");
        for (j = 0; j < col; j++) {
            document.write("<td style=\"border: 1px solid " + color + "\";> &nbsp </td>");
        }
        document.write("</tr>");
    }    
    document.write("</table><br>");
}

crearTabla(10, 4);

crearTabla(20, 10, 'blue');

for (i = 0; i < 2; i++) {
    crearTabla(5, 4, 'green');
}
