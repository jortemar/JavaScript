//3. Truncar el texto
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        alert(`${str.slice(0,maxlength)}...`);
    } else
        alert(str);
}

truncate("Lo que me gustaría contar sobre este tema es:", 20);
truncate("Hola a todos!", 20);