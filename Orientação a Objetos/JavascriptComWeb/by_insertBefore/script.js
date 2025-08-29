let novoElemento = document.createElement("p");
let texto = document.createTextNode("InsertBefore");
novoElemento.appendChild(texto); 
let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);

let newElement = document.createElement("h1");
let h1Text = document.createTextNode("Elemento de Título Criado pelo Javascript");
newElement.appendChild(h1Text);
let classP = document.querySelector("#meu-id");
let elementFather = document.querySelector("#segundo-container");

elementFather.insertBefore(newElement, classP);