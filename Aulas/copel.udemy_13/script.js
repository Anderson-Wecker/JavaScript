function somaNumeros(a, b)
{
    return a + b;
}

console.log(somaNumeros(3, 6));

const saudacao = function(nome)
{
    if(nome == "Anderson")
    {
        return "Olá Anderson";
    }
}

console.log(saudacao("Anderson"));

function podeDirigir(idade, CNH)
{
    if(idade >= 18 && CNH == true)
    {
        console.log('Pode dirigir');
    }
        else
        {
            console.log('Não pode dirigir');
        }
}

console.log(podeDirigir(18, 1));
console.log(podeDirigir(17, 0));