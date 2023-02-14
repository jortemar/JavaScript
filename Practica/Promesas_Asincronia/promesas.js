// La promesa se construye con dos funciones de callback. Una para la resolución con éxito y otra para lo contrario
let promesa = new Promise((resolver, rechazar) => {
    let n1 = 3;
    let n2 = 3;
    if (n1 == n2) {
        resolver("Son iguales");
    } else
        rechazar(Error("No son iguales, algo raro ha pasado"));
});

// Con el método .then generamos la acción.
// También puede recibir dos funciones, una de éxito y otra de fracaso, pero se suele usar un catch para capturar errores
promesa.then((respuesta) => {
    console.log(respuesta);
}).catch((error) => {
    console.log("Error" + error);
});


// Probamos también que se ejecuta la función 'rechazar'
let promesa2 = new Promise((resolver, rechazar) => {
    let n3 = 3;
    let n4 = 5;
    if (n3 == n4) {
        resolver("Son iguales");
    } else
        rechazar(Error("No son iguales, algo raro ha pasado"));
});

promesa2.then((respuesta) => {
    console.log(respuesta);
}).catch((error) => {
    console.log("Error" + error);
});