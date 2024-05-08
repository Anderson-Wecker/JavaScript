let pessoa = 
{
    "Nome": "Anderson",
    "Sobrenome": "Wecker",
    "Idade": 24
}

console.log(pessoa.Nome);
console.log(pessoa.Sobrenome);
console.log(pessoa.Idade);

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);