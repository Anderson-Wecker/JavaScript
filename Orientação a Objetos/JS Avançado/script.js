// //JavaScript Avançado 

// //Manipulação de arrays
// const frutas = ['Maça', 'Laranja'];

// //add um elemento à array
// frutas.unshift('Acerola');
// console.log(frutas);

// //remove o último elemento
// frutas.shift();
// console.log(frutas);

// //map, filter, reduce, -> arrow function
// const numeros = [1, 2, 3, 4, 5];

// //find => retorna o primeiro elemento do critério
// const numerosPar = numeros.find((num) => num % 2 === 0);

// console.log(numerosPar);

// //filter => retorna todos os elementos que batem com o critério
// const numerosPares = numeros.filter((num) => num % 2 === 0);
// console.log(numerosPares);

// //Manipulção de strings
// const frase = " Olá, mundo! ";
// console.log(frase);

// //trim = remove os espaços em branco
// const palavras = frase.trim().split(" ");
// console.log(palavras);

// const idade = 15;
// // if(idade < 18)
// // {
// //     throw new Error("Você deve ter pelo menos 18 anos");
// // }

// try
// {
//     const idade = 15;
//     if(idade < 18)
//     {
//         throw new Error("Você deve ter pelo menos 18 anos");
//     }
// }catch(error)
// {
//     console.log(error.message);
// }

// //Callback => função
// // function comprimentar(nome, Callback)
// // {
// //     console.log('ÓLA, ' + nome);
// //     Callback();
// // }

// // function mostrarSaudacao()
// // {
// //     console.log('Como você esta?');
// // }

// // comprimentar('Anderson', mostrarSaudacao);

// // //settimeout => dps de um tempo, executa algo uma vez
// // function mostrarMensagem()
// // {
// //     console.log('Essa mensagem será exibida após 3 segundos.');
// // }
// // setTimeout(mostrarMensagem, 3000);

// //Promises
// const promessa = new Promise((resolve, reject) => {
//     const condicao = false;

//     if(condicao)
//     {
//         resolve('A condição é verdadeira.');
//     }
//     else
//     {
//         reject('A condição é falsa.');
//     }

// });

// promessa.then((mensagem) => {
//     console.log(mensagem);
// }).catch((erro) =>{
//     console.log(erro);
// });

// const promessa1 = new Promise.resolve(3);
// const promessa2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2500, 'testando')
// });

// Promise.all([promessa1, promessa2]).then((valores) => console.log(valores));

// //Async await
// async function obterValor()
// {
//     const promessa = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Obter valor'), 2000);
//     });
//     const valor = await promessa;
//     console.log(valor);
// }

// obterValor();

// JSON => Javascript object notation
//padroniza a comunicação entre front-end e back-end
// const objeto = {nome: 'João', idade: 23}

// const jsonString = JSON.stringify(objeto);
// console.log(jsonString);
// console.log(typeof jsonString);

// const json = '{"nome": "João", "idade": 23}';

// const objeto2 = JSON.parse(json);

// console.log(objeto2);

// //Método ForEach
// let nomes = ["Anderson", "Vitoria", "Rosi"];

// nomes.forEach(nome => {
//     console.log("O nome é " + nome);

// });

// //Método includes
// let carros = ["BMW", "Fiat", "Corsa"];

// console.log(carros.includes("Fiat"));

// if(carros.includes("Corsa") == true){
//     console.log("Carro Existente na lista.");
// }
// else
// {
//     console.log("Carro não existente na lista!!!");
// }

// //Método Reverse 
// let arr = [1,2,3,4,5,6,7,8,9];

// console.log(arr.reverse());

// //Método trim
// let text = '\n teste \n';
// console.log(text.trim());

// //Método padStart
// let milAoContrario = '1';
// console.log(milAoContrario.padStart(4, "0"));

// //Método split
// let frase = "O meu nome é Anderson";

// let palavras = frase.split(" ");

// console.log(palavras);

// //Método join
// let fraseMontada = palavras.join("<->");

// console.log(fraseMontada);

// //Método repeat
// let repe = "Nome";

// console.log(repe.repeat(5));

// let listCompra = [];
// console.log(listCompra);

// listCompra.push("Arroz");
// listCompra.push("Feijão");
// listCompra.push("Macarrão");
// listCompra.push("Batata");
// listCompra.push("Sal");
// console.log(listCompra);
// listCompra.shift();
// console.log(listCompra);

// const numeros = [3, 7, 14, 20, 21, 29, 36, 42];
// const num = numeros.find((element) => element % 7 === 0 && element > 10);
// console.log(num);

// const numeros1 = [5, 10, 15, 20, 25, 30, 35, 40];
// const num1 = numeros1.filter((element1) => element1 > 20);
// console.log(num1);

// const string = " Bom dia, mundo! ";
// const semEsp = string.trim().split(" ");
// console.log(semEsp);

// const frase = "O rato roeu a roupa do rei de roma";

// const iniFrase = frase.startsWith("O");
// console.log(iniFrase);

// const endFrase = frase.endsWith("roma");
// console.log(endFrase);

