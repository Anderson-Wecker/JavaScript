let a = 2;
let b = 3;

if(a + b == 3)
{
    console.log('O resultado é 3');
}
else if(a + b == 4)
{
    console.log('O resultado é 4');
}
else if(a + b == 3)
{
    console.log('O resultado é 5');
}
else 
{
    console.log('Nenhum dos resultados');
}

let nome = "Anderson";

if(nome != undefined && nome.length > 10)
{
    console.log('Nome está definido');
}
else if(nome == "Anderson" && nome.length > 5)
{
    console.log(`O nome é ${nome}`);
}

let num = Math.floor(Math.random() * 100);

console.log(`O numero sorteado é ${num}`);

if(num < 50 && num > 0)
{
    console.log(`O numero é menor que 50 o numero sorteado foi ${num}`);
}
else if(num >= 50 && num <= 100)
{
    console.log(`O numero é maior que 49 o numero sorteado foi ${num}`);
}