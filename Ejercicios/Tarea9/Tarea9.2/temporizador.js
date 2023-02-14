export function temporizador(ms) {
    let promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        resolver("Tiempo concluido");
    }, ms);
    //si pasa el doble de tiempo del que debería, daría error
    setTimeout(() => {
        rechazar("El tiempo no va bien");
    }, ms*2);
    });

    return promesa;
}

export async function cuenta(num, elem, intervalo = 1000, func) {  
    document.body.appendChild(elem);

    try {
        for (let i = num; i >= 0; i--) {
            await temporizador(intervalo);
            elem.textContent = i;
        }
        if (func) {
            func();
        }
    } catch (error) {
        console.log("Error: " + error);
    }
}