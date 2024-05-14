function criaCachorro(raca,patas, cor)
{
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preta');

console.log(doberman);

function cachorro(raca, patas, cor)
{
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function()
    {
        console.log("Auu");
    }
}

let husky = new cachorro('Husky', 4, 'cinza');

husky.uivar();

function Animals(name, specie)
{
    this.name = name;
    this.specie = specie;
}

Animals.prototype.sing = function()
{
    return `${this.name} can sing`;
}
Animals.prototype.dance = function()
{
    return `${this.name} can dance`;
}
let Bingo = new Animals("Bingo", "Hairy");

console.log(Bingo);