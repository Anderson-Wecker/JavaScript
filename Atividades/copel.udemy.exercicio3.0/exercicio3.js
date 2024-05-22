//Criação classe funcionário
class Func 
{
    constructor(nome, funcao, dt_adm, idade)
    {
        this.nome = nome;
        this.funcao = funcao;
        this.dt_adm = dt_adm;
        this.idade = idade;
    }

    static sal_func = class
    {
        constructor(salario, setor, aumento)
        {
            this.salario = salario;
            this.setor = setor;
            this.aumento = aumento;
        }
    }
}

function exibeInfo()
{
    console.log(` Nome: ${Func.nome}\n`,
                `Função: ${Func.funcao}\n`,
                `Data Admissão: ${Func.dt_adm}\n`,
                `Idade: ${Func.idade}`);
}

function criaFunc()
{
    Func.nome = prompt("Nome Funcionário: ");
    Func.funcao = prompt("Função do Funcionário: ");
    Func.dt_adm = prompt("Data de admissão do Funcionário: ");
    Func.idade = prompt("idade do Funcionário: ");
}

criaFunc();
exibeInfo();