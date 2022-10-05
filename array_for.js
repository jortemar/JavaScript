let sistemaSolar = [];
sistemaSolar[0] = "Mercurio";
sistemaSolar[1] = "Venus";
sistemaSolar[2] = "Tierra";
sistemaSolar[3] = "Marte";
sistemaSolar[4] = "Júpiter";
sistemaSolar[5] = "Saturno";
sistemaSolar[6] = "Urano";
sistemaSolar[7] = "Neptuno";

//FOR
let mensaje = "Planetas del Sistema Solar: \n";
for(let i = 0; i < sistemaSolar; i++) {
    mensaje += sistemaSolar[i] + ", ";
}
//alert(mensaje);
mensaje += "\n";
//FOR IN
for (let i in sistemaSolar) {
    mensaje += sistemaSolar[i] + ", ";
}
alert(mensaje);
//FOR OF
for (let planeta of sistemaSolar) {
    mensaje += planeta + ", ";
}
mensaje += " \n";
sistemaSolar.forEach(planeta=> {
    mensaje += planeta + ", ";
})
mensaje += " \n";

sistemaSolar.forEach((planeta, indice)=> {
    mensaje += ((indice + 1) + "._" + planeta + ", ");
})

alert(mensaje);

//isArray devuelve un booleano
if (Array.isArray(sistemaSolar)) {
    alert("Es un array");
} else
    alert("No es un array");

// concat
sistemaSolar = sistemaSolar.concat(sistemaSolar);
alert(sistemaSolar);

let galaxias = [];
galaxias[0] = "Andromeda";
galaxias[1] = "Vía Láctea";

sistemaSolar = sistemaSolar.concat(galaxias);
alert(sistemaSolar);

// join (nos separa los elementos del array con el parámetro)
alert(sistemaSolar.join("-"));
alert(sistemaSolar.join("\n")); 

//includes
if (sistemaSolar.includes("Marte")) {
    alert("Marte está incluido en el array");
} else 
    alert("No está incluido");

let planeta = "Cancrib";    
if (sistemaSolar.includes(planeta)) {
    alert(planeta + " está incluido en el array");
} else 
    alert(planeta + " no está incluido");
    
//pop (elimina la última posición del array y la devuelve)
let devuelveUltimaPosicion = sistemaSolar.pop();
alert(devuelveUltimaPosicion);

//push (añade elementos al array y devuelve longitud)
let nuevaLongitud = sistemaSolar.push("almendra", "tocino");
alert(nuevaLongitud);

//shift (elimina el primer elemento y lo devuelve)
let primerElementoArray = sistemaSolar.shift();
alert(primerElementoArray);

//unshift () (añade al principio del array. Devuelve longitud)
let nuevaLongitud2 = sistemaSolar.unshift("butifarra", "pepino");
alert(nuevaLongitud2);

//slice(a,b) Extrae elementos del array entre parámetros
let sistemaSolarSlice = sistemaSolar.slice(3,5);

//sort (ordena)
sistemaSolar.sort();

