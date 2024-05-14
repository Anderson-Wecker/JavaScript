let possuiCnh = prompt("Possui CNH ? SIM OU NÃO");
let idade = prompt("Qual a sua idade ?");

if(idade >= 18 && possuiCnh == "SIM")
{
    console.log('Pode dirigir.');
}
    else if(idade >= 18 && possuiCnh == "NÃO")
    {
        console.log('Maior de idade mas não possui CNH.');
    }
        else if(idade < 18 && possuiCnh == "NÃO")
        {
            console.log('Sem premissão para dirigir.');
        }