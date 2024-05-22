class ContaBancaria 
{
    constructor(saldo)
    {
        this.saldo = saldo;
    }

    deposito(valor)
    {
        this.saldo += valor;
    }

    saque(retirada)
    {
        this.saldo -= retirada;
    }
}

function saque(saldo)
{
    if(!saldo)
    {
        console.log("Sem saldo");
    }
    else
    {
        console.log(`Saldo: R$${newSaldo.saldo.toFixed(2).replace(".", ",")}`)
    }
}

const saldoIni = new ContaBancaria(300);

saldoIni.deposito(50);
console.log(saldoIni);
saldoIni.saque(30);
console.log(saldoIni);


let Carro = 
{
    modelo: "Corsa",
    ano: 2000,
    get idade()
    {
        return new Date().getFullYear() - this.ano;
    }
}

console.log(Carro.idade);


class Pessoa
{
    constructor(fisrtName, lastName, dt_nasc)
    {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.dt_nasc = dt_nasc;
    }
    get idade()
    {
        return new Date().getFullYear() - this.dt_nasc; 
    }
}

const newPessoa = new Pessoa("Anderson", "Wecker", 1999);

console.log(newPessoa);
console.log(newPessoa.idade);

let dataHoje = "30/11/1999";
const dataAno = dataHoje.split("/");
console.log("Abaixo variável dataAno");
console.log(dataAno[2]);

const dataAtual = new Date().getFullYear().toString().slice(-2);

console.log(dataAtual); 