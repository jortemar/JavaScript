let arr = [3, 5, 1];

alert(Math.max(...arr));

/*
Esta expresión daría error (NaN)
alert(Math.max(arr));
*/

/* podemos introducir como argumento varios
arrays, y también mezclarlo con números */
let arr1 = [1, -2, 16, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(...arr1, ...arr2, 27, 9, 16));

// el operador spread también puede ser usado para combinar arrays
let arr3 = [2, 5, 8];
let arr4 = [7, -6, 15];

let merged = [0, ...arr3, -12, 27, ...arr4, 1];
alert(merged);

// también vale para convertir una cadena en un array de caracteres
let str = "Hola";
alert([...str]);  //H,o,l,a

// esto también lo hace el Array.from()
alert(Array.from(str)); //H,o,l,a