async function esperarTiempos() {
    let mensaje1 = await Promise.resolve("Estoy resuelta");
    console.log(mensaje1);
    let mensaje2 = await new Promise((resolver) => {
        setTimeout(() => {
            resolver("resuelvo en 3s");
        }, 3000);
    });
    console.log(mensaje2);
    let mensaje3 = await new Promise((resolver) => {
        setTimeout(() => {
            resolver("resuelvo en 6s");
        }, 6000);
    });
    console.log(mensaje3);
}

esperarTiempos();