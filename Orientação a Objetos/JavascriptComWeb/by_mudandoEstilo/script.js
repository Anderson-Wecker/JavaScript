let elemento = document.getElementById('titulo-principal');

setTimeout(function(){
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'yellow';
    elemento.style.width = '400px'; 
}, 1000);

let newElement = document.querySelectorAll('.itens');


console.log(newElement.length);
for(let i = 0;i < newElement.length;i++)
{
    newElement[i].style.color = 'red';
}
console.log(newElement); 