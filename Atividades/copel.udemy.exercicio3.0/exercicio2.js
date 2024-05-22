class Cachorro 
{
    constructor(nome, comida, sono)
    {
        this.nome = nome;
        this.comida = comida;
        this.sono = sono;
    }

    comer(num)
    {
        this.comida -= num
        return this.comida;
    }

    dormir()
    {
        this.sono = !this.sono;
    }
}

let cachorro_1 = new Cachorro("Pug", 4, false);
let cachorro_2 = new Cachorro("Pitbull", 2, true);

console.log(cachorro_1);
console.log(cachorro_2);

cachorro_1.comer(1);
cachorro_1.dormir();
console.log(cachorro_1);