let nomes = ["Anderson", "Vitoria", "Rosi", "Evelize", "Lourival"];

if(nomes.includes("Anderson") == true)
{
    console.log("Seu nome está na lista");
}
else
{
    console.log("Seu nome não esta na lista");
}
console.log("Termino primeira etapa");

const numeros = [1,2,3,4,5,6,7,8,9,10];
let count = 5;

console.log(`Você tem ${count} chances de acertar`);
for(let i = 0;i < 5;i++)
{
    let opcao = parseInt(prompt("Escolha um numero"));
    if(numeros.includes(opcao))
    {
        console.log("Parabéns você acertou o numero");
        break;
    }
    else 
    {
        count--;
        console.log("Você errou tente mais uma vez !");
        console.log(`Você tem ${count} chances`);
    }
}