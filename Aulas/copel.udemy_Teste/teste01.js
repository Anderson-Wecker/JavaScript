var nome = prompt("Insira qualquer coisa:");

if(nome.length > 10)
{
    console.log("Entrou no if");
}
else
{
    console.log(typeof(nome), nome);
}
