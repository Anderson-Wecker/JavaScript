var velocidadeCarro = 50;
const limite = 80;

var diferencaVelocidade = velocidadeCarro - limite;

if(velocidadeCarro > limite)
{
    console.log(`Você esta ${diferencaVelocidade}Km/h acima da velociade máxima`);
}
    else
    {
        console.log(`Você esta ${diferencaVelocidade * (-1)}Km/h abaixo da velocidade máxima`);
    }