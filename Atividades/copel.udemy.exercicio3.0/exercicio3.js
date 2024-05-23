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

function criaFunc()
{
    let nome = prompt("Nome Funcionário: ");
    let funcao = prompt("Função do Funcionário: ");
    let dt_adm = prompt("Data de admissão do Funcionário: ");
    let idade = prompt("idade do Funcionário: ");

    try
    {
        let formattedDate = formataData(dt_adm);
        let funcionario = new Func(nome, funcao, formattedDate, idade);
        return funcionario;
    }
    catch(error)
    {
        console.error(error.menssage);
        return null;
    }    
}

function formataData(dt_adm)
{
    if(dt_adm.length !== 8)
    {
        throw new Error("Entre com a data completa !!");
    }
    else
    {

        let dayData = dt_adm.substring(0, 2);
        let monthData = dt_adm.substring(2, 4);
        let yearData = dt_adm.substring(4, 8);
    
        let formatDate = `${dayData}/${monthData}/${yearData}`;
        
        return formatDate;
    }
} 

function exibeInfo()
{
    if(funcionario)
    {
        console.log(` Nome: ${funcionario.nome}\n`,
                    `Função: ${funcionario.funcao}\n`,
                    `Data Admissão: ${funcionario.dt_adm}\n`,
                    `Idade: ${funcionario.idade}`);
    }
}

let funcionario = criaFunc()
exibeInfo(funcionario);