function checarNum(num)
{
    let number = Number(num);
    if(Number.isNaN(number))
    {
        console.log("Insira um numero");
    }
    else
    {
        
        return console.log(number);
    }
}
checarNum(5);
checarNum('ola');

let number = prompt("Insira algum valor");
checarNum(number);