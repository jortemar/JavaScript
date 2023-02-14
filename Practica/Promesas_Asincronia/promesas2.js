let promesa = new Promise((resolver) => {
    let n = 0;
    // el contenido del setInterval se ejecuta una vez por segundo.
    //Por lo tanto, tardará cinco segundos en alcanzar la condición de salida
    let intervalo = setInterval(() => {
        n++;
        if (n == 5) {
            resolver("Han pasado 5 segundos");
            clearInterval(intervalo);
        }
    }, 1000);
});

// El return es a su vez otra promesa, y también ejecuta el método then
// Primero se lanza la función resolver, y después se ejecuta el return.
// Es decir, en primer lugar se ejecuta el segundo 'console.log'
promesa.then((mensaje) => {
    console.log(mensaje);
    return "Se ha cerrado el temporizador";
}).then((mensaje) => {
    console.log(mensaje);
});


