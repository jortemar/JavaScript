/*******************
1. Filtrar miembros únicos del array

Digamos que arr es un array.
Cree una función unique(arr) que debería devolver un array con elementos
únicos de arr, sin elementos repetidos.
Por ejemplo:

function unique(arr) {
    tu código  }
    
let values = ["Buba", "Hugo", "Lisa", "Buba",
    "Hugo", "Lisa", "Lisa", "Hugo", "Cora"];

alert( unique(values) ); // Buba, Hugo, Lisa, Cora
P.D. Aquí se usan strings, pero pueden ser valores de cualquier tipo.
Pista: Use Set para almacenar valores únicos.
******************/

function unique(arr) {
    /*metemos el array como parámetro del constructor para volcarlo en una 
    variable de tipo set (colección). No tienen clave, solo valor.
    Automáticamente se eliminan los valores repetidos.*/
    let unicos = new Set(arr); 
    return unicos;    
    //return new Set(arr);
}

let values = ["Buba", "Hugo", "Lisa", "Buba",
    "Hugo", "Lisa", "Lisa", "Hugo", "Cora"];

let resultado = unique(values);

alert("Se han eliminado los nombres repetidos");

//RECORRER SET CON FOR
for (valor of resultado) {
    alert(valor);
} 

/*
//RECORRER SET CON FOREACH
resultado.forEach((valor) => {
    alert(valor);
});
*/


