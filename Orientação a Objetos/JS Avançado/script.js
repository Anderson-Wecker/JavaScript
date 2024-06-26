//JavaScript Avançado 

//Manipulação de arrays
const frutas = ['Maça', 'Laranja'];

//add um elemento à array
frutas.unshift('Acerola');
console.log(frutas);

//remove o último elemento
frutas.shift();
console.log(frutas);

//map, filter, reduce, -> arrow function
const numeros = [1, 2, 3, 4, 5];

//find => retorna o primeiro elemento do critério
const numerosPar = numeros.find((num) => num % 2 === 0);

console.log(numerosPar);

//filter => retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares);

//Manipulção de strings
const frase = " Olá, mundo! ";
console.log(frase);

//trim = remove os espaços em branco
const palavras = frase.trim().split(" ");
console.log(palavras);

const idade = 15;
// if(idade < 18)
// {
//     throw new Error("Você deve ter pelo menos 18 anos");
// }