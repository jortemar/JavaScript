//2. Buscar spam
function checkSpam(str) {
    str = str.toLowerCase();
    mostrarMensaje((str.includes("viagra") || str.includes("xxx")) ? true:false, str);
    /*
    spam = false;
    if (str.includes("viagra") || str.includes("xxx")) {
        spam = true;
    }
    mostrarMensaje(spam, str);
    */
}
function mostrarMensaje(spam, str) {
    if (spam) {
        alert("Mensaje poco apropiado");
    } else
        alert(str);
}

checkSpam('compra ViAgRa ahora'); 
checkSpam("xxxxx gratis");
checkSpam("coneja inocente");
