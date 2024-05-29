class Endereco
{
    constructor(rua, bairro, cidade, estado)
    {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    set novaRua(novaRua)
    {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro)
    {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade)
    {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado)
    {
        this.estado = novoEstado;
    }
}

let prop = new Endereco("Ilvar Moacir, 250", "Xaxim", "Curitiba", "PR");