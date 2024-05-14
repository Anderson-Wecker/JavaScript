function decrementaNum(num)
{
    for(let i = num * 2;i >= num;i--)
    {
        if(i % 2 == 0)
        {
            console.log(i);
        }
    }
}
decrementaNum(10);