//Break:
let nome = "Anderson";

for(let i = 0;i < 10;i = i + 1)
{
    if(i == 3)
    {
        nome = "Audax";
    }
    if(i == 5 && nome == "Audax")
    {
        console.log("Programa encerrado");
        break;
    }
    console.log(`O nome é ${nome} e o indicador é ${i}`);
}
//Continue
for(let i = 10;i > 0;i = i - 1)
{
    if(i % 2 == 0)
    {
        console.log("Caiu no continue");
        continue;
    }
    console.log(i);
}
