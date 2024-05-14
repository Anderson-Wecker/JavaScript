/*
let carros = ['BMW', 'AUDI', 'VW', 'FIAT'];

//Método shift remove o primeiro elemento do array
let removePrimeiroCarro = carros.shift();

console.log(removePrimeiroCarro);
console.log(carros);

//Método unshift adiciona um elemento ao último indice do array
carros.unshift('Gurgel');
console.log(carros[0]);


let nums = [5, 6, 2, 4, 9, 6, 2];

//mostra o primeiro índice em que tenha 2
console.log(nums.indexOf(2));

//mostra o último índice que tenha 2
console.log(nums.lastIndexOf(2));

let nums = [5, 6, 2, 4, 9, 6, 2];

console.log(nums.slice(2,9));
console.log(nums.indexOf(6));
*/
var num =[];

for(let i = 0;i < 5;i++)
{
    var nums = parseInt(prompt('Entre com um valor'));
    num.push(nums);
}

console.log(`Números ${num}`);
