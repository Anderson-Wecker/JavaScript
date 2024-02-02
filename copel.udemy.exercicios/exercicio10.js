let num = Math.floor(Math.random() * 100);
let count = 0;

for(let i = 1;i <= num;i++)
{
    if(num % i == 0)
    {
        count++;
    }
}

if(count == 2)
{
    console.log(`O numero ${num} é primo.`);
}
    else
    {
        console.log(`O numero ${num} não é primo.`);
    }