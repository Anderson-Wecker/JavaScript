class ContaBancaria
{
    constructor(numeroConta, saldo = 0)
    {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    depositar(valor)
    {
        if(valor > 0)
        {
            this.saldo += valor;
        }
        else
        {
            console.error("Error");
        }
    }
    sacar(valor)
    {
        if(this.saldo > 0 && valor <= this.saldo)
        {
            this.saldo -= valor;
        }
        else
        {
            console.error("Error");
        }
    }
    consultarSaldo()
    {
        console.log(`Numero Conta: ${this.numeroConta} Saldo : ${this.saldo}`);
    }
}

let conta = new ContaBancaria(1308, 200);

conta.consultarSaldo();
conta.depositar(100);
conta.consultarSaldo();

conta.sacar(150);
conta.consultarSaldo();