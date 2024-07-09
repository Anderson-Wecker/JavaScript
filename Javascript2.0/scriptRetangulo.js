class Retangulo
{
    constructor(largura, altura)
    {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea()
    {
        if(this.largura > 0 && this.altura > 0)
        {
            return this.largura * this.altura;
        }
        else 
        {
            return console.log("A largura e altura devem ser positivo");
        }
    }
    calcularPerimetro()
    {
        if(this.largura > 0 && this.altura > 0)
        {
            return 2*(this.largura + this.altura);
        }
        else 
        {
            return console.log("A largura e altura devem ser positivo");
        }
    }
}

const newRet = new Retangulo(30,20);

console.log(`Area: `,newRet.calcularArea());
console.log(`Perimetro :`, newRet.calcularPerimetro());
