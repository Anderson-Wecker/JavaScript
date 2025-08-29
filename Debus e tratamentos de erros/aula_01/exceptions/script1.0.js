class Conta
{
    constructor(numeroConta, saldo = 0)
    {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    deposito(num)
    {
        if(num > 0)
        {
            this.saldo += num;
            return this.saldo;
        }
        else
        {
            console.log('Não foi possível depositar.');
        }
    }
    saque(num)
    {
        if(this.saldo > 0 && num <= this.saldo)
        {
            this.saldo -= num;
            return this.saldo;
        }
        else
        {
            console.log('Não foi possível realizar o saque.');
        }
    }
    consultaConta()
    {
        console.log(`Numero da Conta: ${this.numeroConta}`);
        console.log(`Saldo da Conta: ${this.saldo}`);
    }
}

let newSaldo = new Conta(1578, 2500);

newSaldo.consultaConta();

newSaldo.deposito(200);
newSaldo.consultaConta();

newSaldo.saque(500);
newSaldo.consultaConta();