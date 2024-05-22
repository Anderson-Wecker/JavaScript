class Cachorro
{
    constructor(raca, patas, cor)
    {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'Amarelo');

console.log(labrador);

class Carro
{
    constructor(modelo, motor, ano, cor)
    {
        this.modelo = modelo;
        this.motor = motor;
        this.ano = ano;
        this.cor = cor;
    }
}

let corsa = new Carro('Corsa Wind', '1.0', 2000, 'Branco');

console.log(`Modelo: ${corsa.modelo}
Motor ${corsa.motor}
Ano: ${corsa.ano}
Cor: ${corsa.cor}`);

class Pessoa
{
    constructor(nome, sobrenome, idade, dt_nascimento, cpf)
    {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.dt_nascimento = dt_nascimento;
        this.cpf = cpf;
    }
    sauda: function() 
    {
        console.log("Olá");    
    }
}