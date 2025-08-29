class Voo
{
    constructor(codigoVoo, origem, destino, assentosDisponiveis = 0)
    {
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }
    reservarAssento()
    {
        if(this.assentosDisponiveis > 0)
        {
            this.assentosDisponiveis--;
        }
        else
        {
            console.log("O numero que deseja reservar é maior que o número de assentos diponiveis");
        }
    }
    consultarAssentosDisponiveis()
    {
        return this.assentosDisponiveis;
    }
}

let newVoo = new Voo("123A7E", "Curitiba", "São Paulo", 250);

console.log("Acentos Disponíveis: ", newVoo.consultarAssentosDisponiveis());
newVoo.reservarAssento();
console.log("Acentos Disponíveis: ", newVoo.consultarAssentosDisponiveis());