let arr1 = [1,2,3,4,5,6];
let arr2 = [1,2,3,4];

function countArray(arr)
{
    if(arr.length >= 5)
    {
        console.log("Muitos elementos");
    }
    else
    {
        console.log("Poucos elementos");
    }
}
countArray(arr1);
countArray(arr2);