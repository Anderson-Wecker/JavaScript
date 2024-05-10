function imprimirNoConsole()
{
    console.log("Olá, Mundo");
}

imprimirNoConsole();

function imprimirUmNumero(num)
{
    console.log("O número é: " + num);
}

imprimirUmNumero(2);

const numeroAleatorio = function()
{
    console.log(Math.floor(Math.random() * 100000));
}

numeroAleatorio();