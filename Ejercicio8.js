let num;
let contraseña = "DAW2";
let nuevaContraseña;
let saldo = 6000;

if (introducirContraseña()) {

    do {
        do {
            num = parseInt(prompt("Elija una opción\n\n"+
                                        "MENU DEL CAJERO\n" + 
                                        "   1. Sacar dinero\n" + 
                                        "   2. Ingresar dinero\n" +
                                        "   3. Consultar saldo\n" +
                                        "   4. Cambiar contraseña\n" +
                                        "   5. Salir"));

        } while (num < 1 || num > 5);                                

        switch (num) {
            case 1:
                sacarDinero();
                break;
            case 2:
                ingresarDinero();
                break;
            case 3: 
                consultarSaldo();
                break;
            case 4:
                cambiarContraseña();
                break;   
        }             

    } while (num != 5);
}

alert("Gracias por utilizar este cajero");

function introducirContraseña() {
    num = 0; //reutilizo num como contador

    do {
        if (prompt("Introduzca su contraseña") == contraseña) {
            return true;
        } else
            num++;
    } while (num != 3);

    alert("Ha agotado los tres intentos");
    return false;
}

function sacarDinero() {
    num = parseInt(prompt("¿Cuánto dinero quiere sacar?"));

    if (num <= saldo) {
        saldo -= num;
        alert("Aquí tiene sus " + num + " euros");
    } else
        alert("Ha solicitado " + num + " euros. No tiene tanto dinero en la cuenta");
}

function ingresarDinero() {
    num = parseInt(prompt("¿Cuánto dinero quiere ingresar?"));
    saldo += num;
    alert("Ha ingresado " + num + " euros");
}

function consultarSaldo() {
    alert("Su saldo es de " + saldo + " euros");
}

function cambiarContraseña() {

    if (introducirContraseña()) {
        nuevaContraseña = prompt("Introduzca su nueva contraseña");
        if (nuevaContraseña == prompt("Introduzca otra vez su nueva contraseña")){
            contraseña = nuevaContraseña;
            alert("Su nueva contraseña es " + contraseña);
        }
        else 
            alert("Las dos contraseñas introducidas no coinciden");
    } 
}

/*------------------------------------------------------------------------------
Si nos ceñimos estrictamente a lo que pide el enunciado, el programa podría
hacerse con tres variables. Prescindiríamos de nuevaContraseña, la cual utilizamos
para confirmar el cambio de contraseña. Si lo quitáramos quedaría así:

function cambiarContraseña() {
    
    if (introducirContraseña()) {
        contraseña = prompt("Introduzca su nueva contraseña");
        alert("Su nueva contraseña es " + contraseña);
    }
}
--------------------------------------------------------------------------------*/