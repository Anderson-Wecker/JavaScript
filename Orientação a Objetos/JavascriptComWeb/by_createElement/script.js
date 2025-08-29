let lista = document.createElement("ul");

let item = document.createElement("li");

let texto = document.createTextNode("Texto create element");

item.appendChild(texto);

for(let i = 0;i < 5;i++)
{
    let item = document.createElement("li");
    let texto = document.createTextNode("Texto create element");
    item.appendChild(texto); 
    lista.appendChild(item);
}

let container = document.getElementById ('container-principal');
container.appendChild(lista);