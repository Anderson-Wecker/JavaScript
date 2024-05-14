let cachorro =
{
    patas : 4,
    raca: 'SRD',
    latir: function()
    {
        console.log("AU");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";

console.log(cachorro.raca);
console.log(labrador.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);
console.log(pastor);