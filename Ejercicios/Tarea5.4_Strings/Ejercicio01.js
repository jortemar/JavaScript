//1. Hacer mayúscula el primer carácter
function ucFirst(str) {
    palabra = str.slice(0,1).toUpperCase() + str.slice(1);   
    //palabra = str.substring(0,1).toUpperCase() + str.substring(1);
    //palabra = str.substr(0,1).toUpperCase() + str.substr(1,str.length - 1);
    alert(`La palabra con la primera letra en mayúscula es: ${palabra}`);
    //compruebo la longitud para asegurarme de que no me está cogiendo espacios en blanco al final
    alert(`La longitud de la palabra es ${palabra.length}`); 
}

ucFirst("john");
