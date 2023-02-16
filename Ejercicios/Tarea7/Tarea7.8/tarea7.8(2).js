

let table = document.createElement("table");
document.body.appendChild(table);
let thead = document.createElement("thead");
table.appendChild(thead);
let tr = document.createElement("tr");
thead.appendChild(tr);
tr.innerHTML = "<th>Nombre</th><th>surname</th><th>age</th>";
let tbody = document.createElement("tbody");
table.appendChild(tbody);
for(let i = 0; i < 5; i++){
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let td = document.createElement("td");
    tr.appendChild(td);
    td.id = "nom";
    td.innerHTML = nombre();
    let td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.innerHTML = apellido();
    let td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.innerHTML = edad();

}
    let nom = document.querySelectorAll("#nom");
    let nomArray = [];
    for(let i = 0; i < nom.length; i++){
        nomArray.push(nom[i].innerHTML);
    }
    nomArray.sort();
    for(let i = 0; i < nom.length; i++){
        nom[i].innerHTML = nomArray[i];
    }

function nombre ()
{
    let respuesta = new Array ("aco", "bohn", "comas", "noloban");
    let aleatorio=Math.floor((Math.random()*4));
    return respuesta[aleatorio];
}
function apellido ()
{
    let respuesta = new Array ("martinez", "garcia", "rampage", "sulivan");
    let aleatorio=Math.floor((Math.random()*4));
    return respuesta[aleatorio];
}
function edad ()
{
    let respuesta = new Array ("14", "34", "100", "45");
    let aleatorio=Math.floor((Math.random()*4));
    return respuesta[aleatorio];
}