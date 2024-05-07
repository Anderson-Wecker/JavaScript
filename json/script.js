let pessoa = 
{
    "nome": "Anderson",
    "idade": 28,
    "prof": "Programador",
    "hobbies": ["Video-game", "Leitura", "Ciclismo"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJson= JSON.parse(pessoaTexto);
console.log(pessoaJson);