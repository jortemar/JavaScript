Array.prototype.mediaAritmetica = function() {
    let suma = 0;
    /* Con el 'this' hacemos referencia al objeto
    sobre el que estamos aplicando el método */
    for (let i = 0; i < this.length; i++) {
        suma += this.at(i);
    }
    
    return (suma / this.length).toFixed(2);
}

let a = [];
for (let i = 0; i <= 4; i++) {
    a.push(Math.ceil(Math.random()*100));
}
alert(`Los valores del array son ${a}`);
alert(`La media de los valores del array es ${a.mediaAritmetica()}`);