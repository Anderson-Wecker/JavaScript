let frase = "Meu nome é Anderson";

function separaFrase(palavras)
{
    palavras = frase.split(" ");
    for(let i = 0;i < palavras.length;i++)
    {
        console.log(palavras[i]);
    }
}

separaFrase(frase);