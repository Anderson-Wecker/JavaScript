//DOM -> Document Object Model

// Selecionar elementos
const elementoPorId = document.getElementById("meuId");

//manipular o conteúdo do texto
const element = document.querySelector("#meuId");
console.log(element.textContent);

setTimeout(() => 
{
    element.textContent = "Mudei de texto";
});

// trabalhando com atributos
const link = document.querySelector("a");

console.log(link);

link.setAttribute("href", "https://horadecodar.com.br/cursos");

console.log(link.getAttribute("href"));

//navegação entre nós
const element1 = document.querySelector("#meuInput");

const pai = element1.parentNode;

console.log(pai);

//obter elemento pai e elemento filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);

//manipulação de estrutura do dom
const novoElemento = document.createElement("div");

console.log(novoElemento);

novoElemento.textContent = "Minha div de Javascript";
console.log(novoElemento);

document.body.appendChild(novoElemento);
