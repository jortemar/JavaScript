function dibujarCuadrado(x,y,z,red,green,blue) {
    document.write(`<div style = "background-color:rgb(${red}, ${green}, ${blue});
    width:50px; height:50px; position:fixed; left:${x}vw;top:${y}vh;z-index:${z};"></div>`);
    //cada vez que se ejecuta la función, se inserta en el body del html una línea tal como esta
}
let posX,posY,posZ,rojo,verde,azul;

for (let i = 0; i < 2000; i++) {
    posX = Math.floor(Math.random()*101);
    posY = Math.floor(Math.random()*101);
    //posZ = Math.floor(Math.random()*10);
    //podemos prescindir de la posición z, ya que nos da igual que cuadrado esté delante de otro
    rojo = Math.floor(Math.random()*256);
    verde = Math.floor(Math.random()*256);
    azul = Math.floor(Math.random()*256);

    dibujarCuadrado(posX,posY,posZ,rojo,verde,azul);
}

//función opcional para reproducir una función indefinidamente con un intervalo determinado
/*
function cambiarColorFondo() {
    let myInterval = null;
    if (!myInterval) {
        myInterval = setInterval(clonarCuadrado, 3000);
    }
}

cambiarColorFondo();
*/