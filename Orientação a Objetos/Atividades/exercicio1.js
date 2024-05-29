let diaSemana = "";

function trueOrFalse(diaSemana)
{
    if(diaSemana === "Domingo")
    {
        console.log("Hoje é dia de futebol !!!");
    }
    else 
    {
        console.log("Hoje não é dia de futebol !!!");
    }
}

trueOrFalse("Domingo");
trueOrFalse("Segunda");


function maiorMenor(num1, num2)
{
    if(num1 > num2)
    {
        console.log("Numero 1 maior");
    }
    else if(num2 > num1)
    {
        console.log("Numero 2 maior");
    }
    else 
    {
        console.log("Numeros iguais");
    }
}

maiorMenor(2,1);
maiorMenor(10,20);
maiorMenor(10,10);

function numeroSorte(num)
{
   let num = num > 0;
   return true; 
}

numeroSorte(2);