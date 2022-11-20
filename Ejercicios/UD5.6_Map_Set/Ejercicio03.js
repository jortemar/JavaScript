/*
3. Claves iterables

Nos gustaría obtener un array de map.keys() en una variable y luego
aplicarle métodos específicos de array, ej. .push.

Este código no funciona:

let map = new Map();
map.set("name", "Cora");
let keys = map.keys();
// Error: keys.push no es una función
keys.push("Morfero");

¿Por qué? ¿Cómo podemos arreglar el código para que funcione keys.push?
*/

let map = new Map();
map.set("name", "Cora");
let keys = map.keys();
// Error: keys.push no es una función
for (pal of map.keys()) {
    keys.push(pal);
}
keys.push("Morfero");