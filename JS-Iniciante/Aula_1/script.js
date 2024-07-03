// //console
// console.error("Este é um erro");
// console.warn("Error");
// console.log("Hello, World !!");

// //variável
// var x = 10;
// let y = 15;
// const z = 26;

// if(1)
// {
//     const z = 20;
// }

// console.log(x);
// console.log(y);
// console.log(z);

// const name = 'Anderson';
// console.log(name);
// console.log(typeof name);

// let age;
// console.log(age);
// console.log(typeof age);

// const user = {email: 'And.cpl@gmail.com', passworld: 'teste123' };
// console.log(user);

// const nome = "Anderson Wecker";
// console.log(nome.length);

// const stringFull = nome.split(' ');
// console.log(nome.toLowerCase());

// console.log(nome.indexOf('Wecker'));

// console.log(nome.slice(0, 7));

// //métodos de array
// const list = ['a', 'b', 'c', 'd'];
// console.log(list.length);


// console.log(list[2]);
// list[5] = 'f';
// console.log(list);

// console.log(list[list.length - 1]);

// console.log(list.shift())

// const product =
// {
//     name: 'camisa',
//     price: 15.99,
//     inStock: true,
//     sizes: ['P', 'M', 'G']
// }

// console.log(product.nome);

// const {price, inStock} = product;

// console.log(price);
// console.log(inStock);

// //Json - JavaScript Object Notation
// const dog =
// {
//     name: 'Shark',
//     age: 10
// }
// const json = JSON.stringify(dog);

// console.log(json);

// //if ternário
// let number = 20;

// let testingNumber = number < 20 ? 'Yes' : 'No';

// console.log(testingNumber);

// //estrutura de repetição
// const num = [1,2,3,4,5];
// let counter = 0;

// while(counter < num.length)
//     {
//         console.log('Imprimindo : ' + num[counter]);
//         counter++;
//     }


// const num2 = ['a', 'b', 'c', 'd', 'e'];
// for(let i = 0;i < num2.length;i++)
// {
//     console.log(`Imprimindo ${num2[i]}`);
// }

// //metódos de array -> repetição
// const names = ['Anderson', 'Vitoria', 'Rosi'];

// names.forEach(function(name){
//     console.log(`O nome é ${name}`);
// });

// const modifedNames = names.map(function(name){
//     if(name === 'Anderson')
//     {
//         return (name = 'Sr. Anderson');
//     }
//     else
//     {
//         return name;
//     }
// });

// console.log(modifedNames);

// const bigNumbers = [1,2,3,4,6,7,8,190].filter(function(number)
// {
//     return number >= 5
// });

// console.log(bigNumbers);

// const sumAll = [10,20,30,40].reduce(function(total,number)
// {
//     return total + number;
// });

// console.log(sumAll);

//Funções
function minhaFunc()
{
    console.log('Olá Função');
}

minhaFunc();

function nomeCompleto(nome, sobrenome)
{
    return `O nome completo é: ${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Anderson', 'Wecker'));


//arrow functions
const myArroFunction = (a, b) =>
{
    return a + b;
}
console.log(myArroFunction(2, 5));

const mysimpleArrowFunc = (a , b) => a + b;

console.log(mysimpleArrowFunc(2,7));

// classes
class Product
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }
    producDetails()
    {
        return `Nome: ${this.name} Preço: R$${this.price}`;
    }
}

const shok = new Product('Meia Branca', 10.99);
const shirt = new Product('Camisa preta', 22.99);

console.log(shok.producDetails());
console.log(shirt.producDetails());

class superProduct extends Product
{
    constructor(name, price, size)
    {
        super(name, price)
        this.size = size;
    }
    showAdjective(adjective)
    {
        return `O ${this.name} é muito ${adjective}`;
    }
}

const tenis = new superProduct('Tênis vermelho', 59.90, '42');
console.log(tenis.name);
console.log(tenis.size);

console.log(tenis.showAdjective('Bom'));

// DOM - document object model
const title = document.getElementById("title");
console.log(title);

//query selector
const sameTitle = document.querySelector('#title');
console.log(sameTitle);

const text = document.querySelectorAll('.text');
console.log(text);
console.log(text[1]);

text.forEach((text) => 
{
    console.log(text.textContent.toUpperCase());
});

title.textContent = 'Mudei o texto';

text[0].innerHTML = '<span>Alteramos o html deste elemento</span>';

//eventos
const btn = document.querySelector('#btn');
btn.addEventListener("click", function()
{
    text[2].style.color = 'blue';
});
