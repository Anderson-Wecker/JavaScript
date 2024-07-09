class Livro
{
    constructor(titulo, autor, disponivel)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel; 
    }
    emprestar()
    {
        if(this.disponivel === true)
        {
            console.log("Livro foi emprestado.");
            return this.disponivel = false;
        }
    }
    devolver()
    {
        if(this.disponivel === false)
        {
            console.log("Livro devolvido.");
            this.disponivel = true;
        }
    }
    consultarDisponibilidade()
    {
        if(this.disponivel === true)
        {
            console.log(`livro ${this.titulo} está disponível.`);
        }
        else
        {
            console.log(`livro ${this.titulo} não está disponível.`);
        }
    }
}

let newLivro = new Livro("Harry Potter e a Pedra Filosofa", "J. K. Rowling", true);
newLivro.consultarDisponibilidade();
newLivro.emprestar();
newLivro.consultarDisponibilidade();
newLivro.devolver();
newLivro.consultarDisponibilidade();