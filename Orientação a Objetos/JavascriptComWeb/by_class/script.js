let newElement = document.createElement("h2");

let textoH2 = document.createTextNode("Título secundário");
newElement.appendChild(textoH2);
let elementoAlvo = document.querySelector("#paragrafo-prime-div");
let elementoPai = document.querySelector("#primeira-div");

elementoPai.insertBefore(newElement, elementoAlvo);


let newsLi = document.createElement("li");
let alvo = document.querySelector("#primeira-ul");
let pai = document.querySelector("#terceira-div");

pai.insertBefore(newsLi, alvo);