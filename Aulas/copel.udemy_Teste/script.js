function somarnumeros(num1, num2)
{
    return num1 + num2;
}

var soma = somarnumeros(1312, 78387);

console.log(`A soma de ${soma}`);

function verificaParImpar(num_user)
{
    if(num_user % 2 == 0)
    {
        console.log('O numero é par !');
    }
    else
    {
        console.log('O numero é impar !');
    }
}

var num_user = prompt('Insira um numero:');

var converteNum = parseFloat(num_user);

if(isNaN(converteNum))
{
    console.log('Entre com um numero válido !');
}
else
{
    var resultado = verificaParImpar(converteNum);

    console.log(verificaParImpar);
}

function numeroParImpar(numero_user)
{
    if(numero_user % 2 == 0)
    {
        console.log('Numero par !');
    }
    else
    {
        console.log('Numero Impar !');
    }
}

var numero_user = prompt('Digite um numero :');

var converte_num = parseFloat(numero_user);

if(isNaN(converte_num))
{
    console.log('Entre com um numero correto.');
}
else
{
    var resultado_01 = numeroParImpar(converte_num);

    console.log(resultado_01);
}


var teste = 3.14;
var teste1 = 'Ff12.78';


parseFloat(teste);
parseFloat(teste1);

console.log(typeof(teste));
console.log(typeof(teste1));

isNaN(teste);
isNaN(teste1);

console.log(typeof(teste));
console.log(typeof(teste1));


var num = prompt("Digite um numero :");

var verificaNum = parseFloat(num);

if(isNaN(verificaNum))
{
    console.log("Entre com um Numero Inteiro");
}
else
{
    console.log("Numero digitado foi:", verificaNum);
}
