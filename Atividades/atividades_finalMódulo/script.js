function sumUniqueNumbers(arr)
{
    const numArmazenados = [];
    const numRepetidos = [];
    for(let i = 0;i < arr.length;i++)
    {
        if(!numArmazenados.includes(arr[i]))
        {
            numArmazenados.push(arr[i]);
        }   
        else
        {
            numRepetidos.push(arr[i]);
        }
    }

    let soma = 0;
    for(let i = 0;i < numArmazenados.length;i++)
    {
        if(!numRepetidos.includes(numArmazenados[i]))
        {
            soma += numArmazenados[i];
        }
    }
    return soma;
}

let num = [1,2,3,4,1,2];

console.log(sumUniqueNumbers(num));

function arrayRepete(array)
{
    const numerosRepetidos = [];
    for(let i = 0;i < array.length;i++)
    {
       numerosRepetidos.push(array[i]);
    }
    return numerosRepetidos; 
}

let numero = [5,1,2,3,4,5,6];

console.log(arrayRepete(num));

function removeDuplicates(num)
{
    const valoresUnicos = [];
    const valoresRepetidos = [];
    const todosValores = [];

    for(let i = 0;i < num.length;i++)
    {
        if(!valoresUnicos.includes(num[i]))
        {
            valoresUnicos.push(num[i]);
        }
        else 
        {
            valoresRepetidos.push(num[i]);
        }
        todosValores.push(num[i]);
    }
     console.log(`Valores únicos ${valoresUnicos}`);
     console.log(`Valores Repetidos ${valoresRepetidos}`);
     console.log(`Todos os Valores ${todosValores}`);   
}

let numeros = [4,4,1,2,3,4,1];
removeDuplicates(numeros);