const array = ['a', 'b', 'c'];
const iterator1 = array[Symbol.iterator]();

for(const val of iterator1)
{
    console.log(val);
}

const names = ["Anderson", "Vitoria", "Rosi", "Lourival", "Felipe"];
const maiorSete = names.filter((name) => name.length < 8);

console.log(maiorSete);

function filItem(arr, query)
{
    return arr.filter((element) => element.toLowerCase().includes(query.toLowerCase()));
}

console.log(filItem(names, "an"));
console.log(filItem(names, "vi"));

let name1 = [];
console.log(typeof name1);