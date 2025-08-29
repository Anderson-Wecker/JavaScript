let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

function msg()
{
    console.log('Add Evento');
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function()
{
    btn1.removeEventListener("click", msg);
})