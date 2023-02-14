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

async function esperarTiempos() {
    let mensaje1 = await promesa1;
    console.log(mensaje1);
    let mensaje2 = await promesa2;
    console.log(mensaje2);
    let mensaje3 = await promesa3;
    console.log(mensaje3);
}

esperarTiempos();