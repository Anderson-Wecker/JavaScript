/*
function soma(a, b)
{
    if(a === undefined || b === undefined)
    {
        console.log("Esta função precisa ter dois argumentos ");
    }
    else
    {
        return a + b;
    }
}
console.log(soma(1));
console.log(soma(1, 2));

function saudacao(nome, sobrenome)
{
    if(nome === undefined || sobrenome === undefined)
    {
        console.log("Os dados devem ser definidos.");
    }
    else
    {
        return console.log(`Olá ${nome} ${sobrenome}`);
    }
}
console.log(saudacao('Anderson'));
console.log(saudacao('Anderson', 'Wecker'));

function potencia(base, exp=2)
{
    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));

function comprimento(nome, idade=24)
{
    return console.log(`Olá ${nome} sua idade é ${idade}`);
}

console.log(comprimento('Anderson'));
console.log(comprimento('Mario', 18));
*/
function lembrarSoma(x)
{
    return function(y)
    {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));

function recursao(n)
{
    if(n - 1 < 2)
    {
        console.log("Recursão parou");
    }
        else if(n % 2 != 0)
        {
            console.log("Número ímpar" + n);
            recursao(n - 1);
        }
        else
        {
            console.log("Número par " + n);
            recursao(n - 2);
        }
}

recursao(12);