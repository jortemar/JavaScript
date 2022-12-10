Array.mediaAritmetica(lista) {
    let suma = 0;
    for (i in lista) {
        suma += lista[i];
    }

    return suma / lista.lenght();
}