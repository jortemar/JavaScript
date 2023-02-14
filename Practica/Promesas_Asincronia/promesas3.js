//EJEMPLO 3
let promesa1 = Promise.resolve("Estoy resuelta");
let promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("resuelvo en 3s");
    }, 3000);
});
let promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("resuelvo en 6s");
    }, 6000);
});

//Necesitamos que todas las promesas sean satisfactorias para que Promise.all no devuelva error
let promesaConjunta = Promise.all([promesa1, promesa2, promesa3]);

console.log("Empezando...");

promesaConjunta.then((resultados) => {
    let num = 1;
    for (let resultado of resultados) {
        console.log(`Promesa nº ${num}: Mensaje:${resultado}`);
        num++;
    }
});