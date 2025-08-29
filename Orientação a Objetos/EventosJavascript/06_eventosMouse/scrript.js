let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.addEventListener("mousedown", function()
{
    console.log("Apertou o mouse");
});

btn1.addEventListener("mouseup", function()
{
    console.log("Soltou o mouse");
});

btn2.addEventListener("dblclick", function()
{
    console.log("Deu dois clicks");
});

btn2.addEventListener("contextmenu", function(e)
{
    e.preventDefault();
    console.log("Apertou o mouse direito");
});