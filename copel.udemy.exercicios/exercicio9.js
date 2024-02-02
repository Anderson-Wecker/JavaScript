//let num = Math.floor(Math.random() * 100);
//console.log(num);


for(let i = 0;i <= 50;i++)
{
    let num = Math.floor(Math.random() * 100);
    if(num % 2 == 0)
    {
        console.log(`O numero ${num} é par.`, i);
    }
        else
        {
            console.log(`O numero ${num} é ímpar.`, i)
        }
}
