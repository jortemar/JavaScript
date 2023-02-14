async function falla() {
    try {
        let resultado = await Promise.reject("Estoy rechazada");
    } catch (error) {
        console.log(error);
    }
}

falla();