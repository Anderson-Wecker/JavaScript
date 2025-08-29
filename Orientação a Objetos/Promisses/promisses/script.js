// Utilizando Promisses

let num = Promise.resolve(5);

console.log("Inicio Promisse");

console.log(num);
num.then((value) => {console.log(`Valor Promisse ${value}`)});