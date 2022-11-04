function dibujarCuadrado(x,y,z,red,green,blue) {
    document.write(`<div style = "background-color:rgb(${red}, ${green}, ${blue}); width:50px; height:50px; position:fixed; left:${x}vw;top:${y}vh;z-index:${z};"></div>`);
}
let posX,posY,posZ,rojo,verde,azul;

for (let i = 0; i < 2000; i++) {
    posX = Math.floor(Math.random()*101);
    posY = Math.floor(Math.random()*101);
    //posZ = Math.floor(Math.random()*10);
    rojo = Math.floor(Math.random()*256);
    verde = Math.floor(Math.random()*256);
    azul = Math.floor(Math.random()*256);

    dibujarCuadrado(posX,posY,posZ,rojo,verde,azul);
}

//actividad para cambiar el color de fondo automáticamente
//la función setInterval va ejecutando una determinada función con una diferencia de tiempo
//que le damos como entrada en el parámetro. 1º parametro: funcion. 2º parametro: intervalo


/*
function cambiarColorfondo() {
    let myInterval = null;
    if (!myInterval) {
        myInterval = setInterval(dibujarCuadrado, 1000);
    }
}
*/
//cambiarColorFondo();
