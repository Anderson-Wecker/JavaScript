//Método ForEach
let nomes = ["Anderson", "Vitoria", "Rosi"];

nomes.forEach(nome => {
    console.log("O nome é " + nome);

});

//Método includes
let carros = ["BMW", "Fiat", "Corsa"];

console.log(carros.includes("Fiat"));

if(carros.includes("Corsa") == true){
    console.log("Carro Existente na lista.");
}
else
{
    console.log("Carro não existente na lista!!!");
}

//Método Reverse 
let arr = [1,2,3,4,5,6,7,8,9];

console.log(arr.reverse());

//Método trim
let text = '\n teste \n';
console.log(text.trim());

//Método padStart
let milAoContrario = '1';
console.log(milAoContrario.padStart(4, "0"));

//Método split
let frase = "O meu nome é Anderson";

let palavras = frase.split(" ");

console.log(palavras);

//Método join
let fraseMontada = palavras.join("<->");

console.log(fraseMontada);

//Método repeat
let repe = "Nome";

console.log(repe.repeat(5));