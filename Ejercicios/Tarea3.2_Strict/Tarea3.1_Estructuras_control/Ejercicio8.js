/*---------------------------------------------------------------
8. Realizar un programa que “implemente” el funcionamiento de un Cajero Automático, con
las siguientes características:
a. Las operaciones que se podrán realizar son:
MENU DEL CAJERO
1. Sacar dinero.
2. Ingresar dinero.
3. Consultar saldo.
4. Cambiar Contraseña.
5. Salir.
b. La operación para introducir la contraseña se realizará de forma automática
siempre que el usuario comience a utilizar el cajero.
c. Cada vez que el usuario realice una operación, se mostrará el resultado y volverá
aparecer el menú.
d. El cliente no podrá cometer más de tres errores en la introducción de la
contraseña. En el caso de que el usuario cometa más de tres errores al introducir la
contraseña, el programa acabará y no permitirá que el usuario acceda el menú del
cajero.
e. Cada vez que comience el programa el cliente del cajero siempre tendrá la misma
contraseña. (por ejemplo: DAW2) A no ser que la cambie.
f. Siempre que el usuario comience a utilizar el cajero tendrá 6.000 Euros en su
cuenta.
g. El cliente podrá sacar dinero siempre que tenga dinero suficiente.
Intenta minimizar todo lo que puedas el uso de variables.
Intenta utilizar variables locales siempre que puedas.
---------------------------------------------------------------*/

let num;
let contraseña = "DAW2";
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
        let nuevaContraseña = prompt("Introduzca su nueva contraseña");
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