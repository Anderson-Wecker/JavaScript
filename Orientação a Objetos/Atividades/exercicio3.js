class Carro 
{
    constructor(marca, cor, gasRes, consumo) 
    {
        this.marca = marca;
        this.cor = cor;
        this.gasRes = gasRes;    
        this.consumo = consumo;
    }   

    dirigir(km)
    {
        let litrosConsumidos = km / this.consumo;
        
        this.gasRes -= litrosConsumidos;
    }
}

let carro = new Carro("Corsa", "Branco", 50, 10);

console.log(carro);

carro.dirigir(50);
console.log(carro);


class Conta
{
    constructor(saldoCorrente, saldoPoup)
    {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoup = saldoPoup;
    }

    deposPoup(valor)
    {
        let saldo = valor + this.saldoPoup;

        return saldo;
    }

    deposCorr(valor)
    {
        let saldo = valor + this.saldoCorrente
        return saldo;
    }

    saquePoup(valor)
    {
        let saldo = this.saldoPoup - valor;
        return saldo;
    }

    saqueCorr(valor)
    {
        let saldo = this.saldoCorrente - valor;
        return saldo;
    }

    tranCP(valor)
    {
        this.saldoCorrente -= valor;
        this.saldoPoup += valor;
    }

    tranCC(valor)
    {
        this.saldoPoup -= valor;
        this.saldoCorrente += valor;
    }
}

let saldo = new Conta(2100, 2350);

console.log(saldo);
saldo.deposPoup(100);
console.log(saldo);

// console.log(saldo);

// saldo.tranCP(100);

// console.log(saldo);

// saldo.tranCC(100);

// console.log(saldo);