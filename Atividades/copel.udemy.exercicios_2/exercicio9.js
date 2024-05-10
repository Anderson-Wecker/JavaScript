const calculadora = 
{
    soma: function(num1, num2)
    {
        return num1 + num2;
    },
    sub: function(num1, num2)
    {
        return num1 - num2;
    },
    mult: function(num1, num2)
    {
        return num1 * num2;
    },
    div: function(num1, num2)
    {
        return num1 / num2;
    }
}

console.log(calculadora.soma(2,4));
console.log(calculadora.sub(6,4));
console.log(calculadora.mult(7,8));
console.log(calculadora.div(25,5));