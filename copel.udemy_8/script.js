//Estrutura WHILE 
let x = 1;

while(x <= 10)
{
    console.log('Not Found', x);
    x = x + 1;
}


//Estrutura Do While
x = 1;

do
{
    console.log(x);
    x = x + 1;
}while(x <= 10);
console.log("Obrigado");

let y = 100;

do
{
    console.log(y / 2);
    y = y - 5;
}while(y >= 0);

// Estrutura For
let nome = "Anderson";
for(let num = 2; num < 100;num = num * 2)
{
    console.log(`O numero é ${num} e ${nome}`);
}