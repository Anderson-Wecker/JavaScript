class cachorro
{
        constructor(raca, cor)
        {
            this.raca = raca;
            this.cor = cor;
        }

    lotir()
    {
        console.log("a");
    }

    get getCor()
    {
        return this.cor;
    }

    set setCor(cor)
    {
        this.cor = cor;
    }
}
let pastor = new cachorro("Pastor Alemão", "Sem cor");

console.log(pastor);

pastor.setCor = "Verde";

console.log(pastor.getCor);

const soma = (a, b) => a + b; 

console.log(soma(5,5));

const hello = () => "Hello World";


console.log(hello());

