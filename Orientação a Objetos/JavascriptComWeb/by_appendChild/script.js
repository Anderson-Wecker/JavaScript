let novoElemento = document.createElement("p");
let text = document.createTextNode("Texto Novo");
novoElemento.appendChild(text);

let p = document.querySelector("#meu-id");
let pai = p.parentNode;

pai.appendChild(novoElemento);


let newElement = document.createElement("h2");
let texto = document.createTextNode("Algum Título 2");

newElement.appendChild(texto);

let newH2 = document.querySelector("#titulo-principal");
let = newH2.parentNode;

newFather.appendChild(newElement);