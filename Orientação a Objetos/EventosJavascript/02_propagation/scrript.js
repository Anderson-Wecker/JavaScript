let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let p = document.querySelector("p");

function msg(e)
{
    console.log('Add Evento');
    e.stopPropagation();
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function(event)
{
    console.log(event);
});

p.addEventListener("click", function()
{
    console.log("clicou no paragrafo");
});
