function sortearNumeros()
{
    let numeros = [];
    for(let i = 0;i < 5;i++)
    {
        numeros[i] = Math.floor(Math.random() * 100);
    }
        for(let i = 0;i < 5; i++)
        {
            console.log(numeros[i]);
        }
}

function mensagem()
{
    let x = true;
    let y = "Cancelar";
    let teste = confirm('Sorteador')
    if(x == true)
    {
        sortearNumeros();
    }
        else
        {
            y = console.log('Cancelou');
            exit(0);
        }
}
mensagem();