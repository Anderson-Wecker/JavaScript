//Utilizando erros com promisses

let num = Promise.resolve(new Error("Não deu certo"));

console.log("Qualquer coisa");


num.then((value) => console.log(value))
.catch(reason => console.log(`Falhou ${reason}`));