function saudacao(nome)
{
    if(typeof nome != 'string')
    {
        throw new Error("Precisa ser uma string");
    }
    else
    {
        console.log(`Olá ${nome}.`);
    }
}

saudacao('Anderson');
saudacao(5);