const numSorteado = Math.floor(Math.random() * 100);
let i = 1;

console.log(numSorteado);
while(i <= 10)
{
    let valor = prompt('Qual o valor ?');
    if(valor != numSorteado && valor < numSorteado)
    {   
        console.log(`Valor digitado ${valor} é menor, numero de tentativas ${i}`);
    }
        else if(valor != numSorteado && valor > numSorteado)
        {
            console.log(`Valor digitado ${valor} é maior, numero de tentativas ${i}`);
        }
            else if(valor != numSorteado && i >= 10)
            {
                console.log('Você acertou !!');
                break;
            }
    i++;
}