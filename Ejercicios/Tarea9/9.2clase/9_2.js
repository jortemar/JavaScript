export function temporizador(tiempo) {
    let promesa = new Promise((resolver,rechazar) => {
        let temp;
        let temp2;

        temp = setTimeout(() => {
            clearTimeout(temp2);
            resolver("Tiempo concluído");
        }, tiempo);

        temp2 = setTimeout(() => {
            rechazar("El tiempo no va bien");
        }, tiempo*2);

    });
    return promesa;
}

export async function cuenta(numero, elemento, tiempo = 1000, f) {
    try{
        for (let i = numero; i >= 0; i--) {
            await temporizador(tiempo);
            elemento.textContent = i; 
        }
        if (f) {
            f();
        } 
    }catch(e) {
        console.log("Error: " + e);
    }
}
