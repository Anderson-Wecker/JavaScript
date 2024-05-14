const palavras = {  
    frase: function(){
        console.log("Frase !!");
    },
    hello: function(){
        console.log("Hello, World");
    }
}

palavras.frase();
palavras.hello();

const dog = 
{
    raca: 'SRD',
    latido: function()
    {
        console.log("Auuuu");
    },
    rosnar: function()
    {
        console.log("Grrrr");
    },
    getRaca: function(raca)
    {
        return "A raça é" + this.raca; 
    }
}
console.log(dog.raca);

console.log(dog.raca);

console.log(dog.getRaca())

