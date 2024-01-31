let par = 0;
let impar = 0;
let x = 1;

var escolha = prompt("Deseja inserir [S] e não [N]");

function Par_Impar(numero)
{
    if(numero % 2 == 0)
    {
        console.log("Numero é par !");
        par = par + 1;
    }
    else
    {
        console.log("Numero é impar !");
        impar = impar + 1;
    }
}
while(x <= 10)
{
    if(escolha == "N")
    {
        console.log('Programa encerrado');
        break;
    }
    else if(escolha == "S")
    {
        var numero = prompt("Digite um numero :");
        var verificaNum = parseFloat(numero)
        if(isNaN(verificaNum))
        {
            console.log("Entre com um numero válido !");
        }
        else
        {
            var result = Par_Impar(verificaNum);
            console.log(result);
        }
    }
    x = x + 1;
}
console.log('O resultado de par foi:', par);
console.log('O resultado de impar foi:', impar);