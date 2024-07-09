function teste()
{
    console.log(this);
}

teste();

const pessoa = 
{
    nome: "And",
    saudar: function()
    {
        console.log(`Olá ${this.nome}`);
    }
}
pessoa.saudar();

function Pessoa2(nome)
{
    this.nome = nome;
}

Pessoa2.prototype.saudar = function()
{
    setTimeout(function ()
    {
        console.log(`Olá ${this.nome}`);
    }.bind(this), 1000);
};

const pessoa2 = new Pessoa2("bbb");

pessoa2.saudar();

function mult(x)
{
    return function(y)
    {
        return x * y;
    };
}

const dobrar = mult(2);
const triplicar = mult(3);

console.log(dobrar(5));
console.log(triplicar(5));

function meuContador()
{
    let count = 0;

    return function()
    {
        count += 1;
        console.log(count);
    };
}

const criaCount = meuContador();

const num1 = [1,2,67,90,10,4];
const numSort = num1.toSorted((a, b) => a - b);

console.log(numSort);