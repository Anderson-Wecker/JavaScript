function calculateAverage(array)
{
    var soma = 0;
    for(var i = 0;i < array.length;i++)
    {
        soma = soma + array[i];
    }
    var media = (soma / array.length);
    return media;
}
var myArray = [1,2,3,4];
var myCalculate = calculateAverage(myArray);
console.log(myCalculate);

function reverseString(string)
{
    var input = "";
    for(var i = string.length - 1;i >= 0;i--)
    {
        input += string[i];
    }
    return input;
}
let palavra = "palavra";
let inverte = reverseString(palavra);
console.log(inverte);

const countVowels = (text) => {
    const textToLowerCase = text.toLowerCase();
   
    const stringToArray = textToLowerCase.split("");
   
    const vowels = ["a", "e", "i", "o", "u"];
   
    const totalVowels = stringToArray.filter((letter) => vowels.includes(letter)).length;
   
    return totalVowels
  };
 
function sumEvenNumbers(array)
{
    let soma = 0;
    for(let i = 0;i < array.length;i++)
    {
        if(array[i] % 2 === 0)
        {
            soma += array[i];
        }
    }
    return console.log(soma);
}
const array = [1,2,3,4,5,6];
sumEvenNumbers(array);
let numbers = [12,56,9,87,65,6,90];
let myNumbers = (sumEvenNumbers(numbers));
console.log(myNumbers);