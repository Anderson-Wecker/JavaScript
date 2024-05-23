const pessoa = 
{
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);


const animal = 
{
    tipo: 'animal',
    som: 'um som animal',
    emitirSom: function()
    {
        console.log(this.som)
    }
}

const gato =
{
    som: 'miau',
    tipo: 'gato'
}

Object.setPrototypeOf(gato, animal);
gato.emitirSom();

const gatoRaivoso = 
{
    tipo: 'gatoRaivoso',
    miarForte: function()
    {
        console.log(this.som.toUpperCase());
    }
}

Object.setPrototypeOf(gatoRaivoso, gato);
gatoRaivoso.miarForte();

console.log('Testes');

const meuObjeto = 
{
    a: 1,
    b: 2
}

const meuArray = [1,2,3,'a', 'b'];

function minhaFuncao()
{
    return 1 * 2;
}

const novoObjeto = Object.create(meuObjeto);

novoObjeto.b = 5;

console.log(meuObjeto.b + novoObjeto.b);
console.log(meuObjeto.hasOwnProperty('map'));

function salaAula(alunos)
{
    this.alunos = alunos
}
    salaAula.prototype =
    {
        adicionarAluno: function(aluno)
        {
            this.alunos.push(aluno);
        }
    }

    const minhaSala = new salaAula(['Anderson', 'Vitoria']);

    console.log(minhaSala.alunos);
    minhaSala.adicionarAluno('Rosi');

    console.log(minhaSala.alunos);